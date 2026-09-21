const stores = [
  { name: 'Afnan Egypt', status: 'Active', commission: '12%' },
  { name: 'Emarati Scents', status: 'Active', commission: '10%' },
  { name: 'Élan Boutique', status: 'Pending', commission: '15%' },
];

export default function AdminStoresPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Stores</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h2>Stores</h2>
          </div>
          <button className="primary-btn">Add store</button>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Store</th>
                <th>Status</th>
                <th>Commission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store.name}>
                  <td>{store.name}</td>
                  <td>{store.status}</td>
                  <td>{store.commission}</td>
                  <td><button className="mini-action">Manage</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
