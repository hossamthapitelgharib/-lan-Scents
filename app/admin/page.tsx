export default function AdminPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Operations</p>
            <h2>Admin dashboard</h2>
          </div>
          <a href="/" className="inline-link">Back home</a>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-info">
              <h3>Products</h3>
              <p>Manage catalog items, stock, and pricing.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>Stores</h3>
              <p>Monitor sellers, commissions, and offers.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>Orders</h3>
              <p>Review customer orders and fulfillment status.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>Marketplace</h3>
              <p>Track selected offer logic and sync sources.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
