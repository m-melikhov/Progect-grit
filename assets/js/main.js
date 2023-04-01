$(document).ready(function () {
  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').stpo(true, true).slideToggle(500);
  });
});