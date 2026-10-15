import { describe, expect, it } from "vitest";

import vercelConfig from "../vercel.json";

import {
  absoluteUrl,
  canonicalPath,
  publishedRoutes,
  siteConfig,
} from "@/lib/site";

describe("site URL contract", () => {
  it("uses the non-www HTTPS domain as the canonical origin", () => {
    expect(siteConfig.url).toBe("https://opensourceadobe.com");
  });

  it("normalizes canonical paths with trailing slashes", () => {
    expect(canonicalPath("/")).toBe("/");
    expect(canonicalPath("apps")).toBe("/apps/");
    expect(canonicalPath("/apps/photocraft/")).toBe("/apps/photocraft/");
  });

  it("creates absolute canonical URLs without duplicate slashes", () => {
    expect(absoluteUrl("/apps/")).toBe("https://opensourceadobe.com/apps/");
  });

  it("publishes the approved guides without duplicate short product routes", () => {
    expect(publishedRoutes).toContain("/apps/photocraft/");
    expect(publishedRoutes).toContain("/download/");
    expect(publishedRoutes).toContain("/tutorials/");
    expect(publishedRoutes).toContain("/faq/");
    expect(publishedRoutes).toContain("/apps/pdfcraft/");
    expect(publishedRoutes).not.toContain("/photocraft/");
    expect(publishedRoutes).not.toContain("/review/");
    expect(new Set(publishedRoutes).size).toBe(publishedRoutes.length);
    expect(publishedRoutes).toContain("/alternatives/");
    expect(publishedRoutes).toContain("/alternatives/photoshop/");
    expect(publishedRoutes).toContain("/alternatives/lightroom/");
    expect(publishedRoutes).toContain("/updates/2026-10-15/");
    expect(publishedRoutes).toHaveLength(22);
  });

  it("redirects the www host to the canonical host with an exact 301", () => {
    const redirect = vercelConfig.redirects[0];

    expect(redirect.has).toContainEqual({
      type: "host",
      value: "www.opensourceadobe.com",
    });
    expect(redirect.destination).toBe("https://opensourceadobe.com/:path*");
    expect(redirect).toMatchObject({ statusCode: 301 });
    expect(redirect).not.toHaveProperty("permanent");
  });
});
