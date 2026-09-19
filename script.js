// ==========================================
// SMOOTH SCROLLING
// ==========================================

(() => {

    const navToggle = document.getElementById('nav-toggle');

    const supportsSmoothScroll =
        'scrollBehavior' in document.documentElement.style;

    const headerOffset = () => {
        const header = document.querySelector('.navbar');
        return (header ? header.offsetHeight : 0) + 16;
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (event) {

            const href = this.getAttribute('href');

            if (!href || href === '#') {
                return;
            }

            if (!/^#[a-zA-Z0-9_-]+$/.test(href)) {
                console.warn('Invalid selector detected:', href);
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            const top = target.getBoundingClientRect().top
                + window.scrollY
                - headerOffset();

            window.scrollTo({
                top: Math.max(top, 0),
                behavior: supportsSmoothScroll ? 'smooth' : 'auto'
            });

            if (navToggle && navToggle.checked) {
                navToggle.checked = false;
            }

        });

    });

})();