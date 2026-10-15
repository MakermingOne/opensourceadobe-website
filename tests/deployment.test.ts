import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import {
  isProductionDeployment,
  resolveGoogleAnalyticsId,
} from "@/lib/deployment";

describe("deployment environment detection", () => {
  it("recognizes a Vercel production deployment", () => {
    expect(isProductionDeployment({ VERCEL_ENV: "production" })).toBe(true);
  });

  it("recognizes a provider-neutral production deployment", () => {
    expect(isProductionDeployment({ DEPLOYMENT_ENV: "production" })).toBe(true);
  });

  it("recognizes the main Cloudflare Pages branch", () => {
    expect(isProductionDeployment({ CF_PAGES: "1", CF_PAGES_BRANCH: "main" })).toBe(true);
  });

  it("keeps local and preview builds non-production", () => {
    expect(isProductionDeployment({})).toBe(false);
    expect(isProductionDeployment({ VERCEL_ENV: "preview" })).toBe(false);
    expect(isProductionDeployment({ DEPLOYMENT_ENV: "preview" })).toBe(false);
    expect(isProductionDeployment({ CF_PAGES: "1", CF_PAGES_BRANCH: "feature/test" })).toBe(false);
  });
});

describe("Google Analytics configuration", () => {
  it("uses the configured measurement ID", () => {
    expect(resolveGoogleAnalyticsId({ NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: "G-TEST123" })).toBe("G-TEST123");
  });

  it("falls back to the public production measurement ID", () => {
    expect(resolveGoogleAnalyticsId({})).toBe("G-KRT8VCTFXX");
  });
});

describe("Cloudflare Workers static deployment", () => {
  it("declares the exported out directory so Wrangler does not auto-migrate to OpenNext", () => {
    const configPath = resolve(process.cwd(), "wrangler.jsonc");

    expect(existsSync(configPath)).toBe(true);

    const config = JSON.parse(readFileSync(configPath, "utf8"));
    expect(config.assets).toMatchObject({
      directory: "./out",
      html_handling: "auto-trailing-slash",
      not_found_handling: "404-page",
    });
  });
});
