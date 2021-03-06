(function (window) {
    'use strict';

    const bodyTag = document.querySelector('[data-bodyTag]');
    const mobileMenuButton = document.querySelector('[data-mobileMenuButton]');
    const navBar = document.querySelector('[data-navBar]');

    function windowScrolled() {
        if (window.pageYOffset > 0) {
            bodyTag.classList.add('window-scrolled');
        } else {
            bodyTag.classList.remove('window-scrolled');
        }
    }

    function openMenu() {
        navBar.classList.toggle('show');
    }

    window.addEventListener('scroll', windowScrolled);
    mobileMenuButton.addEventListener('click', openMenu);
})(window);