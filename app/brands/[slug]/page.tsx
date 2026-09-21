const brand = {
  name: 'Lattafa',
  description: 'Capturing contemporary elegance with rich, layered scents.',
  image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
};

const products = [
  { name: 'Lattafa Khamrah', price: 'AED 415', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lattafa Yara', price: 'AED 340', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lattafa Asad', price: 'AED 370', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80' },
];

export default function BrandDetailsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Brands / Lattafa</div>

      <section className="brand-hero">
        <img src={brand.image} alt={brand.name} />
        <div>
          <p className="eyebrow">Brand spotlight</p>
          <h1>{brand.name}</h1>
          <p>{brand.description}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Available now</p>
            <h2>Fragrances from {brand.name}</h2>
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
