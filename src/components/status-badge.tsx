import type { AppStatus, EvidenceState } from "@/content/types";

const labels: Record<AppStatus | EvidenceState, string> = {
  "early-alpha": "Early alpha",
  "in-development": "In development",
  "not-verified": "Not verified",
  "verified-official": "Official source verified",
  "partially-tested": "Partially tested",
  reported: "Reported",
};

export function StatusBadge({ value }: { value: AppStatus | EvidenceState }) {
  return <span className={`status status--${value}`}>{labels[value]}</span>;
}
