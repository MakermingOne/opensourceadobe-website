export function VerdictPanel({ items }: { items: string[] }) {
  return (
    <section className="guide-verdict" aria-label="Quick verdict">
      {items.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}
    </section>
  );
}
