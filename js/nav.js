document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    });
});