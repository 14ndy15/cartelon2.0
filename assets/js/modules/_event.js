import Gallery from "./_gallery";

class Event{
    constructor(){
        this.buttons = document.querySelectorAll('button[data-event]');
        this.eventsExpand = document.querySelectorAll('.event__expand');
        this.events = document.querySelectorAll('.event');
        this.eventFirst = document.querySelector('#event_0');
        this.eventFirstButton = document.querySelector('.event_button__first-event');
        this.closeEventsExpand = document.querySelectorAll('.event__expand__close, .btn__collapse');
        this.event();
    }

    event(){
        this.buttons.forEach(button => {
            button.addEventListener('click', this.expandEventShow.bind(this));
        });

        this.closeEventsExpand.forEach((closeEventExpand)=>{
            closeEventExpand.addEventListener('click', this.expandEventHideAll.bind(this));
        });
    }

    expandEventHideAll(){

        this.eventsExpand.forEach((eventExpand)=>{
            eventExpand.classList.remove('event__expand--visible');
            eventExpand.classList.remove('event--visible--first-event');
        });

        this.events.forEach((event)=>{
            event.classList.remove('event--visible');
        });

        this.eventFirst.classList.remove('event--visible');
    }

    expandEventShow(_event){
        this.expandEventHideAll();
        let eventId = _event.target.getAttribute('data-event');
        let eventExpandId = _event.target.getAttribute('data-event-expand');
        
        let event = document.querySelector(eventId);
        let eventExpand = document.querySelector(eventExpandId);
        
        event.classList.add('event--visible');

        if (eventExpandId === '#event_expand_0')
            eventExpand.classList.add('event__expand--visible__first-event');

        eventExpand.classList.add('event__expand--visible');
        new Gallery(eventExpandId+' .event__expand__carousel');
        
        return false;
    }
}

export default Event;