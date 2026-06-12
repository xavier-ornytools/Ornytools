// OrnyTools — shared language switcher (EN / FR / ES)
(function(){
  var s = document.createElement('style');
  s.textContent = [
    // Hide FR and ES by default
    '.t-fr{display:none}',
    '.t-es{display:none}',
    // FR mode
    'html.lang-fr .t-en{display:none}',
    'html.lang-fr .t-fr{display:initial}',
    // ES mode
    'html.lang-es .t-en{display:none}',
    'html.lang-es .t-es{display:initial}',
    // Switcher — pill design
    '.lang-switch{display:flex;gap:2px;background:var(--surface-2,var(--light,#f0f2f5));',
    'border:1px solid var(--line,var(--border,#e4e8f0));border-radius:10px;padding:3px}',
    '.lang-btn{padding:5px 11px;border-radius:7px;border:none;background:transparent;',
    'font-family:inherit;font-size:11px;font-weight:700;cursor:pointer;',
    'color:var(--dim,var(--muted,#6b7280));transition:.15s;letter-spacing:.04em;',
    'display:inline-flex;align-items:center;gap:4px;line-height:1}',
    '.lang-btn:hover{color:var(--text,#111827)}',
    '.lang-btn.active{background:#fff;color:var(--text,#111827);',
    'box-shadow:0 1px 4px rgba(0,0,0,.10);border-radius:7px}'
  ].join('');
  document.head.appendChild(s);

  window.getLang = function(){ return localStorage.getItem('orny-lang') || 'en'; };

  window.setLang = function(l){
    localStorage.setItem('orny-lang', l);
    var root = document.documentElement;
    root.lang = l === 'es' ? 'es' : l === 'fr' ? 'fr' : 'en';
    root.classList.toggle('lang-fr', l === 'fr');
    root.classList.toggle('lang-es', l === 'es');
    var btnEN = document.getElementById('btnEN');
    var btnFR = document.getElementById('btnFR');
    var btnES = document.getElementById('btnES');
    if(btnEN) btnEN.classList.toggle('active', l === 'en');
    if(btnFR) btnFR.classList.toggle('active', l === 'fr');
    if(btnES) btnES.classList.toggle('active', l === 'es');
    if(window.onLangChange) window.onLangChange(l);
  };

  document.addEventListener('DOMContentLoaded', function(){ window.setLang(getLang()); });
})();
