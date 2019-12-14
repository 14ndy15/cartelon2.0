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
      news.querySelector('.info-block > div').setAttribute('id', encodeURI(newsTitle));
      news.querySelector('.news__image img').setAttribute('src', newsImage + "-20.jpg");
      news.querySelector('.news__image img').setAttribute('data-srcset', newsImageSrcSet);
      news.querySelector('.news__text .info-block__description > a').setAttribute('href', newsLink);
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
  speedAsDuration: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fbG9hZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fbG9hZE5ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX2xvYWRQb3N0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19sb2FkVmlkZW9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19tYWlsU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19tb2JpbGVNZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19wb3N0ZXJCaWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX3JldmVhbE9uU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL19zbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvX3N0aWNreUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9fdXRpbHMuanMiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsIlN0aWNreUhlYWRlciIsIkNhcm91c2VsIiwiUmV2ZWFsT25TY3JvbGwiLCJQb3N0ZXJCaWciLCJFdmVudCIsIkxvYWROZXdzIiwiTG9hZFBvc3RlcnMiLCJMb2FkRXZlbnRzIiwiTG9hZFZpZGVvcyIsIk1haWxTdWJzY3JpcHRpb24iLCJpbml0RmxpY2tpdHlMYXJnZUhlcm8iLCJGbGlja2l0eSIsImNlbGxBbGlnbiIsImNvbnRhaW4iLCJwcmV2TmV4dEJ1dHRvbnMiLCJwYWdlRG90cyIsImF1dG9QbGF5Iiwid3JhcEFyb3VuZCIsInBhdXNlQXV0b1BsYXlPbkhvdmVyIiwiYnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZW50c0V4cGFuZCIsImV2ZW50cyIsImV2ZW50Rmlyc3QiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnRGaXJzdEJ1dHRvbiIsImNsb3NlRXZlbnRzRXhwYW5kIiwiZXZlbnQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4cGFuZEV2ZW50U2hvdyIsImJpbmQiLCJjbG9zZUV2ZW50RXhwYW5kIiwiZXhwYW5kRXZlbnRIaWRlQWxsIiwiZXZlbnRFeHBhbmQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJfZXZlbnQiLCJldmVudElkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRFeHBhbmRJZCIsImFkZCIsIkdhbGxlcnkiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsImxpc3RlbmVyIiwiU3dpcGVMaXN0ZW5lciIsIml0ZW1zIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsInByZXYiLCJuZXh0IiwiZSIsImRpcmVjdGlvbnMiLCJkZXRhaWwiLCJsZWZ0IiwicmlnaHQiLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsInBhcmVudCIsImdyaWRFdmVudHMiLCJidXR0b25Nb3JlRXZlbnRzIiwiYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIiLCJzcGlubmVyV3JhcHBlciIsImV2ZW50UHJvdG90eXBlIiwiZXZlbnRFeHBhbmRQcm90b3R5cGUiLCJjdXJyZW50SW5kZXgiLCJhbW91bnRUb0ZldGNoIiwidXJsVG9GZXRjaCIsImdldERhdGEiLCJuYW1lIiwiZGF0ZSIsInBsYWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJncmlkRXZlbnRFeHBhbmQiLCJjbG9uZU5vZGUiLCJjbG9zZUJ0biIsImNhcm91c2VsIiwiY2Fyb3VzZWxDZWxsIiwidGl0bGUiLCJzdWJ0aXRsZSIsInRleHQiLCJjb2xsYXBzZUxpbmsiLCJpbm5lckhUTUwiLCJpbWFnZUNhcm91c2VsQ2VsbCIsInNyY3NldCIsIm1ha2VTcmNTZXQiLCJtYXhXaWR0aCIsImkiLCJjYXJvdXNlbENlbGxDbG9uZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiZXZlbnRpbWFnZSIsImV2ZW50TWF4SW1hZ2VXaWR0aCIsImxhc3QiLCJpbWFnZW4iLCJkZXNjcmlwdGlvblRleHQiLCJ0b2dnbGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJwb3MiLCJncmlkRXZlbnQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZGF0ZVRpbWUiLCJpbWFnZU1heFdpZHRoIiwiZXZlbnRNb3JlIiwibW9yZSIsImNyZWF0ZUV2ZW50IiwiY3JlYXRlRXZlbnRFeHBhbmQiLCJzaG93T3JIaWRlU3Bpbm5lciIsImNhdGNoIiwiZXJyb3IiLCJidXR0b25Nb3JlTmV3cyIsImJ1dHRvbk1vcmVOZXdzV3JhcHBlciIsIm5ld3NQcm90b3R5cGUiLCJuZXdzRGF0YSIsIm5ld3NJZCIsImlkIiwibmV3c1RpdGxlIiwibmV3c0RhdGUiLCJuZXdzVGV4dCIsIm5ld3NJbWFnZSIsIm5ld3NGaWxlIiwiZmlsZSIsIm5ld3NNYXhXaWR0aEltYWdlIiwibmV3cyIsIm5ld3NJbWFnZVNyY1NldCIsIm5ld3NMaW5rIiwiZW5jb2RlVVJJIiwidGV4dENvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZU5ld3MiLCJwb3N0ZXJCdXR0b25XcmFwcGVyIiwiYnV0dG9uTW9yZVBvc3RlcnMiLCJjb250YWluZXJJbml0aWFsIiwiY29udGFpbmVyU2VhcmNoIiwiZmlsdGVyRm9ybSIsImZpbHRlcklucHV0IiwiZmlsdGVyQnV0dG9uIiwiZmlsdGVyUmVzZXQiLCJwb3N0ZXJFdmVudFByb3RvdHlwZSIsInBvc3RlclByb3RvdHlwZSIsImZldGNoTW9yZVBvc3RlciIsImFtb3VudE9mRXhpc3RpbmdQb3N0ZXJzIiwiZ2V0TW9yZVBvc3RlckV2ZW50cyIsImdldFNlYXJjaFBvc3RlciIsInJlc2V0U2VhcmNoIiwicG9zdGVyRXZlbnREYXRhIiwicG9zdGVyRXZlbnROYW1lIiwicG9zdGVyRXZlbnRJbWFnZSIsInBvc3RlckV2ZW50TWF4V2lkdGgiLCJwb3N0ZXJFdmVudCIsInBvc3RlckV2ZW50SW1nIiwicG9zdGVyRXZlbnRJbWFnZVNyY1NldCIsInBvc3RlckRhdGEiLCJwb3N0ZXJCaWdJbmRleCIsInBvc3RlciIsInBvc3RlckxpbmsiLCJwb3N0ZXJJbWFnZSIsInBvc3RlckF1dGhvciIsInBvc3RlckltYWdlU3JjU2V0IiwidXJsIiwiYXV0aG9yIiwiaW1hZ2VEZXRhaWwxIiwiaW1hZ2VEZXRhaWwxTWF4V2lkdGgiLCJpbWFnZURldGFpbDIiLCJpbWFnZURldGFpbDJNYXhXaWR0aCIsInllYXIiLCJ2YWx1ZSIsImNoZWNrVmFsaWRpdHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJwb3N0ZXJzIiwiZXZlbnROYW1lIiwiY3JlYXRlUG9zdGVyIiwidGV4dE5vUmVzdWx0IiwicG9zdGVyc0V2ZW50cyIsImNyZWF0ZVBvc3RlckV2ZW50IiwicG9zdGVyRXZlbnRQb3N0ZXJzIiwiYnV0dG9uTW9yZVZpZGVvcyIsImJ1dHRvbk1vcmVWaWRlb3NXcmFwcGVyIiwidmlkZW9Qcm90b3R5cGUiLCJ2aWRlbyIsImlmcmFtZSIsImRhdGFfc3JjIiwidG9nZ2xlQ2xhc3MiLCJoaWRlIiwidmlkZW9VcmwiLCJ2aWRlb01vcmUiLCJjcmVhdGVWaWRlbyIsImZvcm0iLCJlbWFpbCIsInN1YnNjcmlwdGlvbk1lc3NhZ2UiLCJzZW5kIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicG9zdCIsInNlcnZlckNvZGUiLCJzZXRUaW1lb3V0IiwiaW5uZXJUZXh0IiwibWVudUljb24iLCJtZW51Q29udGVudCIsInNpdGVIZWFkZXIiLCJ0b2dnbGVUaGVNZW51IiwicG9zdGVyc1RyaWdnZXJzIiwicG9zdGVyc0luaXRpYWxDb250YWluZXIiLCJwb3N0ZXJzU2VhcmNoQ29udGFpbmVyIiwicG9zdGVyQmlnIiwicG9zdGVyQmlnSW1hZ2UiLCJwb3N0ZXJCaWdMaW5rRGV0YWlsczAiLCJwb3N0ZXJCaWdJbWFnZURldGFpbHMwIiwicG9zdGVyQmlnTGlua0RldGFpbHMxIiwicG9zdGVyQmlnSW1hZ2VEZXRhaWxzMSIsInBvc3RlckJpZ0xpbmtEZXRhaWxzMiIsInBvc3RlckJpZ0ltYWdlRGV0YWlsczIiLCJwb3N0ZXJCaWdUaXRsZSIsInBvc3RlckJpZ1N1YnRpdGxlIiwicG9zdGVyQmlnTGlua1NoYXJlIiwicG9zdGVyQmlnRGVzY3JpcHRpb24iLCJwb3N0ZXJCdG5OZXh0IiwicG9zdGVyQnRuUHJldiIsInBvc3RlckNsb3NlIiwicG9zdGVySWQiLCJjaGVja09wZW5Qb3N0ZXJGcm9tVXJsIiwiZG9jdW1lbnRVUkwiLCJVUkwiLCJpbmRleE9mIiwicmVxdWVzdFVybCIsInN1YnN0cmluZyIsInBhcnNlSW50Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJyZWZyZXNoUG9zdGVyQmlnIiwicG9zdGVyVHJpZ2dlciIsIm9wZW5Qb3N0ZXJCaWciLCJldmVudHNQb3N0ZXJUcmlnZ2VyIiwibmV4dFBvc3RlckJpZyIsInByZXZQb3N0ZXJCaWciLCJjbG9zZVBvc3RlckJpZyIsInNob3dEZXRhaWxzIiwia2V5UHJlc3NIYW5kbGVyIiwiY3VycmVudFRhcmdldCIsImltZ0RldGFpbHMiLCJpbWdEZXRhaWxzUG9zdGVyTWF4V2lkdGgiLCJjaGFuZ2VNYWluSW1hZ2UiLCJwb3N0ZXJJbWciLCJwb3N0ZXJNYXhXaWR0aCIsInNlbGVjdG9ySW1hZ2UiLCJzZWxlY3RvckxpbmsiLCJzcmNTZXQiLCJlbGVtZW50IiwiZ2V0RGF0YU9iamVjdCIsImNoYW5nZURldGFpbHNJbWFnZSIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0Iiwia2V5Q29kZSIsIml0ZW1zVG9SZXZlYWwiLCJoZWFkZXIiLCJzZWN0aW9uVXMiLCJoaWRlSW5pdGlhbGx5IiwiY3JlYXRlV2F5cG9pbnRzIiwiY3JlYXRlV2F5cG9pbnRzSGVhZGVyIiwiaXRlbVRvUmV2ZWFsIiwiV2F5cG9pbnQiLCJoYW5kbGVyIiwib2Zmc2V0IiwiU21vb3RoU2Nyb2xsIiwic3BlZWQiLCJzcGVlZEFzRHVyYXRpb24iLCJsYXp5bG9hZCIsImhlcm9UZXh0Q29udGVudCIsInNlY3Rpb25zIiwibmF2TGlua3MiLCJuYXZMaW5rU3RhcnQiLCJjcmVhdGVQYWdlU2VjdGlvbldheXBvaW50cyIsInJlZnJlc2hXYXlwb2ludHMiLCJlbGVtIiwicmVmcmVzaEFsbCIsImRpcmVjdGlvbiIsIm5hdkxpbmsiLCJzZWN0aW9uIiwiaGFzQXR0cmlidXRlIiwiaW1hZ2VTcmMiLCJtYXhJbWFnZVdpZHRoIiwiZGltZW5zaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsMkRBQUo7QUFDQSxJQUFJQyw2REFBSjtBQUNBLElBQUlDLHlEQUFKO0FBQ0EsSUFBSUMsK0RBQUo7QUFDQSxJQUFJQywwREFBSjtBQUNBLElBQUlDLHNEQUFKO0FBQ0EsSUFBSUMseURBQUo7QUFDQSxJQUFJQyw2REFBSjtBQUNBLElBQUlDLDREQUFKO0FBQ0EsSUFBSUMsNERBQUo7QUFDQSxJQUFJQyxrRUFBSixH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LEVBQW9CdEosTUFBTSxDQUFDN0IsTUFBUCxHQUFnQixDQUFwQyxDQUFUO0FBQ0EsU0FBTzZCLE1BQVA7QUFDSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi8uLi9jc3MvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICdsYXp5c2l6ZXMnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9fc21vb3RoU2Nyb2xsJztcclxuXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9fbW9iaWxlTWVudSc7XHJcbmltcG9ydCBSZXZlYWxPblNjcm9sbCBmcm9tICcuL21vZHVsZXMvX3JldmVhbE9uU2Nyb2xsJztcclxuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tICcuL21vZHVsZXMvX3N0aWNreUhlYWRlcic7XHJcbmltcG9ydCBQb3N0ZXJCaWcgZnJvbSAnLi9tb2R1bGVzL19wb3N0ZXJCaWcnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9tb2R1bGVzL19jYXJvdXNlbCc7XHJcbmltcG9ydCBFdmVudCBmcm9tICcuL21vZHVsZXMvX2V2ZW50JztcclxuXHJcbmltcG9ydCBMb2FkTmV3cyBmcm9tICcuL21vZHVsZXMvX2xvYWROZXdzJztcclxuaW1wb3J0IExvYWRQb3N0ZXJzIGZyb20gJy4vbW9kdWxlcy9fbG9hZFBvc3RlcnMnO1xyXG5pbXBvcnQgTG9hZEV2ZW50cyBmcm9tICcuL21vZHVsZXMvX2xvYWRFdmVudHMnO1xyXG5pbXBvcnQgTG9hZFZpZGVvcyBmcm9tICcuL21vZHVsZXMvX2xvYWRWaWRlb3MnO1xyXG5pbXBvcnQgTWFpbFN1YnNjcmlwdGlvbiBmcm9tICcuL21vZHVsZXMvX21haWxTdWJzY3JpcHRpb24nO1xyXG5cclxuXHJcbm5ldyBNb2JpbGVNZW51KCk7XHJcbm5ldyBTdGlja3lIZWFkZXIoKTtcclxubmV3IENhcm91c2VsKCk7XHJcbm5ldyBSZXZlYWxPblNjcm9sbCgpO1xyXG5uZXcgUG9zdGVyQmlnKCk7XHJcbm5ldyBFdmVudCgpO1xyXG5uZXcgTG9hZE5ld3MoKTtcclxubmV3IExvYWRQb3N0ZXJzKCk7XHJcbm5ldyBMb2FkRXZlbnRzKCk7XHJcbm5ldyBMb2FkVmlkZW9zKCk7XHJcbm5ldyBNYWlsU3Vic2NyaXB0aW9uKCk7XHJcbiIsImltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XHJcblxyXG5jbGFzcyBDYXJvdXNlbHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RmxpY2tpdHlMYXJnZUhlcm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmxpY2tpdHlMYXJnZUhlcm8oKXtcclxuICAgICAgICBuZXcgRmxpY2tpdHkoJy5jYXJvdXNlbCcse1xyXG4gICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iLCJpbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi9fZ2FsbGVyeVwiO1xyXG5cclxuY2xhc3MgRXZlbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLWV2ZW50XScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50X19leHBhbmQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudCcpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudF8wJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudEZpcnN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50X2J1dHRvbl9fZmlyc3QtZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50X19leHBhbmRfX2Nsb3NlLCAuYnRuX19jb2xsYXBzZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXhwYW5kRXZlbnRTaG93LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnRzRXhwYW5kLmZvckVhY2goKGNsb3NlRXZlbnRFeHBhbmQpPT57XHJcbiAgICAgICAgICAgIGNsb3NlRXZlbnRFeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV4cGFuZEV2ZW50SGlkZUFsbC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRFdmVudEhpZGVBbGwoKXtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHNFeHBhbmQuZm9yRWFjaCgoZXZlbnRFeHBhbmQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2V2ZW50X19leHBhbmQtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgZXZlbnRFeHBhbmQuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLXZpc2libGUtLWZpcnN0LWV2ZW50Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKCdldmVudC0tdmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50Rmlyc3QuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRFdmVudFNob3coX2V2ZW50KXtcclxuICAgICAgICB0aGlzLmV4cGFuZEV2ZW50SGlkZUFsbCgpO1xyXG4gICAgICAgIGxldCBldmVudElkID0gX2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQnKTtcclxuICAgICAgICBsZXQgZXZlbnRFeHBhbmRJZCA9IF9ldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWV4cGFuZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXZlbnRJZCk7XHJcbiAgICAgICAgbGV0IGV2ZW50RXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihldmVudEV4cGFuZElkKTtcclxuICAgICAgICBcclxuICAgICAgICBldmVudC5jbGFzc0xpc3QuYWRkKCdldmVudC0tdmlzaWJsZScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRFeHBhbmRJZCA9PT0gJyNldmVudF9leHBhbmRfMCcpXHJcbiAgICAgICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V2ZW50X19leHBhbmQtLXZpc2libGVfX2ZpcnN0LWV2ZW50Jyk7XHJcblxyXG4gICAgICAgIGV2ZW50RXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V2ZW50X19leHBhbmQtLXZpc2libGUnKTtcclxuICAgICAgICBuZXcgR2FsbGVyeShldmVudEV4cGFuZElkKycgLmV2ZW50X19leHBhbmRfX2Nhcm91c2VsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudDsiLCJpbXBvcnQgU3dpcGVMaXN0ZW5lciBmcm9tICdzd2lwZS1saXN0ZW5lcic7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBTd2lwZUxpc3RlbmVyKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcisnIC5nYWxsZXJ5X19pdGVtJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiaW1wb3J0IEV2ZW50IGZyb20gJy4vX2V2ZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7bWFrZVNyY1NldH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgTG9hZEV2ZW50c3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50cy1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkRXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVudCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZUV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZUV2ZW50cycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlci1sb2FkTW9yZUV2ZW50cycpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50c19fbG9hZF9fd3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50UHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50X3Byb3RvdHlwZSAuZXZlbnQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50RXhwYW5kUHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50X3Byb3RvdHlwZSAgLmdyaWQtZXZlbnRfX2V4cGFuZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuYW1vdW50VG9GZXRjaCA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMudXJsVG9GZXRjaCA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICAnL2V2ZW50cy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvZXZlbnRzLycrKHRoaXMuY3VycmVudEluZGV4KSsnLycrdGhpcy5hbW91bnRUb0ZldGNoO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXZlbnRFeHBhbmQobmFtZSwgZGF0ZSwgcGxhY2UsIGRlc2NyaXB0aW9uLCBpbWFnZXMsIGluZGV4KXtcclxuXHJcbiAgICAgICAgbGV0IGdyaWRFdmVudEV4cGFuZCA9IHRoaXMuZXZlbnRFeHBhbmRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgZXZlbnRFeHBhbmQgPSBncmlkRXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignLmV2ZW50X19leHBhbmQnKTtcclxuICAgICAgICBsZXQgY2xvc2VCdG4gPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdidG5fX2Nsb3NlJyk7XHJcbiAgICAgICAgbGV0IGNhcm91c2VsID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignLmV2ZW50X19leHBhbmRfX2Nhcm91c2VsJyk7XHJcblxyXG4gICAgICAgIGxldCBjYXJvdXNlbENlbGwgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCcuZXZlbnRfX2V4cGFuZF9fY2Fyb3VzZWxfX2NlbGwnKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcignaDMnKTtcclxuICAgICAgICBsZXQgc3VidGl0bGUgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdoNCcpO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZXZlbnRFeHBhbmQucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIGxldCBjb2xsYXBzZUxpbmsgPSBldmVudEV4cGFuZC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblxyXG4gICAgICAgIGV2ZW50RXhwYW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXZlbnRfZXhwYW5kXycraW5kZXgpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgc3VidGl0bGUuaW5uZXJIVE1MID0gZGF0ZSsnLCAnK3BsYWNlO1xyXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgY29sbGFwc2VMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZScsICd0cnVlJyk7XHJcbiAgICAgICAgY29sbGFwc2VMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjZXZlbnRfJytpbmRleCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaW1hZ2VDYXJvdXNlbENlbGwgPSBjYXJvdXNlbENlbGwucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICAgIGxldCBzcmNzZXQgPSBtYWtlU3JjU2V0KGltYWdlc1swXS5pbWFnZSwgaW1hZ2VzWzBdLm1heFdpZHRoKTtcclxuICAgICAgICBpbWFnZUNhcm91c2VsQ2VsbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlc1swXSsnLTIwLmpwZycpO1xyXG4gICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnYWx0JywgbmFtZSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcm91c2VsQ2VsbENsb25lID0gY2Fyb3VzZWxDZWxsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGltYWdlQ2Fyb3VzZWxDZWxsID0gY2Fyb3VzZWxDZWxsQ2xvbmUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Jjc2V0ID0gbWFrZVNyY1NldChpbWFnZXNbaV0uaW1hZ2UsIGltYWdlc1tpXS5tYXhXaWR0aCk7XHJcbiAgICAgICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VzW2ldKyctMjAuanBnJyk7XHJcbiAgICAgICAgICAgIGltYWdlQ2Fyb3VzZWxDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgICAgICBpbWFnZUNhcm91c2VsQ2VsbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDZWxsQ2xvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY2Fyb3VzZWxDZWxsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyaWRFdmVudEV4cGFuZDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFdmVudCh0aGF0LCBuYW1lLCBkYXRlLCBwbGFjZSwgZXZlbnRpbWFnZSwgZXZlbnRNYXhJbWFnZVdpZHRoLCBpbmRleCwgbGFzdCl7XHJcblxyXG4gICAgICAgIGxldCBldmVudCA9IHRoaXMuZXZlbnRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VuID0gZXZlbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZXZlbnQucXVlcnlTZWxlY3RvcignaDQnKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25UZXh0ID0gZXZlbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgZXZlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdldmVudF8nK2luZGV4KTtcclxuXHJcbiAgICAgICAgaWYoKGluZGV4IC0gMSkgJSAyID09PSAwKVxyXG4gICAgICAgICAgICBldmVudC5jbGFzc0xpc3QuYWRkKCdncmlkLWV2ZW50X19maXJzdCcpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ldmVudF9fc2Vjb25kJyk7XHJcblxyXG4gICAgICAgICBpZihsYXN0ICYmICgoaW5kZXggLSAxKSAlIDIgPT09IDApKVxyXG4gICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LmFkZCgnZXZlbnQtLWNlbnRlcicpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNyY3NldCA9IG1ha2VTcmNTZXQoZXZlbnRpbWFnZSwgZXZlbnRNYXhJbWFnZVdpZHRoKTtcclxuICAgICAgICBpbWFnZW4uc2V0QXR0cmlidXRlKCdzcmMnLCBldmVudGltYWdlKyctMjAuanBnJyk7XHJcbiAgICAgICAgaW1hZ2VuLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgICAgIGltYWdlbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG5hbWUpO1xyXG5cclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWV4cGFuZCcsJyNldmVudF9leHBhbmRfJytpbmRleCk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudCcsICcjZXZlbnRfJytpbmRleCk7XHJcblxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IGRhdGUrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnIvPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3Ryb25nPkx1Z2FyOiA8L3N0cm9uZz4nKyBwbGFjZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMudXJsVG9GZXRjaClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCB0aGF0LmFtb3VudFRvRmV0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmlkRXZlbnQgPSB0aGF0LmdyaWRFdmVudHNbdGhhdC5ncmlkRXZlbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXZlbnQtLWNlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkYXRhW2tleV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGRhdGFba2V5XS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVRpbWUgPSBkYXRhW2tleV0uZGF0ZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGRhdGFba2V5XS5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlTWF4V2lkdGggPSBkYXRhW2tleV0ubWF4V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZSA9IGRhdGFba2V5XS5wbGFjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGF0YVtrZXldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VzID0gZGF0YVtrZXldLmltYWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50TW9yZSA9IGRhdGFba2V5XS5tb3JlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gdGhhdC5jcmVhdGVFdmVudCh0aGF0LCBuYW1lLCBkYXRlVGltZSwgcGxhY2UsIGltYWdlLCBpbWFnZU1heFdpZHRoLCBpbmRleCwgKHBvcysrID09PSAoZGF0YS5sZW5ndGggLSAxKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRFeHBhbmQgPSB0aGF0LmNyZWF0ZUV2ZW50RXhwYW5kKG5hbWUsIGRhdGVUaW1lLCBwbGFjZSwgZGVzY3JpcHRpb24sIGltYWdlcywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleC0xKSAlIDIgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ldmVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuYXBwZW5kQ2hpbGQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkRXZlbnQuYXBwZW5kQ2hpbGQoZXZlbnRFeHBhbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXJlbnQuYXBwZW5kQ2hpbGQoZ3JpZEV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFldmVudE1vcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmJ1dHRvbk1vcmVFdmVudHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRJbmRleCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnV0dG9uTW9yZUV2ZW50c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL3dhaXRpbmcgZm9yIGRhdGEgYXJyaXZhbFxyXG4gICAgICAgIHRoaXMuc2hvd09ySGlkZVNwaW5uZXIoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkRXZlbnRzOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7bWFrZVNyY1NldH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgTG9hZE5ld3N7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25Nb3JlTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZU5ld3MnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVOZXdzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cmFwcGVyLWxvYWRNb3JlTmV3cycpO1xyXG4gICAgICAgIHRoaXMubmV3c1Byb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzX3Byb3RvdHlwZSA+IGRpdicpO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c19fbG9hZF9fd3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuYW1vdW50VG9GZXRjaCA9IDI7XHJcbiAgICAgICAgdGhpcy51cmxUb0ZldGNoID0gIHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvbmV3cy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvbmV3cy8nK3RoaXMuY3VycmVudEluZGV4KycvJyt0aGlzLmFtb3VudFRvRmV0Y2g7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25Nb3JlTmV3cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdzKG5ld3NEYXRhKXtcclxuICAgICAgICBsZXQgbmV3c0lkID0gbmV3c0RhdGEuaWQ7XHJcbiAgICAgICAgbGV0IG5ld3NUaXRsZSA9IG5ld3NEYXRhLnRpdGxlO1xyXG4gICAgICAgIGxldCBuZXdzRGF0ZSA9IG5ld3NEYXRhLmRhdGU7XHJcbiAgICAgICAgbGV0IG5ld3NUZXh0ID0gbmV3c0RhdGEudGV4dDtcclxuICAgICAgICBsZXQgbmV3c0ltYWdlID0gbmV3c0RhdGEuaW1hZ2U7XHJcbiAgICAgICAgbGV0IG5ld3NGaWxlID0gbmV3c0RhdGEuZmlsZTtcclxuICAgICAgICBsZXQgbmV3c01heFdpZHRoSW1hZ2UgPSBuZXdzRGF0YS5tYXhXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IG5ld3MgPSB0aGlzLm5ld3NQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBuZXdzSW1hZ2VTcmNTZXQgPSBtYWtlU3JjU2V0KG5ld3NJbWFnZSwgbmV3c01heFdpZHRoSW1hZ2UpO1xyXG4gICAgICAgIGxldCBuZXdzTGluayA9ICcvc2hvdy1uZXdzLycrbmV3c0lkKycvJytlbmNvZGVVUkkobmV3c1RpdGxlKSsnIycrZW5jb2RlVVJJKG5ld3NUaXRsZSk7XHJcblxyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLmluZm8tYmxvY2sgPiBkaXYnKS5zZXRBdHRyaWJ1dGUoJ2lkJywgZW5jb2RlVVJJKG5ld3NUaXRsZSkpO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX2ltYWdlIGltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgbmV3c0ltYWdlK1wiLTIwLmpwZ1wiKTtcclxuICAgICAgICBuZXdzLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19pbWFnZSBpbWcnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0JywgbmV3c0ltYWdlU3JjU2V0KTtcclxuICAgICAgICBuZXdzLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX190ZXh0IC5pbmZvLWJsb2NrX19kZXNjcmlwdGlvbiA+IGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBuZXdzTGluayk7XHJcbiAgICAgICAgbmV3cy5xdWVyeVNlbGVjdG9yKCcubmV3c19fdGV4dCBoMycpLnRleHRDb250ZW50ID0gbmV3c1RpdGxlO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgaDQnKS50ZXh0Q29udGVudCA9IG5ld3NEYXRlO1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgcCcpLmlubmVySFRNTCA9IG5ld3NUZXh0O1xyXG4gICAgICAgIG5ld3MucXVlcnlTZWxlY3RvcignLm5ld3NfX3RleHQgLmluZm8tYmxvY2tfX2Rlc2NyaXB0aW9uX19saW5rIGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBuZXdzRmlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdzO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBheGlvcy5nZXQodGhpcy51cmxUb0ZldGNoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCB0aGF0LmFtb3VudFRvRmV0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlTmV3c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdzID0gdGhhdC5jcmVhdGVOZXdzKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXJlbnQuYXBwZW5kQ2hpbGQobmV3cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFkYXRhW2tleV0ubW9yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlTmV3c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmJ1dHRvbk1vcmVOZXdzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcbiAgICAgICAgICAgIH0gIFxyXG5cclxuICAgICAgICAgICAgLy9zdG9wIHdhaXRpbmdcclxuICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vd2FpdGluZyBmb3IgZGF0YSBhcnJpdmFsXHJcbiAgICAgICAgdGhpcy5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkTmV3czsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge21ha2VTcmNTZXR9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIExvYWRQb3N0ZXJze1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGVyQnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX2J1dHRvbl9fd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVBvc3RlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZE1vcmVQb3N0ZXJzJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9fc2VhcmNoJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2Zvcm0nKTtcclxuICAgICAgICB0aGlzLmZpbHRlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9faW5wdXQnKTtcclxuICAgICAgICB0aGlzLmZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yZXNldCcpO1xyXG5cclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3RlcnNfX2xvYWRfX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJFdmVudFByb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0ZXJFdmVudF9wcm90b3R5cGUgPiBkaXYnKTtcclxuICAgICAgICB0aGlzLnBvc3RlclByb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0ZXJfcHJvdG90eXBlID4gZGl2Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5hbW91bnRUb0ZldGNoID0gMjtcclxuICAgICAgICB0aGlzLmZldGNoTW9yZVBvc3RlciA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvcG9zdGVycy8nK3RoaXMuYW1vdW50VG9GZXRjaCA6ICcvcG9zdGVycy8nKyh0aGlzLmN1cnJlbnRJbmRleCkrJy8nK3RoaXMuYW1vdW50VG9GZXRjaDtcclxuXHJcbiAgICAgICAgdGhpcy5hbW91bnRPZkV4aXN0aW5nUG9zdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0ZXIgYVtkYXRhLXBvc3Rlci1iaWddJykubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVBvc3RlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldE1vcmVQb3N0ZXJFdmVudHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldFNlYXJjaFBvc3Rlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmZpbHRlclJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXNldFNlYXJjaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3N0ZXJFdmVudChwb3N0ZXJFdmVudERhdGEpe1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVyRXZlbnROYW1lID0gcG9zdGVyRXZlbnREYXRhLm5hbWU7XHJcbiAgICAgICAgbGV0IHBvc3RlckV2ZW50SW1hZ2UgPSBwb3N0ZXJFdmVudERhdGEuaW1hZ2U7XHJcbiAgICAgICAgbGV0IHBvc3RlckV2ZW50TWF4V2lkdGggPSBwb3N0ZXJFdmVudERhdGEubWF4V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCBwb3N0ZXJFdmVudCA9IHRoaXMucG9zdGVyRXZlbnRQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBwb3N0ZXJFdmVudEltZyA9IHBvc3RlckV2ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVyRXZlbnRJbWFnZVNyY1NldCA9IG1ha2VTcmNTZXQocG9zdGVyRXZlbnRJbWFnZSwgcG9zdGVyRXZlbnRNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyRXZlbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRlc2NyaXB0aW9uJywgcG9zdGVyRXZlbnROYW1lKTtcclxuICAgICAgICBwb3N0ZXJFdmVudEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBvc3RlckV2ZW50SW1hZ2UrXCItMjAuanBnXCIpO1xyXG4gICAgICAgIHBvc3RlckV2ZW50SW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBwb3N0ZXJFdmVudEltYWdlU3JjU2V0KTtcclxuICAgICAgICBwb3N0ZXJFdmVudEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBvc3RlckV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3N0ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3N0ZXIocG9zdGVyRXZlbnREYXRhLCBwb3N0ZXJEYXRhLCBwb3N0ZXJCaWdJbmRleCl7XHJcblxyXG4gICAgICAgIGxldCBwb3N0ZXIgPSB0aGlzLnBvc3RlclByb3RvdHlwZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHBvc3RlckxpbmsgPSBwb3N0ZXIucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICAgIGxldCBwb3N0ZXJJbWFnZSA9IHBvc3Rlci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBsZXQgcG9zdGVyQXV0aG9yID0gcG9zdGVyLnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX2l0ZW1fX2F1dGhvcicpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVySW1hZ2VTcmNTZXQgPSBtYWtlU3JjU2V0KHBvc3RlckRhdGEuaW1hZ2UsIHBvc3RlckRhdGEubWF4V2lkdGgpO1xyXG4gICAgICAgIGxldCB1cmwgPSAnIycrcG9zdGVyRGF0YS5pZCsnLScrZW5jb2RlVVJJKHBvc3RlckV2ZW50RGF0YS5uYW1lKSsnLScrZW5jb2RlVVJJKHBvc3RlckRhdGEuYXV0aG9yKTtcclxuXHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pZCcsIHBvc3RlckRhdGEuaWQpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1iaWcnLCBwb3N0ZXJCaWdJbmRleCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLXRpdGxlJywgcG9zdGVyRXZlbnREYXRhLm5hbWUpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWcnLCBwb3N0ZXJEYXRhLmltYWdlKTtcclxuICAgICAgICBwb3N0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5tYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZy1kZXRhaWwxJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDEpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczEtbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDFNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZy1kZXRhaWwyJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDIpO1xyXG4gICAgICAgIHBvc3Rlckxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczItbWF4LXdpZHRoJywgcG9zdGVyRGF0YS5pbWFnZURldGFpbDJNYXhXaWR0aCk7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWF1dGhvcicsIHBvc3RlckRhdGEuYXV0aG9yKTtcclxuICAgICAgICBwb3N0ZXJMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXIteWVhcicsIHBvc3RlckRhdGEueWVhcik7XHJcbiAgICAgICAgcG9zdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWRlc2NyaXB0aW9uJywgcG9zdGVyRGF0YS5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIHBvc3RlckltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9zdGVyRGF0YS5pbWFnZStcIi0yMC5qcGdcIik7XHJcbiAgICAgICAgcG9zdGVySW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIHBvc3RlckltYWdlU3JjU2V0KTtcclxuXHJcbiAgICAgICAgcG9zdGVyQXV0aG9yLnRleHRDb250ZW50ID0gcG9zdGVyRGF0YS5hdXRob3I7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3N0ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlc2V0U2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVySW5pdGlhbC5jbGFzc0xpc3QuYWRkKCdwb3N0ZXItLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3Rlci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci0taGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVTcGlubmVyKCl7XHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWFyY2hQb3N0ZXIoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gJy9zZWFyY2gvJyt0aGlzLmZpbHRlcklucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJJbml0aWFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3Rlci0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckluaXRpYWwuY2xhc3NMaXN0LmFkZCgncG9zdGVyLS1oaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3cmFwcGVyLWhpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJTZWFyY2guY2xhc3NMaXN0LmFkZCgncG9zdGVyLS12aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdGVyX19pdGVtJykuZm9yRWFjaChwb3N0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9zdGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVycyA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3N0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckJpZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zdGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50RGF0YSA9IHtuYW1lOiBwb3N0ZXJzW2tleV0uZXZlbnROYW1lIH0gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckRhdGEgPSBwb3N0ZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVyID0gdGhhdC5jcmVhdGVQb3N0ZXIocG9zdGVyRXZlbnREYXRhLCBwb3N0ZXJEYXRhLCBwb3N0ZXJCaWdJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250YWluZXJTZWFyY2guYXBwZW5kQ2hpbGQocG9zdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlckJpZ0luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0Tm9SZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb1Jlc3VsdC5jbGFzc0xpc3QuYWRkKCdwb3N0ZXJfX3NlYXJjaF9fbm8tcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb1Jlc3VsdC5pbm5lckhUTUwgPSBcIlN1IGImdWFjdXRlO3NxdWVkYSBubyBwcm9kdWpvIHJlc3VsdGFkbywgcHJ1ZWJhIHVzYXIgb3RybyB0ZXJtaW5vcyBkZSBiJnVhY3V0ZTtzcXVlZGEuXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRhaW5lclNlYXJjaC5hcHBlbmRDaGlsZCh0ZXh0Tm9SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3dhaXQgZm9yIGRhdGEgYXJyaXZhbFxyXG4gICAgICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vcmVQb3N0ZXJFdmVudHMoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmZldGNoTW9yZVBvc3RlcilcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3RlcnNFdmVudHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHBvc3RlcnNFdmVudHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3RlcnNFdmVudHMubGVuZ3RoIDwgdGhhdC5hbW91bnRUb0ZldGNoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zdGVyc0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50RGF0YSA9IHBvc3RlcnNFdmVudHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zdGVyRXZlbnQgPSB0aGF0LmNyZWF0ZVBvc3RlckV2ZW50KHBvc3RlckV2ZW50RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250YWluZXJJbml0aWFsLmFwcGVuZENoaWxkKHBvc3RlckV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RlckV2ZW50UG9zdGVycyA9IHBvc3RlckV2ZW50RGF0YS5wb3N0ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBvc3RlckV2ZW50UG9zdGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3N0ZXJEYXRhID0gcG9zdGVyRXZlbnRQb3N0ZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3N0ZXIgPSB0aGF0LmNyZWF0ZVBvc3Rlcihwb3N0ZXJFdmVudERhdGEsIHBvc3RlckRhdGEsIHRoYXQuYW1vdW50T2ZFeGlzdGluZ1Bvc3RlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hbW91bnRPZkV4aXN0aW5nUG9zdGVycysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRhaW5lckluaXRpYWwuYXBwZW5kQ2hpbGQocG9zdGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcG9zdGVyRXZlbnREYXRhLm1vcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGVyQnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLS1oaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggPSBwb3N0ZXJzRXZlbnRzW3Bvc3RlcnNFdmVudHMubGVuZ3RoIC0gMV0uY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnBvc3RlckJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci0taGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGF0LnNob3dPckhpZGVTcGlubmVyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy93YWl0aW5nIGZvciBkYXRhIGFycml2YWxcclxuICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkUG9zdGVyczsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgTG9hZFZpZGVvc3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvcy1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVWaWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZE1vcmVWaWRlb3MnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbk1vcmVWaWRlb3NXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dyYXBwZXItbG9hZE1vcmVWaWRlb3MnKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb1Byb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlb19wcm90b3R5cGUgPiBkaXYnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGlubmVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlb3NfX2xvYWRfX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmFtb3VudFRvRmV0Y2ggPSAyO1xyXG4gICAgICAgIHRoaXMudXJsVG9GZXRjaCA9IHRoaXMuY3VycmVudEluZGV4IDwgMCA/ICcvdmlkZW9zLycrdGhpcy5hbW91bnRUb0ZldGNoIDogJy92aWRlb3MvJysodGhpcy5jdXJyZW50SW5kZXgpKycvJyt0aGlzLmFtb3VudFRvRmV0Y2g7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTW9yZVZpZGVvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWaWRlbyh1cmwpe1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLnZpZGVvUHJvdG90eXBlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsZXQgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhX3NyYyA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvdmlkZW8ucGhwP2hyZWY9XCIrIHVybCArXCImc2hvd190ZXh0PTAmd2lkdGg9NTYwXCI7XHJcblxyXG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgZGF0YV9zcmMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmlkZW87XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09ySGlkZVNwaW5uZXIoKXtcclxuICAgICAgICB0aGlzLnNwaW5uZXJXcmFwcGVyLnRvZ2dsZUNsYXNzKCdsb2FkX19hbmltYXRpb25fX3dyYXBwZXItLWlzLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBheGlvcy5nZXQodGhpcy51cmxUb0ZldGNoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA8IHRoYXQuYW1vdW50VG9GZXRjaClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlb1VybCA9IGRhdGFba2V5XS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlb01vcmUgPSBkYXRhW2tleV0ubW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWRlbyA9IHRoYXQuY3JlYXRlVmlkZW8odmlkZW9VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhcmVudFswXS5hcHBlbmRDaGlsZCh2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdmlkZW9Nb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudEluZGV4ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmN1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRJbmRleCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXR0b25Nb3JlVmlkZW9zV3JhcHBlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5zaG93T3JIaWRlU3Bpbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dPckhpZGVTcGlubmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZFZpZGVvczsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgTWFpbFN1YnNjcmlwdGlvbntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3N1YnNjcmlwdGlvbl9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm1fX2l0ZW1fX2VtYWlsJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm1fX2l0ZW1fX3N1Ym1pdCcpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3N1YnNjcmlwdGlvbl9fbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZW5kLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBsZXQgZW1haWwgPSB0aGlzLmVtYWlsLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL21haWwnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcnZlckNvZGUgPSByZXNwb25zZS5kYXRhLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlckNvZGUgPT09ICdzdWNjZXNzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmZvcm0uY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19zdWJzY3JpcHRpb25fX2Zvcm0tLW5vLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdWJzY3JpcHRpb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fc3Vic2NyaXB0aW9uX19tZXNzYWdlLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIZW1vcyByZWNpYmlkbyBzdSBkaXJlY2NpJm9hY3V0ZTtuIGRlIGNvcnJlbyE8YnI+UHJvbnRvIGxlIGVudmlhcmVtb3MgbnVlc3RybyBib2xldCZpYWN1dGU7bi5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzNTApOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZm9ybS5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3N1YnNjcmlwdGlvbl9fZm9ybS0tbm8tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3N1YnNjcmlwdGlvbl9fbWVzc2FnZS0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIYSBvY3VycmlkbyB1biBlcnJvciEgSW50ZW50YWxvIGRlIG51ZXZvIG3DoXMgdGFyZGUuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fc3Vic2NyaXB0aW9uX19mb3JtLS1uby12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN1YnNjcmlwdGlvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19zdWJzY3JpcHRpb25fX21lc3NhZ2UtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaXB0aW9uTWVzc2FnZS5pbm5lclRleHQgPSBcIiFIYSBvY3VycmlkbyB1biBlcnJvciEgUHJ1ZWJhIGRlIG51ZXZvIG3DoXMgdGFyZGUuXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxTdWJzY3JpcHRpb247IiwiY2xhc3MgTW9iaWxlTWVudXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5tZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtaWNvbicpO1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLnNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpbmsgdGhlIGV2ZW50cyB3aXRoIHRoZSBmdW5jdGlvbnNcclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVRoZU1lbnUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGhlTWVudSgpe1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWNvbnRlbnQtLWlzLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLnNpdGVIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1pcy1leHBhbmRlZCcpO1xyXG4gICAgICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWljb24tLWNsb3NlLXgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge21ha2VTcmNTZXR9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIFBvc3RlckJpZ3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdGVyLS12aXNpYmxlIGFbZGF0YS1wb3N0ZXItYmlnXScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlcnNJbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1NlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXJfX3NlYXJjaCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19pbWFnZScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMScpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19fbGlua19fMicpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnSW1hZ2VEZXRhaWxzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtX19pbWFnZV9fMicpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3Rlci1iaWdfX2Rlc2NyaXB0aW9uX190aXRsZScpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fZGVzY3JpcHRpb25fX3N1YnRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rU2hhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fZGVzY3JpcHRpb25fX3NoYXJlJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19kZXNjcmlwdGlvbl9fdGV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGVyLWJpZ19fbmV4dCcpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19wcmV2Jyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0ZXItYmlnX19jbG9zZScpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlcklkID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmNoZWNrT3BlblBvc3RlckZyb21VcmwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja09wZW5Qb3N0ZXJGcm9tVXJsKCl7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50VVJMID0gZG9jdW1lbnQuVVJMO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnRVUkwuaW5kZXhPZignc2hvdy1wb3N0ZXIvJykgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gZG9jdW1lbnRVUkwuc3Vic3RyaW5nKGRvY3VtZW50VVJMLmluZGV4T2YoJ3Nob3ctcG9zdGVyLycpKzEyKTtcclxuICAgICAgICBsZXQgcG9zdGVySWQgPSByZXF1ZXN0VXJsLnN1YnN0cmluZygwLCByZXF1ZXN0VXJsLmluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgcG9zdGVySWQgPSBwYXJzZUludChwb3N0ZXJJZCk7XHJcblxyXG4gICAgICAgIGlmIChwb3N0ZXJJZCA8IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICcvZ2V0X3Bvc3Rlci8nK3Bvc3RlcklkO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3RlciA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB0aGF0LnBvc3RlckJpZy5jbGFzc0xpc3QuYWRkKCdwb3N0ZXItYmlnLS1pcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICAgIHRoYXQucmVmcmVzaFBvc3RlckJpZyhwb3N0ZXIpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBldmVudHNQb3N0ZXJUcmlnZ2VyKCkge1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1RyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3Rlci0tdmlzaWJsZSBhW2RhdGEtcG9zdGVyLWJpZ10nKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMuZm9yRWFjaChwb3N0ZXJUcmlnZ2VyID0+IHtcclxuICAgICAgICAgICAgcG9zdGVyVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblBvc3RlckJpZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1RyaWdnZXJzLmZvckVhY2gocG9zdGVyVHJpZ2dlciA9PiB7XHJcbiAgICAgICAgICAgIHBvc3RlclRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Qb3N0ZXJCaWcuYmluZCh0aGlzKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzSW5pdGlhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLmV2ZW50c1Bvc3RlclRyaWdnZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJzU2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIHRoaXMuZXZlbnRzUG9zdGVyVHJpZ2dlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBvc3RlcnNJbml0aWFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVSZW1vdmVkJywgdGhpcy5ldmVudHNQb3N0ZXJUcmlnZ2VyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyc1NlYXJjaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIHRoaXMuZXZlbnRzUG9zdGVyVHJpZ2dlci5iaW5kKHRoaXMpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucG9zdGVyQnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dFBvc3RlckJpZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCdG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2UG9zdGVyQmlnLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvc3RlckJpZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rRGV0YWlsczAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dEZXRhaWxzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93RGV0YWlscy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0RldGFpbHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlQcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvc3RlckJpZyhldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCdG5QcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuICAgICAgICBsZXQgcG9zdGVySWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItYmlnJyk7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJJZCA9IHBhcnNlSW50KHBvc3RlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnRuUHJldi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09IHRoaXMucG9zdGVyc1RyaWdnZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMucG9zdGVyQnRuTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWcuY2xhc3NMaXN0LmFkZCgncG9zdGVyLWJpZy0taXMtdmlzaWJsZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUG9zdGVyQmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldlBvc3RlckJpZygpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvc3RlcklkIC0gMSA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJJZC0tOyAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJCdG5OZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUG9zdGVyQmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc3RlcklkID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0blByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQb3N0ZXJCaWcoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3N0ZXJJZCArIDEgPCAgdGhpcy5wb3N0ZXJzVHJpZ2dlcnMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJJZCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0blByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hQb3N0ZXJCaWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVySWQgPT09ICB0aGlzLnBvc3RlcnNUcmlnZ2Vycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RlckJ0bk5leHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZXRhaWxzKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgaW1nRGV0YWlscyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWltZycpO1xyXG4gICAgICAgIGxldCBpbWdEZXRhaWxzUG9zdGVyTWF4V2lkdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctbWF4LXdpZHRoJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlTWFpbkltYWdlKGltZ0RldGFpbHMsIGltZ0RldGFpbHNQb3N0ZXJNYXhXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTWFpbkltYWdlKHBvc3RlckltZywgcG9zdGVyTWF4V2lkdGgpe1xyXG5cclxuICAgICAgICBsZXQgc3Jjc2V0ID0gbWFrZVNyY1NldChwb3N0ZXJJbWcsIHBvc3Rlck1heFdpZHRoKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkZWQnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJywgJ2JsdXItdXAnKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9zdGVySW1nK1wiLTIwLmpwZ1wiKTtcclxuICAgICAgICB0aGlzLnBvc3RlckJpZ0ltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBzcmNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURldGFpbHNJbWFnZShzZWxlY3RvckltYWdlLCBzZWxlY3RvckxpbmssIGltYWdlLCBpbWFnZU1heFdpZHRoKXtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlID09PSAnLycgfHwgaW1hZ2UgPT09ICdudWxsJykge1xyXG4gICAgICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bvc3Rlci1iaWdfX2RldGFpbHNfX2l0ZW1zX19pbWFnZS0tbm9uZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3JjU2V0ID0gbWFrZVNyY1NldChpbWFnZSwgaW1hZ2VNYXhXaWR0aCk7XHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3N0ZXItYmlnX19kZXRhaWxzX19pdGVtc19faW1hZ2UtLW5vbmUnKTtcclxuICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkZWQnKTtcclxuICAgICAgICBzZWxlY3RvckltYWdlLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJywgJ2JsdXItdXAnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlICsgXCItMjAuanBnXCIpO1xyXG4gICAgICAgIHNlbGVjdG9ySW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIHNyY1NldCk7XHJcbiAgICAgICAgc2VsZWN0b3JJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgJyhtYXgtd2lkdGg6IDc2MHB4KSA3MHB4LCA1MHZ3Jyk7XHJcbiAgICAgICAgc2VsZWN0b3JMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCBpbWFnZSk7XHJcbiAgICAgICAgc2VsZWN0b3JMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctbWF4LXdpZHRoJywgaW1hZ2VNYXhXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YU9iamVjdChlbGVtZW50KXtcclxuICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgaWQgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItaWQnKSxcclxuICAgICAgICAgICAgdGl0bGUgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItdGl0bGUnKSxcclxuICAgICAgICAgICAgbWF4V2lkdGggOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlIDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyLWltZycpLFxyXG4gICAgICAgICAgICBpbWFnZURldGFpbDFNYXhXaWR0aCA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczEtbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlRGV0YWlsMSA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsMScpLFxyXG4gICAgICAgICAgICBpbWFnZURldGFpbDJNYXhXaWR0aCA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsczItbWF4LXdpZHRoJyksXHJcbiAgICAgICAgICAgIGltYWdlRGV0YWlsMiA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1pbWctZGV0YWlsMicpLFxyXG4gICAgICAgICAgICBhdXRob3IgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXItYXV0aG9yJyksXHJcbiAgICAgICAgICAgIHllYXIgOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0ZXIteWVhcicpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3Rlci1kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBvc3RlckJpZyhwb3N0ZXIgPSBudWxsKXtcclxuICAgICAgICBpZiAocG9zdGVyPT09bnVsbClcclxuICAgICAgICAgICAgcG9zdGVyID0gdGhpcy5nZXREYXRhT2JqZWN0KHRoaXMucG9zdGVyc1RyaWdnZXJzW3RoaXMucG9zdGVySWRdKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNYWluSW1hZ2UocG9zdGVyLmltYWdlLCBwb3N0ZXIubWF4V2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGFpbHNJbWFnZSh0aGlzLnBvc3RlckJpZ0ltYWdlRGV0YWlsczAsIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMwLCBwb3N0ZXIuaW1hZ2UsIHBvc3Rlci5tYXhXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRhaWxzSW1hZ2UodGhpcy5wb3N0ZXJCaWdJbWFnZURldGFpbHMxLCB0aGlzLnBvc3RlckJpZ0xpbmtEZXRhaWxzMSwgcG9zdGVyLmltYWdlRGV0YWlsMSwgcG9zdGVyLmltYWdlRGV0YWlsMU1heFdpZHRoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGFpbHNJbWFnZSh0aGlzLnBvc3RlckJpZ0ltYWdlRGV0YWlsczIsIHRoaXMucG9zdGVyQmlnTGlua0RldGFpbHMyLCBwb3N0ZXIuaW1hZ2VEZXRhaWwyLCBwb3N0ZXIuaW1hZ2VEZXRhaWwyTWF4V2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZ1RpdGxlLnRleHRDb250ZW50ID0gcG9zdGVyLnRpdGxlO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0Kycvc2hvdy1wb3N0ZXIvJytwb3N0ZXIuaWQrJy8nK3Bvc3Rlci50aXRsZSsnLScrcG9zdGVyLmF1dGhvcisnI3Bvc3RlcnMnO1xyXG4gICAgICAgIHVybCA9IGVuY29kZVVSSSh1cmwpO1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nK3VybCsnO3NyYz1zZGtwcmVwYXJzZSc7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdMaW5rU2hhcmUucXVlcnlTZWxlY3RvcignYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdGVyQmlnU3VidGl0bGUudGV4dENvbnRlbnQgPSBwb3N0ZXIuYXV0aG9yICsgKHBvc3Rlci55ZWFyID09PSAnJyA/ICcnIDogJyAvICcgKyBwb3N0ZXIueWVhcik7XHJcbiAgICAgICAgdGhpcy5wb3N0ZXJCaWdEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwb3N0ZXIuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQb3N0ZXJCaWcoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RlckJpZy5jbGFzc0xpc3QucmVtb3ZlKCdwb3N0ZXItYmlnLS1pcy12aXNpYmxlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzc0hhbmRsZXIoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgLy9lc2NhcGUga2V5XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3N0ZXJCaWcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIC8vYXJyb3cgcmlnaHQga2V5XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFBvc3RlckJpZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykgLy9hcnJvdyBsZWZ0IGtleVxyXG4gICAgICAgICAgICB0aGlzLnByZXZQb3N0ZXJCaWcoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RlckJpZzsiLCJpbXBvcnQgd2F5cG9pbnRzIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy93YXlwb2ludHMvbGliL25vZnJhbWV3b3JrLndheXBvaW50cyc7XHJcblxyXG5jbGFzcyBSZXZlYWxPblNjcm9sbHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvUmV2ZWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3Rlcl9faXRlbScpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25VcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cycpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVJbml0aWFsbHkoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVdheXBvaW50cygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlV2F5cG9pbnRzSGVhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUluaXRpYWxseSgpe1xyXG4gICAgICAgIHRoaXMuaXRlbXNUb1JldmVhbC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsLWl0ZW1cIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXYXlwb2ludHMoKXtcclxuICAgICAgICB0aGlzLml0ZW1zVG9SZXZlYWwuZm9yRWFjaCgoaXRlbVRvUmV2ZWFsKT0+e1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogaXRlbVRvUmV2ZWFsLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVG9SZXZlYWwuY2xhc3NMaXN0LmFkZCgncmV2ZWFsLWl0ZW0tLWlzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiODUlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVdheXBvaW50c0hlYWRlcigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhhdC5zZWN0aW9uVXMsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLWlzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2Zmc2V0OiBcIjIwJVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZlYWxPblNjcm9sbDsiLCJpbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5cclxubmV3IFNtb290aFNjcm9sbCgnLm5hdiBhW2hyZWYqPVwiI1wiXScsIHtcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzcGVlZEFzRHVyYXRpb246IHRydWVcclxufSk7XHJcbiIsImltcG9ydCB3YXlwb2ludHMgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dheXBvaW50cy9saWIvbm9mcmFtZXdvcmsud2F5cG9pbnRzJztcclxuXHJcbmNsYXNzIFN0aWNreUhlYWRlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5sYXp5bG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5bG9hZCcpO1xyXG4gICAgICAgIHRoaXMuaGVyb1RleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhcmdlLWhlcm9fX3RleHQtY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpO1xyXG4gICAgICAgIHRoaXMubmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2IGxpJyk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtbGluaycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZVNlY3Rpb25XYXlwb2ludHMoKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVmcmVzaFdheXBvaW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hXYXlwb2ludHMoKXtcclxuICAgICAgICB0aGlzLmxhenlsb2FkLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgV2F5cG9pbnQucmVmcmVzaEFsbCgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VTZWN0aW9uV2F5cG9pbnRzKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGF0Lmhlcm9UZXh0Q29udGVudCxcclxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5uYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubmF2TGlua1N0YXJ0LmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9mZnNldDogXCI3MCVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblxyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24uaGFzQXR0cmlidXRlKCdkYXRhLW5hdi1saW5rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYXZMaW5rID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LWxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkxpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIxOCVcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hdkxpbmsgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1uYXYtbGluaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24uaGFzQXR0cmlidXRlKCdkYXRhLW5hdi1saW5rLXByZXYnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpbmsgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1uYXYtbGluay1wcmV2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkxpbmspLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogXCItMTAlXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lIZWFkZXI7IiwiLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3JjU2V0KGltYWdlU3JjLCBtYXhJbWFnZVdpZHRoKXtcclxuICAgIGxldCBkaW1lbnNpb25zID0gWzUwMCwgODAwLCAxMjAwLCAxOTAwLCAzNjAwXTtcclxuICAgIGxldCBzcmNzZXQgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAoZGltZW5zaW9uc1tpXSA8PSBtYXhJbWFnZVdpZHRoKVxyXG4gICAgICAgICAgICBzcmNzZXQgKz0gaW1hZ2VTcmMgKyBcIi1cIiArIGRpbWVuc2lvbnNbaV0gKyBcIi5qcGcgXCIgKyBkaW1lbnNpb25zW2ldICsgXCJ3LCBcIjtcclxuXHJcbiAgICBzcmNzZXQgPSBzcmNzZXQuc3Vic3RyaW5nKDAsIHNyY3NldC5sZW5ndGggLSAyKTtcclxuICAgIHJldHVybiBzcmNzZXQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9