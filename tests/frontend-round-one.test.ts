import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import DownloadPage from "@/app/(en)/download/page";
import ComparePage from "@/app/(en)/vs-adobe/page";
import AlternativesPage from "@/app/(en)/alternatives/page";
import { SiteHeader } from "@/components/site-header";

vi.mock("next/navigation", () => ({ usePathname: () => "/download/" }));

describe("first-round navigation and selection", () => {
  it("offers a direct app and system choice before the full download directory", () => {
    const html = renderToStaticMarkup(createElement(DownloadPage));
    expect(html).toContain('id="download-app"');
    expect(html).toContain('id="download-system"');
    expect(html.indexOf('id="download-app"')).toBeLessThan(html.indexOf('class="download-grid"'));
    expect(html).toMatch(/class="button[^\"]*" href="https:\/\/github.com\/storytold\/photocraft\/releases\/download/);
  });
  it("separates Adobe and other workflows without None labels", () => {
    const html = renderToStaticMarkup(createElement(ComparePage));
    expect(html).toContain('id="adobe-workflows"');
    expect(html).toContain('id="beyond-adobe-workflows"');
    expect(html).not.toContain("instead of None");
    expect(html).toContain("Microsoft Word");
    expect(html).toContain("13 workflow comparisons");
  });
  it("labels mobile table fields and supplies a next step for every covered app", () => {
    const html = renderToStaticMarkup(createElement(AlternativesPage));
    expect(html).toContain('data-label="Adobe product"');
    expect(html).toMatch(/href="\/apps\/filmcraft\/?"/);
    expect(html).toMatch(/href="\/alternatives\/acrobat\/?"/);
    expect(html).toContain("App guide only");
    expect(html).toContain("Covered here only");
  });
  it("provides an explicit mobile menu and current-section state", () => {
    const html = renderToStaticMarkup(createElement(SiteHeader));
    expect(html).toContain('class="mobile-menu"');
    expect(html).toContain("Menu");
    expect(html).toContain('aria-current="page"');
  });
});
