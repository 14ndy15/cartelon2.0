import Event from './_event';
import axios from 'axios';

import {makeSrcSet} from './_utils';

class LoadEvents{

    constructor(){
        this.parent = document.querySelector('#events-container');

        this.gridEvents = document.querySelector('.grid-event');
        this.events = document.querySelectorAll('.event');
        this.buttonMoreEvents = document.querySelector('#loadMoreEvents');
        this.buttonMoreEventsWrapper = document.querySelector('#wrapper-loadMoreEvents');

        this.spinnerWrapper = document.querySelector('#events__load__wrapper');

        this.eventPrototype = document.querySelector('#event_prototype .event');
        this.eventExpandPrototype = document.querySelector('#event_prototype  .grid-event__expand');

        this.currentIndex = -1;
        this.amountToFetch = 2;

        this.urlToFetch = () => this.currentIndex < 0 ?  '/events/'+this.amountToFetch : '/events/'+(this.currentIndex)+'/'+this.amountToFetch;

        this.event();
    }

    event(){
        this.buttonMoreEvents.addEventListener('click', this.getData.bind(this));
    }

    createEventExpand(name, date, place, description, images, index){

        let gridEventExpand = this.eventExpandPrototype.cloneNode(true);

        let eventExpand = gridEventExpand.querySelector('.event__expand');
        let closeBtn = eventExpand.querySelector('btn__close');
        let carousel = eventExpand.querySelector('.event__expand__carousel');

        let carouselCell = eventExpand.querySelector('.event__expand__carousel__cell');

        let title = eventExpand.querySelector('h3');
        let subtitle = eventExpand.querySelector('h4');
        let text = eventExpand.querySelector('p');
        let collapseLink = eventExpand.querySelector('a');

        eventExpand.setAttribute('id', 'event_expand_'+index);
        title.innerHTML = name;
        subtitle.innerHTML = date+', '+place;
        text.innerHTML = description;
        collapseLink.setAttribute('data-collapse', 'true');
        collapseLink.setAttribute('href', '#event_'+index);


        let imageCarouselCell = carouselCell.querySelector('img');

        let srcset = makeSrcSet(images[0].image, images[0].maxWidth);
        imageCarouselCell.setAttribute('src', images[0]+'-20.jpg');
        imageCarouselCell.setAttribute('data-srcset', srcset);
        imageCarouselCell.setAttribute('alt', name);

        for(let i = 1; i < images.length; i++){

            let carouselCellClone = carouselCell.cloneNode(true);
            let imageCarouselCell = carouselCellClone.querySelector('img');

            let srcset = makeSrcSet(images[i].image, images[i].maxWidth);
            imageCarouselCell.setAttribute('src', images[i]+'-20.jpg');
            imageCarouselCell.setAttribute('data-srcset', srcset);
            imageCarouselCell.setAttribute('alt', name);

            carousel.appendChild(carouselCellClone);
        }

        return gridEventExpand;
    }

    createEvent(that, name, date, place, eventimage, eventMaxImageWidth, index, last){

        let event = this.eventPrototype.cloneNode(true);

        let imagen = event.querySelector('img');
        let title = event.querySelector('h4');
        let descriptionText = event.querySelector('p');
        let button = event.querySelector('button');

        event.setAttribute('id', 'event_'+index);

        if((index - 1) % 2 === 0)
            event.classList.add('grid-event__first');
        else
            event.classList.add('grid-event__second');

         if(last && ((index - 1) % 2 === 0))
             event.classList.add('event--center');


        let srcset = makeSrcSet(eventimage, eventMaxImageWidth);
        imagen.setAttribute('src', eventimage+'-20.jpg');
        imagen.setAttribute('data-srcset', srcset);
        imagen.setAttribute('alt', name);

        button.setAttribute('data-event-expand','#event_expand_'+index);
        button.setAttribute('data-event', '#event_'+index);

        title.innerHTML = name;
        descriptionText.innerHTML = date+
                                    '<br/>'+
                                    '<strong>Lugar: </strong>'+ place;

        return event;
    }

    showOrHideSpinner(){
        this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }

    getData() {

        let that = this;
        axios.get(this.urlToFetch())
            .then(function (response) {
                let data = response.data;

                if (data.length > 0)
                {
                    if (data.length < that.amountToFetch)
                        that.buttonMoreEventsWrapper.classList.add('invisible');

                    let pos = 0;
                    let gridEvent = that.gridEvents[that.gridEvents.length - 1];

                    that.events.forEach((event)=>{
                        event.classList.remove('event--center');
                    });

                    Object.keys(data).forEach(function(key) {
                        let index = data[key].currentIndex;
                        let name = data[key].name;
                        let dateTime = data[key].dateTime;
                        let image = data[key].image;
                        let imageMaxWidth = data[key].maxWidth;
                        let place = data[key].place;
                        let description = data[key].description;
                        let images = data[key].images;
                        let eventMore = data[key].more;

                        let event = that.createEvent(that, name, dateTime, place, image, imageMaxWidth, index, (pos++ === (data.length - 1)));
                        let eventExpand = that.createEventExpand(name, dateTime, place, description, images, index);

                        if ((index-1) % 2 === 0){
                            gridEvent = document.createElement('div');
                            gridEvent.classList.add('grid-event');
                        }

                        gridEvent.appendChild(event);
                        gridEvent.appendChild(eventExpand);

                        that.parent.appendChild(gridEvent);

                        if(!eventMore)
                            that.buttonMoreEventsWrapper.classList.add('invisible');
                    });

                    that.currentIndex = data[data.length - 1].currentIndex;
                    that.currentIndex += 1;

                }
                else{
                    that.buttonMoreEventsWrapper.classList.add('invisible');
                }

                new Event();
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

export default LoadEvents;