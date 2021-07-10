$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="images"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="images"></img>',    
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

});