import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `target` ]

  connect() {
    this.init();
  }

  init() {
    this.targetTarget.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.element.classList.toggle(`language--active`)
    })
  }
}
