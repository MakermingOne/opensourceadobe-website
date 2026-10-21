import { ArticleGuidePage } from "@/components/article-guide";
import { resolveSources } from "@/content/artcraft/resolve-sources";
import { artCraftPricingGuide as guide } from "@/content/artcraft/pricing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: guide.path, absoluteTitle: true });

export default function ArtCraftPricingPage() {
  return <ArticleGuidePage guide={guide} sources={resolveSources(guide.sourceIds)} breadcrumbs={[{ label: "Home", href: "/" }, { label: "ArtCraft", href: "/artcraft/" }, { label: "Pricing" }]} />;
}
