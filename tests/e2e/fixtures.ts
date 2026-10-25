import { test as base } from "@playwright/test";
export * from "@playwright/test";
// Layout/network-idle tests must not depend on ad auctions or send real metrics.
// Preserve the site's scripts; isolate only third-party telemetry in test browsers.
export const test = base.extend<{ telemetryIsolation: void }>({
  browser: [async ({ browser }, use) => {
    const newContext = browser.newContext.bind(browser);
    // The directory badge is decorative; external availability must not block
    // page load, including in the explicitly created no-JavaScript contexts.
    browser.newContext = async (options) => {
      const context = await newContext(options);
      await context.route('https://findly.tools/badges/findly-tools-badge-light.svg', route => route.fulfill({
        contentType: 'image/svg+xml',
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="175" height="55"/>',
      }));
      return context;
    };
    await use(browser);
    browser.newContext = newContext;
  }, { scope: 'worker' }],
  telemetryIsolation: [async ({ context }, use) => {
    await context.route(/^https:\/\/(?:[^/]+\.)?(?:bauval\.org|googlesyndication\.com|doubleclick\.net|googletagmanager\.com|google-analytics\.com)\//, (route) => route.fulfill({ status: 204, body: "" }));
    await use();
  }, { auto: true }],
});
