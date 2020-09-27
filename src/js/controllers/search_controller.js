import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `overlay`,`close` ]
  connect() {
    console.log('connect')
  }

  test() {
    console.log(`test`);
  }

  close() {
    this.overlayTarget.classList.remove(`search--active`);
  }

  show() {
    this.overlayTarget.classList.add(`search--active`);
  }

}
