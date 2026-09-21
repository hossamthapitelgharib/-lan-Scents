const orders = [
  { id: '#1042', customer: 'Noura A.', total: 'AED 420', status: 'Paid' },
  { id: '#1043', customer: 'Faisal K.', total: 'AED 615', status: 'Processing' },
  { id: '#1044', customer: 'Huda M.', total: 'AED 275', status: 'Shipped' },
];

export default function AdminOrdersPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Orders</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Transactions</p>
            <h2>Orders</h2>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td><span className="status-badge">{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
