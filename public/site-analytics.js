/* One consent-gated analytics entry point for every production HTML document. */
(() => {
  if (window.sitePrivacy) return;
  const id = document.currentScript.dataset.gaId;
  const key = 'osa-analytics-consent-v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  let choice = 'unset';
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && Date.now() - saved.at < lifetime && ['accepted', 'rejected'].includes(saved.choice)) choice = saved.choice;
  } catch { /* Storage may be unavailable; remain opted out. */ }
  let started = false;
  let previousPath;
  const clean = (value) => {
    try { const u = new URL(value); return /^https?:$/.test(u.protocol) ? u.origin + u.pathname : ''; }
    catch { return ''; }
  };
  // Enhanced measurement can emit its own history events even when the config
  // disables the initial page view. Sanitize and deduplicate the actual wire
  // payload, including batched events, before either GA transport can send it.
  const isGA = (value) => {
    try { const u = new URL(value); return /(^|\.)google-analytics\.com$/.test(u.hostname) && /\/g\/collect$/.test(u.pathname); }
    catch { return false; }
  };
  let lastSentPage;
  const sanitizeGA = (url, body = '') => {
    if (choice !== 'accepted' || window.self !== window.top) return null;
    const base = new URL(url);
    const safe = (params) => {
      for (const name of [...params.keys()]) {
        if (['dl', 'dr'].includes(name)) params.set(name, clean(params.get(name)));
        // Only our enumerated interaction properties are permitted.
        if (/^(ep|epn|up|upn)\./.test(name) && !['ep.contact_type', 'ep.entry_point', 'epn.percent_scrolled'].includes(name)) params.delete(name);
      }
    };
    const lines = (body || '').split('\n');
    const accepted = [];
    for (const line of lines) {
      const params = new URLSearchParams(base.search);
      for (const [key, value] of new URLSearchParams(line)) params.set(key, value);
      safe(params);
      if (!['page_view', 'contact_email_click', 'scroll', 'user_engagement'].includes(params.get('en'))) continue;
      if (params.get('en') === 'page_view') {
        const path = params.get('dl');
        if (path === lastSentPage) continue;
        lastSentPage = path;
      }
      accepted.push(params);
    }
    if (!accepted.length) return null;
    // Normalize batches to one query per event so every event is checked.
    return accepted.map(params => base.origin + base.pathname + '?' + params.toString());
  };
  const fetchOriginal = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input.url || String(input);
    if (!isGA(url)) return fetchOriginal(input, init);
    const urls = sanitizeGA(url, typeof init?.body === 'string' ? init.body : '');
    if (!urls) return Promise.resolve(new Response(null, {status: 204}));
    return Promise.all(urls.map(url => fetchOriginal(url, {...init, body: undefined, referrerPolicy: 'no-referrer'}))).then(results => results[0]);
  };
  const beaconOriginal = navigator.sendBeacon.bind(navigator);
  navigator.sendBeacon = (url, body) => {
    if (!isGA(url)) return beaconOriginal(url, body);
    const send = (text) => {
      for (const endpoint of sanitizeGA(url, text) || []) {
        void fetchOriginal(endpoint, {method:'POST', keepalive:true, referrerPolicy:'no-referrer'}).catch(() => {});
      }
    };
    if (typeof body === 'string' || !body) send(body || '');
    else if (typeof body.text === 'function') void body.text().then(send);
    // Unknown binary payloads are dropped rather than bypassing filtering.
    return true;
  };
  const script = (src, attributes = {}) => {
    const element = document.createElement('script');
    element.src = src;
    element.async = true;
    element.referrerPolicy = 'no-referrer';
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    document.head.appendChild(element);
    return element;
  };
  const pageView = () => {
    const path = location.pathname;
    if (!started || choice !== 'accepted' || window.self !== window.top || path === previousPath) return;
    window.gtag('set', {page_location: location.origin + path, page_referrer: previousPath ? location.origin + previousPath : clean(document.referrer)});
    window.gtag('event', 'page_view', {
      page_location: location.origin + path,
      page_referrer: previousPath ? location.origin + previousPath : clean(document.referrer),
      page_title: document.title,
    });
    previousPath = path;
  };
  const start = () => {
    if (started || choice !== 'accepted') return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', id, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
      page_location: clean(location.href), page_referrer: clean(document.referrer) });
    script('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id));
    pageView();
    // Install the privacy filter before the PVUV SDK can send anything.
    script('/pvuv-privacy.js').onload = () => {
      if (choice === 'accepted') script('https://www.pvuv.ai/f.js', { 'data-site': 'XZ339XbH', 'data-api': 'https://in.pvuv.ai', 'data-downloads': 'off' });
    };
  };
  window.sitePrivacy = {
    get: () => choice,
    pageView,
    set: (next) => {
      if (!['accepted', 'rejected'].includes(next)) return;
      choice = next;
      try { localStorage.setItem(key, JSON.stringify({ choice, at: Date.now() })); } catch { /* Apply for this document. */ }
      window.dispatchEvent(new Event('site-privacy-change'));
      if (next === 'accepted') start();
      else if (started) {
        window['ga-disable-' + id] = true;
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
        // Stop loaded SDKs and pending timers on revocation; no new requests next load.
        location.reload();
      }
    },
  };
  start();
  window.dispatchEvent(new Event('site-privacy-change'));
})();
