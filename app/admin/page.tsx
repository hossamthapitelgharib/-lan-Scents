const stats = [
  { label: 'Total Revenue', value: 'AED 76,340' },
  { label: 'Orders', value: '1,284' },
  { label: 'Active Stores', value: '12' },
  { label: 'New Signups', value: '92' },
];

const recentOrders = [
  { id: '#1042', customer: 'Noura A.', total: 'AED 420', status: 'Paid' },
  { id: '#1043', customer: 'Faisal K.', total: 'AED 615', status: 'Processing' },
  { id: '#1044', customer: 'Huda M.', total: 'AED 275', status: 'Shipped' },
  { id: '#1045', customer: 'Sami A.', total: 'AED 390', status: 'Pending' },
];

export default function AdminDashboardPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Dashboard</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Dashboard</h2>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Activity</p>
            <h2>Recent orders</h2>
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
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className="status-badge">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
