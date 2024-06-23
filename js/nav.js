document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-200px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});