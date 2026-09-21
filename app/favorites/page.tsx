const brands = [
  { name: 'AMOUAGE', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80' },
  { name: 'LATTAFA', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { name: 'ARMAF', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { name: 'AFNAN', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80' },
];

export default function FavoritesPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Favorites</div>
      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Saved</p>
            <h2>My favorites</h2>
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
