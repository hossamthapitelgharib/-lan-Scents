const commissions = [
  { store: 'Afnan Egypt', amount: 'AED 1,420', status: 'Pending' },
  { store: 'Emarati Scents', amount: 'AED 2,160', status: 'Paid' },
  { store: 'Élan Boutique', amount: 'AED 860', status: 'Review' },
];

export default function AdminCommissionsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Commissions</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h2>Commissions</h2>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Store</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((item) => (
                <tr key={item.store}>
                  <td>{item.store}</td>
                  <td>{item.amount}</td>
                  <td><span className="status-badge">{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
