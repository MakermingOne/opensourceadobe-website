import { ComparisonGuidePage } from "@/components/comparisons/comparison-guide-page";
import { photopeaComparison as guide } from "@/content/comparisons/photopea-vs-photoshop";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: guide.path, absoluteTitle: true });

export default function PhotopeaVsPhotoshopPage() {
  return <ComparisonGuidePage guide={guide} />;
}
