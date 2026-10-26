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
    expect(publishedRoutes).toContain("/alternatives/illustrator/");
    expect(publishedRoutes).toContain("/alternatives/acrobat/");
    expect(publishedRoutes).toContain("/alternatives/after-effects/");
    expect(publishedRoutes).toContain("/alternatives/indesign/");
    expect(publishedRoutes).toContain("/alternatives/substance-painter/");
    expect(publishedRoutes).toContain("/updates/2026-10-15/");
    expect(publishedRoutes).toContain("/updates/2026-10-16/");
    expect(publishedRoutes).toContain("/updates/2026-10-17/");
    expect(publishedRoutes).toContain("/brandon-thomas/");
    expect(publishedRoutes).toContain("/artcraft/");
    expect(publishedRoutes).toContain("/artcraft/pricing/");
    expect(publishedRoutes).toContain("/artcraft/safety/");
    expect(publishedRoutes).toContain("/artcraft/alternatives/");
    expect(publishedRoutes).toContain("/artcraft/photocraft-how-to-use/");
    expect(publishedRoutes).not.toContain("/learn/ai-history-1955/");
    expect(publishedRoutes).toHaveLength(57);
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
