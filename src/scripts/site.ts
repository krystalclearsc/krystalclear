/**
 * Progressive enhancement only. Without this file every section is complete
 * and readable; with it we add the menu, the squeegee wipes and small motion.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header: menu toggle + scrolled state */
const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const panel = document.querySelector<HTMLElement>('[data-menu]');
if (toggle && panel) {
  const set = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };
  toggle.addEventListener('click', () => set(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { set(false); toggle.focus(); }
  });
  panel.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false); });
}
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* Once a glass is wiped, remove the fog layer so no blur keeps running */
document.querySelectorAll<HTMLElement>('.glass').forEach((g) => {
  g.addEventListener('animationend', (e) => { if ((e as AnimationEvent).animationName === 'wipe') g.classList.add('is-clear'); });
});
if (reduce) document.querySelectorAll('.glass').forEach((g) => g.classList.add('is-clear'));

/* Count-up for real figures only (the final number is already in the HTML) */
function countUp(el: HTMLElement) {
  const target = parseFloat(el.dataset.count || '0');
  const decimals = (el.dataset.count || '').includes('.') ? 1 : 0;
  const t0 = performance.now();
  const dur = 1400;
  const tick = (t: number) => {
    const k = Math.min(1, (t - t0) / dur);
    const v = target * (1 - Math.pow(1 - k, 3));
    el.textContent = v.toFixed(decimals);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* Hero video: starts only after the page has loaded (poster is the LCP); never with reduced motion */
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
const videoBtn = document.querySelector<HTMLButtonElement>('[data-video-toggle]');
if (heroVideo && !reduce) {
  const start = () => {
    heroVideo.preload = 'auto';
    heroVideo.play().then(() => heroVideo.classList.add('is-playing')).catch(() => {});
  };
  /* Start when the main thread is free, never during the first seconds of loading. */
  const later = () => setTimeout(() => ('requestIdleCallback' in window ? (window as any).requestIdleCallback(start, { timeout: 4000 }) : start()), 3000);
  if (document.readyState === 'complete') later();
  else window.addEventListener('load', later, { once: true });
}
videoBtn?.addEventListener('click', () => {
  if (!heroVideo) return;
  const playing = !heroVideo.paused;
  if (playing) heroVideo.pause(); else heroVideo.play().catch(() => {});
  videoBtn.setAttribute('aria-pressed', String(playing));
  videoBtn.querySelector('[data-video-label]')!.textContent = playing ? 'Play video' : 'Pause video';
});

/* Pause every looping animation (WCAG 2.2.2) */
document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const paused = document.documentElement.classList.toggle('motion-paused');
    document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((b) => {
      b.setAttribute('aria-pressed', String(paused));
      const l = b.querySelector('[data-motion-label]'); if (l) l.textContent = paused ? 'Play motion' : 'Pause motion';
    });
  });
});

/* Everything below is decoration: run it when the browser is idle after load,
   so it never competes with the first paint (keeps TBT low on phones). */
function enhance() {
  /* Split H2s into words (text stays in the HTML; words only slide up) */
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((h) => {
    if (reduce || !window.matchMedia('(min-width: 861px)').matches) return; // phones: no DOM rewrite, no relayout
    let i = 0;
    const walk = (node: Node) => {
      for (const child of [...node.childNodes]) {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          for (const part of (child.textContent || '').split(/(\s+)/)) {
            if (!part) continue;
            if (/^\s+$/.test(part)) { frag.append(part); continue; }
            const w = document.createElement('span'); w.className = 'w';
            const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--wi', String(i++));
            w.append(s); frag.append(w);
          }
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) walk(child);
      }
    };
    walk(h);
    h.setAttribute('data-rise', '');
  });

  /* Squeegee wipe + rise-in, triggered when an element enters the viewport */
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add(el.hasAttribute('data-fog') ? 'is-wiped' : 'is-in');
          if (el.hasAttribute('data-count')) countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );
    document.querySelectorAll<HTMLElement>('[data-fog], [data-rise], [data-count], [data-draw]').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll<HTMLElement>('[data-fog]').forEach((el) => el.classList.add('is-wiped'));
  }

  /* Scroll progress bar */
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (bar) {
    const upd = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--p', h > 0 ? (window.scrollY / h).toFixed(4) : '0');
    };
    let raf = 0;
    window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; upd(); }); }, { passive: true });
  }

  /* Cursor spotlight on cards (mouse only) */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll<HTMLElement>('.spot').forEach((c) => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', `${e.clientX - r.left}px`);
        c.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* Services list: the preview frame follows the hovered / focused row */
  const preview = document.querySelector<HTMLElement>('[data-svc-preview]');
  if (preview) {
    const frames = preview.querySelectorAll<HTMLElement>('[data-svc-frame]');
    const show = (i: string) => frames.forEach((f) => f.classList.toggle('is-active', f.dataset.svcFrame === i));
    document.querySelectorAll<HTMLElement>('[data-svc-row]').forEach((row) => {
      const i = row.dataset.svcRow!;
      row.addEventListener('mouseenter', () => show(i));
      row.addEventListener('focusin', () => show(i));
    });
  }

  /* Rooms: the sticky photo swaps as each room's checklist reaches the middle of the screen */
  const roomStage = document.querySelector<HTMLElement>('[data-room-stage]');
  if (roomStage && 'IntersectionObserver' in window) {
    const shots = roomStage.querySelectorAll<HTMLElement>('[data-room-shot]');
    const counter = roomStage.querySelector<HTMLElement>('[data-room-count]');
    const ro = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = (e.target as HTMLElement).dataset.room!;
          shots.forEach((s) => s.classList.toggle('is-active', s.dataset.roomShot === i));
          if (counter) counter.textContent = i.padStart(2, '0');
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    document.querySelectorAll<HTMLElement>('[data-room]').forEach((r) => ro.observe(r));
  }

  /* Process line draws as you scroll through the steps */
  const steps = document.querySelector<HTMLElement>('[data-steps]');
  if (steps && !reduce) {
    const update = () => {
      const r = steps.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height || 1)));
      steps.style.setProperty('--progress', p.toFixed(3));
    };
    let raf = 0;
    const onS = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    window.addEventListener('scroll', onS, { passive: true });
    window.addEventListener('resize', update);
  }
}
const idle = (cb: () => void) => ('requestIdleCallback' in window ? (window as any).requestIdleCallback(cb, { timeout: 2000 }) : setTimeout(cb, 300));
if (document.readyState === 'complete') idle(enhance);
else window.addEventListener('load', () => idle(enhance), { once: true });
