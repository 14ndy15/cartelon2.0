import SmoothScroll from 'smooth-scroll';

new SmoothScroll('.nav a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 75
});
