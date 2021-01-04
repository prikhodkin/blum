import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ "prev", "next", "list" ]

  connect() {
    this.init();
  }

  init() {
    const sliderFive = tns({
      container: this.listTarget,
      items: 1,
      controls: true,
      nav: false,
      loop: false,
      swipeAngle: false,
      speed: 400,
      nextButton: this.nextTarget,
      prevButton: this.prevTarget,
      responsive: {
        600: {
          items: 2,
          gutter: 15
        },
        900: {
          items: 3,
          gutter: 15
        },
        1200: {
          items: 4
        }
      }
    });
  }

}
