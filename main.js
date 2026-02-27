/* =========================================================
   PureRate Landing Page – JavaScript (ESM)
   ========================================================= */

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
  { threshold: 0.1 }
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
    const isOpen = navLinks.dataset.open === 'true';
    if (isOpen) {
      navLinks.removeAttribute('style');
      navLinks.dataset.open = 'false';
    } else {
      Object.assign(navLinks.style, {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '64px',
        left: '0',
        right: '0',
        background: 'rgba(10,10,18,0.97)',
        padding: '20px 24px',
        gap: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        zIndex: '200',
      });
      navLinks.dataset.open = 'true';
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
    faqItems.forEach((i) => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
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
      if (navLinks) {
        navLinks.removeAttribute('style');
        navLinks.dataset.open = 'false';
      }
    }
  });
});
