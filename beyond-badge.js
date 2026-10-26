/*!
 * Beyond Branding — "Crafted by" badge
 * Drop into any page:
 *   <script src="beyond-badge.js" defer
 *           data-client="hybec"            (used for UTM tracking)
 *           data-theme="dark"              (dark | light)
 *           data-position="right"          (right | left)
 *           data-url="https://thebeyondbranding.com"
 *           data-headline="Like this website?"
 *           data-text="We design premium web experiences for brands that want to stand apart."
 *           data-cta="Start your project"></script>
 * Self-contained: renders in a Shadow DOM so host-page CSS can't affect it.
 */
(function () {
  if (window.__beyondBadge) return; window.__beyondBadge = true;
  var s = document.currentScript || document.querySelector('script[src*="beyond-badge"]') || {};
  var d = (s && s.dataset) || {};
  var cfg = {
    client: d.client || location.hostname || 'pitch',
    theme: d.theme === 'light' ? 'light' : 'dark',
    pos: d.position === 'left' ? 'left' : 'right',
    url: d.url || 'https://thebeyondbranding.com',
    headline: d.headline || 'Like this website?',
    text: d.text || 'We design premium web experiences for brands that want to stand apart.',
    cta: d.cta || 'Start your project'
  };
  var href;
  try {
    var u = new URL(cfg.url);
    u.searchParams.set('utm_source', cfg.client);
    u.searchParams.set('utm_medium', 'pitch_badge');
    u.searchParams.set('utm_campaign', 'crafted_by');
    href = u.toString();
  } catch (e) { href = cfg.url; }

  function mount() {
    var host = document.createElement('div');
    host.setAttribute('data-beyond-badge', '');
    host.style.cssText = 'position:fixed;z-index:2147483000;bottom:0;' + cfg.pos + ':0;';
    document.body.appendChild(host);
    var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;

    var dark = cfg.theme === 'dark';
    var css = '' +
      ':host{all:initial}' +
      '*{box-sizing:border-box}' +
      '.w{--bg:' + (dark ? 'rgba(20,16,13,.78)' : 'rgba(250,247,242,.82)') + ';--fg:' + (dark ? '#f3ece2' : '#181411') + ';--mu:' + (dark ? 'rgba(243,236,226,.62)' : 'rgba(24,20,17,.6)') + ';--bd:' + (dark ? 'rgba(255,248,240,.16)' : 'rgba(24,20,17,.12)') + ';--btn:' + (dark ? '#f3ece2' : '#181411') + ';--btnfg:' + (dark ? '#181411' : '#f3ece2') + ';' +
      'position:fixed;bottom:calc(16px + env(safe-area-inset-bottom,0px));' + cfg.pos + ':max(16px,env(safe-area-inset-' + cfg.pos + ',0px));font:500 12.5px/1.45 "Manrope","Helvetica Neue",Arial,system-ui,sans-serif;color:var(--fg);-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;align-items:' + (cfg.pos === 'right' ? 'flex-end' : 'flex-start') + ';gap:8px}' +
      '.pill,.card{background:var(--bg);border:1px solid var(--bd);backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);box-shadow:0 10px 30px -12px rgba(0,0,0,.45)}' +
      '.pill{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;gap:9px;height:36px;padding:0 14px 0 8px;border-radius:999px;background:var(--bg);border:1px solid var(--bd);backdrop-filter:blur(16px) saturate(1.3);-webkit-backdrop-filter:blur(16px) saturate(1.3);box-shadow:0 10px 30px -12px rgba(0,0,0,.45);cursor:pointer;color:var(--fg);font:inherit;transition:transform .35s cubic-bezier(.22,.7,.12,1)}' +
      '.pill:hover{transform:translateY(-1px)}' +
      '.pill:focus-visible,.cta:focus-visible,.x:focus-visible{outline:1.5px solid #c88a4b;outline-offset:3px}' +
      '.mk{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--btn);color:var(--btnfg);flex:none}' +
      '.mk svg{width:10px;height:10px}' +
      '.pill b{font-weight:600}.pill > span:not(.mk){color:var(--mu);font-weight:500}' +
      '.card{width:min(300px,calc(100vw - 32px));border-radius:20px;padding:18px 18px 16px;opacity:0;transform:translateY(8px) scale(.98);transform-origin:bottom ' + cfg.pos + ';pointer-events:none;visibility:hidden;transition:opacity .35s cubic-bezier(.22,.7,.12,1),transform .45s cubic-bezier(.22,.7,.12,1),visibility .35s}' +
      '.w.open .card{opacity:1;transform:none;pointer-events:auto;visibility:visible}' +
      '.top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}' +
      '.k{font:400 10px/1 "Michroma","Eurostile",Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#c88a4b}' +
      '.x{all:unset;cursor:pointer;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;color:var(--mu);margin:-4px -4px 0 0}.x:hover{color:var(--fg)}.x svg{width:10px;height:10px}' +
      'h4{margin:12px 0 6px;font:300 26px/1.02 "Cormorant Garamond",Garamond,"Times New Roman",serif;letter-spacing:-.01em;color:var(--fg)}' +
      'p{margin:0 0 16px;color:var(--mu);font-size:12.5px}' +
      '.cta{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:44px;padding:0 6px 0 16px;border-radius:999px;background:var(--btn);color:var(--btnfg);font:600 12px/1 "Manrope","Helvetica Neue",Arial,sans-serif;letter-spacing:.01em}' +
      '.cta i{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:var(--btnfg);color:var(--btn);transition:transform .4s cubic-bezier(.22,.7,.12,1)}.cta:hover i{transform:rotate(45deg)}.cta i svg{width:11px;height:11px}' +
      '.dom{display:block;margin-top:10px;text-align:center;font-size:11px;color:var(--mu)}' +
      '@media (prefers-reduced-motion:reduce){.card,.pill,.cta i{transition:none}}' +
      '@media print{.w{display:none}}';

    var arrow = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 10L10 2M4 2h6v6"/></svg>';
    var star = '<svg viewBox="0 0 12 12" fill="currentColor"><path d="M6 0l1.3 4.7L12 6l-4.7 1.3L6 12 4.7 7.3 0 6l4.7-1.3z"/></svg>';
    var x = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1 1l8 8M9 1L1 9"/></svg>';
    var host2 = cfg.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    root.innerHTML = '<style>' + css + '</style>' +
      '<div class="w" part="badge">' +
        '<div class="card" role="dialog" aria-label="About the studio" id="bb-card">' +
          '<div class="top"><span class="k">Beyond Branding Media</span><button class="x" type="button" aria-label="Close">' + x + '</button></div>' +
          '<h4></h4><p></p>' +
          '<a class="cta" target="_blank" rel="noopener"><span></span><i>' + arrow + '</i></a>' +
          '<span class="dom"></span>' +
        '</div>' +
        '<button class="pill" type="button" aria-expanded="false" aria-controls="bb-card"><span class="mk">' + star + '</span><span>Crafted by</span><b></b></button>' +
      '</div>';

    var w = root.querySelector('.w'), pill = root.querySelector('.pill');
    root.querySelector('h4').textContent = cfg.headline;
    root.querySelector('p').textContent = cfg.text;
    root.querySelector('.cta span').textContent = cfg.cta;
    root.querySelector('.cta').href = href;
    root.querySelector('.dom').textContent = host2;
    pill.querySelector('b').textContent = host2;

    var hoverable = window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches, t;
    function open(v) { w.classList.toggle('open', v); pill.setAttribute('aria-expanded', v ? 'true' : 'false'); }
    if (hoverable) {
      w.addEventListener('mouseenter', function () { clearTimeout(t); open(true); });
      w.addEventListener('mouseleave', function () { t = setTimeout(function () { open(false); }, 220); });
    }
    pill.addEventListener('click', function () { open(!w.classList.contains('open')); });
    root.querySelector('.x').addEventListener('click', function () { open(false); pill.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') open(false); });
    document.addEventListener('click', function (e) { if (!host.contains(e.target) && e.target !== host) open(false); });
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
