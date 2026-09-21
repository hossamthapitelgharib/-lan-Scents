'use client';

import Link from 'next/link';
import { useCart } from '../../components/CartProvider';

const money = new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  maximumFractionDigits: 0,
});

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const delivery = subtotal > 0 && subtotal < 250 ? 25 : 0;
  const total = subtotal + delivery;

  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div><p className="eyebrow">Your selection</p><h1>Shopping bag</h1></div>
          <Link href="/products" className="inline-link">Continue shopping</Link>
        </div>

        {items.length === 0 ? (
          <div className="product-card"><div className="product-info">
            <h2>Your bag is waiting</h2>
            <p>Add a fragrance to begin your order. Availability and prices are confirmed at checkout.</p>
            <Link href="/products" className="primary-btn">Explore fragrances</Link>
          </div></div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article key={item.id} className="product-card cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="product-info">
                    <div className="info-row"><span>{item.brand}</span><span>{item.store}</span></div>
                    <h2>{item.name}</h2>
                    <p>{item.size} · {money.format(item.price)} each</p>
                    <div className="price-row">
                      <div className="quantity-control">
                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <strong>{money.format(item.price * item.quantity)}</strong>
                      <button type="button" className="text-button" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <aside className="order-summary product-card">
              <div className="product-info">
                <p className="eyebrow">Order summary</p>
                <div className="summary-line"><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div>
                <div className="summary-line"><span>Delivery</span><strong>{delivery ? money.format(delivery) : 'Free'}</strong></div>
                <div className="summary-total"><span>Total</span><strong>{money.format(total)}</strong></div>
                <Link href="/checkout" className="primary-btn full-width">Proceed to checkout</Link>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
