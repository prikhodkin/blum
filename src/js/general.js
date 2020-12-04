import Turbolinks from "turbolinks";
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

Turbolinks.start();

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




