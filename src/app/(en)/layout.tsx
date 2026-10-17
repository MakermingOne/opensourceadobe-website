import { SiteDocument, metadata, viewport } from "@/components/site-document";
export { metadata, viewport };
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
