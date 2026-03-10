document.addEventListener("DOMContentLoaded", function () {
    // Sticky Header functionality
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('stick');
        } else {
            header.classList.remove('stick');
        }
    });

    // Make top-level dropdown items clickable on desktop
    const dropdownLinks = document.querySelectorAll('.nav-item.dropdown > a.dropdown-toggle');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth > 991 && this.getAttribute('href') !== '#') {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Optional: Number Counter animation for stats could be added here
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.innerText;
            const count = +counter.innerText;
            // Static numbers are sufficient for now.
        };
    });
});
