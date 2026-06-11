// OrnyTools — shared language switcher (EN default)
(function(){
  // Inject toggle CSS
  var s = document.createElement('style');
  s.textContent = [
    '.t-fr{display:none}',
    'html.lang-fr .t-en{display:none}',
    'html.lang-fr .t-fr{display:initial}',
    '.lang-switch{display:flex;gap:4px}',
    '.lang-btn{padding:5px 10px;border-radius:6px;border:1px solid var(--line,var(--border,#e4e8f0));',
    'background:var(--surface-2,var(--light,#f0f2f5));font-family:inherit;font-size:11px;font-weight:700;',
    'cursor:pointer;color:var(--dim,var(--muted,#6b7280));transition:.15s;letter-spacing:.05em}',
    '.lang-btn.active{background:var(--text,#111827);color:#fff;border-color:var(--text,#111827)}'
  ].join('');
  document.head.appendChild(s);

  window.getLang = function(){ return localStorage.getItem('orny-lang') || 'en'; };

  window.setLang = function(l){
    localStorage.setItem('orny-lang', l);
    var root = document.documentElement;
    root.lang = l;
    root.classList.toggle('lang-fr', l === 'fr');
    var btnEN = document.getElementById('btnEN');
    var btnFR = document.getElementById('btnFR');
    if(btnEN) btnEN.classList.toggle('active', l === 'en');
    if(btnFR) btnFR.classList.toggle('active', l === 'fr');
    if(window.onLangChange) window.onLangChange(l);
  };

  document.addEventListener('DOMContentLoaded', function(){ window.setLang(getLang()); });
})();
