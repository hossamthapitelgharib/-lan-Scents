const products = [
  { name: 'Azzaro Wanted Girl', brand: 'Azzaro', store: 'Afnan Egypt', price: 'AED 385' },
  { name: 'Lattafa Khamrah', brand: 'Lattafa', store: 'Emarati Scents', price: 'AED 415' },
  { name: 'Maison Alhambra', brand: 'Maison', store: 'Élan Boutique', price: 'AED 295' },
];

export default function AdminProductsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Admin / Products</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Catalog</p>
            <h2>Products</h2>
          </div>
          <button className="primary-btn">Add product</button>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Store</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.store}</td>
                  <td>{product.price}</td>
                  <td><button className="mini-action">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
