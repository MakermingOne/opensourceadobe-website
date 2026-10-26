import { ComparisonGuidePage } from "@/components/comparisons/comparison-guide-page";
import { gimpComparison as guide } from "@/content/comparisons/gimp-vs-photoshop";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: guide.path, absoluteTitle: true });

export default function GimpVsPhotoshopPage() {
  return <ComparisonGuidePage guide={guide} />;
}
