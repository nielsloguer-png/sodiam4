// SODIAM — interacções gerais: loader, scroll suave, header, reveals, contadores, cadeia horizontal, mapa.
document.documentElement.classList.add('js');
gsap.registerPlugin(ScrollTrigger);

/* ---------- Loader ---------- */
(() => {
  const el = document.getElementById('loader');
  if (!el) { addEventListener('DOMContentLoaded', intro); return; }
  const bar = el.querySelector('.loader__bar span'), pct = document.getElementById('loaderPct');
  const imgs = [...document.images].filter(i => i.loading !== 'lazy');
  let done = 0, gem = false, closed = false;
  const total = imgs.length + 1;
  const upd = () => {
    const v = Math.round(((done + (gem ? 1 : 0)) / total) * 100);
    bar.style.width = v + '%'; pct.textContent = v;
    if (v >= 100) close();
  };
  const close = () => { if (closed) return; closed = true; setTimeout(() => { el.classList.add('is-done'); intro(); }, 350); };
  imgs.forEach(i => { if (i.complete) done++; else i.addEventListener('load', () => { done++; upd(); }, { once: true }), i.addEventListener('error', () => { done++; upd(); }, { once: true }); });
  addEventListener('gem:ready', () => { gem = true; upd(); });
  upd();
  setTimeout(close, 4500); // salvaguarda
})();

function intro() {
  if (!document.getElementById('gem')) return;
  gsap.from('.hero__layer--a > *', { y: 50, opacity: 0, duration: 1.2, stagger: .09, ease: 'expo.out' });
  gsap.from('.hdr__main > *', { y: -20, opacity: 0, duration: 1, stagger: .06, ease: 'expo.out', delay: .1 });
  gsap.from('#gem', { opacity: 0, scale: .9, duration: 1.8, ease: 'expo.out' });
}

/* ---------- Scroll suave ---------- */
const lenis = new Lenis({ lerp: .1, smoothWheel: true });
window.lenis = lenis;
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const t = document.querySelector(id);
  if (!t) return;
  e.preventDefault();
  closeMenu();
  lenis.scrollTo(t, { offset: id === '#inicio' ? 0 : -60, duration: 1.6 });
}));

/* ---------- Header ---------- */
const hdr = document.getElementById('hdr');
let lastY = 0;
lenis.on('scroll', ({ scroll }) => {
  hdr.classList.toggle('is-scrolled', scroll > 40);
  hdr.classList.toggle('is-hidden', scroll > 600 && scroll > lastY && !document.body.classList.contains('menu-open'));
  lastY = scroll;
});
const navLinks = [...document.querySelectorAll('.nav a')];
navLinks.forEach(a => {
  const h = a.getAttribute('href');
  const sec = h.startsWith('#') ? document.querySelector(h) : null;
  if (sec) ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: s => s.isActive && navLinks.forEach(l => l.classList.toggle('is-on', l === a)) });
});

/* ---------- Menu móvel ---------- */
const burger = document.getElementById('burger'), mnav = document.getElementById('mnav');
function closeMenu() { mnav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); lenis.start(); }
burger.addEventListener('click', () => {
  const open = !mnav.classList.contains('is-open');
  mnav.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
  open ? lenis.stop() : lenis.start();
});

/* ---------- Reveals ---------- */
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
});
gsap.utils.toArray('.reveal-img').forEach(el => {
  const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
  tl.to(el, { clipPath: 'inset(0% 0 0% 0)', duration: 1.4, ease: 'expo.out' })
    .to(el.querySelector('img'), { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
});

/* ---------- Contadores ---------- */
const fmt = (v, d) => v.toLocaleString(document.documentElement.lang === 'en' ? 'en-GB' : 'pt-PT', { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: 'always' });
document.querySelectorAll('.count').forEach(el => {
  const to = +el.dataset.to, d = +(el.dataset.dec || 0), o = { v: 0 };
  ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () =>
    gsap.to(o, { v: to, duration: 2.2, ease: 'power3.out', onUpdate: () => el.textContent = fmt(o.v, d) }) });
});

/* ---------- Cadeia de valor horizontal ---------- */
const mm = gsap.matchMedia();
mm.add('(min-width: 761px)', () => {
  if (!document.getElementById('chainTrack')) return;
  const track = document.getElementById('chainTrack'), bar = document.getElementById('chainBar'), now = document.getElementById('chainNow');
  const n = track.children.length;
  const dist = () => track.scrollWidth - innerWidth;
  const tw = gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: {
      trigger: '#cadeia', pin: '.chain__pin', start: 'top top', end: () => '+=' + dist(), scrub: 1, invalidateOnRefresh: true,
      onUpdate: s => { bar.style.width = (20 + s.progress * 80) + '%'; now.textContent = String(Math.min(n, 1 + Math.floor(s.progress * n * .999))).padStart(2, '0'); }
    }
  });
  track.querySelectorAll('.stage__img img').forEach(img => {
    gsap.fromTo(img, { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: img.closest('.stage'), containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } });
  });
});

/* ---------- Parallax leilões ---------- */
if (document.querySelector('.auction')) gsap.to('.auction__bg', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.auction', start: 'top bottom', end: 'bottom top', scrub: true } });

/* ---------- Filtro de documentos ---------- */
document.querySelectorAll('.docs__tabs button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.docs__tabs button').forEach(x => x.classList.toggle('is-on', x === b));
  document.querySelectorAll('.doc-list li').forEach(li => li.classList.toggle('is-hidden', b.dataset.f !== 'all' && li.dataset.c !== b.dataset.f));
}));

/* ---------- Idioma (demonstração) ---------- */
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => document.querySelectorAll('.lang button').forEach(x => x.classList.toggle('is-on', x === b))));

/* ---------- Mapa de Angola ---------- */
(() => {
  const A = window.ANGOLA, wrap = document.getElementById('mapWrap'), info = document.getElementById('mapInfo');
  if (!A || !wrap) return;
  const main = { 'Lunda Norte': 'Principal pólo kimberlítico e aluvionar do país.', 'Lunda Sul': 'Sede do PDDS em Saurimo e de grandes minas kimberlíticas.' };
  const other = { 'Malanje': 'Ocorrências aluvionares e projectos de prospecção.', 'Moxico': 'Áreas de prospecção e exploração aluvionar.', 'Moxico Leste': 'Ocorrências aluvionares junto às Lundas.', 'Bié': 'Ocorrências kimberlíticas em estudo.', 'Cuando': 'Áreas de prospecção diamantífera.', 'Cubango': 'Áreas de prospecção diamantífera.' };
  const pj = (lon, lat) => [(lon - A.minx) * A.k * A.sx, (A.maxy - lat) * A.sx];
  const pins = [
    { n: 'Luanda', s: 'Sede · SODIAM, E.P.', ll: [13.234, -8.839], dx: -14, anchor: 'end' },
    { n: 'Saurimo · PDDS', s: 'PDDS · Pólo de lapidação', ll: [20.39, -9.66], dx: -14, anchor: 'end', light: true },
  ];
  let svg = `<svg viewBox="-10 -10 ${A.w + 20} ${A.h + 20}" role="img" aria-label="Mapa de Angola com as províncias diamantíferas">`;
  for (const p of A.p) {
    const cls = main[p.name] ? 'prov prov--1' : other[p.name] ? 'prov prov--2' : 'prov';
    svg += `<path class="${cls}" d="${p.d}" data-n="${p.name}"><title>${p.name}</title></path>`;
  }
  for (const p of A.p) if (main[p.name]) svg += `<text class="plabel" x="${p.cx}" y="${p.cy - (p.name === 'Lunda Sul' ? 30 : 0)}" text-anchor="middle">${p.name}</text>`;
  for (const q of pins) {
    const [x, y] = pj(...q.ll);
    svg += `<g class="pin${q.light ? ' pin--light' : ''}"><circle class="r" cx="${x}" cy="${y}" r="9"/><circle class="p" cx="${x}" cy="${y}" r="4.5"/><text x="${x + q.dx}" y="${y + 4}" text-anchor="${q.anchor}">${q.n}</text></g>`;
  }
  wrap.innerHTML = svg + '</svg>';
  const def = info.innerHTML;
  wrap.querySelectorAll('.prov').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const n = el.dataset.n, d = main[n] || other[n];
      info.innerHTML = `<span class="mono">${main[n] ? 'Província produtora' : other[n] ? 'Ocorrências diamantíferas' : 'Província'}</span><b>${n}</b>${d ? `<p>${d}</p>` : ''}`;
    });
    el.addEventListener('mouseleave', () => info.innerHTML = def);
  });
  gsap.from(wrap.querySelectorAll('.prov'), { opacity: 0, y: 10, duration: .9, stagger: .03, ease: 'expo.out', scrollTrigger: { trigger: wrap, start: 'top 75%' } });
})();

/* ---------- Header claro sobre secção escura ---------- */
if (document.querySelector('.auction')) ScrollTrigger.create({ trigger: '.auction', start: 'top 80px', end: 'bottom 80px', onToggle: s => hdr.classList.toggle('is-dark', s.isActive) });

addEventListener('load', () => ScrollTrigger.refresh());

/* ---------- Pré-visualização: ?y=0.5 posiciona o scroll (fracção da página) ---------- */
(() => {
  const y = new URLSearchParams(location.search).get('y');
  if (y === null) return;
  document.getElementById('loader').classList.add('is-done');
  setTimeout(() => { const v = +y; lenis.scrollTo(v <= 1 ? v * (document.documentElement.scrollHeight - innerHeight) : v, { immediate: true }); ScrollTrigger.refresh(); }, 900);
})();
