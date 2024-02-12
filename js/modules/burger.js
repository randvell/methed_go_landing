import { overlay, hideOverlay, showOverlay } from './overlay.js';

const header = document.querySelector('.container--header');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.menu__button');
const nav = document.querySelector('.navigation');

const openMenu = () => {
  nav.style.display = 'block';
  overlay.append(nav);
  showOverlay();
  menu.classList.toggle('menu--open');
};

const closeMenu = () => {
  nav.style.display = '';
  header.append(nav);
  hideOverlay;
  menu.classList.toggle('menu--open');
};

burgerButton.addEventListener('click', () => {
  const isOpen = menu.classList.contains('menu--open');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (
    !target.closest('.navigation__list') &&
    menu.classList.contains('menu--open')
  ) {
    closeMenu();
  }
});
