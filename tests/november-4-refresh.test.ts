import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";

it("archives November 3 follow-ups without backdating their checks or replacing the early check", () => {
 const brief = dailyUpdates.find(b => b.date === "2026-11-03")!;
 expect(brief.checkedDate).toBe("2026-11-03");
 expect(brief.publishedDate).toBe("2026-11-03");
 expect(brief.modifiedDate).toBe("2026-11-04");
 const additions = brief.entries.filter(e => e.checkedDate === "2026-11-04");
 expect(additions.filter(e => e.kind === "Official release")).toHaveLength(16);
 for (const entry of additions) {
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(brief.date);
  expect(entry.eventDate).toBe(entry.eventPublishedAt!.slice(0,10));
  expect(entry.publishedDate).toBe("2026-11-04");
 }
 const releaseUrls = dailyUpdates.flatMap(b => b.entries.filter(e => e.kind === "Official release").map(e => e.sourceUrl));
 for (const entry of additions.filter(e => e.kind === "Official release")) {
  expect(releaseUrls.filter(url => url === entry.sourceUrl)).toHaveLength(1);
 }
});

it("keeps the after-midnight Copilot documentation on November 4 with its release boundary", () => {
 const today = dailyUpdates.find(b => b.date === "2026-11-04")!;
 expect(today.entries.filter(e => e.checkedDate === "2026-11-04")).toHaveLength(1);
 const entry = today.entries[0];
 expect(entry.kind).toBe("Documentation update");
 expect(entry.eventPublishedAt).toBe("2026-11-03T17:29:11Z");
 expect(entry.impact).toContain("after Craft Anything 0.3.0");
 expect(today.introduction).toContain("This early check does not describe the rest of the day");
});
