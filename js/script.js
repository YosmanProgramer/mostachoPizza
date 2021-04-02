'use strict';

$(document).ready(function () {
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

    if (icon.hasClass('nav__menu-bar--active')) {
      icon.removeClass('nav__menu-bar--active');
    } else {
      icon.addClass('nav__menu-bar--active');
    }
  });
});
