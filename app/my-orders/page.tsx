const orders = [
  { id: '#1042', total: 'AED 420', status: 'Paid' },
  { id: '#1043', total: 'AED 615', status: 'Processing' },
];

export default function MyOrdersPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / My Orders</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Customer area</p>
            <h2>My orders</h2>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
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
