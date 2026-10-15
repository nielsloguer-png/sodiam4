// Hero: diamante hiper-realista (vídeo Magnific → sequência de frames) guiado pelo scroll.
// Do cristal em bruto ao brilhante lapidado, sobre fundo escuro; no fim funde para o branco do site.
(() => {
  const SEQ = window.GEM_SEQ || { count: 192, desktop: 'assets/gem/desktop/', mobile: 'assets/gem/mobile/', cut: 0.3 };
  const canvas = document.getElementById('gem');
  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('inicio');
  const root = hero.querySelector('.hero__sticky');
  const flash = document.getElementById('flash');
  const hud = document.getElementById('hud');
  const hudState = document.getElementById('hudState');
  const hudFacets = document.getElementById('hudFacets');
  const hudDeg = document.getElementById('hudDeg');
  const bar = document.getElementById('heroBar');
  const steps = hero.querySelectorAll('.hero__progress li');
  const layers = [...hero.querySelectorAll('.hero__layer')].map(el => ({ el, a: +el.dataset.from, b: +el.dataset.to }));

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

  // ---------- carregamento progressivo dos frames ----------
  const mobile = matchMedia('(max-width: 760px)').matches;
  const dir = mobile ? SEQ.mobile : SEQ.desktop;
  const frames = new Array(SEQ.count);
  const name = i => dir + 'f' + String(i + 1).padStart(4, '0') + '.jpg';
  function load(i) {
    return new Promise(res => {
      const im = new Image();
      im.decoding = 'async';
      im.onload = () => { (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).then(() => { frames[i] = im; res(); }); };
      im.onerror = () => res();
      im.src = name(i);
    });
  }
  // primeiro frame, depois amostragem grosseira (scroll responsivo cedo) e por fim o resto
  const seen = new Set([0]), order = [];
  for (let step = 16; step >= 1; step >>= 1)
    for (let i = 0; i < SEQ.count; i += step) if (!seen.has(i)) { seen.add(i); order.push(i); }
  (async () => {
    await load(0);
    window.dispatchEvent(new Event('gem:ready'));
    await Promise.all(Array.from({ length: 4 }, async () => { while (order.length) await load(order.shift()); }));
  })();

  function nearest(i) {
    if (frames[i]) return frames[i];
    for (let d = 1; d < SEQ.count; d++) {
      if (frames[i - d]) return frames[i - d];
      if (frames[i + d]) return frames[i + d];
    }
    return null;
  }

  // ---------- desenho (diamante centrado; arestas esbatidas pré-calculadas) ----------
  let W = 0, H = 0, last = -1, feather = null, fKey = '';
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, mobile ? 2 : 1.5);
    W = root.clientWidth; H = root.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    const ds = mobile ? W * 0.78 : Math.min(H * 0.72, W * 0.44);
    hud.style.width = hud.style.height = ds.toFixed(0) + 'px';
    last = -1;
  }
  // máscara de esbatimento das arestas, gerada uma vez por tamanho (evita gradientes a cada frame)
  function getFeather(w, h) {
    const k = Math.round(w) + 'x' + Math.round(h);
    if (k === fKey) return feather;
    fKey = k; feather = document.createElement('canvas');
    feather.width = Math.ceil(w); feather.height = Math.ceil(h);
    const c = feather.getContext('2d'), fx = w * 0.18, fy = h * 0.16;
    const band = (x0, y0, x1, y1, rx, ry, rw, rh) => { const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(rx, ry, rw, rh); };
    band(0, 0, fx, 0, 0, 0, fx, h); band(w, 0, w - fx, 0, w - fx, 0, fx, h);
    band(0, 0, 0, fy, 0, 0, w, fy); band(0, h, 0, h - fy, 0, h - fy, w, fy);
    return feather;
  }
  // posição horizontal do diamante (fracção da largura) — alterna com o lado do texto
  const XK = [[0, 0.64], [0.19, 0.64], [0.25, 0.36], [0.45, 0.36], [0.51, 0.64], [0.73, 0.64], [0.8, 0.5]];
  function track(K, x) {
    if (x <= K[0][0]) return K[0][1];
    for (let k = 1; k < K.length; k++) if (x <= K[k][0]) { const [a, va] = K[k - 1], [b, vb] = K[k]; return va + (vb - va) * smooth(a, b, x); }
    return K[K.length - 1][1];
  }
  let geo = { x: 0, y: 0, w: 0, h: 0 };
  function draw(im, zoom, xf, im2, mix) {
    const cw = canvas.width, ch = canvas.height;
    const s = (mobile ? (cw / im.naturalWidth) * 1.12 : (ch / im.naturalHeight) * 0.72) * zoom;
    const w = im.naturalWidth * s, h = im.naturalHeight * s;
    const cx = mobile ? cw / 2 : cw * xf, cy = mobile ? ch * 0.27 : ch * 0.5;
    const x = cx - w / 2, y = cy - h / 2;
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(im, x, y, w, h);
    if (im2 && mix > 0.02) { ctx.globalAlpha = mix; ctx.drawImage(im2, x, y, w, h); ctx.globalAlpha = 1; }
    ctx.drawImage(getFeather(w, h), x, y, w, h);
    geo = { cx: cx * W / cw, cy: cy * H / ch };
  }
  addEventListener('resize', resize);
  resize();

  // ---------- retícula ----------
  const ticks = document.getElementById('ticks');
  if (ticks) {
    let s = '';
    for (let i = 0; i < 120; i++) {
      const a = (i / 120) * Math.PI * 2, L = i % 10 === 0 ? 14 : 6;
      const x1 = 200 + Math.cos(a) * 190, y1 = 200 + Math.sin(a) * 190, x2 = 200 + Math.cos(a) * (190 - L), y2 = 200 + Math.sin(a) * (190 - L);
      s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="currentColor" stroke-width="${i % 10 === 0 ? 1 : .5}"/>`;
    }
    ticks.innerHTML = s;
  }

  let sp = 0, visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);

  // escreve no DOM só quando o valor muda (evita recalcular estilos a cada frame)
  const memo = new Map();
  const set = (el, prop, v) => { const k = el; let m = memo.get(k); if (!m) memo.set(k, m = {}); if (m[prop] !== v) { m[prop] = v; el.style[prop] = v; } };
  const txt = (el, v) => { if (el.textContent !== v) el.textContent = v; };
  let onHero = null, stepOn = -1;

  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    const r = hero.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - innerHeight)) || 0;
    // o Lenis já suaviza o scroll; aqui só um ligeiro amortecimento
    sp += (p - sp) * 0.22;
    if (Math.abs(p - sp) < 0.0001) sp = p;

    const K = SEQ.keys || [[0, 0], [0.9, SEQ.count - 1]];
    let f = K[K.length - 1][1];
    for (let k = 1; k < K.length; k++) if (sp <= K[k][0]) { const [a, fa] = K[k - 1], [b, fb] = K[k]; f = fa + (fb - fa) * clamp((sp - a) / (b - a)); break; }
    f = Math.min(SEQ.count - 1, Math.max(0, f));
    const i0 = Math.floor(f), i1 = Math.min(SEQ.count - 1, i0 + 1), mix = f - i0;
    const idx = Math.round(f);
    const zoom = 1 + smooth(0.72, 1, sp) * 0.3;
    const xf = track(XK, sp);
    const key = Math.round(f * 40) + Math.round(zoom * 1000) * 1e5 + Math.round(xf * 2000) * 1e9;
    const im = nearest(i0), im2 = frames[i1];
    if (im && key !== last) { draw(im, zoom, xf, im2, mix); last = frames[i0] && im2 ? key : -1; }

    set(flash, 'opacity', smooth(0.88, 0.99, sp).toFixed(2));

    // HUD — só transform/opacity (composição na GPU)
    if (geo.cx !== undefined) set(hud, 'transform', `translate3d(${(geo.cx).toFixed(0)}px,${(geo.cy).toFixed(0)}px,0) translate(-50%,-50%)`);
    set(hud, 'opacity', (1 - smooth(0.8, 0.88, sp)).toFixed(2));
    const st0 = SEQ.stages || [30, 250];
    txt(hudState, idx < st0[0] ? 'BRUTO' : idx < st0[1] ? 'EM LAPIDAÇÃO' : 'LAPIDADO');
    const fc = Math.round(57 * clamp((idx - st0[0]) / (st0[1] - st0[0])));
    txt(hudFacets, fc ? String(fc).padStart(2, '0') : '—');
    txt(hudDeg, String(Math.round((f / (SEQ.count - 1)) * 720) % 360).padStart(3, '0') + '°');

    // camadas de texto
    for (const L of layers) {
      const fadeIn = L.a === 0 ? 1 : smooth(L.a, L.a + 0.04, sp);
      const fadeOut = L.b > 1 ? 1 : 1 - smooth(L.b - 0.04, L.b, sp);
      const o = Math.min(fadeIn, fadeOut);
      set(L.el, 'opacity', o.toFixed(2));
      set(L.el, 'visibility', o > 0.01 ? 'visible' : 'hidden');
      set(L.el, 'translate', `0 ${((1 - o) * (sp < L.a + 0.04 ? 40 : -40)).toFixed(0)}px`);
      set(L.el, 'pointerEvents', o > 0.5 ? 'auto' : 'none');
    }
    set(bar, 'transform', `scaleX(${p.toFixed(3)})`);
    const st = p < .21 ? 0 : p < .48 ? 1 : p < .76 ? 2 : 3;
    if (st !== stepOn) { stepOn = st; steps.forEach((li, i) => li.classList.toggle('is-on', i === st)); }
    const oh = r.bottom > 80 && sp < 0.9;
    if (oh !== onHero) { onHero = oh; document.body.classList.toggle('on-hero', oh); }
  }
  frame();
})();
