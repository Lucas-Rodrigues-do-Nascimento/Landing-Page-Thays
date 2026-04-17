/* scripts/main.js */
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) {
            return;
        }
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close the mobile menu after clicking a link
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});
