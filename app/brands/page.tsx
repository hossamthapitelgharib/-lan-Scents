export default function BrandsPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Luxury labels</p>
            <h2>Our brands</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="brand-grid">
          <a href="/products" className="brand-card">
            <img src="https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=500&q=80" alt="AMOUAGE" />
            <div className="brand-overlay"><span>AMOUAGE</span></div>
          </a>
          <a href="/products" className="brand-card">
            <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80" alt="LATTAFA" />
            <div className="brand-overlay"><span>LATTAFA</span></div>
          </a>
          <a href="/products" className="brand-card">
            <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=500&q=80" alt="ARMAF" />
            <div className="brand-overlay"><span>ARMAF</span></div>
          </a>
        </div>
      </section>
    </main>
  );
}
