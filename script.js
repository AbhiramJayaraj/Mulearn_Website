const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// --- Memories random glide ---
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.memories-container');
  if (!container) return;

  const items = Array.from(container.querySelectorAll('.memory-glass'));

  // disable existing CSS animation for these items (we'll drive motion via JS)
  items.forEach(el => el.style.animation = 'none');

  function glideElement(el) {
    const cW = container.clientWidth;
    const cH = container.clientHeight;
    const eW = el.offsetWidth;
    const eH = el.offsetHeight;

    // increase movement range: use a fraction of the container size
    const rangeFactor = 0.2; // 0.0..1.0 (higher = more travel)
    const maxOffsetX = Math.max(0, cW * rangeFactor);
    const maxOffsetY = Math.max(0, cH * rangeFactor);

    // pick a random target offset centered around 0 so elements can glide across the container
    const tx = Math.round((Math.random() - 0.5) * maxOffsetX);
    const ty = Math.round((Math.random() - 0.5) * maxOffsetY);

    // random duration between ~2.5s and ~8s (faster movement)
    const duration = 2000 + Math.random() * 1500;

    // apply transition duration and set CSS vars for translation
    el.style.transition = `transform ${duration}ms cubic-bezier(.2,.8,.2,1)`;
    el.style.setProperty('--gx', `${tx}px`);
    el.style.setProperty('--gy', `${ty}px`);

    // schedule next move after current transition ends + small pause
    setTimeout(() => glideElement(el), duration + 300 + Math.random() * 1200);
  }

  // start each element at a staggered time
  items.forEach((el, i) => setTimeout(() => glideElement(el), i * 400));

  // recalc on resize to keep within container
  window.addEventListener('resize', () => {
    items.forEach(el => {
      // restart glide with fresh target
      glideElement(el);
    });
  });
});




