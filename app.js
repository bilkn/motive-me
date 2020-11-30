const btn = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');

let isMenuOpen = false;

/* Event listeners */
btn.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMobileMenu();
    addNoScroll(document.body);
  } else {
    closeMobileMenu();
    removeNoScroll(document.body);
  }
});

mobileMenu.addEventListener('click', (e) => {
  const menuItem = e.target.closest('.mobile-menu-nav-item');
  if (menuItem) {
    closeMobileMenu();
    removeNoScroll(document.body);
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

function addNoScroll (selector) {
  selector.classList.add("no-scroll");
}

function removeNoScroll (selector) {
  selector.classList.remove("no-scroll");
}
