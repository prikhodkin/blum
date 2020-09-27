import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `target`, `list`, `all` ];

  connect() {
    this.toggle();

    if(window.matchMedia(`(max-width: 767px`).matches) {
      this.mobile();
    }
  }

  toggle() {
    this.targetTargets.map((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        item.parentElement.classList.toggle(`sidebar__item--active`);
      })
    })
  }

  mobile() {
    this.element.classList.add(`sidebar--mobile`);
    this.allTarget.innerText = `Все программы`
    this.allTarget.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.allTarget.parentElement.classList.toggle(`sidebar__item--active`);
      this.element.classList.toggle(`sidebar--mobile`);
    })
  }
}
