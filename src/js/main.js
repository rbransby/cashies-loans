// libs
import $ from 'jquery';

// components
import Carousel from './components/carousel';

$(() => {
  $('.style-nav__burger').on('click', () => {
    $('body').toggleClass('show-menu');
  });

  new Carousel('.js_slider');
});
