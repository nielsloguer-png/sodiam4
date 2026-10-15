// Sala de Licitação ao Vivo — simulação ilustrativa (estilo bolsa de valores):
// faixa de cotações, lote em destaque com cronómetro, gráfico em tempo real, livro de ordens
// e globo de pontos com arcos dos compradores até Luanda.
(() => {
  const root = document.getElementById('live');
  if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => root.querySelector(s);
  const fmtM = v => v >= 1e6 ? 'US$ ' + (v / 1e6).toLocaleString('pt-PT', { minimumFractionDigits: 3, maximumFractionDigits: 3 }) + ' M'
    : 'US$ ' + (Math.round(v / 100) * 100).toLocaleString('pt-PT');
  const fmtK = v => 'US$ ' + Math.round(v).toLocaleString('pt-PT');
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[Math.floor(Math.random() * a.length)];

  // ---------- dados da simulação ----------
  const CITIES = [
    { n: 'Antuérpia', c: 'BE', ll: [4.40, 51.22], w: 5 }, { n: 'Dubai', c: 'AE', ll: [55.27, 25.20], w: 5 },
    { n: 'Mumbai', c: 'IN', ll: [72.88, 19.08], w: 4 }, { n: 'Surat', c: 'IN', ll: [72.83, 21.17], w: 2 },
    { n: 'Ramat Gan', c: 'IL', ll: [34.82, 32.08], w: 3 }, { n: 'Nova Iorque', c: 'US', ll: [-74.0, 40.71], w: 2 },
    { n: 'Hong Kong', c: 'HK', ll: [114.17, 22.32], w: 2 }, { n: 'Joanesburgo', c: 'ZA', ll: [28.05, -26.2], w: 1 },
    { n: 'Xangai', c: 'CN', ll: [121.47, 31.23], w: 1 }, { n: 'Gaborone', c: 'BW', ll: [25.91, -24.65], w: 1 },
    { n: 'Banguecoque', c: 'TH', ll: [100.5, 13.75], w: 1 }, { n: 'Luanda', c: 'AO', ll: [13.23, -8.84], w: 1 },
  ];
  const POOL = CITIES.flatMap(c => Array(c.w).fill(c));
  const LUANDA = [13.23, -8.84];
  // valor de reserva = quilates × preço por quilate (ordens de grandeza dos leilões de pedras especiais)
  const LOTS = [
    { id: '07', ct: 46.21, d: 'Branco · Octaedro', pc: 17500 }, { id: '12', ct: 114.94, d: 'Branco · Irregular', pc: 14800 },
    { id: '21', ct: 18.76, d: 'Branco · Octaedro', pc: 21000 }, { id: '03', ct: 23.48, d: 'Amarelo claro · Macle', pc: 9200 },
    { id: '15', ct: 32.30, d: 'Branco · Dodecaedro', pc: 16400 }, { id: '09', ct: 12.05, d: 'Castanho claro · Irregular', pc: 6800 },
  ].map(l => ({ ...l, base: Math.round(l.ct * l.pc / 1000) * 1000 }));
  const code = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Math.floor(rnd(10, 99));

  // ---------- faixa de cotações ----------
  const tape = $('.lv-tape__in');
  const tapeItem = l => { const ch = rnd(-0.8, 2.6); return `<span><b>LOTE ${l.id}</b> ${l.ct.toLocaleString('pt-PT')} ct <em>${fmtM(l.base * rnd(1.0, 1.12))}</em> <i class="${ch >= 0 ? 'up' : 'dn'}">${ch >= 0 ? '▲' : '▼'} ${Math.abs(ch).toFixed(2).replace('.', ',')}%</i></span>`; };
  const fillTape = () => { const s = [...LOTS, ...LOTS].map(tapeItem).join('') + `<span><b>ÍNDICE SODIAM</b> US$ 101,70/ct <i class="up">▲ 0,31%</i></span>`; tape.innerHTML = s + s; };
  fillTape();

  // ---------- estado do lote ----------
  const el = { lot: $('#lvLot'), ct: $('#lvCt'), desc: $('#lvDesc'), price: $('#lvPrice'), delta: $('#lvDelta'), bids: $('#lvBids'),
    timer: $('#lvTimer'), feed: $('#lvFeed'), stamp: $('#lvStamp'), card: $('.lv-lot'), heat: $('#lvHeat i'), bidders: $('#lvBidders') };
  let lotIdx = 0, lot, price, start, nBids, series, endAt, closed = false, bidderSet;
  function newLot() {
    lot = LOTS[lotIdx++ % LOTS.length];
    price = start = lot.base; nBids = 0; series = [price]; closed = false; bidderSet = new Set();
    endAt = performance.now() + 90000;
    el.lot.textContent = lot.id; el.ct.textContent = lot.ct.toLocaleString('pt-PT', { minimumFractionDigits: 2 }) + ' ct';
    el.desc.textContent = lot.d; el.feed.innerHTML = ''; el.stamp.classList.remove('is-on'); el.card.classList.remove('is-closed');
    // abre com histórico: alguns lances já registados e cotação com oscilações
    for (let i = 0; i < 10; i++) series.push(series[series.length - 1] * (1 + rnd(-0.0008, 0.0016)));
    for (let i = 0; i < 2; i++) bid(true);
    shown = price; render(true);
  }

  // valor animado (efeito de contador)
  let shown = 0;
  function render(instant) {
    if (instant) shown = price;
    el.price.textContent = fmtM(shown);
    const ch = (price / start - 1) * 100;
    el.delta.textContent = `▲ ${ch.toFixed(2).replace('.', ',')}%`;
    el.bids.textContent = nBids;
    el.bidders.textContent = bidderSet.size;
  }

  function bid(silent) {
    if (closed) return;
    const city = pick(POOL);
    const inc = Math.max(500, Math.round(price * rnd(0.0025, 0.012) / 500) * 500);
    price += inc; nBids++;
    // micro-oscilações entre lances, como numa cotação de bolsa
    const prev = series[series.length - 1];
    series.push(prev + (price - prev) * rnd(0.3, 0.6), price * (1 - rnd(0, 0.001)), price);
    while (series.length > 90) series.shift();
    const who = `${city.c}-${code()}`; bidderSet.add(who);
    const li = document.createElement('li');
    li.innerHTML = `<span class="mono">${new Date().toLocaleTimeString('pt-PT')}</span><b>${who}</b><span>${city.n}</span><em>${fmtM(price)}</em><i>+${fmtK(inc)}</i>`;
    el.feed.prepend(li); requestAnimationFrame(() => li.classList.add('is-in'));
    while (el.feed.children.length > 7) el.feed.lastChild.remove();
    if (!silent) { el.card.classList.remove('flash'); void el.card.offsetWidth; el.card.classList.add('flash'); }
    if (!silent) { arcs.push({ from: city.ll, t: 0 }); heat = Math.min(1, heat + 0.12); }
    // prolongamento anti-sniping: lance nos últimos 10 s dá mais 10 s
    const left = endAt - performance.now();
    if (left < 10000) endAt += Math.min(10000 - left, 5000);
  }

  // ---------- gráfico ----------
  const cv = $('#lvChart'), cx = cv.getContext('2d');
  function sizeChart() { const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio, 2); cv.width = r.width * d; cv.height = r.height * d; }
  function drawChart() {
    const w = cv.width, h = cv.height, pad = h * 0.12;
    cx.clearRect(0, 0, w, h);
    cx.strokeStyle = 'rgba(255,255,255,.06)'; cx.lineWidth = 1;
    for (let i = 1; i < 5; i++) { const y = (h / 5) * i; cx.beginPath(); cx.moveTo(0, y); cx.lineTo(w, y); cx.stroke(); }
    if (series.length < 2) return;
    const lo = Math.min(...series), hi = Math.max(...series), span = Math.max(hi - lo, start * 0.06);
    const mn = lo - span * 0.08, mx = lo + span * 1.1;
    const X = i => (i / (series.length - 1)) * w, Y = v => h - pad - ((v - mn) / (mx - mn || 1)) * (h - pad * 2);
    const g = cx.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(201,179,138,.35)'); g.addColorStop(1, 'rgba(201,179,138,0)');
    cx.beginPath(); cx.moveTo(0, h);
    series.forEach((v, i) => cx.lineTo(X(i), Y(v)));
    cx.lineTo(w, h); cx.closePath(); cx.fillStyle = g; cx.fill();
    cx.beginPath(); series.forEach((v, i) => i ? cx.lineTo(X(i), Y(v)) : cx.moveTo(X(i), Y(v)));
    cx.strokeStyle = '#c9b38a'; cx.lineWidth = 2 * (cv.width / cv.clientWidth); cx.shadowColor = 'rgba(201,179,138,.8)'; cx.shadowBlur = 12; cx.stroke(); cx.shadowBlur = 0;
    const lx = X(series.length - 1), ly = Y(series[series.length - 1]), pr = (performance.now() / 600) % 1;
    cx.fillStyle = `rgba(201,179,138,${1 - pr})`; cx.beginPath(); cx.arc(lx, ly, 4 + pr * 14, 0, 7); cx.fill();
    cx.fillStyle = '#fff'; cx.beginPath(); cx.arc(lx, ly, 4, 0, 7); cx.fill();
  }

  // ---------- globo de pontos ----------
  const gv = $('#lvGlobe'), gx = gv.getContext('2d');
  const DOTS = (window.WORLD_DOTS || []).map(([lo, la]) => toV(lo, la));
  function toV(lo, la) { const a = lo * Math.PI / 180, b = la * Math.PI / 180; return [Math.cos(b) * Math.sin(a), Math.sin(b), Math.cos(b) * Math.cos(a)]; }
  const LV = toV(...LUANDA);
  let rot = -0.35, arcs = [], heat = 0;
  const tilt = 0.32;
  function proj(v, R, ox, oy) {
    const ca = Math.cos(rot), sa = Math.sin(rot);
    let x = v[0] * ca + v[2] * sa, z = -v[0] * sa + v[2] * ca, y = v[1];
    const cb = Math.cos(tilt), sb = Math.sin(tilt);
    const y2 = y * cb - z * sb, z2 = y * sb + z * cb;
    return [ox + x * R, oy - y2 * R, z2];
  }
  function sizeGlobe() { const r = gv.getBoundingClientRect(), d = Math.min(devicePixelRatio, 2); gv.width = r.width * d; gv.height = r.height * d; }
  function slerp(a, b, t) {
    const d = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]))), s = Math.sin(d) || 1;
    const k1 = Math.sin((1 - t) * d) / s, k2 = Math.sin(t * d) / s;
    return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
  }
  function drawGlobe(dt) {
    const w = gv.width, h = gv.height, R = Math.min(w, h) * 0.46, ox = w / 2, oy = h / 2 - h * 0.03;
    // girar para manter Luanda à vista, com oscilação suave
    rot += dt * 0.00012;
    gx.clearRect(0, 0, w, h);
    const halo = gx.createRadialGradient(ox, oy, R * 0.6, ox, oy, R * 1.25);
    halo.addColorStop(0, 'rgba(201,179,138,0)'); halo.addColorStop(0.8, `rgba(201,179,138,${0.06 + heat * 0.1})`); halo.addColorStop(1, 'rgba(201,179,138,0)');
    gx.fillStyle = halo; gx.fillRect(0, 0, w, h);
    gx.strokeStyle = 'rgba(255,255,255,.08)'; gx.lineWidth = 1; gx.beginPath(); gx.arc(ox, oy, R, 0, 7); gx.stroke();
    const ds = Math.max(1.2, R / 130);
    for (const v of DOTS) {
      const [x, y, z] = proj(v, R, ox, oy);
      if (z < -0.05) continue;
      gx.fillStyle = `rgba(255,255,255,${0.22 + z * 0.7})`;
      gx.fillRect(x - ds / 2, y - ds / 2, ds, ds);
    }
    // cidades
    for (const c of CITIES) {
      const [x, y, z] = proj(toV(...c.ll), R, ox, oy); if (z < 0) continue;
      gx.fillStyle = c.n === 'Luanda' ? '#c9b38a' : 'rgba(255,255,255,.7)';
      gx.beginPath(); gx.arc(x, y, c.n === 'Luanda' ? 4 * ds : 2 * ds, 0, 7); gx.fill();
    }
    // Luanda pulsa
    const [lx, ly, lz] = proj(LV, R, ox, oy);
    if (lz > 0) { const p = (performance.now() / 1400) % 1; gx.strokeStyle = `rgba(201,179,138,${1 - p})`; gx.lineWidth = 1.5 * ds; gx.beginPath(); gx.arc(lx, ly, (4 + p * 22) * ds, 0, 7); gx.stroke(); }
    // arcos dos lances
    arcs = arcs.filter(a => (a.t += dt / 1800) < 1.6);
    for (const a of arcs) {
      const A = toV(...a.from), N = 48, head = Math.min(1, a.t), tail = Math.max(0, a.t - 0.6);
      gx.beginPath();
      for (let i = 0; i <= N; i++) {
        const t = tail + (head - tail) * (i / N);
        const v = slerp(A, LV, t), lift = 1 + Math.sin(Math.PI * t) * 0.28;
        const [x, y, z] = proj([v[0] * lift, v[1] * lift, v[2] * lift], R, ox, oy);
        i ? gx.lineTo(x, y) : gx.moveTo(x, y);
      }
      const fade = a.t > 1 ? 1 - (a.t - 1) / 0.6 : 1;
      gx.strokeStyle = `rgba(201,179,138,${0.9 * fade})`; gx.lineWidth = 1.8 * ds; gx.shadowColor = '#c9b38a'; gx.shadowBlur = 10 * ds; gx.stroke(); gx.shadowBlur = 0;
      if (a.t <= 1) {
        const v = slerp(A, LV, head), lift = 1 + Math.sin(Math.PI * head) * 0.28;
        const [x, y] = proj([v[0] * lift, v[1] * lift, v[2] * lift], R, ox, oy);
        gx.fillStyle = '#fff'; gx.beginPath(); gx.arc(x, y, 2.6 * ds, 0, 7); gx.fill();
      }
    }
  }

  // ---------- ciclo ----------
  let running = false, last = 0, nextBid = 0;
  function loop(t) {
    if (!running) return;
    requestAnimationFrame(loop);
    const dt = Math.min(64, t - (last || t)); last = t;
    // lances: mais rápidos à medida que o tempo acaba (como numa bolsa em fecho)
    const left = Math.max(0, endAt - t);
    if (!closed && t > nextBid) { bid(); nextBid = t + rnd(4000, 9000) * (0.55 + left / 90000 * 0.5); }
    if (!closed && left <= 0) {
      closed = true; el.card.classList.add('is-closed'); el.stamp.classList.add('is-on');
      setTimeout(newLot, 5200);
    }
    const s = Math.ceil(left / 1000);
    el.timer.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    el.timer.classList.toggle('is-hot', s <= 10 && !closed);
    shown += (price - shown) * 0.12; render();
    heat *= 0.985; el.heat.style.transform = `scaleX(${(0.15 + heat * 0.85).toFixed(3)})`;
    drawChart(); drawGlobe(dt);
  }
  function resize() { sizeChart(); sizeGlobe(); }
  addEventListener('resize', resize);
  newLot(); resize();
  if (reduce) { for (let i = 0; i < 6; i++) bid(); render(true); drawChart(); drawGlobe(0); return; }
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) { running = true; last = 0; resize(); requestAnimationFrame(loop); }
    else if (!e.isIntersecting) running = false;
  }, { rootMargin: '100px' }).observe(root);
})();
