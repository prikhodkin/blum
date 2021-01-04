import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Tabs from "%modules%/tabs/tabs"
import {$$} from "./util";
// import $ from "jquery";
import intlTelInput from 'intl-tel-input';
import PerfectScrollbar from 'perfect-scrollbar';
import { tns } from "tiny-slider/src/tiny-slider"
import slick from "slick-carousel";
// global.jQuery = $;
//
// require ("@fancyapps/fancybox/dist/jquery.fancybox");


const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

const tabs = $$(`[data-tabs]`);
const input = document.querySelector("#phone");

if(input) {
  intlTelInput(input, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.5/js/utils.js",
  });
}

const filters = document.querySelectorAll(`.filter__list`);

filters.forEach((item) => new PerfectScrollbar(item, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
}));



// tabs.map((item) => new Tabs(item));
// $('[data-fancybox]').fancybox({
//   protect: true
// });

let inputs = document.querySelectorAll('.file__input');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.file__text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.file__text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.file__text').innerText = labelVal;
  });
});

const galleryList = document.querySelector(`.gallery__list`);

if (galleryList) {
  const gallery = tns({
    "container": ".gallery__list",
    "items": 1,
    "navContainer": ".gallery__sub-list",
    "navAsThumbnails": true,
    "autoplay": false,
    "swipeAngle": false,
    "speed": 400,
    "controls": false
  })
}

// Slider-new
import Swiper from 'swiper/bundle';

// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.controls__button--next',
//     prevEl: '.controls__button--prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


//menu

let toggleNav = document.querySelector('.menu-n__button');
let headerMenu = document.querySelector('.header-n__menu');

toggleNav.addEventListener("click",  () => {
  headerMenu.classList.toggle(`header-n__menu--active`);
});

//submenu

let menuElement = document.querySelectorAll('.menu-n__link--parent');
let menuElementActive = 'menu-n__link--active';
let menuItems = document.querySelectorAll('.menu-n__items');
let menuItemsActive = `menu-n__items--active`;
let megaMenu = document.querySelectorAll('.mega-menu-n__inner');
let megaMenuActive = 'mega-menu-n__inner--active';
let megaMenuItem = document.querySelectorAll('.mega-menu-n__subbutton');
let megaMenuSubItem = document.querySelectorAll('.mega-menu-n__header');
let megaMenuSubList = document.querySelectorAll('.mega-menu-n__sub-list');
let megaMenuSubListActive = 'mega-menu-n__sub-list--active';

let footerControl = document.querySelectorAll('.footer-n__control');
let footerList = document.querySelectorAll('.footer-n__list');
let footerListActive = 'footer-n__list--active';


let openMenu = function (firstItem, secondItem, thirdItem, fourthItem) {
  for (let i = 0; i < firstItem.length; i++) {
    firstItem[i].addEventListener('click', () => {
      // for (let j = 0; j < firstItem.length; j++) {
      //   secondItem[j].classList.remove(thirdItem);
      // };
      secondItem[i].classList.toggle(thirdItem);
    });
  };
};

openMenu(menuElement, menuItems, menuItemsActive);
openMenu(menuElement, menuElement, menuElementActive);
openMenu(megaMenuItem, megaMenu, megaMenuActive);
openMenu(megaMenuSubItem, megaMenuSubList, megaMenuSubListActive);

//footer-menu
openMenu(footerControl, footerList, footerListActive);

// Развернуть текст

let blumMethodButton = document.querySelector('.blum-method__btn');
let blumMethodContent = document.querySelector('.blum-method__content');
let blumMethodContentActive = 'blum-method__content--active';
let introButton = document.querySelector('.intro-n__btn');
let introContent = document.querySelector('.intro-n__content');
let introContentActive = 'intro-n__content--active';


let openContent = function (firstItem, secondItem, thirdItem) {
  firstItem.addEventListener("click",  () => {
    secondItem.classList.toggle(thirdItem);
  });
};

if(blumMethodButton) {
  openContent(blumMethodButton, blumMethodContent, blumMethodContentActive);
}

if(introButton) {
  openContent(introButton, introContent, introContentActive);
}

const areaSliderTrigger = document.querySelector(`.area-work__slider`);

if(areaSliderTrigger) {
  const areaSlider = tns({
    container: areaSliderTrigger,
    items: 1,
    nav: false,
    slideBy: 'page',
    autoplay: false,
    nextButton: '.area-work__controls .controls__button--prev',
    prevButton: '.area-work__controls .controls__button--next'
  });
}

const missionSliderTrigger = document.querySelector(`.mission__slider-wrapper`);

if(missionSliderTrigger) {
  const missionSlider = tns({
    container: missionSliderTrigger,
    items: 1,
    nav: false,
    slideBy: 'page',
    autoplay: false,
    nextButton: '.mission__slider .controls__button--prev',
    prevButton: '.mission__slider .controls__button--next'
  });
}

const convenienceSliderTrigger = document.querySelector(`.convenienceSlider`);

if(convenienceSliderTrigger) {
  const convenienceSlider = tns({
    container: convenienceSliderTrigger,
    items: 1,
    nav: false,
    autoplay: false,
    nextButton: '.convenience__slider .controls__button--prev',
    prevButton: '.convenience__slider .controls__button--next',
    responsive: {
      "700": {
        "items": 2,
        "gutter": 28
      },
      "1900": {
        "items": 3,
        "gutter": 28
      }
    }
  });
}

const promoSliderTrigger = document.querySelector(`.promo-n__slider`);

if(promoSliderTrigger) {
  const promoSlider = tns({
    container: promoSliderTrigger,
    items: 1,
    nav: false,
    autoplay: false,
    nextButton: '.promo-n__controls .controls__button--prev',
    prevButton: '.promo-n__controls .controls__button--next'
  });
}

const reviewsSliderTrigget = document.querySelector(`.patient-histories__list`);

if(reviewsSliderTrigget) {
  const reviewsSlider = tns({
    container: reviewsSliderTrigget,
    items: 1,
    nav: true,
    navPosition: "bottom",
    autoplay: false,
    nextButton: '.patient-histories__controls .controls__button--prev',
    prevButton: '.patient-histories__controls .controls__button--next',
    responsive: {
      "768": {
        "items": 2,
        "gutter": 28,
        "nav": false
      },
      "1920": {
        "items": 3,
        "gutter": 28,
        "nav": false
      }
    }
  });
}

const patientSliderTrigget = document.querySelector(`.our-patient__list`);

if(patientSliderTrigget) {
  const patientSlider = tns({
    container: patientSliderTrigget,
    items: 1,
    nav: true,
    gutter: 15,
    navPosition: "bottom",
    autoplay: false,
    nextButton: '.our-patient__controls .controls__button--prev',
    prevButton: '.our-patient__controls .controls__button--next',
    responsive: {
      "768": {
        "items": 2,
        "gutter": 28,
        "nav": false
      },
      "800": {
        "items": 3,
        "gutter": 28,
        "nav": false
      },
      "1280": {
        "items": 4,
        "gutter": 28,
        "nav": false
      },
      "1920": {
        "items": 6,
        "gutter": 28,
        "nav": false
      }
    }
  });
}

const situationsSliderTrigget = document.querySelector(`.situations-n__list`);

if((window.matchMedia('(max-width: 768px)').matches) && situationsSliderTrigget) {

  const situationsSlider = tns({
    container: situationsSliderTrigget,
    items: 1,
    nav: true,
    controls: false,
    navPosition: "bottom",
    autoplay: false,
  });
}

const newsSliderTrigget = document.querySelector(`.news-n__list`);

if(newsSliderTrigget) {
  const newsSlider = tns({
    container: newsSliderTrigget,
    items: 1,
    nav: true,
    gutter: 15,
    navPosition: "bottom",
    autoplay: false,
    nextButton: '.news-n__controls .controls__button--prev',
    prevButton: '.news-n__controls .controls__button--next',
    responsive: {
      "1000": {
        "items": 3,
        "gutter": 28,
        "nav": false
      },
      "1280": {
        "items": 4,
        "gutter": 28,
        "nav": false
      },
      "1920": {
        "items": 5,
        "gutter": 28,
        "nav": false
      }
    }
  });
}

const conditionsSliderTrigget = document.querySelector(`.conditions-n__list`);

if(conditionsSliderTrigget) {
  const conditionsSlider = tns({
    container: conditionsSliderTrigget,
    items: 2,
    nav: false,
    gutter: 15,
    loop: true,
    center: true,
    autoplay: false,
    nextButton: '.conditions-n__slider .controls__button--prev',
    prevButton: '.conditions-n__slider .controls__button--next',
  });
}

const hotelSliderTrigget = document.querySelector(`.hotel-info__list`);

if(hotelSliderTrigget) {
  const hotelSlider = tns({
    container: hotelSliderTrigget,
    items: 1,
    autoWidth: true,
    nav: false,
    gutter: 15,
    loop: false,
    autoplay: false,
    nextButton: '.hotel-info__controls .controls__button--next',
    prevButton: '.hotel-info__controls .controls__button--prev',
  });
}
