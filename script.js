// Dynamisch jaar in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Sluit menu bij klik op link (mobiel)
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Back to top button
const toTop = document.querySelector('.to-top');
function onScroll() {
  if (window.scrollY > 400) {
    toTop?.classList.add('show');
  } else {
    toTop?.classList.remove('show');
  }
}
window.addEventListener('scroll', onScroll);
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.primary-nav a');

function setActiveLink() {
  let currentId = '';
  const offset = 120; // header height buffer
  sections.forEach((sec) => {
    const top = sec.offsetTop - offset;
    if (window.scrollY >= top) currentId = sec.id;
  });
  links.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const id = href.replace('#', '');
    if (id === currentId) {
      link.setAttribute('aria-current', 'page');
      link.style.background = 'var(--accent-200)';
      link.style.textDecoration = 'none';
    } else {
      link.removeAttribute('aria-current');
      link.style.background = 'transparent';
      link.style.textDecoration = 'none';
    }
  });
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
