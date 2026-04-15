// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

// Select elements to reveal
document.querySelectorAll('.service-card, .step, .result-card, .about-text, .about-image').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// Add these styles dynamically for reveal
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(2) { transition-delay: 0.1s; }
    .service-card:nth-child(3) { transition-delay: 0.2s; }
    .service-card:nth-child(4) { transition-delay: 0.3s; }
    
    .step:nth-child(2) { transition-delay: 0.1s; }
    .step:nth-child(3) { transition-delay: 0.2s; }
    .step:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Mobile Menu (Placeholder Logic)
const mobileBtn = document.querySelector('.mobile-menu-btn');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        alert('Мобильное меню будет реализовано в следующей итерации!');
    });
}
