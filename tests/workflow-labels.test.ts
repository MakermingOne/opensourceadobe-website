import { describe, expect, it } from "vitest";
import { apps, appsBySlug } from "@/content/apps";
import { photoshopGuide } from "@/content/alternatives/photoshop";
import { workflowLabels } from "@/lib/workflow-labels";

const counterparts = {
  wordcraft: "Microsoft Word",
  soundcraft: "Adobe Audition and general DAWs",
  deckcraft: "Microsoft PowerPoint",
  cadcraft: "AutoCAD",
  gridcraft: "Microsoft Excel",
  figcraft: "Figma",
};

describe("workflow display labels", () => {
  it.each(Object.entries(counterparts))("formats only the approved %s display", (slug, counterpart) => {
    const app = appsBySlug.get(slug)!;
    const before = JSON.stringify(app);
    expect(workflowLabels(app)).toEqual({
      card: `Beyond Adobe · compares with ${counterpart}`,
      table: `Beyond Adobe (vs ${counterpart})`,
    });
    expect(JSON.stringify(app)).toBe(before);
  });
  it("leaves all other app labels and content intact", () => {
    for (const app of apps.filter((item) => !(item.slug in counterparts))) {
      expect(workflowLabels(app)).toEqual({ card: undefined, table: app.adobeCounterpart });
    }
  });
  it("retains the Photoshop guide’s distinction between freeware and open source", () => {
    expect(photoshopGuide.table.rows.find((row) => row.label === "Paint.NET")!.cells[1]).toContain("Freeware/proprietary");
    expect(photoshopGuide.table.rows.find((row) => row.label === "Photopea")!.cells[1]).toContain("not open source");
    expect(photoshopGuide.options.find((option) => option.name === "Paint.NET")!.paragraphs.join(" ")).toContain("freeware, not open-source software");
  });
});
