import { SlideNav } from './slide.js';
import IniciaScrollSuave from './scroll-suave.js';
IniciaScrollSuave();

const slide = new SlideNav('.slide', '.slide-projeto');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();

new SimpleSlide({
  slide: 'principal',
  nav: false,
  auto: true,
  time: 3000,
});
