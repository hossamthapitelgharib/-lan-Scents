export default function FavoritesPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Saved</p>
            <h2>Favorites</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image-wrap">
              <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80" alt="Favorite 1" />
            </div>
            <div className="product-info">
              <h3>Maison Alhambra</h3>
              <p>Warm luxury fragrance.</p>
              <div className="price-row">
                <strong>AED 295</strong>
                <a href="/checkout" className="price-action-btn">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
