const product = {
  name: 'Azzaro Wanted Girl',
  brand: 'Azzaro',
  store: 'Afnan Egypt',
  price: 'AED 385',
  size: '100ml',
  category: 'Floral Oriental',
  description:
    'A vibrant and feminine fragrance blending sparkling citrus with soft florals and warm sensual woods.',
  notes: ['Pear', 'Orange Blossom', 'Vanilla', 'Amber'],
  image:
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
};

const related = [
  { name: 'Maison Alhambra', price: 'AED 295', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lattafa Khamrah', price: 'AED 415', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80' },
  { name: 'Armaf Club de Nuit', price: 'AED 420', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80' },
];

export default function ProductDetailsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Products / Azzaro Wanted Girl</div>

      <section className="product-detail-wrap">
        <div className="detail-gallery">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span>{product.store}</span>
            <span>{product.size}</span>
          </div>
          <div className="detail-price">{product.price}</div>
          <p className="detail-description">{product.description}</p>

          <div className="detail-actions">
            <button className="primary-btn">Add to bag</button>
            <button className="secondary-btn">Add to favorites</button>
          </div>

          <div className="note-block">
            <h3>Notes</h3>
            <div className="note-list">
              {product.notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recommended</p>
            <h2>Related fragrances</h2>
          </div>
        </div>

        <div className="product-grid">
          {related.map((item) => (
            <article key={item.name} className="product-card">
              <div className="product-image-wrap">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-info">
                <h3>{item.name}</h3>
                <div className="price-row">
                  <strong>{item.price}</strong>
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
