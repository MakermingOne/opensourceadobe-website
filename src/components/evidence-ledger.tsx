import { StatusBadge } from "@/components/status-badge";
import type { EvidenceState } from "@/content/types";

export function EvidenceLedger({
  claim,
  title,
  state,
  source,
  verified,
}: {
  claim: string;
  title: string;
  state: EvidenceState;
  source: string;
  verified: string;
}) {
  return (
    <aside className="evidence-ledger" aria-label={`Evidence ledger: ${title}`}>
      <div className="ledger-topline">
        <span>{claim}</span>
        <StatusBadge value={state} />
      </div>
      <p className="ledger-title">{title}</p>
      <dl>
        <div><dt>Source</dt><dd>{source}</dd></div>
        <div><dt>Last verified</dt><dd>{verified}</dd></div>
      </dl>
    </aside>
  );
}
