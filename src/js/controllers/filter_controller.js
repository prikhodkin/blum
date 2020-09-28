import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `target`, `list` ]

  connect() {
    this.init();
  }

  init() {
    this.targetTargets.forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        item.classList.toggle(`filter__target--active`);
      })
    })
  }
}
