import { Controller } from "stimulus";
import {UNIT, ADD_WIDTH} from "../../js/util";

export default class extends Controller {
  static targets = [ `item`, `trigger`, `list` ]

  connect() {
    this.hideOnHover();
  }

  changeBurger() {
    const inner = this.triggerTarget.querySelector(`.burger__inner`);
    inner.classList.toggle(`burger__inner--active`);
  }

  showMenu(evt) {
    evt.preventDefault();
    this.changeBurger();
    const menu = document.querySelector(`.menu__list`);
    menu.classList.toggle(`menu__list--active`);
  }

  hideOnHover() {
    this.listTarget.addEventListener(`mouseover`, () => {
      const active = this.listTarget.querySelector(`.mega-menu-n__item--active`);
      if (active) {
        active.classList.remove(`mega-menu-n__item--active`);
      }
    })

    this.listTarget.addEventListener(`mouseout`, () => {
      const active = this.listTarget.querySelector(`.mega-menu__item`);
      if (active) {
        active.classList.add(`mega-menu__item--active`);
      }
    })
  }

}
