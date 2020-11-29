const btn = document.querySelector(".menu-bar");
let isMenuOpen = false;

/* Event listeners */
btn.addEventListener("click", ()=> {
    if (!isMenuOpen) {
        btn.classList.add("menu-bar--open");
        isMenuOpen = true;
    }
    else {
        btn.classList.remove("menu-bar--open")
        isMenuOpen = false;
    }  
});

