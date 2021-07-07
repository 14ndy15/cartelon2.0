import './../css/app.scss';

import 'lazysizes';
import './modules/_smoothScroll';

import MobileMenu from './modules/_mobileMenu';
import RevealOnScroll from './modules/_revealOnScroll';
import StickyHeader from './modules/_stickyHeader';
import PosterBig from './modules/_posterBig';
import Carousel from './modules/_carousel';
import Event from './modules/_event';

import LoadNews from './modules/_loadNews';
import LoadPosters from './modules/_loadPosters';
import LoadEvents from './modules/_loadEvents';
import LoadVideos from './modules/_loadVideos';
import MailSubscription from './modules/_mailSubscription';


// start the Stimulus application
import './bootstrap';



new MobileMenu();
new StickyHeader();
new Carousel();
new RevealOnScroll();
new PosterBig();
new Event();
new LoadNews();
new LoadPosters();
new LoadEvents();
new LoadVideos();
new MailSubscription();
