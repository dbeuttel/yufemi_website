/* Yufemi homepage interactions. No dependencies; progressive enhancement only. */
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // Split headline into words for the staggered rise (animation #3)
  document.querySelectorAll('[data-split]').forEach((el) => {
    if (reduceMotion) { el.classList.add('is-split'); return; }
    const words = el.textContent.trim().split(/\s+/);
    const full = el.textContent.trim();
    el.innerHTML = `<span class="sr-only">${full}</span>` + words
      .map((w, i) => `<span class="w" aria-hidden="true" style="--i:${i}">${w}</span>`)
      .join(' ');
    el.classList.add('is-split');
  });

  // Sticky header shadow
  const header = document.querySelector('[data-header]');
  const onScrollHeader = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);

  // Mobile nav
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // Scroll reveals (animation #4)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // Timeline progress tied to scroll (animation #5)
  const timeline = document.querySelector('[data-timeline]');
  const steps = timeline ? [...timeline.querySelectorAll('.step')] : [];
  const updateTimeline = () => {
    if (!timeline) return;
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the timeline's top hits 75% of the viewport, 1 when its bottom hits 55%
    const start = vh * 0.75;
    const end = vh * 0.55;
    const total = rect.height + (start - end);
    const p = Math.min(1, Math.max(0, (start - rect.top) / total));
    timeline.style.setProperty('--progress', reduceMotion ? 1 : p.toFixed(3));
    steps.forEach((step, i) => {
      step.classList.toggle('is-reached', reduceMotion || p >= i / steps.length + 0.02);
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScrollHeader();
      updateTimeline();
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // Magnetic CTAs, desktop pointers only (animation #7)
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      const strength = 0.18;
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        btn.style.setProperty('--mx', `${x.toFixed(1)}px`);
        btn.style.setProperty('--my', `${y.toFixed(1)}px`);
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }
})();
