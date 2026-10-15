import type { SourceRecord } from "@/content/types";

export type GuideTable = {
  caption: string;
  columns: string[];
  rows: Array<{ label: string; cells: string[] }>;
};

export type GuideOption = {
  name: string;
  paragraphs: string[];
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type BaseAlternativeGuide = {
  title: string;
  description: string;
  h1: string;
  introduction: string;
  verdicts: string[];
  options: GuideOption[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  sources: SourceRecord[];
};
