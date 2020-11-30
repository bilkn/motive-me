const btn = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');

let isMenuOpen = false;

/* Event listeners */
btn.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

mobileMenu.addEventListener('click', (e) => {
  const menuItem = e.target.closest('.mobile-menu-item');
  if (menuItem) {
    closeMobileMenu();
  }
});

function openMobileMenu() {
  btn.classList.add('menu-bar--open');
  mobileMenu.classList.add('mobile-menu--open');
  isMenuOpen = true;
}

function closeMobileMenu() {
  btn.classList.remove('menu-bar--open');
  mobileMenu.classList.remove('mobile-menu--open');
  isMenuOpen = false;
}
