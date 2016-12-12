import $ from 'jquery';

$(() => {
  $('.style-nav__burger').on('click', () => {
    $('body').toggleClass('show-menu');
  });
});
