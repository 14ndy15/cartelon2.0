import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader{
    constructor(){
        this.lazyload = document.querySelectorAll('.lazyload');
        this.heroTextContent = document.querySelector('.large-hero__text-content');
        this.sections = document.querySelectorAll('.section');
        this.navLinks = document.querySelectorAll('.nav li');
        this.navLinkStart = document.querySelector('#start-link');
        
        this.createPageSectionWaypoints();        
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyload.forEach((elem) => {
            elem.addEventListener('load', Waypoint.refreshAll())
        });
    }

    createPageSectionWaypoints(){
        let that = this;

        new Waypoint({
            element: that.heroTextContent,
            handler: function(direction){
                if (direction === 'up')
                    that.navLinks.forEach((navLink)=>{
                        navLink.classList.remove('nav__link--active');
                    });

                    that.navLinkStart.classList.add('nav__link--active');
            },
            offset: "70%"
        });

        this.sections.forEach(section => {

            new Waypoint({
                element: section,
                handler: function(direction){
                    if (direction === "down"){
                        that.navLinks.forEach((navLink)=>{
                            navLink.classList.remove('nav__link--active');
                        });

                        if (section.hasAttribute('data-nav-link')) {
                            let navLink = section.getAttribute('data-nav-link');
                            navLink = document.querySelector(navLink);
                            navLink.classList.add('nav__link--active');
                        }
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: section,
                handler: function(direction){
                    if (direction === "up"){

                        let navLink = section.getAttribute('data-nav-link');

                        if (section.hasAttribute('data-nav-link-prev'))
                            navLink = section.getAttribute('data-nav-link-prev');

                        that.navLinks.forEach((navLink)=>{
                           navLink.classList.remove('nav__link--active');
                        });

                        document.querySelector(navLink).classList.add('nav__link--active');
                    }
                },
                offset: "-10%"
            });

        });
    }
}

export default StickyHeader;