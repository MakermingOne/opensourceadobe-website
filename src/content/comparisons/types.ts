import type { BaseAlternativeGuide, GuideSection, GuideTable } from "@/content/alternatives/types";

export type ComparisonGuide = Pick<BaseAlternativeGuide, "title" | "description" | "h1" | "introduction" | "verdicts" | "faqs" | "sources"> & {
  path: string;
  table: GuideTable;
  scenarios: GuideSection[];
  sections: Array<GuideSection & { id: string }>;
  related: { href: string; label: string };
};
