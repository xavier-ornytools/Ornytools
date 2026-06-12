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
    'box-shadow:0 1px 4px rgba(0,0,0,.10);border-radius:7px}',
    // On-chain badge — shared across all pages
    '.oc-badge{display:inline-flex;align-items:center;gap:3px;font-size:9.5px;font-weight:700;',
    'background:rgba(37,99,235,.07);color:#2563eb;border:1px solid rgba(37,99,235,.18);',
    'border-radius:5px;padding:2px 7px;vertical-align:middle;margin-left:6px;letter-spacing:.02em;',
    'white-space:nowrap;flex-shrink:0}',
    // Mobile navbar overflow fix
    '@media(max-width:420px){',
    '.navbar{gap:6px!important;padding:8px 10px!important}',
    '.nav-tag{display:none!important}',
    '}',
    '@media(max-width:360px){',
    '.lang-switch{display:none!important}',
    '}'
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

  document.addEventListener('DOMContentLoaded', function(){ window.setLang(getLang()); window._ornyThemeInit && window._ornyThemeInit(); });
  // Dark mode toggle — injected on all tool pages
  window._ornyThemeInit = function(){
    var stored = localStorage.getItem('orny-theme') || 'light';
    document.documentElement.classList.toggle('dark', stored === 'dark');
    var btns = document.querySelectorAll('.btn-theme,[data-theme-toggle]');
    btns.forEach(function(b){ b.textContent = stored==='dark' ? '☀️' : '🌙'; });
  };
  window.toggleTheme = function(){
    var next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('orny-theme', next);
    document.documentElement.classList.toggle('dark', next==='dark');
    var btns = document.querySelectorAll('.btn-theme,[data-theme-toggle]');
    btns.forEach(function(b){ b.textContent = next==='dark' ? '☀️' : '🌙'; });
  };

})();
