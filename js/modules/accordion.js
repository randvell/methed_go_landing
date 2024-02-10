export const accordion = () => {};

const items = document.querySelectorAll('.faq__element');
const buttons = document.querySelectorAll('.faq__button');

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    items[i].classList.toggle('faq__element--active');
  });
});
