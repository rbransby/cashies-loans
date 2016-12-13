import {lory} from 'lory.js';

module.exports = () => {
  var simple = document.querySelector('.js_slider');

  lory(simple, {
    infinite: 1
  });
};
