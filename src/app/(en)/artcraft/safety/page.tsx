import { ArticleGuidePage } from "@/components/article-guide";
import { resolveSources } from "@/content/artcraft/resolve-sources";
import { artCraftSafetyGuide as guide } from "@/content/artcraft/safety";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: guide.path, absoluteTitle: true });

export default function ArtCraftSafetyPage() {
  return <ArticleGuidePage guide={guide} sources={resolveSources(guide.sourceIds)} breadcrumbs={[{ label: "Home", href: "/" }, { label: "ArtCraft", href: "/artcraft/" }, { label: "Safety" }]} />;
}
