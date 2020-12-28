import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Tabs from "%modules%/tabs/tabs"
import {$$} from "./util";
import $ from "jquery";
import intlTelInput from 'intl-tel-input';
import PerfectScrollbar from 'perfect-scrollbar';
import { tns } from "tiny-slider/src/tiny-slider"

global.jQuery = $;

require ("@fancyapps/fancybox/dist/jquery.fancybox");


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



tabs.map((item) => new Tabs(item));
$('[data-fancybox]').fancybox({
  protect: true
});

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


let openMenu = function (firstItem, secondItem, thirdItem) {
  for (let i = 0; i < firstItem.length; i++) {
    firstItem[i].addEventListener('click', () => {
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




// if (menuItems.classList.contains(`menu-n__items--active`)) {
//   megaMenu.classList.remove('mega-menu-n__inner--active')
// };

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

openContent(blumMethodButton, blumMethodContent, blumMethodContentActive);
openContent(introButton, introContent, introContentActive);





