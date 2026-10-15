export function EditorialSourceNote({ children }: { children: React.ReactNode }) {
  return (
    <section className="editorial-source" aria-labelledby="editorial-sources-heading">
      <p className="section-number">SRC</p>
      <div>
        <h2 id="editorial-sources-heading">Sources</h2>
        <p>{children}</p>
      </div>
    </section>
  );
}
