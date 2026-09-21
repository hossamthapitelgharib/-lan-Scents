export default function CheckoutPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Secure</p>
            <h2>Checkout</h2>
          </div>
          <a href="/cart" className="inline-link">Back to cart</a>
        </div>

        <div className="product-card">
          <div className="product-info">
            <div className="info-row">
              <span className="brand-name">Order review</span>
              <span className="store-name">Express</span>
            </div>
            <h3>Azzaro Wanted Girl</h3>
            <p>Delivery fee: AED 25 · Total: AED 410</p>
            <div className="price-row">
              <strong>Payment: Cash on delivery</strong>
              <a href="/my-orders" className="price-action-btn">Confirm</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
