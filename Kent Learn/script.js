document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling with basic validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        
        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
            return;
        }
        
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email.');
            return;
        }
        
        // Let Formspree handle the submission
        alert(`Thank you, ${name}! Your message is being sent.`);
        // Formspree will handle resetting the form after submission
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
            button.classList.toggle('active');
        });
    });

    // Fade-in sections on scroll
    const fadeInSections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Back to Top button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});