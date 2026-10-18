"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const nativeContainerId = "container-a347a2aadf16eb8cb901cdd63a643ba5";
const bannerDocument = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0"><script>var atOptions={key:'c726be575430ecc7cb384ce0dd40a481',format:'iframe',height:250,width:300,params:{}};</script><script data-cfasync="false" src="https://bauval.org/22/c726be575430ecc7cb384ce0dd40a481"></script></body></html>`;

export function AdsterraPlacements() {
  const nativeRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLIFrameElement>(null);
  const bannerObserver = useRef<MutationObserver | null>(null);
  const [nativeReady, setNativeReady] = useState(false);
  const [bannerReady, setBannerReady] = useState(false);
  const [bannerFinished, setBannerFinished] = useState(false);

  const inspectBanner = useCallback(() => {
    bannerObserver.current?.disconnect();
    const body = bannerRef.current?.contentDocument?.body;
    if (!body) return;
    const check = () => setBannerReady(Boolean(body.querySelector("iframe[src], img[src], a[href]")));
    bannerObserver.current = new MutationObserver(check);
    bannerObserver.current.observe(body, { childList: true, subtree: true, attributes: true, attributeFilter: ["src", "href"] });
    check();
    setBannerFinished(true);
  }, []);

  useEffect(() => {
    const container = nativeRef.current;
    if (!container) return;
    const check = () => setNativeReady(Boolean(container.querySelector("iframe, img, a[href]")));
    const observer = new MutationObserver(check);
    observer.observe(container, { childList: true, subtree: true });
    check();
    if (bannerRef.current?.contentDocument?.readyState === "complete") inspectBanner();
    return () => {
      observer.disconnect();
      bannerObserver.current?.disconnect();
    };
  }, [inspectBanner]);


  const hasAd = nativeReady || bannerReady;

  return (
    <aside aria-label="Advertisement" className={hasAd ? "mx-auto my-10 w-full max-w-6xl px-4" : "mx-auto w-full max-w-6xl px-4"}>
      {hasAd ? <p className="mb-3 text-center text-xs text-neutral-500">Advertisement</p> : null}
      <div ref={nativeRef} id={nativeContainerId} />
      <script async data-cfasync="false" src="https://bauval.org/21/a347a2aadf16eb8cb901cdd63a643ba5" />
      <iframe
        ref={bannerRef}
        title="Advertisement — 300 × 250"
        width="300"
        height={bannerFinished && !bannerReady ? 0 : 250}
        style={{ visibility: bannerReady ? "visible" : "hidden" }}
        className={`mx-auto block max-w-full border-0${bannerReady ? " mt-6" : ""}`}
        srcDoc={bannerDocument}
        onLoad={inspectBanner}
      />
    </aside>
  );
}
