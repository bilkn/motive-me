const mobileMenuBtn = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');
const siteTopBtn = document.querySelector('.site-top-btn');
const topBtnActivator = document.querySelector('.top-btn-activator');
const mobileLinks = document.querySelectorAll('.js-mobile-link');
const intersectOptions = {
  rootMargins: '0px',
  threshold: 0,
};
const scrollOptions = {
  top: 0,
  behavior: 'smooth',
};
let isMenuOpen = false;
/* Event listeners */
mobileMenuBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMobileMenu();
    addNoScroll(document.body);
    setTabIndexZero(mobileLinks);
  } else {
    closeMobileMenu();
    removeNoScroll(document.body);
    setTabIndexNegative(mobileLinks);
  }
});

siteTopBtn.addEventListener('click', () => {
  window.scroll(scrollOptions);
});

mobileMenu.addEventListener('click', (e) => {
  const menuItem = e.target.closest('.mobile-menu-nav-item');
  if (menuItem) {
    closeMobileMenu();
    removeNoScroll(document.body);
    setTabIndexNegative(mobileLinks);
  }
});

window.addEventListener('load', () => {
  const observer = new IntersectionObserver(handleIntersect, intersectOptions);
  observer.observe(topBtnActivator);
});

/* Others */

function openMobileMenu() {
  mobileMenuBtn.classList.add('menu-bar--open');
  mobileMenu.classList.add('mobile-menu--open');
  isMenuOpen = true;
}

function closeMobileMenu() {
  mobileMenuBtn.classList.remove('menu-bar--open');
  mobileMenu.classList.remove('mobile-menu--open');
  isMenuOpen = false;
}

function addNoScroll(selector) {
  selector.classList.add('no-scroll');
}

function removeNoScroll(selector) {
  selector.classList.remove('no-scroll');
}

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    siteTopBtn.classList.add('site-top-btn--active');
  } else {
    siteTopBtn.classList.remove('site-top-btn--active');
  }
}

function setTabIndexZero(elements) {
  elements.forEach((element) => {
    element.setAttribute('tabindex', '0');
  });
}

function setTabIndexNegative(elements) {
  elements.forEach((element) => {
    element.setAttribute('tabindex', '-1');
  });
}
