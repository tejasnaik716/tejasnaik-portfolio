// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Animation on Scroll (Fade-in effect)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add fade-in class to CSS for animation
// (Already handled in styles.css via JS addition, but ensure CSS has: .fade-in { opacity: 1; transform: translateY(0); transition: all 0.6s; } and initial opacity: 0; transform: translateY(20px);)

// Form Submission (Basic - logs to console; replace with real backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo; integrate with a service like Formspree or EmailJS)');
    this.reset();
});
