import axios from 'axios';
import {makeSrcSet} from './_utils';

class LoadPosters{

    constructor() {
        this.posterButtonWrapper = document.querySelector('.poster__button__wrapper');
        this.buttonMorePosters = document.querySelector('#loadMorePosters');
        this.containerInitial = document.querySelector('.poster__initial');
        this.containerSearch = document.querySelector('.poster__search');

        this.filterForm = document.querySelector('.filter__form');
        this.filterInput = document.querySelector('.filter__input');
        this.filterButton = document.querySelector('.filter__button');
        this.filterReset = document.querySelector('.filter__reset');

        this.spinnerWrapper = document.querySelector('#posters__load__wrapper');

        this.posterEventPrototype = document.querySelector('#posterEvent_prototype > div');
        this.posterPrototype = document.querySelector('#poster_prototype > div');

        this.currentIndex = -1;
        this.amountToFetch = 2;
        this.fetchMorePoster = this.currentIndex < 0 ? '/posters/'+this.amountToFetch : '/posters/'+(this.currentIndex)+'/'+this.amountToFetch;

        this.amountOfExistingPosters = document.querySelectorAll('.poster a[data-poster-big]').length;

        this.events();
    }

    events(){
        this.buttonMorePosters.addEventListener('click', this.getMorePosterEvents.bind(this));
        this.filterButton.addEventListener('click', this.getSearchPoster.bind(this));
        this.filterReset.addEventListener('click', this.resetSearch.bind(this));
    }

    createPosterEvent(posterEventData){

        let posterEventName = posterEventData.name;
        let posterEventImage = posterEventData.image;
        let posterEventMaxWidth = posterEventData.maxWidth;

        let posterEvent = this.posterEventPrototype.cloneNode(true);
        let posterEventImg = posterEvent.querySelector('img');

        let posterEventImageSrcSet = makeSrcSet(posterEventImage, posterEventMaxWidth);
        posterEvent.setAttribute('data-description', posterEventName);
        posterEventImg.setAttribute('src', posterEventImage+"-20.jpg");
        posterEventImg.setAttribute('data-srcset', posterEventImageSrcSet);
        posterEventImg.setAttribute('alt', posterEventName);

        return posterEvent;
    }

    createPoster(posterEventData, posterData, posterBigIndex){

        let poster = this.posterPrototype.cloneNode(true);
        let posterLink = poster.querySelector('a');
        let posterImage = poster.querySelector('img');
        let posterAuthor = poster.querySelector('.poster__item__author');

        let posterImageSrcSet = makeSrcSet(posterData.image, posterData.maxWidth);
        let url = '#'+posterData.id+'-'+encodeURI(posterEventData.name)+'-'+encodeURI(posterData.author);

        posterLink.setAttribute('href', url);
        posterLink.setAttribute('data-poster-id', posterData.id);
        posterLink.setAttribute('data-poster-big', posterBigIndex);
        posterLink.setAttribute('data-poster-title', posterEventData.name);
        posterLink.setAttribute('data-poster-img', posterData.image);
        posterLink.setAttribute('data-poster-max-width', posterData.maxWidth);
        posterLink.setAttribute('data-poster-img-detail1', posterData.imageDetail1);
        posterLink.setAttribute('data-poster-img-details1-max-width', posterData.imageDetail1MaxWidth);
        posterLink.setAttribute('data-poster-img-detail2', posterData.imageDetail2);
        posterLink.setAttribute('data-poster-img-details2-max-width', posterData.imageDetail2MaxWidth);
        posterLink.setAttribute('data-poster-author', posterData.author);
        posterLink.setAttribute('data-poster-year', posterData.year);
        posterLink.setAttribute('data-poster-description', posterData.description);

        posterImage.setAttribute('src', posterData.image+"-20.jpg");
        posterImage.setAttribute('data-srcset', posterImageSrcSet);

        posterAuthor.textContent = posterData.author;

        return poster;
    }


    resetSearch(e){
        e.preventDefault();

        this.filterInput.value = '';
        this.containerInitial.classList.add('poster--visible');
        this.posterButtonWrapper.classList.remove('wrapper--hide');
        this.containerSearch.classList.remove('poster--visible');
        this.containerSearch.classList.add('poster--hide');
    }

    showOrHideSpinner(){
        this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }

    getSearchPoster(e){
        e.preventDefault();

        let url = '/search/'+this.filterInput.value;

        if (this.filterForm.checkValidity()) {

            this.containerInitial.classList.remove('poster--visible');
            this.containerInitial.classList.add('poster--hide');
            this.posterButtonWrapper.classList.remove('wrapper-hide');
            this.containerSearch.classList.add('poster--visible');

            this.containerSearch.querySelectorAll('.poster__item').forEach(poster => {
                poster.parentNode.removeChild(poster);
            });

            let that = this;
            axios.get(url)
                .then(function (response) {
                    let posters = response.data;

                    if (posters.length > 0) {
                        let posterBigIndex = 0;
                        Object.keys(posters).forEach(function (key) {

                            let posterEventData = {name: posters[key].eventName } ;
                            let posterData = posters[key];
                            let poster = that.createPoster(posterEventData, posterData, posterBigIndex);

                            that.containerSearch.appendChild(poster);
                            posterBigIndex++;
                        });

                    }
                    else {
                        let textNoResult = document.createElement('p');
                        textNoResult.classList.add('poster__search__no-result');
                        textNoResult.innerHTML = "Su b&uacute;squeda no produjo resultado, prueba usar otro terminos de b&uacute;squeda.";

                        that.containerSearch.appendChild(textNoResult);
                    }

                    that.showOrHideSpinner();

                })
                .catch(function (error) {
                    console.log(error);
                });

            //wait for data arrival
            this.showOrHideSpinner();

            return false;
        }
    }

    getMorePosterEvents(e) {
        e.preventDefault();

        let that = this;
        axios.get(this.fetchMorePoster)
        .then(function (response) {
            let postersEvents = response.data;
            
            if (postersEvents.length > 0)
            {
                if (postersEvents.length < that.amountToFetch)
                    that.posterButtonWrapper.classList.add('wrapper--hide');

                Object.keys(postersEvents).forEach(function(key) {

                    let posterEventData = postersEvents[key];
                    let posterEvent = that.createPosterEvent(posterEventData);
                    that.containerInitial.appendChild(posterEvent);

                    let posterEventPosters = posterEventData.posters;
                    Object.keys(posterEventPosters).forEach(function(key) {

                        let posterData = posterEventPosters[key];
                        let poster = that.createPoster(posterEventData, posterData, that.amountOfExistingPosters);

                        that.amountOfExistingPosters++;
                        that.containerInitial.appendChild(poster);

                    });

                    if (!posterEventData.more)
                        that.posterButtonWrapper.classList.add('wrapper--hide');

                });

                that.currentIndex = postersEvents[postersEvents.length - 1].currentIndex;
                that.currentIndex += 1;
            }  
            else{
                that.posterButtonWrapper.classList.add('wrapper--hide');
            }

            that.showOrHideSpinner();

            return false;
        })
        .catch(function (error) {
            console.log(error);
        });

        //waiting for data arrival
        this.showOrHideSpinner();
        return false;
    }
}

export default LoadPosters;