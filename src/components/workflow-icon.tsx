export type WorkflowSlug =
  | "photocraft"
  | "vectorcraft"
  | "filmcraft"
  | "lightcraft"
  | "pdfcraft"
  | "effectcraft"
  | "designcraft"
  | "wordcraft"
  | "soundcraft"
  | "deckcraft"
  | "cadcraft"
  | "gridcraft"
  | "figcraft";

type WorkflowIconProps = {
  slug: WorkflowSlug;
  className?: string;
};

const paths: Record<WorkflowSlug, ReactNode> = {
  figcraft: (
    <>
      <rect x="3" y="3" width="13" height="16" rx="1" />
      <path d="M3 7h13 M7 10h5 M7 13h3 m5 0 6 4-3 1-1 3Z" />
    </>
  ),
  wordcraft: (
    <>
      <path d="M5 3h10l4 4v14H5Z M15 3v5h4 M8 11h8 M8 14h8 M8 17h5" />
    </>
  ),
  soundcraft: (
    <>
      <path d="M3 10v4 M6 7v10 M9 4v16 M12 8v8 M15 6v12 M18 3v18 M21 9v6" />
    </>
  ),
  deckcraft: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M12 17v4 M8 21h8 M7 13V9 M11 13V7 M15 13v-3 M3 3h18" />
    </>
  ),
  cadcraft: (
    <>
      <path d="m4 17 8-14 8 14Z M8 17h8 M12 3v5 M3 21h18 M5 19v3 M19 19v3" />
      <circle cx="12" cy="11" r="1.5" />
    </>
  ),
  gridcraft: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 8h18 M8 3v18 M8 14h13 M15 8v13" />
    </>
  ),
  photocraft: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1" />
      <path d="m5.5 15 4.2-4 3.1 2.8 2.7-2.4 3 3.6" />
      <path d="M7 21h10M9 18v3m6-3v3" />
      <circle cx="16.5" cy="7.5" r="1.5" />
    </>
  ),
  vectorcraft: (
    <>
      <path d="M5 18C7 7 15 5 19 8" />
      <path d="M5 18c5-2 10-1 14-10" />
      <circle cx="5" cy="18" r="1.5" />
      <circle cx="19" cy="8" r="1.5" />
      <path d="M3 6h5m8 12h5M5.5 6v7M18.5 11v7" />
    </>
  ),
  filmcraft: (
    <>
      <rect x="3" y="4" width="18" height="11" rx="1" />
      <path d="m10 7 5 2.5-5 2.5Z" />
      <path d="M3 19h18M7 17v4m10-4v4M12 16v6" />
    </>
  ),
  lightcraft: (
    <>
      <circle cx="8" cy="9" r="5" />
      <path d="M8 4 5.5 8.5 8 14m0-10 4.8 1.5L8 14m4.8-8.5L13 11l-5 3" />
      <rect x="14" y="13" width="7" height="7" rx="1" />
      <path d="M14 16.5h7M17.5 13v7" />
    </>
  ),
  pdfcraft: (
    <>
      <path d="M7 3h8l4 4v14H7Z" />
      <path d="M15 3v5h4M10 12h6m-6 3h6m-6 3h4" />
      <path d="M4 6v12" />
    </>
  ),
  effectcraft: (
    <>
      <path d="M4 17c4-10 9 3 16-10" />
      <rect x="3" y="16" width="3" height="3" transform="rotate(45 4.5 17.5)" />
      <rect x="10.5" y="10.5" width="3" height="3" transform="rotate(45 12 12)" />
      <rect x="18" y="5.5" width="3" height="3" transform="rotate(45 19.5 7)" />
      <path d="M4 5v5m0-2h4m12 8v4m-2-2h4" />
    </>
  ),
  designcraft: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h8M8 10h5M8 14v4m4-4v4m4-4v4" />
      <path d="M6.5 14h1.5m4 0h1.5m4 0H19" />
    </>
  ),
};

export function WorkflowIcon({ slug, className }: WorkflowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      data-workflow-icon={slug}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      {paths[slug]}
    </svg>
  );
}
import type { ReactNode } from "react";
