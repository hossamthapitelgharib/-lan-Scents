const items = [
  { name: 'Azzaro Wanted Girl', qty: 1, price: 'AED 385' },
  { name: 'Maison Alhambra', qty: 1, price: 'AED 295' },
];

export default function CartPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Cart</div>

      <section className="section-block cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.name} className="cart-item">
              <div className="cart-thumb" />
              <div className="cart-copy">
                <h3>{item.name}</h3>
                <p>Qty: {item.qty}</p>
              </div>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>

        <aside className="summary-box">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><strong>AED 680</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>AED 25</strong></div>
          <div className="summary-row total"><span>Total</span><strong>AED 705</strong></div>
          <button className="primary-btn wide">Proceed to checkout</button>
        </aside>
      </section>
    </main>
  );
}
