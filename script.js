const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const steps = Array.from(document.querySelectorAll('.workflow-step'));
const detail = document.getElementById('workflow-detail');
steps.forEach(step => {
  step.addEventListener('click', () => {
    steps.forEach(item => item.classList.remove('active'));
    step.classList.add('active');
    detail.textContent = step.dataset.detail;
  });
});
