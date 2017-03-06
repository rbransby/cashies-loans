// libs
import $ from 'jquery';

// components
import Carousel from './components/carousel';

// polfills
import ObjectFitImages from './polyfills/objectFit';

$(() => {
  $('.style-nav__burger').on('click', () => {
    $('body').toggleClass('show-menu');
  });

  Carousel();
  ObjectFitImages();
});
