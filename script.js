// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (event) {

        const href = this.getAttribute('href');

        if (!/^#[a-zA-Z0-9_-]+$/.test(href)) {
            console.warn('Invalid selector detected:', href);
            return;
        }

        const target = document.querySelector(href);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});