/* Yufemi Wellness homepage interactions. No dependencies; progressive enhancement only. */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // Split headline into words for the staggered rise
  document.querySelectorAll('[data-split]').forEach((el) => {
    if (!reduceMotion) {
      const full = el.textContent.trim();
      el.innerHTML = `<span class="sr-only">${full}</span>` + full.split(/\s+/)
        .map((w, i) => `<span class="w" aria-hidden="true" style="--i:${i}">${w}</span>`)
        .join(' ');
    }
    el.classList.add('is-split');
  });

  // Sticky header shadow
  const header = document.querySelector('[data-header]');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  // Scroll reveals + ingredient chips
  const targets = document.querySelectorAll('.reveal, [data-chips]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-visible'));
  }

  // Blend picker: tints the section with the chosen blend's color
  const blends = document.querySelector('[data-blends]');
  if (blends) {
    const buttons = blends.querySelectorAll('.blend');
    buttons.forEach((btn) => {
      const select = () => {
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        blends.style.setProperty('--accent', getComputedStyle(btn).getPropertyValue('--blend'));
      };
      btn.addEventListener('click', select);
      btn.addEventListener('pointerenter', () => {
        blends.style.setProperty('--accent', getComputedStyle(btn).getPropertyValue('--blend'));
      });
    });
  }

  // Magnetic CTAs (desktop pointers only)
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--mx', `${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px`);
        btn.style.setProperty('--my', `${((e.clientY - r.top - r.height / 2) * 0.18).toFixed(1)}px`);
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }
})();
