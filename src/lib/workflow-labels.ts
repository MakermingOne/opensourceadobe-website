import type { AppRecord } from "@/content/types";

const beyondAdobeCounterparts: Record<string, string> = {
  wordcraft: "Microsoft Word",
  soundcraft: "Pro Tools",
  deckcraft: "Microsoft PowerPoint",
  cadcraft: "AutoCAD",
  gridcraft: "Microsoft Excel",
  figcraft: "Figma",
};

// Presentation only: retain product records and schema facts unchanged.
export function workflowLabels(app: Pick<AppRecord, "slug" | "adobeCounterpart">) {
  const counterpart = beyondAdobeCounterparts[app.slug];
  return {
    card: counterpart ? `Beyond Adobe · compares with ${counterpart}` : undefined,
    table: counterpart ? `Beyond Adobe (vs ${counterpart})` : app.adobeCounterpart,
  };
}

export function comparedProduct(app: Pick<AppRecord, "slug" | "adobeCounterpart">) {
  return beyondAdobeCounterparts[app.slug] ?? app.adobeCounterpart;
}
