import { Controller } from "stimulus";
import {UNIT, ADD_WIDTH} from "../../js/util";

export default class extends Controller {
  static targets = [ `item`, `trigger` ]

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

}
