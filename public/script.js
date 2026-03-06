const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('show'));
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  const formMessage = document.getElementById('formMessage');

  signupForm.addEventListener('submit', event => {
    const formAction = signupForm.getAttribute('action') || '';
    const isPlaceholderEndpoint = formAction.includes('/your-id');

    if (isPlaceholderEndpoint) {
      event.preventDefault();
      formMessage.textContent = 'Thanks! You are on the early access list (demo mode). Connect a real endpoint to collect live leads.';
      formMessage.style.color = '#fff';
      signupForm.reset();
    }
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const zoomableImages = document.querySelectorAll('.hero-main-image, .product-image');
if (zoomableImages.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image preview">×</button>
    <img class="lightbox-image" alt="Expanded preview" />
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const closeButton = lightbox.querySelector('.lightbox-close');

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || 'Expanded image preview';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}
