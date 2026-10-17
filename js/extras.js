// Formulário de contacto com envio real + botão "voltar ao topo".
(() => {
  // ---------- formulário ----------
  // Para receber as mensagens por e-mail sem servidor próprio: criar um formulário gratuito em https://formspree.io
  // e colar aqui o endereço (ex.: 'https://formspree.io/f/abcdwxyz'). Sem endereço, abre o programa de e-mail.
  const FORM_ENDPOINT = window.SODIAM_FORM_ENDPOINT || '';
  const form = document.getElementById('form');
  if (form) {
    const btn = form.querySelector('button[type=submit]');
    const msg = document.createElement('p');
    msg.className = 'form__msg'; msg.setAttribute('role', 'status'); msg.setAttribute('aria-live', 'polite');
    form.appendChild(msg);
    const say = (t, ok) => { msg.textContent = t; msg.className = 'form__msg ' + (ok ? 'is-ok' : 'is-err'); };
    form.removeAttribute('action'); form.removeAttribute('enctype');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form));
      const label = btn.textContent;
      if (!FORM_ENDPOINT) {
        const body = `Assunto: ${data.assunto}\nNome: ${data.nome}\nOrganização: ${data.organizacao || '—'}\nE-mail: ${data.email}\n\n${data.mensagem}`;
        location.href = `mailto:geral@sodiam.co.ao?subject=${encodeURIComponent('[Site] ' + data.assunto + ' — ' + data.nome)}&body=${encodeURIComponent(body)}`;
        return;
      }
      btn.disabled = true; btn.textContent = 'A enviar…';
      try {
        const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, _subject: '[Site SODIAM] ' + data.assunto }) });
        if (!r.ok) throw new Error(r.status);
        form.reset(); say('Mensagem enviada. Obrigado — a SODIAM responderá em breve.', true);
      } catch (err) {
        say('Não foi possível enviar. Tente novamente ou escreva para geral@sodiam.co.ao.', false);
      } finally { btn.disabled = false; btn.textContent = label; }
    });
  }

  // ---------- voltar ao topo ----------
  const top = document.createElement('button');
  top.className = 'totop'; top.type = 'button'; top.setAttribute('aria-label', 'Voltar ao topo');
  top.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  document.body.appendChild(top);
  let shown = false;
  addEventListener('scroll', () => { const s = scrollY > innerHeight * 1.5; if (s !== shown) { shown = s; top.classList.toggle('is-on', s); } }, { passive: true });
  top.addEventListener('click', () => { if (window.lenis) window.lenis.scrollTo(0, { duration: 1.6 }); else scrollTo({ top: 0, behavior: 'smooth' }); });
})();
