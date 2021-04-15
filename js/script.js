'use strict';

$(document).ready(function () {
  /* For the sticky navigation */
  $('.js--seccion-nosotros').waypoint(function (direction) {
    if (direction == 'down') {
      $('.nav').addClass('nav--sticky');
    } else {
      $('.nav').removeClass('nav--sticky');
    }
  });

  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Scroll on buttons */
  $('.js--scroll-platos').click(function () {
    $('html, body').animate({ scrollTop: $('#platos').offset().top }, 1000);
  });

  /* Mobile Navigation */
  $('#mobile-menu').click(function () {
    const mainNav = $('#nav__list');
    const icon = $('#menu-bar');

    mainNav.slideToggle(200);
    icon.toggleClass('nav__menu-bar--active');
  });
});
