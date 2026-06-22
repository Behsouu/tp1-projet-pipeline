// Respect prefers-reduced-motion avant toute animation
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll-reveal : IntersectionObserver sur chaque .reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  if (reducedMotion) {
    el.classList.add('visible'); // affichage immédiat sans animation
  } else {
    revealObserver.observe(el);
  }
});

// Nav active : highlight du lien correspondant à la section visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (!link.classList.contains('nav-cta')) {
            link.style.color = active ? 'var(--c-primary)' : '';
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => navObserver.observe(s));
