// Blog "Perspectivas": listagem com filtros/pesquisa (blog.html) e página de artigo (artigo.html?a=slug).
(() => {
  const P = (window.POSTS || []).slice().sort((a, b) => b.date.localeCompare(a.date));
  const M = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const fdate = d => { const [y, m, dd] = d.split('-'); return `${+dd} ${M[+m - 1]} ${y}`; };
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const card = p => `<article class="card bcard"><a href="artigo.html?a=${p.slug}">
      <div class="card__img"><img src="${p.img}" alt="" loading="lazy"></div>
      <div class="card__meta mono"><span>${p.cat}</span><time datetime="${p.date}">${fdate(p.date)}</time></div>
      <h3>${esc(p.title)}</h3><p class="bcard__lead">${esc(p.lead)}</p>
      <span class="bcard__read mono">${p.read} min de leitura →</span></a></article>`;
  const reveal = root => gsap.fromTo(root.querySelectorAll('.bcard'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .9, stagger: .06, ease: 'expo.out' });

  // ---------- destaque na página inicial ----------
  const home = document.getElementById('homeBlog');
  if (home) {
    const [f, ...rest] = P;
    home.innerHTML = `<a class="hb-feat" href="artigo.html?a=${f.slug}">
        <div class="hb-feat__img"><img src="${f.img}" alt="" loading="lazy"></div>
        <div class="hb-feat__txt"><span class="mono">${f.cat} · ${fdate(f.date)}</span><h3>${esc(f.title)}</h3><p>${esc(f.lead)}</p><span class="link">Ler artigo <span>→</span></span></div></a>
      <ol class="hb-list">${rest.slice(0, 4).map((p, i) => `<li><a href="artigo.html?a=${p.slug}">
        <span class="hb-list__n mono">0${i + 2}</span>
        <div><span class="mono">${p.cat} · ${fdate(p.date)}</span><b>${esc(p.title)}</b></div>
        <div class="hb-list__img"><img src="${p.img}" alt="" loading="lazy"></div></a></li>`).join('')}</ol>`;
    gsap.from(home.children, { opacity: 0, y: 40, duration: 1.1, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: home, start: 'top 85%' } });
  }

  // ---------- listagem ----------
  const grid = document.getElementById('grid');
  if (grid) {
    const cats = ['Todos', ...new Set(P.map(p => p.cat))];
    let cat = 'Todos', q = '';
    const catsEl = document.getElementById('cats');
    catsEl.innerHTML = cats.map(c => `<button class="${c === cat ? 'is-on' : ''}" data-c="${c}">${c}</button>`).join('');
    const feat = P.find(p => p.featured) || P[0];
    document.getElementById('featured').innerHTML = `<a class="bfeat" href="artigo.html?a=${feat.slug}">
      <div class="bfeat__img"><img src="${feat.img}" alt=""></div>
      <div class="bfeat__txt"><span class="mono">Em destaque · ${feat.cat} · ${fdate(feat.date)}</span>
      <h2>${esc(feat.title)}</h2><p>${esc(feat.lead)}</p><span class="link">Ler artigo <span>→</span></span></div></a>`;
    const render = () => {
      const list = P.filter(p => p !== feat || cat !== 'Todos' || q)
        .filter(p => cat === 'Todos' || p.cat === cat)
        .filter(p => !q || (p.title + ' ' + p.lead + ' ' + p.cat).toLowerCase().includes(q));
      grid.innerHTML = list.map(card).join('');
      document.getElementById('empty').hidden = list.length > 0;
      document.getElementById('featured').style.display = cat === 'Todos' && !q ? '' : 'none';
      reveal(grid);
    };
    catsEl.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      cat = b.dataset.c; catsEl.querySelectorAll('button').forEach(x => x.classList.toggle('is-on', x === b)); render();
    });
    document.getElementById('q').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); render(); });
    render();
  }

  // ---------- artigo ----------
  const art = document.getElementById('art');
  if (art) {
    const slug = new URLSearchParams(location.search).get('a');
    const p = P.find(x => x.slug === slug) || P[0];
    document.title = p.title + ' — SODIAM, E.P.';
    document.getElementById('meta').innerHTML = `<span>${p.cat}</span><time datetime="${p.date}">${fdate(p.date)}</time><span>${p.read} min de leitura</span>`;
    document.getElementById('title').textContent = p.title;
    document.getElementById('lead').textContent = p.lead;
    const img = document.getElementById('img'); img.src = p.img; img.alt = p.title;
    document.getElementById('body').innerHTML = p.body.map(([t, x]) =>
      t === 'h2' ? `<h2>${esc(x)}</h2>` : t === 'quote' ? `<blockquote>“${esc(x)}”</blockquote>` : `<p>${esc(x)}</p>`).join('');
    const url = encodeURIComponent(location.href), tt = encodeURIComponent(p.title);
    document.getElementById('shLi').href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    document.getElementById('shX').href = `https://x.com/intent/post?url=${url}&text=${tt}`;
    document.getElementById('shWa').href = `https://wa.me/?text=${tt}%20${url}`;
    ['shLi', 'shX', 'shWa'].forEach(id => { const a = document.getElementById(id); a.target = '_blank'; a.rel = 'noopener'; });
    document.getElementById('shCopy').addEventListener('click', e => { navigator.clipboard?.writeText(location.href); e.target.textContent = 'Copiado ✓'; });
    const more = document.getElementById('more');
    more.innerHTML = P.filter(x => x !== p).sort((a, b) => (b.cat === p.cat) - (a.cat === p.cat)).slice(0, 3).map(card).join('');
    gsap.from('.art__head > *', { opacity: 0, y: 40, duration: 1.1, stagger: .08, ease: 'expo.out' });
    gsap.from('.art__img img', { scale: 1.15, duration: 1.8, ease: 'expo.out' });
    ScrollTrigger.create({ trigger: more, start: 'top 85%', once: true, onEnter: () => reveal(more) });
  }
})();
