export const overlay = document.querySelector('.overlay');

let opacity = 0;
export const showOverlay = () => {
  const fadeIn = () => {
    opacity += 0.05;
    overlay.style.opacity = opacity;

    if (opacity < 1) {
      requestAnimationFrame(fadeIn);
    }
  };

  fadeIn();
};

export const hideOverlay = () => {
  const fadeOut = () => {
    opacity -= 0.05;
    overlay.style.opacity = opacity;

    if (opacity > 0) {
      requestAnimationFrame(fadeOut);
    }
  };

  fadeOut();
  overlay.innerHTML = '';
};
