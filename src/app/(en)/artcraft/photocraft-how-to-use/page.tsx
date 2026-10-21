import { ArticleGuidePage } from "@/components/article-guide";
import { resolveSources } from "@/content/artcraft/resolve-sources";
import { photoCraftHowToUseGuide as guide } from "@/content/artcraft/photocraft-how-to-use";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: guide.path, absoluteTitle: true });

export default function PhotoCraftHowToUsePage() {
  return <ArticleGuidePage guide={guide} sources={resolveSources(guide.sourceIds)} breadcrumbs={[{ label: "Home", href: "/" }, { label: "ArtCraft", href: "/artcraft/" }, { label: "PhotoCraft how to use" }]} />;
}
