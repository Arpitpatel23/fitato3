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
