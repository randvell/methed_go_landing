const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showOverlay = () => {
  overlay.classList.add('overlay--visible');
};

const hideOverlay = () => {
  overlay.classList.remove('overlay--visible');
};

const askCallBtn = document.querySelector('.header__call-button');
askCallBtn.addEventListener('click', showOverlay);

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close')) {
    hideOverlay();
  }
});
