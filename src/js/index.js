import '../scss/style.scss';
// import Slider from './modules/keenSlider';
import KeenSlider from 'keen-slider';
// import 'keen-slider/keen-slider.css';
var TEMPLATE = TEMPLATE || {};

TEMPLATE = {
  init: function() {
    this.setParam();
    this.setSlider();
  },
  setParam: function() {
    this.ctSlide = null;
  },
  setSlider: function() {
    // this.ctSlide = new Slider();
    const keenSlider = new KeenSlider(".keen-slider", {
      drag: false,
      created: (instance) => {
        const prevBtn = document.querySelectorAll('[data-slider-prev]');
        prevBtn.forEach((item) => {
          item.addEventListener('click', () => {
            instance.prev();
          });
        });
        const nextBtn = document.querySelectorAll('[data-slider-next]');
        nextBtn.forEach((item) => {
          item.addEventListener('click', () => {
            instance.next();
          });
        });
      },
      slideChanged: (instance) => {
        TEMPLATE.updateClass(instance);
      }
    });
    // ジャンプ処理
    const jumpBtn = document.querySelectorAll('[data-slider-jump]');
    jumpBtn.forEach((item) => {
      item.addEventListener('click', () => {
        const index = item.dataset.sliderNum - 1;

        keenSlider.moveToIdx(index, false, {duration: 0});
      });
    });
  },
  updateClass: function(instance) {
    const currentIndex = instance.track.details.abs;
    instance.slides.forEach((item) => {
      item.classList.remove('is-active');
    });
    instance.slides[currentIndex].classList.add('is-active');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  TEMPLATE.init();
});