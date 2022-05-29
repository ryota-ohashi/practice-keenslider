export default class Slider {
  constructor() {
    this.setParams();
    this.bind();
  }
  setParams() {
    this.elSliderWrap = document.querySelector('[data-slider-wrap]');
    this.elSliderItem = document.querySelectorAll('[data-slider-item]');
  }
  event() {
    this.elSliderItem.forEach((item) => {
      const prevBtn = item.querySelector('[data-slider-prev]');
      const nextBtn = item.querySelector('[data-slider-next]');

      prevBtn.addEventListener('click', this.prevSlide);
      nextBtn.addEventListener('click', this.nextSlide);

    });
  }
  bind(){
    this.event();
  }
  // prevSlide() {
  //   this.elSliderWrap.
  // }
  nextSlide() {
    const innerWidth = this.elSliderWrap.innerWidth;
    const currentValue = this.elSliderWrap.getComputedStyle();
    this.elSliderWrap.style.transform = `translateX(-${innerWidth}px)`;
  }
}
// 途中
