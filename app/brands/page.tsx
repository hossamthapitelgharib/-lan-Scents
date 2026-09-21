const brands = [
  { name: 'AMOUAGE', description: 'Luxury oriental expressions', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80' },
  { name: 'LATTAFA', description: 'Modern signature scents', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { name: 'ARMAF', description: 'Fresh and intense allure', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { name: 'AFNAN', description: 'Contemporary elegance', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80' },
];

export default function BrandsPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Brands</div>
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Curated labels</p>
            <h2>Featured brands</h2>
          </div>
        </div>

        <div className="brand-grid">
          {brands.map((brand) => (
            <article key={brand.name} className="brand-card">
              <img src={brand.image} alt={brand.name} />
              <div className="brand-overlay">
                <span>{brand.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
