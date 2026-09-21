const products = [
  {
    id: 1,
    slug: 'azzaro-wanted-girl',
    name: 'Azzaro Wanted Girl',
    brand: 'Azzaro',
    category: 'Floral Oriental',
    price: 'AED 385',
    store: 'Afnan Egypt',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    slug: 'lattafa-khamrah',
    name: 'Lattafa Khamrah',
    brand: 'Lattafa',
    category: 'Warm Spicy',
    price: 'AED 415',
    store: 'Emarati Scents',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    slug: 'maison-alhambra',
    name: 'Maison Alhambra',
    brand: 'Maison',
    category: 'Amber Vanilla',
    price: 'AED 295',
    store: 'Élan Boutique',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    slug: 'club-de-nuit',
    name: 'Armaf Club de Nuit',
    brand: 'Armaf',
    category: 'Woody Fresh',
    price: 'AED 420',
    store: 'Emarati Scents',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ProductsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Products</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Browse all</p>
            <h2>Luxury fragrances</h2>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">New</span>
              </div>
              <div className="product-info">
                <div className="info-row">
                  <span className="brand-name">{product.brand}</span>
                  <span className="store-name">{product.store}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <div className="price-row">
                  <strong>{product.price}</strong>
                  <button>Add to bag</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
