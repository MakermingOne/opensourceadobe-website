import { describe, expect, it } from "vitest";
import { githubFaqs } from "@/content/github-faq";
import { apps } from "@/content/apps";
import { repositoryLicenseLabel, repositoryLicenses } from "@/content/repository-licenses";
import { releasesBySlug } from "@/content/releases";

describe("GitHub guide FAQ and repository-specific license checks", () => {
  it("answers the three requested questions in 40–70 words each", () => {
    expect(githubFaqs.map((item) => item.question)).toEqual(["Do I need to build these apps myself to use them?", "Are the repositories actively developed?", "Can I fork, modify or redistribute them?"]);
    for (const item of githubFaqs) {
      expect(item.answer.split(/\s+/).length).toBeGreaterThanOrEqual(40);
      expect(item.answer.split(/\s+/).length).toBeLessThanOrEqual(70);
    }
  });
  it("takes its activity examples from the same release records as the table", () => {
    for (const slug of ["photocraft", "vectorcraft"]) {
      const release = releasesBySlug.get(slug)!;
      expect(githubFaqs[1].answer).toContain(release.version);
      expect(githubFaqs[1].answer).toContain(release.publishedAt.slice(0, 10));
    }
  });
  it("records three checked files for each individual app, including FigCraft", () => {
    expect(repositoryLicenses).toHaveLength(13);
    for (const app of apps) {
      const record = repositoryLicenses.find((item) => item.slug === app.slug)!;
      expect(record.checkedAt).toBe("2026-10-15");
      expect(record.files.map((file) => file.name)).toEqual(["LICENSE-MIT", "LICENSE-APACHE", "NOTICE"]);
      for (const file of record.files) expect(file.url).toBe(`${app.repository}/blob/main/${file.name}`);
      expect(repositoryLicenseLabel(app.slug)).toBe("MIT OR Apache-2.0");
    }
  });
  it("does not infer missing or future licenses from other repositories", () => {
    expect(repositoryLicenseLabel("unknown-app")).toBe("License not verified");
    expect(repositoryLicenseLabel("figcraft", [{ slug: "figcraft", checkedAt: "2026-10-15", files: [] }])).toBe("License not verified");
  });
});
