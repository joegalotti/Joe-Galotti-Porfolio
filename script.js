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

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}

document.querySelectorAll('.image-button').forEach(button => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.full;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});
