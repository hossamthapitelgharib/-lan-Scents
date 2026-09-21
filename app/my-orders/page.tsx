export default function MyOrdersPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Account</p>
            <h2>My orders</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="product-card">
          <div className="product-info">
            <div className="info-row">
              <span className="brand-name">Order #EL-1042</span>
              <span className="store-name">Delivered</span>
            </div>
            <h3>Lattafa Khamrah</h3>
            <p>1 item · AED 415 · 1 day ago</p>
            <div className="price-row">
              <strong>Status: Delivered</strong>
              <a href="/checkout" className="price-action-btn">Track</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
