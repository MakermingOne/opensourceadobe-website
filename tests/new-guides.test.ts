import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import PremierePage from "@/app/(en)/alternatives/premiere/page";
import GimpPage from "@/app/(en)/vs/gimp-vs-photoshop/page";
import PhotopeaPage from "@/app/(en)/vs/photopea-vs-photoshop/page";
import sitemap from "@/lib/sitemap";
import { publishedRoutes } from "@/lib/site";

function pageRoutes(directory: string, segments: string[] = []): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return pageRoutes(join(directory, entry.name), [...segments, entry.name]);
    return entry.name === "page.tsx" && !segments.some((segment) => segment.includes("["))
      ? [`/${segments.join("/")}${segments.length ? "/" : ""}`] : [];
  });
}

describe("published English page discovery", () => {
  it("registers every static English page for sitemap and metadata", () => {
    for (const path of pageRoutes(join(process.cwd(), "src/app/(en)"))) {
      expect(publishedRoutes, path).toContain(path);
      expect(sitemap("en").map((entry) => entry.url), path).toContain(`https://opensourceadobe.com${path}`);
    }
  });
});

describe.each([
  { name: "Premiere alternatives", page: PremierePage, minimumFaqs: 4, related: "/alternatives/after-effects" },
  { name: "GIMP vs Photoshop", page: GimpPage, minimumFaqs: 5, related: "/alternatives/photoshop" },
  { name: "Photopea vs Photoshop", page: PhotopeaPage, minimumFaqs: 5, related: "/alternatives/photoshop" },
])("$name rendered guide", ({ page, minimumFaqs, related }) => {
  it("renders one H1 and exposes exactly the visible FAQs as structured data", () => {
    const html = renderToStaticMarkup(createElement(page));
    expect(html.match(/<h1[ >]/g)).toHaveLength(1);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].flatMap((match) => {
      const data = JSON.parse(match[1]);
      return data["@graph"] ?? [data];
    });
    const faqs = schemas.filter((schema) => schema["@type"] === "FAQPage");
    expect(faqs).toHaveLength(1);
    const summaries = [...html.matchAll(/<summary>(.*?)<\/summary>/g)].map((match) => match[1]);
    expect(summaries.length).toBeGreaterThanOrEqual(minimumFaqs);
    expect(faqs[0].mainEntity.map((question: { name: string }) => question.name)).toEqual(summaries);
    expect(html).toContain('scope="col"');
    expect(html).toContain(`href="${related}`);
  });
});
