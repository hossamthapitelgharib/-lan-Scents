'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../components/CartProvider';

const money = new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 });

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [payment, setPayment] = useState('cash');
  const delivery = subtotal > 0 && subtotal < 250 ? 25 : 0;
  const total = subtotal + delivery;

  if (submitted) return <main className="page-shell"><section className="section-block"><div className="product-card"><div className="product-info"><p className="eyebrow">Order received</p><h1>Thank you for choosing Élan Scents.</h1><p>Your demo order has been recorded. Store confirmation and live payment integration will be added when the official marketplace connections are enabled.</p><Link href="/my-orders" className="primary-btn">View my orders</Link></div></div></section></main>;

  if (!items.length) return <main className="page-shell"><section className="section-block"><div className="product-card"><div className="product-info"><h1>Your bag is empty</h1><p>Add a product before continuing to checkout.</p><Link href="/products" className="primary-btn">Explore fragrances</Link></div></div></section></main>;

  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head"><div><p className="eyebrow">Secure checkout</p><h1>Complete your order</h1></div><Link href="/cart" className="inline-link">Back to bag</Link></div>
        <div className="checkout-layout">
          <form className="checkout-form product-card" onSubmit={(event) => { event.preventDefault(); clearCart(); setSubmitted(true); }}>
            <div className="product-info">
              <h2>Delivery details</h2>
              <div className="form-grid">
                <label>Full name<input name="name" required /></label>
                <label>Phone number<input name="phone" type="tel" required /></label>
                <label className="full-field">Address<textarea name="address" rows={3} required /></label>
                <label>City<input name="city" required /></label>
                <label>Payment<select value={payment} onChange={(event) => setPayment(event.target.value)}><option value="cash">Cash on delivery</option><option value="card">Card — coming soon</option></select></label>
              </div>
              <button className="primary-btn" type="submit">Place demo order</button>
            </div>
          </form>
          <aside className="order-summary product-card"><div className="product-info"><p className="eyebrow">Review</p>{items.map((item) => <div className="summary-line" key={item.id}><span>{item.name} × {item.quantity}</span><strong>{money.format(item.price * item.quantity)}</strong></div>)}<div className="summary-line"><span>Delivery</span><strong>{delivery ? money.format(delivery) : 'Free'}</strong></div><div className="summary-total"><span>Total</span><strong>{money.format(total)}</strong></div></div></aside>
        </div>
      </section>
    </main>
  );
}
