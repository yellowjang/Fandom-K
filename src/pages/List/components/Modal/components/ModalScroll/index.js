export function disableScroll() {
  const currentScrollY = window.scrollY;
  document.body.style.cssText = `
      position: fixed;
      width: 100%;
      top: -${currentScrollY}px;
      overflow-y: scroll;
    `;
  return currentScrollY;
}

export function activateScroll(currentScrollY) {
  document.body.style.cssText = '';
  window.scrollTo(0, currentScrollY);
}
