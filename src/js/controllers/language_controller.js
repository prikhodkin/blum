import { Controller } from "stimulus";

const languageHeader = document.querySelector(`.language-n__list--header`)

export default class extends Controller {
  static targets = [ `target` ]

  connect() {
    this.init();
  }

  init() {
    this.targetTarget.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      console.log(this.targetTarget)
      languageHeader.classList.toggle(`language-n__list--active`)
      this.element.classList.toggle(`language--active`)
    })
  }
}
