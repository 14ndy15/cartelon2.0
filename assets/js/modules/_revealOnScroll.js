import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(){
        this.itemsToReveal = document.querySelectorAll('.poster__item');

        this.header = document.querySelector('.header');
        this.sectionUs = document.querySelector('#us');

        this.hideInitially();
        this.createWaypoints();
        this.createWaypointsHeader();
    }

    hideInitially(){
        this.itemsToReveal.forEach(item => {
          item.classList.add("reveal-item");
        })
    }

    createWaypoints(){
        this.itemsToReveal.forEach((itemToReveal)=>{
            new Waypoint({
                element: itemToReveal,
                handler: function(){
                    itemToReveal.classList.add('reveal-item--is-visible');
                },
                offset: "85%",
            });
        });
    }

    createWaypointsHeader(){
        var that = this;

        new Waypoint({
            element: that.sectionUs,
            handler: function(){
                that.header.classList.add('header--is-visible');
            },
            offset: "20%",
        });
    }
}

export default RevealOnScroll;