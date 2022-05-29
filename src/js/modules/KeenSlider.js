import KeenSlider from 'keen-slider';
// import 'keen-slider/keen-slider.css';

export default class Slider {
  constructor() {
    this.setParams();
    this.bind();
  }
  setParams() {

  }
  bind(){
    const keenSlider = new KeenSlider(".keen-slider", {
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
  }
  updateClass(instance) {
    const currentIndex = instance.track.details.abs;
    instance.slides.forEach((item) => {
      item.classList.remove('is-active');
    });
    instance.slides[currentIndex].classList.add('is-active');
  }
}