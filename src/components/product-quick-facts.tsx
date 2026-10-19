import { StatusBadge } from "@/components/status-badge";
import type { AppRecord } from "@/content/types";
export function ProductQuickFacts({ app }: { app: AppRecord }) {
  return <div className="product-quick-facts" aria-label="Release and platforms"><strong>{app.version}</strong><StatusBadge value={app.status} /><span>{app.platforms.join(" · ")}</span></div>;
}
