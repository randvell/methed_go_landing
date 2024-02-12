import { overlay, hideOverlay, showOverlay } from './overlay.js';

const modal = document.querySelector('.modal');
const askCallBtn = document.querySelector('.header__call-button');

askCallBtn.addEventListener('click', () => {
  overlay.append(modal);
  showOverlay();
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('modal')) {
    hideOverlay();
  }
});
