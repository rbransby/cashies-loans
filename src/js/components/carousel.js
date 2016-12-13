import {lory} from 'lory.js';
import _ from 'lodash';

module.exports = (carouselClass, options) => {
  let dom = document.getElementsByClassName('carousel');
  let base = {
    infinite: 1,
    classNameFrame: 'carousel__inner',
    classNameSlideContainer: 'carousel__slides',
    classNamePrevCtrl: 'carousel__prev',
    classNameNextCtrl: 'carousel__next'
  };
  if(dom.length) {
    lory(dom[0], _.extend({}, base, options));
  }
};
