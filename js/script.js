'use strict';

// Elements
const menuButtonEl = document.querySelector('#mobile-menu');
const menuBarEl = document.querySelector('#menu-bar');
const navListEl = document.querySelector('#nav__list');

menuButtonEl.addEventListener('click', function () {
  menuBarEl.classList.toggle('nav__menu-bar--active');
  navListEl.classList.toggle('nav__list--active');
});
