// script.js

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    let isValid = true;
    const emailField = form.querySelector('input[type="email"]');

    // Simple email validation
    if (!emailField.value.includes('@')) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight - offset);
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});