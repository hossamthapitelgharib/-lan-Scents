export default function ProductsPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Browse</p>
            <h2>All fragrances</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image-wrap">
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80" alt="Offer product" />
            </div>
            <div className="product-info">
              <div className="info-row">
                <span className="brand-name">Azzaro</span>
                <span className="store-name">Afnan Egypt</span>
              </div>
              <h3>Azzaro Wanted Girl</h3>
              <p>Luxury oriental floral with soft amber notes.</p>
              <div className="price-row">
                <strong>AED 385</strong>
                <a href="/checkout" className="price-action-btn">Add to bag</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image-wrap">
              <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80" alt="Product 2" />
            </div>
            <div className="product-info">
              <div className="info-row">
                <span className="brand-name">Lattafa</span>
                <span className="store-name">Afnan Egypt</span>
              </div>
              <h3>Lattafa Khamrah</h3>
              <p>Warm woody scent with a refined spicy finish.</p>
              <div className="price-row">
                <strong>AED 415</strong>
                <a href="/checkout" className="price-action-btn">Add to bag</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
