/* =========================================================
   PureRate Landing Page – JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------
  // 1. Scroll-reveal
  // ---------------------
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // ---------------------
  // 2. Sticky nav background
  // ---------------------
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------------------
  // 3. Mobile nav toggle
  // ---------------------
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,10,18,0.97)';
      navLinks.style.padding = '20px 24px';
      navLinks.style.gap = '16px';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
      if (isOpen) {
        navLinks.removeAttribute('style');
      }
    });
  }

  // ---------------------
  // 4. FAQ accordion
  // ---------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // close all
      faqItems.forEach((i) => i.classList.remove('active'));
      // toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ---------------------
  // 5. Smooth-scroll for anchor links
  // ---------------------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav if open
        if (navLinks) navLinks.removeAttribute('style');
      }
    });
  });

});
