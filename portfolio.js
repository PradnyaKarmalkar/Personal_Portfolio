// // Toggle dark mode
// const toggleBtn = document.getElementById('darkModeToggle');

// if (toggleBtn) {
//   toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('light-mode');

//     if (document.body.classList.contains('light-mode')) {
//       document.body.style.backgroundColor = '#f0f0f0';
//       document.body.style.color = '#121212';
//     } else {
//       document.body.style.backgroundColor = '#0f0f0f';
//       document.body.style.color = '#f1f1f1';
//     }
//   });
// }

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const form = document.getElementById('contactForm');
const sections = document.querySelectorAll('section');

// Add dark mode toggle to navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
  const darkModeToggle = document.createElement('div');
  darkModeToggle.classList.add('theme-toggle');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  darkModeToggle.setAttribute('title', 'Toggle Light/Dark Mode');
  navbar.appendChild(darkModeToggle);
  
  // Toggle dark/light mode
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}

// Mobile Menu Toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Account for navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Contact form handling (demo only - would need backend)
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
      // Here you would typically send data to a server
      // For demo purposes, we'll just show an alert
      alert('Thank you for your message! This is a demo form - in a real application, this would send data to a backend server.');
      form.reset();
    }
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Active link highlighter based on scroll position
  highlightActiveNavLink();
});

// Highlight active nav link based on scroll position
function highlightActiveNavLink() {
  const scrollPosition = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Initialize AOS with custom settings
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Add CSS class for smooth transitions when everything is loaded
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Initialize active nav link on page load
  highlightActiveNavLink();
});

// Project hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.project-image img').style.transform = 'scale(1.05)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.querySelector('.project-image img').style.transform = 'scale(1)';
  });
});

