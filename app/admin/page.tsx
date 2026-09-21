'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Operations</p>
            <h1>Admin dashboard</h1>
          </div>
          <Link href="/" className="inline-link">Back home</Link>
        </div>

        <div className="admin-grid">
          <div className="product-card admin-card">
            <div className="product-info">
              <p className="eyebrow">Catalog</p>
              <h2>Products</h2>
              <p>Manage stock levels, pricing, fragrances and product descriptions.</p>
              <div className="stats-row"><strong>128</strong><span>Items</span></div>
            </div>
          </div>

          <div className="product-card admin-card">
            <div className="product-info">
              <p className="eyebrow">Sellers</p>
              <h2>Stores</h2>
              <p>Monitor seller performance, offers and store ranking.</p>
              <div className="stats-row"><strong>18</strong><span>Stores</span></div>
            </div>
          </div>

          <div className="product-card admin-card">
            <div className="product-info">
              <p className="eyebrow">Orders</p>
              <h2>Orders</h2>
              <p>Track fulfillment, customer delivery, and payment status.</p>
              <div className="stats-row"><strong>243</strong><span>Completed</span></div>
            </div>
          </div>

          <div className="product-card admin-card">
            <div className="product-info">
              <p className="eyebrow">Marketplace</p>
              <h2>Commissions</h2>
              <p>Review earnings, payout logic, and storefront fees.</p>
              <div className="stats-row"><strong>AED 18.4K</strong><span>Monthly</span></div>
            </div>
          </div>
        </div>

        <div className="admin-panels">
          <div className="product-card">
            <div className="product-info">
              <p className="eyebrow">Recent activity</p>
              <table className="data-table">
                <thead>
                  <tr><th>Order</th><th>Store</th><th>Status</th><th>Amount</th></tr>
                </thead>
                <tbody>
                  <tr><td>#EL-1042</td><td>Afnan Egypt</td><td>Delivered</td><td>AED 415</td></tr>
                  <tr><td>#EL-1088</td><td>Emarati Scents</td><td>Processing</td><td>AED 385</td></tr>
                  <tr><td>#EL-1120</td><td>Élan Boutique</td><td>Ready</td><td>AED 295</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <p className="eyebrow">Marketplace health</p>
              <ul className="metric-list">
                <li><span>Low stock alerts</span><strong>7</strong></li>
                <li><span>Offer sync issues</span><strong>2</strong></li>
                <li><span>Pending payouts</span><strong>4</strong></li>
                <li><span>New storefront requests</span><strong>11</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
