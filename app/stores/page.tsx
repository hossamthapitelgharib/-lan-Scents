const stores = [
  { name: 'Afnan Egypt', city: 'Cairo', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80' },
  { name: 'Emarati Scents', city: 'Dubai', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Élan Boutique', city: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80' },
];

export default function StoresPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Stores</div>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h2>Featured stores</h2>
          </div>
        </div>

        <div className="store-grid">
          {stores.map((store) => (
            <article key={store.name} className="store-card">
              <img src={store.image} alt={store.name} />
              <div className="store-info">
                <h3>{store.name}</h3>
                <span>{store.city}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
