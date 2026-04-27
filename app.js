// ===== Mobile Navigation Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ===== CTA Form Submission =====
const ctaForm = document.getElementById('ctaForm');
if (ctaForm) {
  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = ctaForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
      // Simple validation feedback
      emailInput.style.borderColor = '#ff5f57';
      setTimeout(() => {
        emailInput.style.borderColor = '';
      }, 1500);
      return;
    }

    // Simulate successful signup
    const button = ctaForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '✓ You\'re in!';
    button.style.pointerEvents = 'none';
    emailInput.value = '';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.pointerEvents = 'auto';
    }, 2500);
  });
}

// ===== Intersection Observer for fade-in animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
  observer.observe(card);
});

// ===== Navbar background on scroll =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.style.background = 'rgba(10, 10, 26, 0.95)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'rgba(10, 10, 26, 0.8)';
  }

  lastScroll = currentScroll;
});

// ===== Console greeting =====
console.log('🧠 MindLog — AI-Powered Journaling');
console.log('✨ Start your journey at mindlog.app');