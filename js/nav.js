// Small nav helpers: toggle dropdown on click for mobile and close on outside click
(function () {
    function onReady(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    onReady(() => {
        const dropdownToggles = document.querySelectorAll('nav .dropbtn');
        const navToggle = document.getElementById('nav-toggle');
        const navElement = document.querySelector('header nav');

        // Toggler for collapsed mobile nav
        if (navToggle && navElement) {
            navToggle.addEventListener('click', () => {
                const isOpen = navElement.classList.toggle('open');
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

        dropdownToggles.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const li = btn.closest('.dropdown');
                if (!li) return;
                // Determine mobile view using the same breakpoint as CSS
                const isMobileView = window.matchMedia('(max-width:860px)').matches;
                // Only intercept clicks on the parent link when in mobile view
                if (isMobileView) {
                    e.preventDefault();
                    const isOpen = li.classList.toggle('open');
                    if (isOpen) {
                        document.querySelectorAll('nav .dropdown.open').forEach(other => {
                            if (other !== li) other.classList.remove('open');
                        });
                    }
                } else {
                    // Desktop behavior: allow default navigation when parent link is clicked.
                    // We also remove any open dropdowns to avoid visual artifacts.
                    document.querySelectorAll('nav .dropdown.open').forEach(open => open.classList.remove('open'));
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            // if click inside a nav, ignore
            if (e.target.closest('nav')) return;
            document.querySelectorAll('nav .dropdown.open').forEach(open => open.classList.remove('open'));
        });

        // Keyboard: close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('nav .dropdown.open').forEach(open => open.classList.remove('open'));
            }
        });
    });
})();
