import { test as base } from "@playwright/test";
export * from "@playwright/test";
// Layout/network-idle tests must not depend on ad auctions or send real metrics.
// Preserve the site's scripts; isolate only third-party telemetry in test browsers.
export const test = base.extend<{ telemetryIsolation: void }>({
  telemetryIsolation: [async ({ context }, use) => {
    await context.route(/^https:\/\/(?:[^/]+\.)?(?:bauval\.org|googlesyndication\.com|doubleclick\.net|googletagmanager\.com|google-analytics\.com)\//, (route) => route.fulfill({ status: 204, body: "" }));
    await use();
  }, { auto: true }],
});
