export interface LocalizedLink { label: string; href: string }
export interface LocalizedSection {
  id: string;
  heading: string;
  paragraphs: string[];
  kind?: "apps";
  table?: { caption: string; headers: string[]; rows: string[][] };
  links?: LocalizedLink[];
}
export interface LocalizedPage {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: LocalizedSection[];
  faq: { question: string; answer: string }[];
  sources: LocalizedLink[];
}
