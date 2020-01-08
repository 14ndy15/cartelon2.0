(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_smoothScroll */ "./assets/js/modules/_smoothScroll.js");
/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_mobileMenu */ "./assets/js/modules/_mobileMenu.js");
/* harmony import */ var _modules_revealOnScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_revealOnScroll */ "./assets/js/modules/_revealOnScroll.js");
/* harmony import */ var _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_stickyHeader */ "./assets/js/modules/_stickyHeader.js");
/* harmony import */ var _modules_posterBig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/_posterBig */ "./assets/js/modules/_posterBig.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/_carousel */ "./assets/js/modules/_carousel.js");
/* harmony import */ var _modules_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/_event */ "./assets/js/modules/_event.js");
/* harmony import */ var _modules_loadNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/_loadNews */ "./assets/js/modules/_loadNews.js");
/* harmony import */ var _modules_loadPosters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/_loadPosters */ "./assets/js/modules/_loadPosters.js");
/* harmony import */ var _modules_loadEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/_loadEvents */ "./assets/js/modules/_loadEvents.js");
/* harmony import */ var _modules_loadVideos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/_loadVideos */ "./assets/js/modules/_loadVideos.js");
/* harmony import */ var _modules_mailSubscription__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/_mailSubscription */ "./assets/js/modules/_mailSubscription.js");














new _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_5__["default"]();
new _modules_carousel__WEBPACK_IMPORTED_MODULE_7__["default"]();
new _modules_revealOnScroll__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _modules_posterBig__WEBPACK_IMPORTED_MODULE_6__["default"]();
new _modules_event__WEBPACK_IMPORTED_MODULE_8__["default"]();
new _modules_loadNews__WEBPACK_IMPORTED_MODULE_9__["default"]();
new _modules_loadPosters__WEBPACK_IMPORTED_MODULE_10__["default"]();
new _modules_loadEvents__WEBPACK_IMPORTED_MODULE_11__["default"]();
new _modules_loadVideos__WEBPACK_IMPORTED_MODULE_12__["default"]();
new _modules_mailSubscription__WEBPACK_IMPORTED_MODULE_13__["default"]();

/***/ }),

/***/ "./assets/js/modules/_carousel.js":
/*!****************************************!*\
  !*** ./assets/js/modules/_carousel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Carousel =
/*#__PURE__*/
function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    this.initFlickityLargeHero();
  }

  _createClass(Carousel, [{
    key: "initFlickityLargeHero",
    value: function initFlickityLargeHero() {
      new flickity__WEBPACK_IMPORTED_MODULE_1___default.a('.carousel', {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 3000,
        wrapAround: true,
        pauseAutoPlayOnHover: false
      });
    }
  }]);

  return Carousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./assets/js/modules/_event.js":
/*!*************************************!*\
  !*** ./assets/js/modules/_event.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_gallery */ "./assets/js/modules/_gallery.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Event =
/*#__PURE__*/
function () {
  function Event() {
    _classCallCheck(this, Event);

    this.buttons = document.querySelectorAll('button[data-event]');
    this.eventsExpand = document.querySelectorAll('.event__expand');
    this.events = document.querySelectorAll('.event');
    this.eventFirst = document.querySelector('#event_0');
    this.eventFirstButton = document.querySelector('.event_button__first-event');
    this.closeEventsExpand = document.querySelectorAll('.event__expand__close, .btn__collapse');
    this.event();
  }

  _createClass(Event, [{
    key: "event",
    value: function event() {
      var _this = this;

      this.buttons.forEach(function (button) {
        button.addEventListener('click', _this.expandEventShow.bind(_this));
      });
      this.closeEventsExpand.forEach(function (closeEventExpand) {
        closeEventExpand.addEventListener('click', _this.expandEventHideAll.bind(_this));
      });
    }
  }, {
    key: "expandEventHideAll",
    value: function expandEventHideAll() {
      this.eventsExpand.forEach(function (eventExpand) {
        eventExpand.classList.remove('event__expand--visible');
        eventExpand.classList.remove('event--visible--first-event');
      });
      this.events.forEach(function (event) {
        event.classList.remove('event--visible');
      });
      this.eventFirst.classList.remove('event--visible');
    }
  }, {
    key: "expandEventShow",
    value: function expandEventShow(_event) {
      this.expandEventHideAll();

      var eventId = _event.target.getAttribute('data-event');

      var eventExpandId = _event.target.getAttribute('data-event-expand');

      var event = document.querySelector(eventId);
      var eventExpand = document.querySelector(eventExpandId);
      event.classList.add('event--visible');
      if (eventExpandId === '#event_expand_0') eventExpand.classList.add('event__expand--visible__first-event');
      eventExpand.classList.add('event__expand--visible');
      new _gallery__WEBPACK_IMPORTED_MODULE_3__["default"](eventExpandId + ' .event__expand__carousel');
      return false;
    }
  }]);

  return Event;
}();

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./assets/js/modules/_gallery.js":
/*!***************************************!*\
  !*** ./assets/js/modules/_gallery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swipe-listener */ "./node_modules/swipe-listener/dist/swipe-listener.min.js");
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swipe_listener__WEBPACK_IMPORTED_MODULE_3__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gallery =
/*#__PURE__*/
function () {
  function Gallery(selector) {
    _classCallCheck(this, Gallery);

    this.container = document.querySelector(selector);
    this.listener = swipe_listener__WEBPACK_IMPORTED_MODULE_3___default()(this.container);
    this.items = document.querySelectorAll(selector + ' .gallery__item');
    this.activePos = 0;
    this.init();
    this.arrows = this.addArrows();
    this.arrowPrev = this.arrows[0];
    this.arrowNext = this.arrows[1];
    this.events();
  }

  _createClass(Gallery, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.arrowPrev.addEventListener('click', this.prev.bind(this));
      this.arrowNext.addEventListener('click', this.next.bind(this));
      this.container.addEventListener('swipe', function (e) {
        var directions = e.detail.directions;
        if (directions.left) _this.next();
        if (directions.right) _this.prev();
      });
    }
  }, {
    key: "init",
    value: function init() {
      // this.container.setAttribute('style', 'height: '+this.images[0].clientHeight+'px;');
      this.items.forEach(function (image, index) {
        var displacement = index * 100;
        image.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
    }
  }, {
    key: "addArrows",
    value: function addArrows() {
      var arrowPrev = document.createElement('div');
      arrowPrev.classList.add('gallery__arrow');
      arrowPrev.classList.add('gallery__arrow--prev');
      var arrowNext = document.createElement('div');
      arrowNext.classList.add('gallery__arrow');
      arrowNext.classList.add('gallery__arrow--next');
      this.container.appendChild(arrowPrev);
      this.container.appendChild(arrowNext);
      return [arrowPrev, arrowNext];
    }
  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      if (this.activePos === this.items.length - 1) this.activePos = -1;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this2.activePos - 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos += 1;
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this3 = this;

      if (this.activePos === 0) this.activePos = this.items.length;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this3.activePos + 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos -= 1;
    }
  }]);

  return Gallery;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./assets/js/modules/_loadEvents.js":
/*!******************************************!*\
  !*** ./assets/js/modules/_loadEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_event */ "./assets/js/modules/_event.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_utils */ "./assets/js/modules/_utils.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var LoadEvents =
/*#__PURE__*/
function () {
  function LoadEvents() {
    _classCallCheck(this, LoadEvents);

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
    this.urlToFetch = this.currentIndex < 0 ? '/events/' + this.amountToFetch : '/events/' + this.currentIndex + '/' + this.amountToFetch;
    this.event();
  }

  _createClass(LoadEvents, [{
    key: "event",
    value: function event() {
      this.buttonMoreEvents.addEventListener('click', this.getData.bind(this));
    }
  }, {
    key: "createEventExpand",
    value: function createEventExpand(name, date, place, description, images, index) {
      var gridEventExpand = this.eventExpandPrototype.cloneNode(true);
      var eventExpand = gridEventExpand.querySelector('.event__expand');
      var closeBtn = eventExpand.querySelector('btn__close');
      var carousel = eventExpand.querySelector('.event__expand__carousel');
      var carouselCell = eventExpand.querySelector('.event__expand__carousel__cell');
      var title = eventExpand.querySelector('h3');
      var subtitle = eventExpand.querySelector('h4');
      var text = eventExpand.querySelector('p');
      var collapseLink = eventExpand.querySelector('a');
      eventExpand.setAttribute('id', 'event_expand_' + index);
      title.innerHTML = name;
      subtitle.innerHTML = date + ', ' + place;
      text.innerHTML = description;
      collapseLink.setAttribute('data-collapse', 'true');
      collapseLink.setAttribute('href', '#event_' + index);
      var imageCarouselCell = carouselCell.querySelector('img');
      var srcset = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["makeSrcSet"])(images[0].image, images[0].maxWidth);
      imageCarouselCell.setAttribute('src', images[0] + '-20.jpg');
      imageCarouselCell.setAttribute('data-srcset', srcset);
      imageCarouselCell.setAttribute('alt', name);

      for (var i = 1; i < images.length; i++) {
        var carouselCellClone = carouselCell.cloneNode(true);

        var _imageCarouselCell = carouselCellClone.querySelector('img');

        var _srcset = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["makeSrcSet"])(images[i].image, images[i].maxWidth);

        _imageCarouselCell.setAttribute('src', images[i] + '-20.jpg');

        _imageCarouselCell.setAttribute('data-srcset', _srcset);

        _imageCarouselCell.setAttribute('alt', name);

        carousel.appendChild(carouselCellClone);
      }

      console.log(carouselCell);
      return gridEventExpand;
    }
  }, {
    key: "createEvent",
    value: function createEvent(that, name, date, place, eventimage, eventMaxImageWidth, index, last) {
      var event = this.eventPrototype.cloneNode(true);
      var imagen = event.querySelector('img');
      var title = event.querySelector('h4');
      var descriptionText = event.querySelector('p');
      var button = event.querySelector('button');
      event.setAttribute('id', 'event_' + index);
      if ((index - 1) % 2 === 0) event.classList.add('grid-event__first');else event.classList.add('grid-event__second');
      if (last && (index - 1) % 2 === 0) event.classList.add('event--center');
      var srcset = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["makeSrcSet"])(eventimage, eventMaxImageWidth);
      imagen.setAttribute('src', eventimage + '-20.jpg');
      imagen.setAttribute('data-srcset', srcset);
      imagen.setAttribute('alt', name);
      button.setAttribute('data-event-expand', '#event_expand_' + index);
      button.setAttribute('data-event', '#event_' + index);
      title.innerHTML = name;
      descriptionText.innerHTML = date + '<br/>' + '<strong>Lugar: </strong>' + place;
      return event;
    }
  }, {
    key: "showOrHideSpinner",
    value: function showOrHideSpinner() {
      this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }
  }, {
    key: "getData",
    value: function getData() {
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(this.urlToFetch).then(function (response) {
        var data = response.data;

        if (data.length > 0) {
          if (data.length < that.amountToFetch) that.buttonMoreEventsWrapper.classList.add('invisible');
          var pos = 0;
          var gridEvent = that.gridEvents[that.gridEvents.length - 1];
          that.events.forEach(function (event) {
            event.classList.remove('event--center');
          });
          Object.keys(data).forEach(function (key) {
            var index = data[key].currentIndex;
            var name = data[key].name;
            var dateTime = data[key].dateTime;
            var image = data[key].image;
            var imageMaxWidth = data[key].maxWidth;
            var place = data[key].place;
            var description = data[key].description;
            var images = data[key].images;
            var eventMore = data[key].more;
            var event = that.createEvent(that, name, dateTime, place, image, imageMaxWidth, index, pos++ === data.length - 1);
            var eventExpand = that.createEventExpand(name, dateTime, place, description, images, index);

            if ((index - 1) % 2 === 0) {
              gridEvent = document.createElement('div');
              gridEvent.classList.add('grid-event');
            }

            gridEvent.appendChild(event);
            gridEvent.appendChild(eventExpand);
            that.parent.appendChild(gridEvent);
            if (!eventMore) that.buttonMoreEventsWrapper.classList.add('invisible');
          });
          that.currentIndex = data[data.length - 1].currentIndex;
          that.currentIndex += 1;
        } else {
          that.buttonMoreEventsWrapper.classList.add('invisible');
        }

        new _event__WEBPACK_IMPORTED_MODULE_7__["default"]();
        that.showOrHideSpinner();
        return false;
      }).catch(function (error) {
        console.log(error);
      }); //waiting for data arrival

      this.showOrHideSpinner();
      return false;
    }
  }]);

  return LoadEvents;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoadEvents);

/***/ }),

/***/ "./assets/js/modules/_loadNews.js":
/*!****************************************!*\
  !*** ./assets/js/modules/_loadNews.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_utils */ "./assets/js/modules/_utils.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LoadNews =
/*#__PURE__*/
function () {
  function LoadNews() {
    _classCallCheck(this, LoadNews);

    this.parent = document.querySelector('#news-container');
    this.buttonMoreNews = document.querySelector('#loadMoreNews');
    this.buttonMoreNewsWrapper = document.querySelector('#wrapper-loadMoreNews');
    this.newsPrototype = document.querySelector('#news_prototype > div');
    this.spinnerWrapper = document.querySelector('#news__load__wrapper');
    this.currentIndex = -1;
    this.amountToFetch = 2;
    this.urlToFetch = this.currentIndex < 0 ? '/news/' + this.amountToFetch : '/news/' + this.currentIndex + '/' + this.amountToFetch;
    this.events();
  }

  _createClass(LoadNews, [{
    key: "events",
    value: function events() {
      this.buttonMoreNews.addEventListener('click', this.getData.bind(this));
    }
  }, {
    key: "createNews",
    value: function createNews(newsData) {
      var newsId = newsData.id;
      var newsTitle = newsData.title;
      var newsDate = newsData.date;
      var newsText = newsData.text;
      var newsImage = newsData.image;
      var newsFile = newsData.file;
      var newsMaxWidthImage = newsData.maxWidth;
      var news = this.newsPrototype.cloneNode(true);
      var newsImageSrcSet = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["makeSrcSet"])(newsImage, newsMaxWidthImage);
      var newsLink = '/show-news/' + newsId + '/' + encodeURI(newsTitle) + '#' + encodeURI(newsTitle);
      var newsLinkShare = location.protocol + "//" + location.host + newsLink;
      newsLinkShare = encodeURI(newsLinkShare);
      newsLinkShare = 'https://www.facebook.com/sharer/sharer.php?u=' + newsLinkShare + ';src=sdkpreparse';
      news.querySelector('.info-block > div').setAttribute('id', encodeURI(newsTitle));
      news.querySelector('.news__image img').setAttribute('src', newsImage + "-20.jpg");
      news.querySelector('.news__image img').setAttribute('data-srcset', newsImageSrcSet);
      news.querySelector('.news__text .info-block__description > a').setAttribute('href', newsLink);
      news.querySelector('.news__text .info-block__description .info-block__description__share > a').setAttribute('href', newsLinkShare);
      news.querySelector('.news__text h3').textContent = newsTitle;
      news.querySelector('.news__text h4').textContent = newsDate;
      news.querySelector('.news__text p').innerHTML = newsText;
      news.querySelector('.news__text .info-block__description__link a').setAttribute('href', newsFile);
      return news;
    }
  }, {
    key: "showOrHideSpinner",
    value: function showOrHideSpinner() {
      this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }
  }, {
    key: "getData",
    value: function getData(e) {
      e.preventDefault();
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.urlToFetch).then(function (response) {
        var data = response.data;

        if (data.length > 0) {
          if (data.length < that.amountToFetch) that.buttonMoreNewsWrapper.classList.add('wrapper--hide');
          Object.keys(data).forEach(function (key) {
            var news = that.createNews(data[key]);
            that.parent.appendChild(news);
            if (!data[key].more) that.buttonMoreNewsWrapper.classList.add('wrapper--hide');
          });
          that.currentIndex = data[data.length - 1].currentIndex;
          that.currentIndex += 1;
        } else {
          that.buttonMoreNewsWrapper.classList.add('wrapper--hide');
        } //stop waiting


        that.showOrHideSpinner();
        return false;
      }).catch(function (error) {
        console.log(error);
      }); //waiting for data arrival

      this.showOrHideSpinner();
    }
  }]);

  return LoadNews;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoadNews);

/***/ }),

/***/ "./assets/js/modules/_loadPosters.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/_loadPosters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_utils */ "./assets/js/modules/_utils.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LoadPosters =
/*#__PURE__*/
function () {
  function LoadPosters() {
    _classCallCheck(this, LoadPosters);

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
    this.fetchMorePoster = this.currentIndex < 0 ? '/posters/' + this.amountToFetch : '/posters/' + this.currentIndex + '/' + this.amountToFetch;
    this.amountOfExistingPosters = document.querySelectorAll('.poster a[data-poster-big]').length;
    this.events();
  }

  _createClass(LoadPosters, [{
    key: "events",
    value: function events() {
      this.buttonMorePosters.addEventListener('click', this.getMorePosterEvents.bind(this));
      this.filterButton.addEventListener('click', this.getSearchPoster.bind(this));
      this.filterReset.addEventListener('click', this.resetSearch.bind(this));
    }
  }, {
    key: "createPosterEvent",
    value: function createPosterEvent(posterEventData) {
      var posterEventName = posterEventData.name;
      var posterEventImage = posterEventData.image;
      var posterEventMaxWidth = posterEventData.maxWidth;
      var posterEvent = this.posterEventPrototype.cloneNode(true);
      var posterEventImg = posterEvent.querySelector('img');
      var posterEventImageSrcSet = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["makeSrcSet"])(posterEventImage, posterEventMaxWidth);
      posterEvent.setAttribute('data-description', posterEventName);
      posterEventImg.setAttribute('src', posterEventImage + "-20.jpg");
      posterEventImg.setAttribute('data-srcset', posterEventImageSrcSet);
      posterEventImg.setAttribute('alt', posterEventName);
      return posterEvent;
    }
  }, {
    key: "createPoster",
    value: function createPoster(posterEventData, posterData, posterBigIndex) {
      var poster = this.posterPrototype.cloneNode(true);
      var posterLink = poster.querySelector('a');
      var posterImage = poster.querySelector('img');
      var posterAuthor = poster.querySelector('.poster__item__author');
      var posterImageSrcSet = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["makeSrcSet"])(posterData.image, posterData.maxWidth);
      var url = '#' + posterData.id + '-' + encodeURI(posterEventData.name) + '-' + encodeURI(posterData.author);
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
      posterImage.setAttribute('src', posterData.image + "-20.jpg");
      posterImage.setAttribute('data-srcset', posterImageSrcSet);
      posterAuthor.textContent = posterData.author;
      return poster;
    }
  }, {
    key: "resetSearch",
    value: function resetSearch(e) {
      e.preventDefault();
      this.filterInput.value = '';
      this.containerInitial.classList.add('poster--visible');
      this.posterButtonWrapper.classList.remove('wrapper--hide');
      this.containerSearch.classList.remove('poster--visible');
      this.containerSearch.classList.add('poster--hide');
    }
  }, {
    key: "showOrHideSpinner",
    value: function showOrHideSpinner() {
      this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }
  }, {
    key: "getSearchPoster",
    value: function getSearchPoster(e) {
      e.preventDefault();
      var url = '/search/' + this.filterInput.value;

      if (this.filterForm.checkValidity()) {
        this.containerInitial.classList.remove('poster--visible');
        this.containerInitial.classList.add('poster--hide');
        this.posterButtonWrapper.classList.remove('wrapper-hide');
        this.containerSearch.classList.add('poster--visible');
        this.containerSearch.querySelectorAll('.poster__item').forEach(function (poster) {
          poster.parentNode.removeChild(poster);
        });
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url).then(function (response) {
          var posters = response.data;

          if (posters.length > 0) {
            var posterBigIndex = 0;
            Object.keys(posters).forEach(function (key) {
              var posterEventData = {
                name: posters[key].eventName
              };
              var posterData = posters[key];
              var poster = that.createPoster(posterEventData, posterData, posterBigIndex);
              that.containerSearch.appendChild(poster);
              posterBigIndex++;
            });
          } else {
            var textNoResult = document.createElement('p');
            textNoResult.classList.add('poster__search__no-result');
            textNoResult.innerHTML = "Su b&uacute;squeda no produjo resultado, prueba usar otro terminos de b&uacute;squeda.";
            that.containerSearch.appendChild(textNoResult);
          }

          that.showOrHideSpinner();
        }).catch(function (error) {
          console.log(error);
        }); //wait for data arrival

        this.showOrHideSpinner();
        return false;
      }
    }
  }, {
    key: "getMorePosterEvents",
    value: function getMorePosterEvents(e) {
      e.preventDefault();
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(this.fetchMorePoster).then(function (response) {
        var postersEvents = response.data;

        if (postersEvents.length > 0) {
          if (postersEvents.length < that.amountToFetch) that.posterButtonWrapper.classList.add('wrapper--hide');
          Object.keys(postersEvents).forEach(function (key) {
            var posterEventData = postersEvents[key];
            var posterEvent = that.createPosterEvent(posterEventData);
            that.containerInitial.appendChild(posterEvent);
            var posterEventPosters = posterEventData.posters;
            Object.keys(posterEventPosters).forEach(function (key) {
              var posterData = posterEventPosters[key];
              var poster = that.createPoster(posterEventData, posterData, that.amountOfExistingPosters);
              that.amountOfExistingPosters++;
              that.containerInitial.appendChild(poster);
            });
            if (!posterEventData.more) that.posterButtonWrapper.classList.add('wrapper--hide');
          });
          that.currentIndex = postersEvents[postersEvents.length - 1].currentIndex;
          that.currentIndex += 1;
        } else {
          that.posterButtonWrapper.classList.add('wrapper--hide');
        }

        that.showOrHideSpinner();
        return false;
      }).catch(function (error) {
        console.log(error);
      }); //waiting for data arrival

      this.showOrHideSpinner();
      return false;
    }
  }]);

  return LoadPosters;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoadPosters);

/***/ }),

/***/ "./assets/js/modules/_loadVideos.js":
/*!******************************************!*\
  !*** ./assets/js/modules/_loadVideos.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LoadVideos =
/*#__PURE__*/
function () {
  function LoadVideos() {
    _classCallCheck(this, LoadVideos);

    this.parent = document.querySelector('#videos-container');
    this.buttonMoreVideos = document.querySelector('#loadMoreVideos');
    this.buttonMoreVideosWrapper = document.querySelector('#wrapper-loadMoreVideos');
    this.videoPrototype = document.querySelector('#video_prototype > div');
    this.spinnerWrapper = document.querySelector('#videos__load__wrapper');
    this.currentIndex = -1;
    this.amountToFetch = 2;
    this.urlToFetch = this.currentIndex < 0 ? '/videos/' + this.amountToFetch : '/videos/' + this.currentIndex + '/' + this.amountToFetch;
    this.event();
  }

  _createClass(LoadVideos, [{
    key: "event",
    value: function event() {
      this.buttonMoreVideos.addEventListener('click', this.getData.bind(this));
    }
  }, {
    key: "createVideo",
    value: function createVideo(url) {
      var video = this.videoPrototype.cloneNode(true);
      var iframe = video.querySelector('iframe');
      var data_src = "https://www.facebook.com/plugins/video.php?href=" + url + "&show_text=0&width=560";
      iframe.setAttribute('data-src', data_src);
      return video;
    }
  }, {
    key: "showOrHideSpinner",
    value: function showOrHideSpinner() {
      this.spinnerWrapper.toggleClass('load__animation__wrapper--is-visible');
    }
  }, {
    key: "getData",
    value: function getData() {
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.urlToFetch).then(function (response) {
        var data = response.data;

        if (data.length > 0) {
          if (data.length < that.amountToFetch) that.buttonMoreVideosWrapper.hide();
          Object.keys(data).forEach(function (key) {
            var videoUrl = data[key].url;
            var videoMore = data[key].more;
            var video = that.createVideo(videoUrl);
            that.parent[0].appendChild(video);
            if (!videoMore) that.buttonMoreVideosWrapper.hide();
          });
          that.currentIndex = data[data.length - 1].currentIndex;
          that.currentIndex += 1;
        } else {
          that.buttonMoreVideosWrapper.hide();
        }

        that.showOrHideSpinner();
        return false;
      }).catch(function (error) {
        console.log(error);
      });
      this.showOrHideSpinner();
      return false;
    }
  }]);

  return LoadVideos;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoadVideos);

/***/ }),

/***/ "./assets/js/modules/_mailSubscription.js":
/*!************************************************!*\
  !*** ./assets/js/modules/_mailSubscription.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MailSubscription =
/*#__PURE__*/
function () {
  function MailSubscription() {
    _classCallCheck(this, MailSubscription);

    this.form = document.querySelector('.footer__subscription__form');
    this.email = document.querySelector('.footer__subscription__form__item__email');
    this.button = document.querySelector('.footer__subscription__form__item__submit');
    this.subscriptionMessage = document.querySelector('.footer__subscription__message');
    this.event();
  }

  _createClass(MailSubscription, [{
    key: "event",
    value: function event() {
      this.button.addEventListener('click', this.send.bind(this));
    }
  }, {
    key: "send",
    value: function send() {
      if (this.form.checkValidity()) {
        var email = this.email.value;
        var params = new URLSearchParams();
        params.append('email', email);
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/mail', params).then(function (response) {
          var serverCode = response.data.response;

          if (serverCode === 'success') {
            setTimeout(function () {
              that.form.classList.add('footer__subscription__form--no-visible');
              that.subscriptionMessage.classList.add('footer__subscription__message--visible');
              that.subscriptionMessage.innerText = "!Hemos recibido su direcci&oacute;n de correo!<br>Pronto le enviaremos nuestro bolet&iacute;n.";
            }, 350);
          } else {
            that.form.classList.add('footer__subscription__form--no-visible');
            that.subscriptionMessage.classList.add('footer__subscription__message--visible');
            that.subscriptionMessage.innerText = "!Ha ocurrido un error! Intentalo de nuevo más tarde.";
          }
        }).catch(function (error) {
          that.form.classList.add('footer__subscription__form--no-visible');
          that.subscriptionMessage.classList.add('footer__subscription__message--visible');
          that.subscriptionMessage.innerText = "!Ha ocurrido un error! Prueba de nuevo más tarde.";
        });
        return false;
      }
    }
  }]);

  return MailSubscription;
}();

/* harmony default export */ __webpack_exports__["default"] = (MailSubscription);

/***/ }),

/***/ "./assets/js/modules/_mobileMenu.js":
/*!******************************************!*\
  !*** ./assets/js/modules/_mobileMenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuIcon = document.querySelector('.header__menu-icon');
    this.menuContent = document.querySelector('.header__menu-content');
    this.siteHeader = document.querySelector('.header');
    this.events();
  } //link the events with the functions


  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuContent.classList.toggle('header__menu-content--is-visible');
      this.siteHeader.classList.toggle('header--is-expanded');
      this.menuIcon.classList.toggle('header__menu-icon--close-x');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./assets/js/modules/_posterBig.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/_posterBig.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_utils */ "./assets/js/modules/_utils.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PosterBig =
/*#__PURE__*/
function () {
  function PosterBig() {
    _classCallCheck(this, PosterBig);

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

  _createClass(PosterBig, [{
    key: "checkOpenPosterFromUrl",
    value: function checkOpenPosterFromUrl() {
      var documentURL = document.URL;
      if (documentURL.indexOf('show-poster/') < 0) return;
      var requestUrl = documentURL.substring(documentURL.indexOf('show-poster/') + 12);
      var posterId = requestUrl.substring(0, requestUrl.indexOf('/'));
      posterId = parseInt(posterId);
      if (posterId < 0) return;
      var url = '/get_poster/' + posterId;
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url).then(function (response) {
        var poster = response.data;
        that.posterBig.classList.add('poster-big--is-visible');
        document.querySelector('body').style.overflowY = 'hidden';
        that.refreshPosterBig(poster);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "eventsPosterTrigger",
    value: function eventsPosterTrigger() {
      var _this = this;

      this.postersTriggers = document.querySelectorAll('.poster--visible a[data-poster-big]');
      this.postersTriggers.forEach(function (posterTrigger) {
        posterTrigger.addEventListener('click', _this.openPosterBig.bind(_this));
      });
    }
  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      this.postersTriggers.forEach(function (posterTrigger) {
        posterTrigger.addEventListener('click', _this2.openPosterBig.bind(_this2));
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
  }, {
    key: "openPosterBig",
    value: function openPosterBig(event) {
      event.preventDefault();
      this.posterBtnPrev.classList.remove('hide');
      this.posterBtnNext.classList.remove('hide');
      var posterId = event.currentTarget.getAttribute('data-poster-big');
      this.posterId = parseInt(posterId);
      if (this.posterId === 0) this.posterBtnPrev.classList.add('hide');
      if (this.posterId === this.postersTriggers.length - 1) this.posterBtnNext.classList.add('hide');
      this.posterBig.classList.add('poster-big--is-visible');
      document.querySelector('body').style.overflowY = 'visible';
      this.refreshPosterBig();
    }
  }, {
    key: "prevPosterBig",
    value: function prevPosterBig() {
      if (this.posterId - 1 >= 0) {
        this.posterId--;
        this.posterBtnNext.classList.remove('hide');
        this.refreshPosterBig();
      }

      if (this.posterId === 0) this.posterBtnPrev.classList.add('hide');
    }
  }, {
    key: "nextPosterBig",
    value: function nextPosterBig() {
      if (this.posterId + 1 < this.postersTriggers.length) {
        this.posterId++;
        this.posterBtnPrev.classList.remove('hide');
        this.refreshPosterBig();
      }

      if (this.posterId === this.postersTriggers.length - 1) this.posterBtnNext.classList.add('hide');
    }
  }, {
    key: "showDetails",
    value: function showDetails(event) {
      event.preventDefault();
      var imgDetails = event.currentTarget.getAttribute('data-img');
      var imgDetailsPosterMaxWidth = event.currentTarget.getAttribute('data-img-max-width');
      this.changeMainImage(imgDetails, imgDetailsPosterMaxWidth);
    }
  }, {
    key: "changeMainImage",
    value: function changeMainImage(posterImg, posterMaxWidth) {
      var srcset = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["makeSrcSet"])(posterImg, posterMaxWidth);
      this.posterBigImage.classList.remove('lazyloaded');
      this.posterBigImage.classList.add('lazyload', 'blur-up');
      this.posterBigImage.setAttribute('src', posterImg + "-20.jpg");
      this.posterBigImage.setAttribute('data-srcset', srcset);
    }
  }, {
    key: "changeDetailsImage",
    value: function changeDetailsImage(selectorImage, selectorLink, image, imageMaxWidth) {
      if (image === '/' || image === 'null') {
        selectorImage.classList.add('poster-big__details__items__image--none');
        return;
      }

      var srcSet = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["makeSrcSet"])(image, imageMaxWidth);
      selectorImage.classList.remove('poster-big__details__items__image--none');
      selectorImage.classList.remove('lazyloaded');
      selectorImage.classList.add('lazyload', 'blur-up');
      selectorImage.setAttribute('src', image + "-20.jpg");
      selectorImage.setAttribute('data-srcset', srcSet);
      selectorImage.setAttribute('sizes', '(max-width: 760px) 70px, 50vw');
      selectorLink.setAttribute('data-img', image);
      selectorLink.setAttribute('data-img-max-width', imageMaxWidth);
    }
  }, {
    key: "getDataObject",
    value: function getDataObject(element) {
      return {
        id: element.getAttribute('data-poster-id'),
        title: element.getAttribute('data-poster-title'),
        maxWidth: element.getAttribute('data-poster-max-width'),
        image: element.getAttribute('data-poster-img'),
        imageDetail1MaxWidth: element.getAttribute('data-poster-img-details1-max-width'),
        imageDetail1: element.getAttribute('data-poster-img-detail1'),
        imageDetail2MaxWidth: element.getAttribute('data-poster-img-details2-max-width'),
        imageDetail2: element.getAttribute('data-poster-img-detail2'),
        author: element.getAttribute('data-poster-author'),
        year: element.getAttribute('data-poster-year'),
        description: element.getAttribute('data-poster-description')
      };
    }
  }, {
    key: "refreshPosterBig",
    value: function refreshPosterBig() {
      var poster = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (poster === null) poster = this.getDataObject(this.postersTriggers[this.posterId]);
      this.changeMainImage(poster.image, poster.maxWidth);
      this.changeDetailsImage(this.posterBigImageDetails0, this.posterBigLinkDetails0, poster.image, poster.maxWidth);
      this.changeDetailsImage(this.posterBigImageDetails1, this.posterBigLinkDetails1, poster.imageDetail1, poster.imageDetail1MaxWidth);
      this.changeDetailsImage(this.posterBigImageDetails2, this.posterBigLinkDetails2, poster.imageDetail2, poster.imageDetail2MaxWidth);
      this.posterBigTitle.textContent = poster.title;
      var url = location.protocol + "//" + location.host + '/show-poster/' + poster.id + '/' + poster.title + '-' + poster.author + '#posters';
      url = encodeURI(url);
      url = 'https://www.facebook.com/sharer/sharer.php?u=' + url + ';src=sdkpreparse';
      this.posterBigLinkShare.querySelector('a').setAttribute('href', url);
      this.posterBigSubtitle.textContent = poster.author + (poster.year === '' ? '' : ' / ' + poster.year);
      this.posterBigDescription.innerHTML = poster.description;
    }
  }, {
    key: "closePosterBig",
    value: function closePosterBig(e) {
      e.preventDefault();
      this.posterBig.classList.remove('poster-big--is-visible');
      document.querySelector('body').style.overflowY = 'visible';
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      e.preventDefault();
      if (e.keyCode === 27) //escape key
        this.closePosterBig();
      if (e.keyCode === 39) //arrow right key
        this.nextPosterBig();
      if (e.keyCode === 37) //arrow left key
        this.prevPosterBig();
    }
  }]);

  return PosterBig;
}();

/* harmony default export */ __webpack_exports__["default"] = (PosterBig);

/***/ }),

/***/ "./assets/js/modules/_revealOnScroll.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/_revealOnScroll.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/waypoints/lib/noframework.waypoints */ "./node_modules/waypoints/lib/noframework.waypoints.js");
/* harmony import */ var _node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var RevealOnScroll =
/*#__PURE__*/
function () {
  function RevealOnScroll() {
    _classCallCheck(this, RevealOnScroll);

    this.itemsToReveal = document.querySelectorAll('.poster__item');
    this.header = document.querySelector('.header');
    this.sectionUs = document.querySelector('#us');
    this.hideInitially();
    this.createWaypoints();
    this.createWaypointsHeader();
  }

  _createClass(RevealOnScroll, [{
    key: "hideInitially",
    value: function hideInitially() {
      this.itemsToReveal.forEach(function (item) {
        item.classList.add("reveal-item");
      });
    }
  }, {
    key: "createWaypoints",
    value: function createWaypoints() {
      this.itemsToReveal.forEach(function (itemToReveal) {
        new Waypoint({
          element: itemToReveal,
          handler: function handler() {
            itemToReveal.classList.add('reveal-item--is-visible');
          },
          offset: "85%"
        });
      });
    }
  }, {
    key: "createWaypointsHeader",
    value: function createWaypointsHeader() {
      var that = this;
      new Waypoint({
        element: that.sectionUs,
        handler: function handler() {
          that.header.classList.add('header--is-visible');
        },
        offset: "20%"
      });
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ __webpack_exports__["default"] = (RevealOnScroll);

/***/ }),

/***/ "./assets/js/modules/_smoothScroll.js":
/*!********************************************!*\
  !*** ./assets/js/modules/_smoothScroll.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);

new smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default.a('.nav a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  offset: 75
});

/***/ }),

/***/ "./assets/js/modules/_stickyHeader.js":
/*!********************************************!*\
  !*** ./assets/js/modules/_stickyHeader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/waypoints/lib/noframework.waypoints */ "./node_modules/waypoints/lib/noframework.waypoints.js");
/* harmony import */ var _node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_waypoints_lib_noframework_waypoints__WEBPACK_IMPORTED_MODULE_3__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StickyHeader =
/*#__PURE__*/
function () {
  function StickyHeader() {
    _classCallCheck(this, StickyHeader);

    this.lazyload = document.querySelectorAll('.lazyload');
    this.heroTextContent = document.querySelector('.large-hero__text-content');
    this.sections = document.querySelectorAll('.section');
    this.navLinks = document.querySelectorAll('.nav li');
    this.navLinkStart = document.querySelector('#start-link');
    this.createPageSectionWaypoints();
    this.refreshWaypoints();
  }

  _createClass(StickyHeader, [{
    key: "refreshWaypoints",
    value: function refreshWaypoints() {
      this.lazyload.forEach(function (elem) {
        elem.addEventListener('load', Waypoint.refreshAll());
      });
    }
  }, {
    key: "createPageSectionWaypoints",
    value: function createPageSectionWaypoints() {
      var that = this;
      new Waypoint({
        element: that.heroTextContent,
        handler: function handler(direction) {
          if (direction === 'up') that.navLinks.forEach(function (navLink) {
            navLink.classList.remove('nav__link--active');
          });
          that.navLinkStart.classList.add('nav__link--active');
        },
        offset: "70%"
      });
      this.sections.forEach(function (section) {
        new Waypoint({
          element: section,
          handler: function handler(direction) {
            if (direction === "down") {
              that.navLinks.forEach(function (navLink) {
                navLink.classList.remove('nav__link--active');
              });

              if (section.hasAttribute('data-nav-link')) {
                var navLink = section.getAttribute('data-nav-link');
                navLink = document.querySelector(navLink);
                navLink.classList.add('nav__link--active');
              }
            }
          },
          offset: "18%"
        });
        new Waypoint({
          element: section,
          handler: function handler(direction) {
            if (direction === "up") {
              var navLink = section.getAttribute('data-nav-link');
              if (section.hasAttribute('data-nav-link-prev')) navLink = section.getAttribute('data-nav-link-prev');
              that.navLinks.forEach(function (navLink) {
                navLink.classList.remove('nav__link--active');
              });
              document.querySelector(navLink).classList.add('nav__link--active');
            }
          },
          offset: "-10%"
        });
      });
    }
  }]);

  return StickyHeader;
}();

/* harmony default export */ __webpack_exports__["default"] = (StickyHeader);

/***/ }),

/***/ "./assets/js/modules/_utils.js":
/*!*************************************!*\
  !*** ./assets/js/modules/_utils.js ***!
  \*************************************/
/*! exports provided: makeSrcSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSrcSet", function() { return makeSrcSet; });
/**
 * @return {string}
 */
function makeSrcSet(imageSrc, maxImageWidth) {
  var dimensions = [500, 800, 1200, 1900, 3600];
  var srcset = "";

  for (var i = 0; i < dimensions.length; i++) {
    if (dimensions[i] <= maxImageWidth) srcset += imageSrc + "-" + dimensions[i] + ".jpg " + dimensions[i] + "w, ";
  }

  srcset = srcset.substring(0, srcset.length - 2);
  return srcset;
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fbG9hZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fbG9hZE5ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX2xvYWRQb3N0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19sb2FkVmlkZW9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19tYWlsU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19tb2JpbGVNZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19wb3N0ZXJCaWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX3JldmVhbE9uU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19zbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX3N0aWNreUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fdXRpbHMuanMiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsIlN0aWNreUhlYWRlciIsIkNhcm91c2VsIiwiUmV2ZWFsT25TY3JvbGwiLCJQb3N0ZXJCaWciLCJFdmVudCIsIkxvYWROZXdzIiwiTG9hZFBvc3RlcnMiLCJMb2FkRXZlbnRzIiwiTG9hZFZpZGVvcyIsIk1haWxTdWJzY3JpcHRpb24iLCJpbml0RmxpY2tpdHlMYXJnZUhlcm8iLCJGbGlja2l0eSIsImNlbGxBbGlnbiIsImNvbnRhaW4iLCJwcmV2TmV4dEJ1dHRvbnMiLCJwYWdlRG90cyIsImF1dG9QbGF5Iiwid3JhcEFyb3VuZCIsInBhdXNlQXV0b1BsYXlPbkhvdmVyIiwiYnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZW50c0V4cGFuZCIsImV2ZW50cyIsImV2ZW50Rmlyc3QiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnRGaXJzdEJ1dHRvbiIsImNsb3NlRXZlbnRzRXhwYW5kIiwiZXZlbnQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4cGFuZEV2ZW50U2hvdyIsImJpbmQiLCJjbG9zZUV2ZW50RXhwYW5kIiwiZXhwYW5kRXZlbnRIaWRlQWxsIiwiZXZlbnRFeHBhbmQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJfZXZlbnQiLCJldmVudElkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRFeHBhbmRJZCIsImFkZCIsIkdhbGxlcnkiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsImxpc3RlbmVyIiwiU3dpcGVMaXN0ZW5lciIsIml0ZW1zIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsInByZXYiLCJuZXh0IiwiZSIsImRpcmVjdGlvbnMiLCJkZXRhaWwiLCJsZWZ0IiwicmlnaHQiLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsInBhcmVudCIsImdyaWRFdmVudHMiLCJidXR0b25Nb3JlRXZlbnRzIiwiYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIiLCJzcGlubmVyV3JhcHBlciIsImV2ZW50UHJvdG90eXBlIiwiZXZlbnRFeHBhbmRQcm90b3R5cGUiLCJjdXJyZW50SW5kZXgiLCJhbW91bnRUb0ZldGNoIiwidXJsVG9GZXRjaCIsImdldERhdGEiLCJuYW1lIiwiZGF0ZSIsInBsYWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJncmlkRXZlbnRFeHBhbmQiLCJjbG9uZU5vZGUiLCJjbG9zZUJ0biIsImNhcm91c2VsIiwiY2Fyb3VzZWxDZWxsIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRleHQiLCJjb2xsYXBzZUxpbmsiLCJpbm5lckhUTUwiLCJpbWFnZUNhcm91c2VsQ2VsbCIsInNyY3NldCIsIm1ha2VTcmNTZXQiLCJtYXhXaWR0aCIsImkiLCJjYXJvdXNlbENlbGxDbG9uZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiZXZlbnRpbWFnZSIsImV2ZW50TWF4SW1hZ2VXaWR0aCIsImxhc3QiLCJpbWFnZW4iLCJkZXNjcmlwdGlvblRleHQiLCJ0b2dnbGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJwb3MiLCJncmlkRXZlbnQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZGF0ZVRpbWUiLCJpbWFnZU1heFdpZHRoIiwiZXZlbnRNb3JlIiwibW9yZSIsImNyZWF0ZUV2ZW50IiwiY3JlYXRlRXZlbnRFeHBhbmQiLCJzaG93T3JIaWRlU3Bpbm5lciIsImNhdGNoIiwiZXJyb3IiLCJidXR0b25Nb3JlTmV3cyIsImJ1dHRvbk1vcmVOZXdzV3JhcHBlciIsIm5ld3NQcm90b3R5cGUiLCJuZXdzRGF0YSIsIm5ld3NJZCIsImlkIiwibmV3c1RpdGxlIiwibmV3c0RhdGUiLCJuZXdzVGV4dCIsIm5ld3NJbWFnZSIsIm5ld3NGaWxlIiwiZmlsZSIsIm5ld3NNYXhXaWR0aEltYWdlIiwibmV3cyIsIm5ld3NJbWFnZVNyY1NldCIsIm5ld3NMaW5rIiwiZW5jb2RlVVJJIiwibmV3c0xpbmtTaGFyZSIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwidGV4dENvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZU5ld3MiLCJwb3N0ZXJCdXR0b25XcmFwcGVyIiwiYnV0dG9uTW9yZVBvc3RlcnMiLCJjb250YWluZXJJbml0aWFsIiwiY29udGFpbmVyU2VhcmNoIiwiZmlsdGVyRm9ybSIsImZpbHRlcklucHV0IiwiZmlsdGVyQnV0dG9uIiwiZmlsdGVyUmVzZXQiLCJwb3N0ZXJFdmVudFByb3RvdHlwZSIsInBvc3RlclByb3RvdHlwZSIsImZldGNoTW9yZVBvc3RlciIsImFtb3VudE9mRXhpc3RpbmdQb3N0ZXJzIiwiZ2V0TW9yZVBvc3RlckV2ZW50cyIsImdldFNlYXJjaFBvc3RlciIsInJlc2V0U2VhcmNoIiwicG9zdGVyRXZlbnREYXRhIiwicG9zdGVyRXZlbnROYW1lIiwicG9zdGVyRXZlbnRJbWFnZSIsInBvc3RlckV2ZW50TWF4V2lkdGgiLCJwb3N0ZXJFdmVudCIsInBvc3RlckV2ZW50SW1nIiwicG9zdGVyRXZlbnRJbWFnZVNyY1NldCIsInBvc3RlckRhdGEiLCJwb3N0ZXJCaWdJbmRleCIsInBvc3RlciIsInBvc3RlckxpbmsiLCJwb3N0ZXJJbWFnZSIsInBvc3RlckF1dGhvciIsInBvc3RlckltYWdlU3JjU2V0IiwidXJsIiwiYXV0aG9yIiwiaW1hZ2VEZXRhaWwxIiwiaW1hZ2VEZXRhaWwxTWF4V2lkdGgiLCJpbWFnZURldGFpbDIiLCJpbWFnZURldGFpbDJNYXhXaWR0aCIsInllYXIiLCJ2YWx1ZSIsImNoZWNrVmFsaWRpdHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJwb3N0ZXJzIiwiZXZlbnROYW1lIiwiY3JlYXRlUG9zdGVyIiwidGV4dE5vUmVzdWx0IiwicG9zdGVyc0V2ZW50cyIsImNyZWF0ZVBvc3RlckV2ZW50IiwicG9zdGVyRXZlbnRQb3N0ZXJzIiwiYnV0dG9uTW9yZVZpZGVvcyIsImJ1dHRvbk1vcmVWaWRlb3NXcmFwcGVyIiwidmlkZW9Qcm90b3R5cGUiLCJ2aWRlbyIsImlmcmFtZSIsImRhdGFfc3JjIiwidG9nZ2xlQ2xhc3MiLCJoaWRlIiwidmlkZW9VcmwiLCJ2aWRlb01vcmUiLCJjcmVhdGVWaWRlbyIsImZvcm0iLCJlbWFpbCIsInN1YnNjcmlwdGlvbk1lc3NhZ2UiLCJzZW5kIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicG9zdCIsInNlcnZlckNvZGUiLCJzZXRUaW1lb3V0IiwiaW5uZXJUZXh0IiwibWVudUljb24iLCJtZW51Q29udGVudCIsInNpdGVIZWFkZXIiLCJ0b2dnbGVUaGVNZW51IiwicG9zdGVyc1RyaWdnZXJzIiwicG9zdGVyc0luaXRpYWxDb250YWluZXIiLCJwb3N0ZXJzU2VhcmNoQ29udGFpbmVyIiwicG9zdGVyQmlnIiwicG9zdGVyQmlnSW1hZ2UiLCJwb3N0ZXJCaWdMaW5rRGV0YWlsczAiLCJwb3N0ZXJCaWdJbWFnZURldGFpbHMwIiwicG9zdGVyQmlnTGlua0RldGFpbHMxIiwicG9zdGVyQmlnSW1hZ2VEZXRhaWxzMSIsInBvc3RlckJpZ0xpbmtEZXRhaWxzMiIsInBvc3RlckJpZ0ltYWdlRGV0YWlsczIiLCJwb3N0ZXJCaWdUaXRsZSIsInBvc3RlckJpZ1N1YnRpdGxlIiwicG9zdGVyQmlnTGlua1NoYXJlIiwicG9zdGVyQmlnRGVzY3JpcHRpb24iLCJwb3N0ZXJCdG5OZXh0IiwicG9zdGVyQnRuUHJldiIsInBvc3RlckNsb3NlIiwicG9zdGVySWQiLCJjaGVja09wZW5Qb3N0ZXJGcm9tVXJsIiwiZG9jdW1lbnRVUkwiLCJVUkwiLCJpbmRleE9mIiwicmVxdWVzdFVybCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJyZWZyZXNoUG9zdGVyQmlnIiwicG9zdGVyVHJpZ2dlciIsIm9wZW5Qb3N0ZXJCaWciLCJldmVudHNQb3N0ZXJUcmlnZ2VyIiwibmV4dFBvc3RlckJpZyIsInByZXZQb3N0ZXJCaWciLCJjbG9zZVBvc3RlckJpZyIsInNob3dEZXRhaWxzIiwia2V5UHJlc3NIYW5kbGVyIiwiY3VycmVudFRhcmdldCIsImltZ0RldGFpbHMiLCJpbWdEZXRhaWxzUG9zdGVyTWF4V2lkdGgiLCJjaGFuZ2VNYWluSW1hZ2UiLCJwb3N0ZXJJbWciLCJwb3N0ZXJNYXhXaWR0aCIsInNlbGVjdG9ySW1hZ2UiLCJzZWxlY3RvckxpbmsiLCJzcmNTZXQiLCJlbGVtZW50IiwiZ2V0RGF0YU9iamVjdCIsImNoYW5nZURldGFpbHNJbWFnZSIsImtleUNvZGUiLCJpdGVtc1RvUmV2ZWFsIiwiaGVhZGVyIiwic2VjdGlvblVzIiwiaGlkZUluaXRpYWxseSIsImNyZWF0ZVdheXBvaW50cyIsImNyZWF0ZVdheXBvaW50c0hlYWRlciIsIml0ZW1Ub1JldmVhbCIsIldheXBvaW50IiwiaGFuZGxlciIsIm9mZnNldCIsIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwibGF6eWxvYWQiLCJoZXJvVGV4dENvbnRlbnQiLCJzZWN0aW9ucyIsIm5hdkxpbmtzIiwibmF2TGlua1N0YXJ0IiwiY3JlYXRlUGFnZVNlY3Rpb25XYXlwb2ludHMiLCJyZWZyZXNoV2F5cG9pbnRzIiwiZWxlbSIsInJlZnJlc2hBbGwiLCJkaXJlY3Rpb24iLCJuYXZMaW5rIiwic2VjdGlvbiIsImhhc0F0dHJpYnV0ZSIsImltYWdlU3JjIiwibWF4SW1hZ2VXaWR0aCIsImRpbWVuc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQUlBLDJEQUFKO0FBQ0EsSUFBSUMsNkRBQUo7QUFDQSxJQUFJQyx5REFBSjtBQUNBLElBQUlDLCtEQUFKO0FBQ0EsSUFBSUMsMERBQUo7QUFDQSxJQUFJQyxzREFBSjtBQUNBLElBQUlDLHlEQUFKO0FBQ0EsSUFBSUMsNkRBQUo7QUFDQSxJQUFJQyw0REFBSjtBQUNBLElBQUlDLDREQUFKO0FB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LEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNk0sVUFBVSxDQUFDN08sTUFBL0IsRUFBdUNnQyxDQUFDLEVBQXhDO0FBQ0ksUUFBSTZNLFVBQVUsQ0FBQzdNLENBQUQsQ0FBVixJQUFpQjRNLGFBQXJCLEVBQ0kvTSxNQUFNLElBQUk4TSxRQUFRLEdBQUcsR0FBWCxHQUFpQkUsVUFBVSxDQUFDN00sQ0FBRCxDQUEzQixHQUFpQyxPQUFqQyxHQUEyQzZNLFVBQVUsQ0FBQzdNLENBQUQsQ0FBckQsR0FBMkQsS0FBckU7QUFGUjs7QUFJQUgsUUFBTSxHQUFHQSxNQUFNLENBQUMwSixTQUFQLENBQWlCLENBQWpCLEVBQW9CMUosTUFBTSxDQUFDN0IsTUFBUCxHQUFnQixDQUFwQyxDQUFUO0FBQ0EsU0FBTzZCLE1BQVA7QUFDSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi8uLi9jc3MvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICdsYXp5c2l6ZXMnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9fc21vb3RoU2Nyb2xsJztcclxuXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9fbW9iaWxlTWVudSc7XHJcbmltcG9ydCBSZXZlYWxPblNjcm9sbCBmcm9tICcuL21vZHVsZXMvX3JldmVhbE9uU2Nyb2xsJztcclxuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tICcuL21vZHVsZXMvX3N0aWNreUhlYWRlcic7XHJcbmltcG9ydCBQb3N0ZXJCaWcgZnJvbSAnLi9tb2R1bGVzL19wb3N0ZXJCaWcnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9tb2R1bGVzL19jYXJvdXNlbCc7XHJcbmltcG9ydCBFdmVudCBmcm9tICcuL21vZHVsZXMvX2V2ZW50JztcclxuXHJcbmltcG9ydCBMb2FkTmV3cyBmcm9tICcuL21vZHVsZXMvX2xvYWROZXdzJztcclxuaW1wb3J0IExvYWRQb3N0ZXJzIGZyb20gJy4vbW9kdWxlcy9fbG9hZFBvc3RlcnMnO1xyXG5pbXBvcnQgTG9hZEV2ZW50cyBmcm9tICcuL21vZHVsZXMvX2xvYWRFdmVudHMnO1xyXG5pbXBvcnQgTG9hZFZpZGVvcyBmcm9tICcuL21vZHVsZXMvX2xvYWRWaWRlb3MnO1xyXG5pbXBvcnQgTWFpbFN1YnNjcmlwdGlvbiBmcm9tICcuL21vZHVsZXMvX21haWxTdWJzY3JpcHRpb24nO1xyXG5cclxuXHJcbm5ldyBNb2JpbGVNZW51KCk7XHJcbm5ldyBTdGlja3lIZWFkZXIoKTtcclxubmV3IENhcm91c2VsKCk7XHJcbm5ldyBSZXZlYWxPblNjcm9sbCgpO1xyXG5uZXcgUG9zdGVyQmlnKCk7XHJcbm5ldyBFdmVudCgpO1xyXG5uZXcgTG9hZE5ld3MoKTtcclxubmV3IExvYWRQb3N0ZXJzKCk7XHJcbm5ldyBMb2FkRXZlbnRzKCk7XHJcbm5ldyBMb2FkVmlkZW9zKCk7XHJcbm5ldyBNYWlsU3Vic2NyaXB0aW9uKCk7XHJcbiIsImltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XHJcblxyXG5jbGFzcyBDYXJvdXNlbHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RmxpY2tpdHlMYXJnZUhlcm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmxpY2tpdHlMYXJnZUhlcm8oKXtcclxuICAgICAgICBuZXcgRmxpY2tpdHkoJy5jYXJvdXNlbCcse1xyXG4gICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iLCJpbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi9fZ2FsbGVyeVwiO1xyXG5cclxuY2xhc3MgRXZlbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLWV2ZW50XScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50X19leHBhbmQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudCcpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudF8wJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudEZpcnN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50X2J1dHRvbl9fZmlyc3QtZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50X19leHBhbmRfX2Nsb3NlLCAuYnRuX19jb2xsYXBzZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXhwYW5kRXZlbnRTaG93LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRzRXhwYW5kLmZvckVhY2goKGNsb3NlRXZlbnRFeHBhbmQpPT57XHJcbiAgICAgICAgICAgIGNsb3NlRXZlbnRFeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV4cGFuZEV2ZW50SGlkZUFsbC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRFdmVudEhpZGVBbGwoKXtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHNFeHBhbmQuZm9yRWFjaCgoZXZlbnRFeHBhbmQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2V2ZW50X19leHBhbmQtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgZXZlbnRFeHBhbmQuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLXZpc2libGUtLWZpcnN0LWV2ZW50Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKCdldmVudC0tdmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50Rmlyc3QuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRFdmVudFNob3coX2V2ZW50KXtcclxuICAgICAgICB0aGlzLmV4cGFuZEV2ZW50SGlkZUFsbCgpO1xyXG4gICAgICAgIGxldCBldmVudElkID0gX2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQnKTtcclxuICAgICAgICBsZXQgZXZlbnRFeHBhbmRJZCA9IF9ldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWV4cGFuZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXZlbnRJZCk7XHJcbiAgICAgICAgbGV0IGV2ZW50RXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihldmVudEV4cGFuZElkKTtcclxuICAgICAgICBcclxuICAgICAgICBldmVudC5jbGFzc0xpc3QuYWRkKCdldmVudC0tdmlzaWJsZScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRFeHBhbmRJZCA9PT0gJyNldmVudF9leHBhbmRfMCcpXHJcbiAgICAgICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V2ZW50X19leHBhbmQtLXZpc2libGVfX2ZpcnN0LWV2ZW50Jyk7XHJcblxyXG4gICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V2ZW50X19leHBhbmQtLXZpc2libGUnKTtcclxuICAgICAgICBuZXcgR2FsbGVyeShldmVudEV4cGFuZElkKycgLmV2ZW50X19leHBhbmRfX2Nhcm91c2VsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudDsiLCJpbXBvcnQgU3dpcGVMaXN0ZW5lciBmcm9tICdzd2lwZS1saXN0ZW5lcic7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBTd2lwZUxpc3RlbmVyKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcisnIC5nYWxsZXJ5X19pdGVtJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiaW1wb3J0IEV2ZW50IGZyb20gJy4vX2V2ZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7bWFrZVNyY1NldH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgTG9hZEV2ZW50c3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50cy1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkRXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZUV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZUV2ZW50cycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlci1sb2FkTW9yZUV2ZW50cycpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50c19fbG9hZF9fd3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50UHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50X3Byb3RvdHlwZSAuZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50RXhwYW5kUHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50X3Byb3RvdHlwZSAgLmdyaWQtZXZlbnRfX2V4cGFuZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuYW1vdW50VG9GZXRjaCA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMudXJsVG9GZXRjaCA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICAnL2V2ZW50cy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvZXZlbnRzLycrKHRoaXMuY3VycmVudEluZGV4KSsnLycrdGhpcy5hbW91bnRUb0ZldGNoO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXZlbnRFeHBhbmQobmFtZSwgZGF0ZSwgcGxhY2UsIGRlc2NyaXB0aW9uLCBpbWFnZXMsIGluZGV4KXtcclxuXHJcbiAgICAgICAgbGV0IGdyaWRFdmVudEV4cGFuZCA9IHRoaXMuZXZlbnRFeHBhbmRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgZXZlbnRFeHBhbmQgPSBncmlkRXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignLmV2ZW50X19leHBhbmQnKTtcclxuICAgICAgICBsZXQgY2xvc2VCdG4gPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdidG5fX2Nsb3NlJyk7XHJcbiAgICAgICAgbGV0IGNhcm91c2VsID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignLmV2ZW50X19leHBhbmRfX2Nhcm91c2VsJyk7XHJcblxyXG4gICAgICAgIGxldCBjYXJvdXNlbENlbGwgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRfX2V4cGFuZF9fY2Fyb3VzZWxfX2NlbGwnKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignaDMnKTtcclxuICAgICAgICBsZXQgc3VidGl0bGUgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdoNCcpO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIGxldCBjb2xsYXBzZUxpbmsgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblxyXG4gICAgICAgIGV2ZW50RXhwYW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXZlbnRfZXhwYW5kXycraW5kZXgpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgc3VidGl0bGUuaW5uZXJIVE1MID0gZGF0ZSsnLCAnK3BsYWNlO1xyXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgY29sbGFwc2VMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZScsICd0cnVlJyk7XHJcbiAgICAgICAgY29sbGFwc2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjZXZlbnRfJytpbmRleCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaW1hZ2VDYXJvdXNlbENlbGwgPSBjYXJvdXNlbENlbGwucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICAgIGxldCBzcmNzZXQgPSBtYWtlU3JjU2V0KGltYWdlc1swXS5pbWFnZSwgaW1hZ2VzWzBdLm1heFdpZHRoKTtcclxuICAgICAgICBpbWFnZUNhcm91c2VsQ2VsbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlc1swXSsnLTIwLmpwZycpO1xyXG4gICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnYWx0JywgbmFtZSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcm91c2VsQ2VsbENsb25lID0gY2Fyb3VzZWxDZWxsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGltYWdlQ2Fyb3VzZWxDZWxsID0gY2Fyb3VzZWxDZWxsQ2xvbmUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Jjc2V0ID0gbWFrZVNyY1NldChpbWFnZXNbaV0uaW1hZ2UsIGltYWdlc1tpXS5tYXhXaWR0aCk7XHJcbiAgICAgICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VzW2ldKyctMjAuanBnJyk7XHJcbiAgICAgICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcm91c2VsQ2VsbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDZWxsQ2xvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY2Fyb3VzZWxDZWxsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWRFdmVudEV4cGFuZDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFdmVudCh0aGF0LCBuYW1lLCBkYXRlLCBwbGFjZSwgZXZlbnRpbWFnZSwgZXZlbnRNYXhJbWFnZVdpZHRoLCBpbmRleCwgbGFzdCl7XHJcblxyXG4gICAgICAgIGxldCBldmVudCA9IHRoaXMuZXZlbnRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VuID0gZXZlbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZXZlbnQucXVlcnlTZWxlY3RvcignaDQnKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25UZXh0ID0gZXZlbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgZXZlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdldmVudF8nK2luZGV4KTtcclxuXHJcbiAgICAgICAgaWYoKGluZGV4IC0gMSkgJSAyID09PSAwKVxyXG4gICAgICAgICAgICBldmVudC5jbGFzc0xpc3QuYWRkKCdncmlkLWV2ZW50X19maXJzdCcpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ldmVudF9fc2Vjb25kJyk7XHJcblxyXG4gICAgICAgICBpZihsYXN0ICYmICgoaW5kZXggLSAxKSAlIDIgPT09IDApKVxyXG4gICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LmFkZCgnZXZlbnQtLWNlbnRlcicpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNyY3NldCA9IG1ha2VTcmNTZXQoZXZlbnRpbWFnZSwgZXZlbnRNYXhJbWFnZVdpZHRoKTtcclxuICAgICAgICBpbWFnZW4uc2V0QXR0cmlidXRlKCdzcmMnLCBldmVudGltYWdlKyctMjAuanBnJyk7XHJcbiAgICAgICAgaW1hZ2VuLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgIGltYWdlbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG5hbWUpO1xyXG5cclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWV4cGFuZCcsJyNldmVudF9leHBhbmRfJytpbmRleCk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudCcsICcjZXZlbnRfJytpbmRleCk7XHJcblxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IGRhdGUrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnIvPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3Ryb25nPkx1Z2FyOiA8L3N0cm9uZz4nKyBwbGFjZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMudXJsVG9GZXRjaClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCB0aGF0LmFtb3VudFRvRmV0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmlkRXZlbnQgPSB0aGF0LmdyaWRFdmVudHNbdGhhdC5ncmlkRXZlbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLWNlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkYXRhW2tleV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGRhdGFba2V5XS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVRpbWUgPSBkYXRhW2tleV0uZGF0ZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGRhdGFba2V5XS5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlTWF4V2lkdGggPSBkYXRhW2tleV0ubWF4V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZSA9IGRhdGFba2V5XS5wbGFjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGF0YVtrZXldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VzID0gZGF0YVtrZXldLmltYWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50TW9yZSA9IGRhdGFba2V5XS5tb3JlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gdGhhdC5jcmVhdGVFdmVudCh0aGF0LCBuYW1lLCBkYXRlVGltZSwgcGxhY2UsIGltYWdlLCBpbWFnZU1heFdpZHRoLCBpbmRleCwgKHBvcysrID09PSAoZGF0YS5sZW5ndGggLSAxKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRFeHBhbmQgPSB0aGF0LmNyZWF0ZUV2ZW50RXhwYW5kKG5hbWUsIGRhdGVUaW1lLCBwbGFjZSwgZGVzY3JpcHRpb24sIGltYWdlcywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleC0xKSAlIDIgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ldmVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuYXBwZW5kQ2hpbGQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuYXBwZW5kQ2hpbGQoZXZlbnRFeHBhbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXJlbnQuYXBwZW5kQ2hpbGQoZ3JpZEV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFldmVudE1vcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmJ1dHRvbk1vcmVFdmVudHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRJbmRleCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL3dhaXRpbmcgZm9yIGRhdGEgYXJyaXZhbFxyXG4gICAgICAgIHRoaXMuc2hvd09ySGlkZVNwaW5uZXIoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkRXZlbnRzOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7bWFrZVNyY1NldH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgTG9hZE5ld3N7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25Nb3JlTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZU5ld3MnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVOZXdzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cmFwcGVyLWxvYWRNb3JlTmV3cycpO1xyXG4gICAgICAgIHRoaXMubmV3c1Byb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzX3Byb3RvdHlwZSA+IGRpdicpO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c19fbG9hZF9fd3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuYW1vdW50VG9GZXRjaCA9IDI7XHJcbiAgICAgICAgdGhpcy51cmxUb0ZldGNoID0gIHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvbmV3cy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvbmV3cy8nK3RoaXMuY3VycmVudEluZGV4KycvJyt0aGlzLmFtb3VudFRvRmV0Y2g7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25Nb3JlTmV3cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdzKG5ld3NEYXRhKXtcclxuICAgICAgICBsZXQgbmV3c0lkID0gbmV3c0RhdGEuaWQ7XHJcbiAgICAgICAgbGV0IG5ld3NUaXRsZSA9IG5ld3NEYXRhLnRpdGxlO1xyXG4gICAgICAgIGxldCBuZXdzRGF0ZSA9IG5ld3NEYXRhLmRhdGU7XHJcbiAgICAgICAgbGV0IG5ld3NUZXh0ID0gbmV3c0RhdGEudGV4dDtcclxuICAgICAgICBsZXQgbmV3c0ltYWdlID0gbmV3c0RhdGEuaW1hZ2U7XHJcbiAgICAgICAgbGV0IG5ld3NGaWxlID0gbmV3c0RhdGEuZmlsZTtcclxuICAgICAgICBsZXQgbmV3c01heFdpZHRoSW1hZ2UgPSBuZXdzRGF0YS5tYXhXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IG5ld3MgPSB0aGlzLm5ld3NQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBuZXdzSW1hZ2VTcmNTZXQgPSBtYWtlU3JjU2V0KG5ld3NJbWFnZSwgbmV3c01heFdpZHRoSW1hZ2UpO1xyXG4gICAgICAgIGxldCBuZXdzTGluayA9ICcvc2hvdy1uZXdzLycrbmV3c0lkKycvJytlbmNvZGVVUkkobmV3c1RpdGxlKSsnIycrZW5jb2RlVVJJKG5ld3NUaXRsZSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdzTGlua1NoYXJlID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0K25ld3NMaW5rO1xyXG4gICAgICAgIG5ld3NMaW5rU2hhcmUgPSBlbmNvZGVVUkkobmV3c0xpbmtTaGFyZSk7XHJcbiAgICAgICAgbmV3c0xpbmtTaGFyZSA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nK25ld3NMaW5rU2hhcmUrJztzcmM9c2RrcHJlcGFyc2UnO1xyXG5cclxuICAgICAgICBuZXdzLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWJsb2NrID4gZGl2Jykuc2V0QXR0cmlidXRlKCdpZCcsIGVuY29kZVVSSShuZXdzVGl0bGUpKTtcclxuICAgICAgICBuZXdzLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19pbWFnZSBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5ld3NJbWFnZStcIi0yMC5qcGdcIik7XHJcbiAgICAgICAgbmV3cy5xdWVyeVNlbGVjdG9yKCcubmV3c19faW1hZ2UgaW1nJykuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIG5ld3NJbWFnZVNyY1NldCk7XHJcbiAgICAgICAgbmV3cy5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGV4dCAuaW5mby1ibG9ja19fZGVzY3JpcHRpb24gPiBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgbmV3c0xpbmspO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgLmluZm8tYmxvY2tfX2Rlc2NyaXB0aW9uIC5pbmZvLWJsb2NrX19kZXNjcmlwdGlvbl9fc2hhcmUgPiBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgbmV3c0xpbmtTaGFyZSk7XHJcbiAgICAgICAgbmV3cy5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGV4dCBoMycpLnRleHRDb250ZW50ID0gbmV3c1RpdGxlO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgaDQnKS50ZXh0Q29udGVudCA9IG5ld3NEYXRlO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgcCcpLmlubmVySFRNTCA9IG5ld3NUZXh0O1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgLmluZm8tYmxvY2tfX2Rlc2NyaXB0aW9uX19saW5rIGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBuZXdzRmlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdzO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBheGlvcy5nZXQodGhpcy51cmxUb0ZldGNoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCB0aGF0LmFtb3VudFRvRmV0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlTmV3c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdzID0gdGhhdC5jcmVhdGVOZXdzKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXJlbnQuYXBwZW5kQ2hpbGQobmV3cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFkYXRhW2tleV0ubW9yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlTmV3c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmJ1dHRvbk1vcmVOZXdzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcbiAgICAgICAgICAgIH0gIFxyXG5cclxuICAgICAgICAgICAgLy9zdG9wIHdhaXRpbmdcclxuICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vd2FpdGluZyBmb3IgZGF0YSBhcnJpdmFsXHJcbiAgICAgICAgdGhpcy5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkTmV3czsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge21ha2VTcmNTZXR9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIExvYWRQb3N0ZXJze1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGVyQnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX2J1dHRvbl9fd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVBvc3RlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZE1vcmVQb3N0ZXJzJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9fc2VhcmNoJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2Zvcm0nKTtcclxuICAgICAgICB0aGlzLmZpbHRlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9faW5wdXQnKTtcclxuICAgICAgICB0aGlzLmZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yZXNldCcpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3RlcnNfX2xvYWRfX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJFdmVudFByb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0ZXJFdmVudF9wcm90b3R5cGUgPiBkaXYnKTtcclxuICAgICAgICB0aGlzLnBvc3RlclByb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0ZXJfcHJvdG90eXBlID4gZGl2Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5hbW91bnRUb0ZldGNoID0gMjtcclxuICAgICAgICB0aGlzLmZldGNoTW9yZVBvc3RlciA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvcG9zdGVycy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvcG9zdGVycy8nKyh0aGlzLmN1cnJlbnRJbmRleCkrJy8nK3RoaXMuYW1vdW50VG9GZXRjaDtcclxuXHJcbiAgICAgICAgdGhpcy5hbW91bnRPZkV4aXN0aW5nUG9zdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0ZXIgYVtkYXRhLXBvc3Rlci1iaWddJykubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVBvc3RlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldE1vcmVQb3N0ZXJFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldFNlYXJjaFBvc3Rlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmZpbHRlclJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXNldFNlYXJjaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3N0ZXJFdmVudChwb3N0ZXJFdmVudERhdGEpe1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVyRXZlbnROYW1lID0gcG9zdGVyRXZlbnREYXRhLm5hbWU7XHJcbiAgICAgICAgbGV0IHBvc3RlckV2ZW50SW1hZ2UgPSBwb3N0ZXJFdmVudERhdGEuaW1hZ2U7XHJcbiAgICAgICAgbGV0IHBvc3RlckV2ZW50TWF4V2lkdGggPSBwb3N0ZXJFdmVudERhdGEubWF4V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCBwb3N0ZXJFdmVudCA9IHRoaXMucG9zdGVyRXZlbnRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBwb3N0ZXJFdmVudEltZyA9IHBvc3RlckV2ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVyRXZlbnRJbWFnZVNyY1NldCA9IG1ha2VTcmNTZXQocG9zdGVyRXZlbnRJbWFnZSwgcG9zdGVyRXZlbnRNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyRXZlbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRlc2NyaXB0aW9uJywgcG9zdGVyRXZlbnROYW1lKTtcclxuICAgICAgICBwb3N0ZXJFdmVudEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBvc3RlckV2ZW50SW1hZ2UrXCItMjAuanBnXCIpO1xyXG4gICAgICAgIHBvc3RlckV2ZW50SW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBwb3N0ZXJFdmVudEltYWdlU3JjU2V0KTtcclxuICAgICAgICBwb3N0ZXJFdmVudEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBvc3RlckV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3N0ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3N0ZXIocG9zdGVyRXZlbnREYXRhLCBwb3N0ZXJEYXRhLCBwb3N0ZXJCaWdJbmRleCl7XHJcblxyXG4gICAgICAgIGxldCBwb3N0ZXIgPSB0aGlzLnBvc3RlclByb3RvdHlwZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHBvc3RlckxpbmsgPSBwb3N0ZXIucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICAgIGxldCBwb3N0ZXJJbWFnZSA9IHBvc3Rlci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBsZXQgcG9zdGVyQXV0aG9yID0gcG9zdGVyLnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX2l0ZW1fX2F1dGhvcicpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVySW1hZ2VTcmNTZXQgPSBtYWtlU3JjU2V0KHBvc3RlckRhdGEuaW1hZ2UsIHBvc3RlckRhdGEubWF4V2lkdGgpO1xyXG4gICAgICAgIGxldCB1cmwgPSAnIycrcG9zdGVyRGF0YS5pZCsnLScrZW5jb2RlVVJJKHBvc3RlckV2ZW50RGF0YS5uYW1lKSsnLScrZW5jb2RlVVJJKHBvc3RlckRhdGEuYXV0aG9yKTtcclxuXHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pZCcsIHBvc3RlckRhdGEuaWQpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1iaWcnLCBwb3N0ZXJCaWdJbmRleCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLXRpdGxlJywgcG9zdGVyRXZlbnREYXRhLm5hbWUpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWcnLCBwb3N0ZXJEYXRhLmltYWdlKTtcclxuICAgICAgICBwb3N0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5tYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZy1kZXRhaWwxJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDEpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczEtbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDFNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZy1kZXRhaWwyJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDIpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczItbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDJNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWF1dGhvcicsIHBvc3RlckRhdGEuYXV0aG9yKTtcclxuICAgICAgICBwb3N0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXIteWVhcicsIHBvc3RlckRhdGEueWVhcik7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWRlc2NyaXB0aW9uJywgcG9zdGVyRGF0YS5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIHBvc3RlckltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9zdGVyRGF0YS5pbWFnZStcIi0yMC5qcGdcIik7XHJcbiAgICAgICAgcG9zdGVySW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIHBvc3RlckltYWdlU3JjU2V0KTtcclxuXHJcbiAgICAgICAgcG9zdGVyQXV0aG9yLnRleHRDb250ZW50ID0gcG9zdGVyRGF0YS5hdXRob3I7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3N0ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlc2V0U2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVySW5pdGlhbC5jbGFzc0xpc3QuYWRkKCdwb3N0ZXItLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3Rlci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci0taGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWFyY2hQb3N0ZXIoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gJy9zZWFyY2gvJyt0aGlzLmZpbHRlcklucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJJbml0aWFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3Rlci0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckluaXRpYWwuY2xhc3NMaXN0LmFkZCgncG9zdGVyLS1oaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3cmFwcGVyLWhpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJTZWFyY2guY2xhc3NMaXN0LmFkZCgncG9zdGVyLS12aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdGVyX19pdGVtJykuZm9yRWFjaChwb3N0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9zdGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVycyA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3N0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckJpZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zdGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50RGF0YSA9IHtuYW1lOiBwb3N0ZXJzW2tleV0uZXZlbnROYW1lIH0gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckRhdGEgPSBwb3N0ZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVyID0gdGhhdC5jcmVhdGVQb3N0ZXIocG9zdGVyRXZlbnREYXRhLCBwb3N0ZXJEYXRhLCBwb3N0ZXJCaWdJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250YWluZXJTZWFyY2guYXBwZW5kQ2hpbGQocG9zdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlckJpZ0luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9SZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb1Jlc3VsdC5jbGFzc0xpc3QuYWRkKCdwb3N0ZXJfX3NlYXJjaF9fbm8tcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb1Jlc3VsdC5pbm5lckhUTUwgPSBcIlN1IGImdWFjdXRlO3NxdWVkYSBubyBwcm9kdWpvIHJlc3VsdGFkbywgcHJ1ZWJhIHVzYXIgb3RybyB0ZXJtaW5vcyBkZSBiJnVhY3V0ZTtzcXVlZGEuXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRhaW5lclNlYXJjaC5hcHBlbmRDaGlsZCh0ZXh0Tm9SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3dhaXQgZm9yIGRhdGEgYXJyaXZhbFxyXG4gICAgICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vcmVQb3N0ZXJFdmVudHMoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmZldGNoTW9yZVBvc3RlcilcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3RlcnNFdmVudHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHBvc3RlcnNFdmVudHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3RlcnNFdmVudHMubGVuZ3RoIDwgdGhhdC5hbW91bnRUb0ZldGNoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zdGVyc0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50RGF0YSA9IHBvc3RlcnNFdmVudHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVyRXZlbnQgPSB0aGF0LmNyZWF0ZVBvc3RlckV2ZW50KHBvc3RlckV2ZW50RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250YWluZXJJbml0aWFsLmFwcGVuZENoaWxkKHBvc3RlckV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50UG9zdGVycyA9IHBvc3RlckV2ZW50RGF0YS5wb3N0ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBvc3RlckV2ZW50UG9zdGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3N0ZXJEYXRhID0gcG9zdGVyRXZlbnRQb3N0ZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3N0ZXIgPSB0aGF0LmNyZWF0ZVBvc3Rlcihwb3N0ZXJFdmVudERhdGEsIHBvc3RlckRhdGEsIHRoYXQuYW1vdW50T2ZFeGlzdGluZ1Bvc3RlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hbW91bnRPZkV4aXN0aW5nUG9zdGVycysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRhaW5lckluaXRpYWwuYXBwZW5kQ2hpbGQocG9zdGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcG9zdGVyRXZlbnREYXRhLm1vcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggPSBwb3N0ZXJzRXZlbnRzW3Bvc3RlcnNFdmVudHMubGVuZ3RoIC0gMV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnBvc3RlckJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGF0LnNob3dPckhpZGVTcGlubmVyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy93YWl0aW5nIGZvciBkYXRhIGFycml2YWxcclxuICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkUG9zdGVyczsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgTG9hZFZpZGVvc3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvcy1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVWaWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZE1vcmVWaWRlb3MnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVWaWRlb3NXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dyYXBwZXItbG9hZE1vcmVWaWRlb3MnKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb1Byb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlb19wcm90b3R5cGUgPiBkaXYnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlb3NfX2xvYWRfX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmFtb3VudFRvRmV0Y2ggPSAyO1xyXG4gICAgICAgIHRoaXMudXJsVG9GZXRjaCA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvdmlkZW9zLycrdGhpcy5hbW91bnRUb0ZldGNoIDogJy92aWRlb3MvJysodGhpcy5jdXJyZW50SW5kZXgpKycvJyt0aGlzLmFtb3VudFRvRmV0Y2g7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVZpZGVvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWaWRlbyh1cmwpe1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvUHJvdG90eXBlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsZXQgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhX3NyYyA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvdmlkZW8ucGhwP2hyZWY9XCIrIHVybCArXCImc2hvd190ZXh0PTAmd2lkdGg9NTYwXCI7XHJcblxyXG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgZGF0YV9zcmMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmlkZW87XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09ySGlkZVNwaW5uZXIoKXtcclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyLnRvZ2dsZUNsYXNzKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBheGlvcy5nZXQodGhpcy51cmxUb0ZldGNoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA8IHRoYXQuYW1vdW50VG9GZXRjaClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlb1VybCA9IGRhdGFba2V5XS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlb01vcmUgPSBkYXRhW2tleV0ubW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlbyA9IHRoYXQuY3JlYXRlVmlkZW8odmlkZW9VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhcmVudFswXS5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdmlkZW9Nb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudEluZGV4ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmN1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRJbmRleCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZFZpZGVvczsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgTWFpbFN1YnNjcmlwdGlvbntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3N1YnNjcmlwdGlvbl9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm1fX2l0ZW1fX2VtYWlsJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm1fX2l0ZW1fX3N1Ym1pdCcpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3N1YnNjcmlwdGlvbl9fbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZW5kLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBsZXQgZW1haWwgPSB0aGlzLmVtYWlsLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL21haWwnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcnZlckNvZGUgPSByZXNwb25zZS5kYXRhLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlckNvZGUgPT09ICdzdWNjZXNzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmZvcm0uY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm0tLW5vLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdWJzY3JpcHRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fc3Vic2NyaXB0aW9uX19tZXNzYWdlLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIZW1vcyByZWNpYmlkbyBzdSBkaXJlY2NpJm9hY3V0ZTtuIGRlIGNvcnJlbyE8YnI+UHJvbnRvIGxlIGVudmlhcmVtb3MgbnVlc3RybyBib2xldCZpYWN1dGU7bi5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzNTApOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZm9ybS5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3N1YnNjcmlwdGlvbl9fZm9ybS0tbm8tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3N1YnNjcmlwdGlvbl9fbWVzc2FnZS0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIYSBvY3VycmlkbyB1biBlcnJvciEgSW50ZW50YWxvIGRlIG51ZXZvIG3DoXMgdGFyZGUuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fc3Vic2NyaXB0aW9uX19mb3JtLS1uby12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN1YnNjcmlwdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19zdWJzY3JpcHRpb25fX21lc3NhZ2UtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIYSBvY3VycmlkbyB1biBlcnJvciEgUHJ1ZWJhIGRlIG51ZXZvIG3DoXMgdGFyZGUuXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxTdWJzY3JpcHRpb247IiwiY2xhc3MgTW9iaWxlTWVudXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5tZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtaWNvbicpO1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLnNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpbmsgdGhlIGV2ZW50cyB3aXRoIHRoZSBmdW5jdGlvbnNcclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVRoZU1lbnUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGhlTWVudSgpe1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWNvbnRlbnQtLWlzLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLnNpdGVIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1pcy1leHBhbmRlZCcpO1xyXG4gICAgICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWljb24tLWNsb3NlLXgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge21ha2VTcmNTZXR9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIFBvc3RlckJpZ3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdGVyLS12aXNpYmxlIGFbZGF0YS1wb3N0ZXItYmlnXScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlcnNJbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1NlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX3NlYXJjaCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19pbWFnZScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMScpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMicpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMicpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlci1iaWdfX2Rlc2NyaXB0aW9uX190aXRsZScpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fZGVzY3JpcHRpb25fX3N1YnRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rU2hhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fZGVzY3JpcHRpb25fX3NoYXJlJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXNjcmlwdGlvbl9fdGV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fbmV4dCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19wcmV2Jyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19jbG9zZScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlcklkID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmNoZWNrT3BlblBvc3RlckZyb21VcmwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja09wZW5Qb3N0ZXJGcm9tVXJsKCl7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50VVJMID0gZG9jdW1lbnQuVVJMO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnRVUkwuaW5kZXhPZignc2hvdy1wb3N0ZXIvJykgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gZG9jdW1lbnRVUkwuc3Vic3RyaW5nKGRvY3VtZW50VVJMLmluZGV4T2YoJ3Nob3ctcG9zdGVyLycpKzEyKTtcclxuICAgICAgICBsZXQgcG9zdGVySWQgPSByZXF1ZXN0VXJsLnN1YnN0cmluZygwLCByZXF1ZXN0VXJsLmluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgcG9zdGVySWQgPSBwYXJzZUludChwb3N0ZXJJZCk7XHJcblxyXG4gICAgICAgIGlmIChwb3N0ZXJJZCA8IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICcvZ2V0X3Bvc3Rlci8nK3Bvc3RlcklkO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3RlciA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB0aGF0LnBvc3RlckJpZy5jbGFzc0xpc3QuYWRkKCdwb3N0ZXItYmlnLS1pcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICAgIHRoYXQucmVmcmVzaFBvc3RlckJpZyhwb3N0ZXIpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBldmVudHNQb3N0ZXJUcmlnZ2VyKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1RyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3Rlci0tdmlzaWJsZSBhW2RhdGEtcG9zdGVyLWJpZ10nKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMuZm9yRWFjaChwb3N0ZXJUcmlnZ2VyID0+IHtcclxuICAgICAgICAgICAgcG9zdGVyVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblBvc3RlckJpZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1RyaWdnZXJzLmZvckVhY2gocG9zdGVyVHJpZ2dlciA9PiB7XHJcbiAgICAgICAgICAgIHBvc3RlclRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Qb3N0ZXJCaWcuYmluZCh0aGlzKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzSW5pdGlhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLmV2ZW50c1Bvc3RlclRyaWdnZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzU2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIHRoaXMuZXZlbnRzUG9zdGVyVHJpZ2dlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBvc3RlcnNJbml0aWFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVSZW1vdmVkJywgdGhpcy5ldmVudHNQb3N0ZXJUcmlnZ2VyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1NlYXJjaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIHRoaXMuZXZlbnRzUG9zdGVyVHJpZ2dlci5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucG9zdGVyQnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dFBvc3RlckJpZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCdG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2UG9zdGVyQmlnLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvc3RlckJpZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rRGV0YWlsczAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dEZXRhaWxzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RGV0YWlscy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlQcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvc3RlckJpZyhldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCdG5QcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVySWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItYmlnJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJJZCA9IHBhcnNlSW50KHBvc3RlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnRuUHJldi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09IHRoaXMucG9zdGVyc1RyaWdnZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnRuTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWcuY2xhc3NMaXN0LmFkZCgncG9zdGVyLWJpZy0taXMtdmlzaWJsZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUG9zdGVyQmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldlBvc3RlckJpZygpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvc3RlcklkIC0gMSA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJJZC0tOyAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJCdG5OZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUG9zdGVyQmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc3RlcklkID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0blByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQb3N0ZXJCaWcoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3N0ZXJJZCArIDEgPCAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJJZCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0blByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hQb3N0ZXJCaWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09ICB0aGlzLnBvc3RlcnNUcmlnZ2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZXRhaWxzKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgaW1nRGV0YWlscyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWltZycpO1xyXG4gICAgICAgIGxldCBpbWdEZXRhaWxzUG9zdGVyTWF4V2lkdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctbWF4LXdpZHRoJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlTWFpbkltYWdlKGltZ0RldGFpbHMsIGltZ0RldGFpbHNQb3N0ZXJNYXhXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTWFpbkltYWdlKHBvc3RlckltZywgcG9zdGVyTWF4V2lkdGgpe1xyXG5cclxuICAgICAgICBsZXQgc3Jjc2V0ID0gbWFrZVNyY1NldChwb3N0ZXJJbWcsIHBvc3Rlck1heFdpZHRoKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkZWQnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJywgJ2JsdXItdXAnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9zdGVySW1nK1wiLTIwLmpwZ1wiKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURldGFpbHNJbWFnZShzZWxlY3RvckltYWdlLCBzZWxlY3RvckxpbmssIGltYWdlLCBpbWFnZU1heFdpZHRoKXtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlID09PSAnLycgfHwgaW1hZ2UgPT09ICdudWxsJykge1xyXG4gICAgICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci1iaWdfX2RldGFpbHNfX2l0ZW1zX19pbWFnZS0tbm9uZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3JjU2V0ID0gbWFrZVNyY1NldChpbWFnZSwgaW1hZ2VNYXhXaWR0aCk7XHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19faW1hZ2UtLW5vbmUnKTtcclxuICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkZWQnKTtcclxuICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJywgJ2JsdXItdXAnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlICsgXCItMjAuanBnXCIpO1xyXG4gICAgICAgIHNlbGVjdG9ySW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIHNyY1NldCk7XHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgJyhtYXgtd2lkdGg6IDc2MHB4KSA3MHB4LCA1MHZ3Jyk7XHJcbiAgICAgICAgc2VsZWN0b3JMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCBpbWFnZSk7XHJcbiAgICAgICAgc2VsZWN0b3JMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctbWF4LXdpZHRoJywgaW1hZ2VNYXhXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YU9iamVjdChlbGVtZW50KXtcclxuICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgaWQgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItaWQnKSxcclxuICAgICAgICAgICAgdGl0bGUgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItdGl0bGUnKSxcclxuICAgICAgICAgICAgbWF4V2lkdGggOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlIDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZycpLFxyXG4gICAgICAgICAgICBpbWFnZURldGFpbDFNYXhXaWR0aCA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczEtbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlRGV0YWlsMSA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsMScpLFxyXG4gICAgICAgICAgICBpbWFnZURldGFpbDJNYXhXaWR0aCA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczItbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlRGV0YWlsMiA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsMicpLFxyXG4gICAgICAgICAgICBhdXRob3IgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItYXV0aG9yJyksXHJcbiAgICAgICAgICAgIHllYXIgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXIteWVhcicpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBvc3RlckJpZyhwb3N0ZXIgPSBudWxsKXtcclxuICAgICAgICBpZiAocG9zdGVyPT09bnVsbClcclxuICAgICAgICAgICAgcG9zdGVyID0gdGhpcy5nZXREYXRhT2JqZWN0KHRoaXMucG9zdGVyc1RyaWdnZXJzW3RoaXMucG9zdGVySWRdKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNYWluSW1hZ2UocG9zdGVyLmltYWdlLCBwb3N0ZXIubWF4V2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGFpbHNJbWFnZSh0aGlzLnBvc3RlckJpZ0ltYWdlRGV0YWlsczAsIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMwLCBwb3N0ZXIuaW1hZ2UsIHBvc3Rlci5tYXhXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRhaWxzSW1hZ2UodGhpcy5wb3N0ZXJCaWdJbWFnZURldGFpbHMxLCB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMSwgcG9zdGVyLmltYWdlRGV0YWlsMSwgcG9zdGVyLmltYWdlRGV0YWlsMU1heFdpZHRoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGFpbHNJbWFnZSh0aGlzLnBvc3RlckJpZ0ltYWdlRGV0YWlsczIsIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMyLCBwb3N0ZXIuaW1hZ2VEZXRhaWwyLCBwb3N0ZXIuaW1hZ2VEZXRhaWwyTWF4V2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ1RpdGxlLnRleHRDb250ZW50ID0gcG9zdGVyLnRpdGxlO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0Kycvc2hvdy1wb3N0ZXIvJytwb3N0ZXIuaWQrJy8nK3Bvc3Rlci50aXRsZSsnLScrcG9zdGVyLmF1dGhvcisnI3Bvc3RlcnMnO1xyXG4gICAgICAgIHVybCA9IGVuY29kZVVSSSh1cmwpO1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nK3VybCsnO3NyYz1zZGtwcmVwYXJzZSc7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rU2hhcmUucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnU3VidGl0bGUudGV4dENvbnRlbnQgPSBwb3N0ZXIuYXV0aG9yICsgKHBvc3Rlci55ZWFyID09PSAnJyA/ICcnIDogJyAvICcgKyBwb3N0ZXIueWVhcik7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwb3N0ZXIuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQb3N0ZXJCaWcoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZy5jbGFzc0xpc3QucmVtb3ZlKCdwb3N0ZXItYmlnLS1pcy12aXNpYmxlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzc0hhbmRsZXIoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgLy9lc2NhcGUga2V5XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3N0ZXJCaWcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIC8vYXJyb3cgcmlnaHQga2V5XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFBvc3RlckJpZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykgLy9hcnJvdyBsZWZ0IGtleVxyXG4gICAgICAgICAgICB0aGlzLnByZXZQb3N0ZXJCaWcoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RlckJpZzsiLCJpbXBvcnQgd2F5cG9pbnRzIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy93YXlwb2ludHMvbGliL25vZnJhbWV3b3JrLndheXBvaW50cyc7XHJcblxyXG5jbGFzcyBSZXZlYWxPblNjcm9sbHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvUmV2ZWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3Rlcl9faXRlbScpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25VcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cycpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVJbml0aWFsbHkoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVdheXBvaW50cygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlV2F5cG9pbnRzSGVhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUluaXRpYWxseSgpe1xyXG4gICAgICAgIHRoaXMuaXRlbXNUb1JldmVhbC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsLWl0ZW1cIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXYXlwb2ludHMoKXtcclxuICAgICAgICB0aGlzLml0ZW1zVG9SZXZlYWwuZm9yRWFjaCgoaXRlbVRvUmV2ZWFsKT0+e1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogaXRlbVRvUmV2ZWFsLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVG9SZXZlYWwuY2xhc3NMaXN0LmFkZCgncmV2ZWFsLWl0ZW0tLWlzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiODUlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVdheXBvaW50c0hlYWRlcigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhhdC5zZWN0aW9uVXMsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLWlzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2Zmc2V0OiBcIjIwJVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZlYWxPblNjcm9sbDsiLCJpbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5cclxubmV3IFNtb290aFNjcm9sbCgnLm5hdiBhW2hyZWYqPVwiI1wiXScsIHtcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzcGVlZEFzRHVyYXRpb246IHRydWUsXHJcbiAgICBvZmZzZXQ6IDc1XHJcbn0pO1xyXG4iLCJpbXBvcnQgd2F5cG9pbnRzIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy93YXlwb2ludHMvbGliL25vZnJhbWV3b3JrLndheXBvaW50cyc7XHJcblxyXG5jbGFzcyBTdGlja3lIZWFkZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGF6eWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eWxvYWQnKTtcclxuICAgICAgICB0aGlzLmhlcm9UZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXJnZS1oZXJvX190ZXh0LWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcclxuICAgICAgICB0aGlzLm5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdiBsaScpO1xyXG4gICAgICAgIHRoaXMubmF2TGlua1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWxpbmsnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VTZWN0aW9uV2F5cG9pbnRzKCk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZnJlc2hXYXlwb2ludHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoV2F5cG9pbnRzKCl7XHJcbiAgICAgICAgdGhpcy5sYXp5bG9hZC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIFdheXBvaW50LnJlZnJlc2hBbGwoKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlU2VjdGlvbldheXBvaW50cygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhhdC5oZXJvVGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubmF2TGlua3MuZm9yRWFjaCgobmF2TGluayk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm5hdkxpbmtTdGFydC5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IFwiNzAlXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG5cclxuICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5uYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1uYXYtbGluaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmF2TGluayA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLW5hdi1saW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiMTglXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYXZMaW5rID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LWxpbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1uYXYtbGluay1wcmV2JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LWxpbmstcHJldicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5uYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZMaW5rKS5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiLTEwJVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5SGVhZGVyOyIsIi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNyY1NldChpbWFnZVNyYywgbWF4SW1hZ2VXaWR0aCl7XHJcbiAgICBsZXQgZGltZW5zaW9ucyA9IFs1MDAsIDgwMCwgMTIwMCwgMTkwMCwgMzYwMF07XHJcbiAgICBsZXQgc3Jjc2V0ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKGRpbWVuc2lvbnNbaV0gPD0gbWF4SW1hZ2VXaWR0aClcclxuICAgICAgICAgICAgc3Jjc2V0ICs9IGltYWdlU3JjICsgXCItXCIgKyBkaW1lbnNpb25zW2ldICsgXCIuanBnIFwiICsgZGltZW5zaW9uc1tpXSArIFwidywgXCI7XHJcblxyXG4gICAgc3Jjc2V0ID0gc3Jjc2V0LnN1YnN0cmluZygwLCBzcmNzZXQubGVuZ3RoIC0gMik7XHJcbiAgICByZXR1cm4gc3Jjc2V0O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==