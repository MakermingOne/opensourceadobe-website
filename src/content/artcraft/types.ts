import type { GuideFaq, GuideTable } from "@/content/alternatives/types";

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: GuideTable;
  links?: Array<{ label: string; href: string }>;
};

export type ArticleGuide = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lede: string;
  sections: ArticleSection[];
  faqs: GuideFaq[];
  sourceIds: string[];
};
