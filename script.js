// ---------- Theme toggle (persists across visits) ----------
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Placeholder visitor counter ----------
// Replace with a real analytics/counter service later.
const visitEl = document.getElementById('visitCount');
let count = parseInt(localStorage.getItem('portfolio-visits') || '1776', 10);
count += 1;
localStorage.setItem('portfolio-visits', count);
visitEl.textContent = count.toLocaleString();

// ---------- Contact form (placeholder submit handler) ----------
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: wire this up to a real backend, form service (e.g. Formspree),
  // or email API once you're ready to go live.
  status.textContent = 'Thanks — this is a placeholder. Connect a form service to actually receive messages.';
  form.reset();
});
