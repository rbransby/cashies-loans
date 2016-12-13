import {lory} from 'lory.js';
import _ from 'lodash';

/**
 * Carousel create method
 * @param  {Object} options       options for setup
 * @return {Object}               returns Function that creates a carousel
 */
module.exports = (options) => {
  options = options || {};
  let domClass = options.className || 'carousel';
  let dom = document.getElementsByClassName(domClass);
  let base = {
    infinite: 1,
    classNameFrame: 'carousel__inner',
    classNameSlideContainer: 'carousel__slides',
    classNamePrevCtrl: 'carousel__prev',
    classNameNextCtrl: 'carousel__next'
  };
  if(dom.length) {
    let api = lory(dom[0], _.extend({}, base, options));
    api.setup();
  }
};
