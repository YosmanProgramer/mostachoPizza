'use strict';

// Elements
const menuButtonEl = document.querySelector('#mobile-menu');
const menuBarEl = document.querySelector('#menu-bar');

menuButtonEl.addEventListener('click', function () {
  menuBarEl.classList.toggle('nav__menu-bar--active');
});
