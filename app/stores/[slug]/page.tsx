const store = {
  name: 'Afnan Egypt',
  city: 'Cairo',
  description: 'Curated premium fragrance collection for the Egyptian market.',
  image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80',
};

const products = [
  { name: 'Azzaro Wanted Girl', price: 'AED 385', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80' },
  { name: 'Afnan 9am', price: 'AED 320', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80' },
  { name: 'Afnan Blue', price: 'AED 350', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80' },
];

export default function StoreDetailsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Stores / Afnan Egypt</div>

      <section className="brand-hero">
        <img src={store.image} alt={store.name} />
        <div>
          <p className="eyebrow">Store</p>
          <h1>{store.name}</h1>
          <p>{store.description}</p>
          <p className="muted">City: {store.city}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Store collection</p>
            <h2>Available perfumes</h2>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-row">
                  <strong>{product.price}</strong>
                  <button>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
