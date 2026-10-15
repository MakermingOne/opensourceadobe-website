import type { GuideTable } from "@/content/alternatives/types";

export function AlternativeTable({ table }: { table: GuideTable }) {
  return (
    <div className="guide-table-wrap">
      <p className="scroll-hint">Scroll horizontally to compare every column →</p>
      <div className="table-scroll" role="region" aria-label={`${table.caption}, horizontally scrollable`} tabIndex={0}>
        <table className="guide-table">
          <caption className="sr-only">{table.caption}</caption>
          <thead><tr>{table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.label}>
                {row.cells.map((cell, index) => index === 0
                  ? <th key={index} scope="row">{cell}</th>
                  : <td key={index}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
