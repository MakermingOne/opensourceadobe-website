/* Scope privacy filtering to this site's PVUV collector. Keep SDK SPA tracking. */
(() => {
  const endpoint = "https://in.pvuv.ai/in";
  const cleanUrl = (value) => {
    try {
      const url = new URL(value);
      return /^https?:$/.test(url.protocol) ? url.origin + url.pathname : undefined;
    } catch { return undefined; }
  };
  const sanitize = (body) => {
    // Embedded pages load the SDK without adding top-level visits.
    if (window.self !== window.top) return null;
    try {
      const input = JSON.parse(body);
      const events = (Array.isArray(input) ? input : [input]).map((event) => {
        const result = {};
        for (const key of ["s", "e", "vid", "sid", "sw", "sh", "lang", "hi", "hp", "x", "ts", "d", "sd", "er", "rg", "dc", "wv"]) {
          if (event[key] !== undefined) result[key] = event[key];
        }
        result.u = cleanUrl(event.u);
        result.r = cleanUrl(event.r);
        // Discard free-text properties, click labels, errors and campaign values.
        if (event.e === "outbound_click") result.p = { href: cleanUrl(event.p?.href) };
        if (event.ft) result.ft = { r: cleanUrl(event.ft.r) };
        return result;
      });
      return JSON.stringify(Array.isArray(input) ? events : events[0]);
    } catch { return null; }
  };
  const fetchOriginal = window.fetch.bind(window);
  window.fetch = (input, init) => {
    if (input !== endpoint) return fetchOriginal(input, init);
    const body = sanitize(init?.body);
    if (!body) return Promise.resolve(new Response(null, { status: 204 }));
    return fetchOriginal(input, { ...init, body, referrerPolicy: "no-referrer" });
  };
  const beaconOriginal = navigator.sendBeacon.bind(navigator);
  navigator.sendBeacon = (url, data) => {
    if (url !== endpoint) return beaconOriginal(url, data);
    const body = sanitize(data);
    if (body) void fetchOriginal(endpoint, {
      method: "POST", body, keepalive: true, referrerPolicy: "no-referrer",
      headers: { "content-type": "text/plain" },
    }).catch(() => {});
    return true;
  };
})();
