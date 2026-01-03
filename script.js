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


const statObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const h3 = e.target.querySelector("h3");
    if(!h3) return;
    const target = +h3.dataset.target;
    if(e.isIntersecting){
      let count = 0;
      const tick = ()=>{
        count += Math.ceil(target/40);
        h3.textContent = (count < target ? count : target) + "+";
        if(count < target) requestAnimationFrame(tick);
      };
      tick();
    } else {
      // reset so it can play again next time
      h3.textContent = "0+";
      h3.setAttribute('data-count', 0);
    }
  });
},{threshold:.4});

document.querySelectorAll(".stat-card").forEach(c=>statObserver.observe(c));

// Animate numbers in the stats section (.stat-number)
(() => {
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  function parseParts(text) {
    const t = text.trim();
    const m = t.match(/^(\d+[\d,\.]*)(.*)$/);
    if (!m) return {num: 0, suffix: ''};
    return { num: parseFloat(m[1].toString().replace(/,/g, '')), suffix: (m[2] || '') };
  }

  function animateValue(el, from, to, duration, suffix) {
    const start = performance.now();
    const fixed = Number.isInteger(to) ? 0 : 1;

    function step(ts) {
      const t = Math.min(1, (ts - start) / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOut
      const val = Math.round((from + (to - from) * ease) * Math.pow(10, fixed)) / Math.pow(10, fixed);
      el.textContent = val.toLocaleString() + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const nums = statsSection.querySelectorAll('.stat-number');
      nums.forEach(span => {
        if (span.dataset.animated === 'true') return;
        const parts = parseParts(span.textContent || '0');
        const target = parts.num || 0;
        const suffix = parts.suffix || '';
        animateValue(span, 0, target, 1400, suffix);
        span.dataset.animated = 'true';
      });
      o.disconnect();
    });
  }, { threshold: 0.4 });

  obs.observe(statsSection);
})();
