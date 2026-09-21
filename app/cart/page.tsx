export default function CartPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Bag</p>
            <h2>Shopping cart</h2>
          </div>
          <a href="/" className="inline-link">Continue shopping</a>
        </div>

        <div className="product-card">
          <div className="product-info">
            <div className="info-row">
              <span className="brand-name">Azzaro</span>
              <span className="store-name">Afnan Egypt</span>
            </div>
            <h3>Azzaro Wanted Girl</h3>
            <p>1 item · AED 385</p>
            <div className="price-row">
              <strong>Total: AED 385</strong>
              <a href="/checkout" className="price-action-btn">Checkout</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
