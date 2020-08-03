(function (window) {
    'use strict';

    const bodyTag = document.querySelector('[data-bodyTag]');

    function windowScrolled() {
        if (window.pageYOffset > 0) {
            bodyTag.classList.add('window-scrolled');
        } else {
            bodyTag.classList.remove('window-scrolled');
        }
    }

    window.addEventListener('scroll', windowScrolled);
})(window);