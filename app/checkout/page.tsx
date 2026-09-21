export default function CheckoutPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Checkout</div>

      <section className="checkout-layout">
        <div className="checkout-box">
          <h2>Shipping details</h2>
          <form className="checkout-form">
            <input placeholder="Full Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Address" />
            <input placeholder="City" />
            <input placeholder="Country" />
          </form>
        </div>

        <aside className="summary-box">
          <h3>Payment</h3>
          <div className="summary-row"><span>Cash on delivery</span><strong>Selected</strong></div>
          <div className="summary-row total"><span>Total</span><strong>AED 705</strong></div>
          <button className="primary-btn wide">Confirm order</button>
        </aside>
      </section>
    </main>
  );
}
