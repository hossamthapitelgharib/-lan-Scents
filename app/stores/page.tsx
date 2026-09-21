export default function StoresPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Curated sellers</p>
            <h2>Featured stores</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="store-grid">
          <a href="/products" className="store-card">
            <img src="https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80" alt="Afnan Egypt" />
            <div className="store-info">
              <h3>Afnan Egypt</h3>
              <span>Cairo</span>
            </div>
          </a>
          <a href="/products" className="store-card">
            <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80" alt="Emarati Scents" />
            <div className="store-info">
              <h3>Emarati Scents</h3>
              <span>Dubai</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
