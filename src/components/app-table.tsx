import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import type { AppRecord } from "@/content/types";
import { workflowLabels } from "@/lib/workflow-labels";

export function AppTable({ apps }: { apps: AppRecord[] }) {
  return (
    <div>
      <p className="scroll-hint">Scroll horizontally to see every field →</p>
      <div className="table-scroll" tabIndex={0} aria-label="Scrollable comparison table">
        <table className="app-table">
          <caption className="sr-only">ArtCraft apps compared with their nearest workflow</caption>
          <thead>
            <tr>
              <th scope="col">App</th>
              <th scope="col">Compared workflow</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col">Release</th>
              <th scope="col">Platforms</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => (
              <tr key={app.slug}>
                <th scope="row">
                  {app.detailPublished ? <Link href={`/apps/${app.slug}/`}>{app.name}</Link> : app.name}
                </th>
                <td>{workflowLabels(app).table}</td>
                <td>{app.category}</td>
                <td><StatusBadge value={app.status} /></td>
                <td>{app.version}</td>
                <td>{app.platforms.join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-summary">
        Release and platform details come from the official ArtCraft pages and repositories. They describe availability, not independently tested production readiness.
      </p>
    </div>
  );
}
