export default class Modal {
  constructor() {
    this.setParams();
    this.bind();
  }
  setParams() {
    this.elModal = document.querySelector('[data-modal]');
    this.elModalClose = document.querySelector('[data-modal-close]');
    this.elModalOpen = document.querySelector('[data-modal-open]');
  }
  bind(){

  }
}