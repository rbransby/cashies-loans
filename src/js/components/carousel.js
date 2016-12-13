import {lory} from 'lory.js';
import _ from 'lodash';

module.exports = (carouselClass, options) => {
  let dom = document.querySelector(carouselClass);
  let base = {
    infinite: 1
  };
  
  lory(dom, _.extend({}, base, options));
};
