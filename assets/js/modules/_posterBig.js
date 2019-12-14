import axios from 'axios';
import {makeSrcSet} from './_utils';

class PosterBig{
    constructor(){
        this.postersTriggers = document.querySelectorAll('.poster--visible a[data-poster-big]');

        this.postersInitialContainer = document.querySelector('.poster__initial');
        this.postersSearchContainer = document.querySelector('.poster__search');

        this.posterBig = document.querySelector('.poster-big');
        this.posterBigImage = document.querySelector('.poster-big__image');

        this.posterBigLinkDetails0 = document.querySelector('.poster-big__details__items__link__0');
        this.posterBigImageDetails0 = document.querySelector('.poster-big__details__item__image__0');

        this.posterBigLinkDetails1 = document.querySelector('.poster-big__details__items__link__1');
        this.posterBigImageDetails1 = document.querySelector('.poster-big__details__item__image__1');

        this.posterBigLinkDetails2 = document.querySelector('.poster-big__details__items__link__2');
        this.posterBigImageDetails2 = document.querySelector('.poster-big__details__item__image__2');

        this.posterBigTitle = document.querySelector('.poster-big__description__title');
        this.posterBigSubtitle = document.querySelector('.poster-big__description__subtitle');
        this.posterBigLinkShare = document.querySelector('.poster-big__description__share');
        this.posterBigDescription = document.querySelector('.poster-big__description__text');

        this.posterBtnNext = document.querySelector('.poster-big__next');
        this.posterBtnPrev = document.querySelector('.poster-big__prev');
        this.posterClose = document.querySelector('.poster-big__close');

        this.posterId = 0;

        this.events();
        this.checkOpenPosterFromUrl();
    }

    checkOpenPosterFromUrl(){
        let documentURL = document.URL;

        if (documentURL.indexOf('show-poster/') < 0)
            return;

        let requestUrl = documentURL.substring(documentURL.indexOf('show-poster/')+12);
        let posterId = requestUrl.substring(0, requestUrl.indexOf('/'));
        posterId = parseInt(posterId);

        if (posterId < 0)
            return;

        let url = '/get_poster/'+posterId;
        let that = this;

        axios.get(url)
        .then(function (response) {
            let poster = response.data;

            that.posterBig.classList.add('poster-big--is-visible');
            document.querySelector('body').style.overflowY = 'hidden';

            that.refreshPosterBig(poster);

        })
        .catch(function (error) {
            console.log(error);
        });

    }

    eventsPosterTrigger() {
        this.postersTriggers = document.querySelectorAll('.poster--visible a[data-poster-big]');

        this.postersTriggers.forEach(posterTrigger => {
            posterTrigger.addEventListener('click', this.openPosterBig.bind(this))
        });
    }

    events(){
        this.postersTriggers.forEach(posterTrigger => {
            posterTrigger.addEventListener('click', this.openPosterBig.bind(this))
        });

        this.postersInitialContainer.addEventListener('DOMNodeInserted', this.eventsPosterTrigger.bind(this));
        this.postersSearchContainer.addEventListener('DOMNodeInserted', this.eventsPosterTrigger.bind(this));
        this.postersInitialContainer.addEventListener('DOMNodeRemoved', this.eventsPosterTrigger.bind(this));
        this.postersSearchContainer.addEventListener('DOMNodeRemoved', this.eventsPosterTrigger.bind(this));


        this.posterBtnNext.addEventListener('click', this.nextPosterBig.bind(this));

        this.posterBtnPrev.addEventListener('click', this.prevPosterBig.bind(this));

        this.posterClose.addEventListener('click', this.closePosterBig.bind(this));

        this.posterBigLinkDetails0.addEventListener('click', this.showDetails.bind(this));
        this.posterBigLinkDetails1.addEventListener('click', this.showDetails.bind(this));
        this.posterBigLinkDetails2.addEventListener('click', this.showDetails.bind(this));

        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    openPosterBig(event){
        event.preventDefault();

        this.posterBtnPrev.classList.remove('hide');
        this.posterBtnNext.classList.remove('hide');

        let posterId = event.currentTarget.getAttribute('data-poster-big');
        this.posterId = parseInt(posterId);

        if (this.posterId === 0)
            this.posterBtnPrev.classList.add('hide');
        if (this.posterId === this.postersTriggers.length - 1)
            this.posterBtnNext.classList.add('hide');
        
        this.posterBig.classList.add('poster-big--is-visible');
        document.querySelector('body').style.overflowY = 'visible';
        this.refreshPosterBig();
    }

    prevPosterBig(){
        if (this.posterId - 1 >= 0)
        {
            this.posterId--;    
            this.posterBtnNext.classList.remove('hide');
            this.refreshPosterBig();
        }
        if (this.posterId === 0)
            this.posterBtnPrev.classList.add('hide');
    }

    nextPosterBig(){
        if (this.posterId + 1 <  this.postersTriggers.length)
        {
            this.posterId++;
            this.posterBtnPrev.classList.remove('hide');
            this.refreshPosterBig();
        }
        if (this.posterId ===  this.postersTriggers.length - 1)
            this.posterBtnNext.classList.add('hide');
    }

    showDetails(event){
        event.preventDefault();

        let imgDetails = event.currentTarget.getAttribute('data-img');
        let imgDetailsPosterMaxWidth = event.currentTarget.getAttribute('data-img-max-width');

        this.changeMainImage(imgDetails, imgDetailsPosterMaxWidth);
    }

    changeMainImage(posterImg, posterMaxWidth){

        let srcset = makeSrcSet(posterImg, posterMaxWidth);
        this.posterBigImage.classList.remove('lazyloaded');
        this.posterBigImage.classList.add('lazyload', 'blur-up');
        this.posterBigImage.setAttribute('src', posterImg+"-20.jpg");
        this.posterBigImage.setAttribute('data-srcset', srcset);
    }

    changeDetailsImage(selectorImage, selectorLink, image, imageMaxWidth){

        if (image === '/' || image === 'null') {
            selectorImage.classList.add('poster-big__details__items__image--none');
            return;
        }

        let srcSet = makeSrcSet(image, imageMaxWidth);
        selectorImage.classList.remove('poster-big__details__items__image--none');
        selectorImage.classList.remove('lazyloaded');
        selectorImage.classList.add('lazyload', 'blur-up');

        selectorImage.setAttribute('src', image + "-20.jpg");
        selectorImage.setAttribute('data-srcset', srcSet);
        selectorImage.setAttribute('sizes', '(max-width: 760px) 70px, 50vw');
        selectorLink.setAttribute('data-img', image);
        selectorLink.setAttribute('data-img-max-width', imageMaxWidth);
    }

    getDataObject(element){
        return  {
            id : element.getAttribute('data-poster-id'),
            title : element.getAttribute('data-poster-title'),
            maxWidth : element.getAttribute('data-poster-max-width'),
            image : element.getAttribute('data-poster-img'),
            imageDetail1MaxWidth : element.getAttribute('data-poster-img-details1-max-width'),
            imageDetail1 : element.getAttribute('data-poster-img-detail1'),
            imageDetail2MaxWidth : element.getAttribute('data-poster-img-details2-max-width'),
            imageDetail2 : element.getAttribute('data-poster-img-detail2'),
            author : element.getAttribute('data-poster-author'),
            year : element.getAttribute('data-poster-year'),
            description : element.getAttribute('data-poster-description'),
        };
    }

    refreshPosterBig(poster = null){
        if (poster===null)
            poster = this.getDataObject(this.postersTriggers[this.posterId]);

        this.changeMainImage(poster.image, poster.maxWidth);

        this.changeDetailsImage(this.posterBigImageDetails0, this.posterBigLinkDetails0, poster.image, poster.maxWidth);
        this.changeDetailsImage(this.posterBigImageDetails1, this.posterBigLinkDetails1, poster.imageDetail1, poster.imageDetail1MaxWidth);
        this.changeDetailsImage(this.posterBigImageDetails2, this.posterBigLinkDetails2, poster.imageDetail2, poster.imageDetail2MaxWidth);

        this.posterBigTitle.textContent = poster.title;

        let url = location.protocol + "//" + location.host+'/show-poster/'+poster.id+'/'+poster.title+'-'+poster.author+'#posters';
        url = encodeURI(url);
        url = 'https://www.facebook.com/sharer/sharer.php?u='+url+';src=sdkpreparse';
        this.posterBigLinkShare.querySelector('a').setAttribute('href', url);

        this.posterBigSubtitle.textContent = poster.author + (poster.year === '' ? '' : ' / ' + poster.year);
        this.posterBigDescription.innerHTML = poster.description;
    }

    closePosterBig(e){
        e.preventDefault();

        this.posterBig.classList.remove('poster-big--is-visible');
        document.querySelector('body').style.overflowY = 'visible';
    }

    keyPressHandler(e){
        e.preventDefault();

        if (e.keyCode === 27) //escape key
            this.closePosterBig();
            
        if (e.keyCode === 39) //arrow right key
            this.nextPosterBig();
            
        if (e.keyCode === 37) //arrow left key
            this.prevPosterBig();
        
    }

}

export default PosterBig;