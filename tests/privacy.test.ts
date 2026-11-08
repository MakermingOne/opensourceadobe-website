import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';

const source = readFileSync('public/site-analytics.js', 'utf8');
function browser(saved?: string, embedded = false) {
  const scripts: Array<Record<string, unknown>> = [];
  const storage = new Map(saved ? [['osa-analytics-consent-v1', saved]] : []);
  let reloads = 0;
  const location = { pathname: '/apps/', origin: 'https://opensourceadobe.com', href: 'https://opensourceadobe.com/apps/?email=private@example.com#secret', reload: () => reloads++ };
  const sent: string[] = [];
  const window: Record<string, any> = { dispatchEvent: () => {}, fetch: async (url: string) => { sent.push(url); return new Response(null,{status:204}); } }; // eslint-disable-line @typescript-eslint/no-explicit-any
  window.self = window; window.top = embedded ? {} : window;
  const context = { window, location, URL, URLSearchParams, Response, Event, Date, navigator: {sendBeacon: (...args: unknown[]) => Boolean(args)}, localStorage: { getItem: (k: string) => storage.get(k), setItem: (k: string, v: string) => storage.set(k, v) },
    document: { currentScript: { dataset: { gaId: 'G-KRT8VCTFXX' } }, title: 'Apps', referrer: 'https://example.org/?key=private#secret',
      createElement: () => ({setAttribute(name: string, value: string) { Object.assign(this, {[name]: value}); }}), head: {appendChild: (s: Record<string, unknown>) => scripts.push(s)} } };
  runInNewContext(source, context);
  return {window, scripts, storage, location, context, sent, reloads: () => reloads, events: () => (window.dataLayer ?? []).map((e: ArrayLike<unknown>) => Array.from(e))};
}

describe('privacy and analytics boundaries', () => {
  it('makes no analytics requests before a choice or after rejection', () => {
    const b = browser();
    expect(b.scripts).toEqual([]);
    expect(b.window.sitePrivacy.get()).toBe('unset');
    b.window.sitePrivacy.set('rejected');
    expect(b.scripts).toEqual([]);
    expect(b.window.dataLayer).toBeUndefined();
  });
  it('starts once, sanitizes URLs, and deduplicates route views', () => {
    const b = browser();
    b.window.sitePrivacy.set('accepted');
    b.window.sitePrivacy.set('accepted');
    b.window.sitePrivacy.pageView();
    runInNewContext(source, b.context);
    expect(b.scripts.filter(s => String(s.src).includes('gtag/js'))).toHaveLength(1);
    expect(b.events().filter((e: unknown[]) => e[1] === 'page_view')).toHaveLength(1);
    b.location.pathname = '/about/';
    b.window.sitePrivacy.pageView();
    b.window.sitePrivacy.pageView();
    expect(b.events().filter((e: unknown[]) => e[1] === 'page_view')).toHaveLength(2);
    expect(JSON.stringify(b.events())).not.toMatch(/private|secret|email=/);
    expect(JSON.stringify(b.events())).toContain('G-KRT8VCTFXX');
    expect(b.events().find((e: unknown[]) => e[0] === 'config')?.[2]).toMatchObject({send_page_view:false,allow_google_signals:false});
  });
  it('loads PVUV only after its privacy filter, and never loads advertising', () => {
    const b = browser(); b.window.sitePrivacy.set('accepted');
    expect(b.scripts.some(s => String(s.src).includes('pvuv.ai'))).toBe(false);
    (b.scripts.find(s => s.src === '/pvuv-privacy.js')?.onload as () => void)();
    expect(b.scripts.find(s => String(s.src).includes('pvuv.ai'))).toMatchObject({'data-site':'XZ339XbH','data-downloads':'off'});
    expect(b.scripts.some(s => String(s.src).includes('googlesyndication'))).toBe(false);
  });
  it('honors stored choices, expires them and suppresses iframe page views', () => {
    const accepted = JSON.stringify({choice:'accepted',at:Date.now()});
    expect(browser(accepted).scripts).toHaveLength(2);
    const frame = browser(accepted, true);
    expect(frame.scripts).toHaveLength(2);
    expect(frame.events().some((e: unknown[]) => e[1] === 'page_view')).toBe(false);
    expect(browser(JSON.stringify({choice:'accepted',at:0})).scripts).toEqual([]);
    expect(browser('corrupt').scripts).toEqual([]);
  });
  it('revokes consent before reloading to stop the loaded SDKs', () => {
    const b = browser(); b.window.sitePrivacy.set('accepted'); b.window.sitePrivacy.set('rejected');
    expect(b.window['ga-disable-G-KRT8VCTFXX']).toBe(true);
    expect(JSON.parse(b.storage.get('osa-analytics-consent-v1')!).choice).toBe('rejected');
    expect(b.reloads()).toBe(1);
  });
  it('filters real GA transports, including automatic duplicates and batched sensitive fields', async () => {
    const b = browser(); b.window.sitePrivacy.set('accepted');
    const endpoint = 'https://region1.google-analytics.com/g/collect?tid=G-KRT8VCTFXX&cid=123&dl=https%3A%2F%2Fopensourceadobe.com%2F%3Ftoken%3Dsecret';
    await b.window.fetch(endpoint + '&en=page_view&dr=https%3A%2F%2Fexample.org%2F%3Femail%3Dprivate');
    b.context.navigator.sendBeacon(endpoint + '&en=page_view', undefined);
    b.context.navigator.sendBeacon(endpoint, 'en=contact_email_click&ep.contact_type=support&ep.link_url=mailto%3Aprivate%40example.org\nen=file_download&ep.file_name=secret.pdf');
    expect(b.sent).toHaveLength(2);
    expect(b.sent.join(' ')).not.toMatch(/secret|private|file_name|link_url|file_download/);
    expect(b.sent[1]).toContain('ep.contact_type=support');
    b.window.sitePrivacy.set('rejected');
    await b.window.fetch(endpoint + '&en=page_view');
    expect(b.sent).toHaveLength(2);
  });
});
