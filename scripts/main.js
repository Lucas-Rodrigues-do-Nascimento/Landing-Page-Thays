// scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    const links=document.querySelectorAll('a[href^="#"]');

    links.forEach(link=> {
            link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target=document.querySelector(this.getAttribute('href'));

                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                }
            });
    });

// Basic header behavior (e.g., change on scroll)
window.addEventListener('scroll', function() {
        const header=document.querySelector('header');

        if (window.scrollY > 50) {
            header.style.backgroundColor='rgba(0, 51, 102, 0.9)';
        }

        else {
            header.style.backgroundColor='var(--primary-color)';
        }
    });
});