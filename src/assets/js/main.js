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

    // Optional: Number Counter animation for stats could be added here
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.innerText;
            const count = +counter.innerText;
            
            // Just a basic check, real animation would require intersection observer
            // For now, keeping the static HTML numbers is sufficient as per static clone rules.
        };
        // updateCount();
    });
});
