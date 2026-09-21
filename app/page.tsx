const navItems = [
  'Home',
  'Offers & Bundles',
  'New Arrivals',
  'Best Sellers',
  'Élan Picks',
  'Categories',
  'Occasions',
  'Brands',
  'Stores',
  'My Orders',
];

const topTicker = [
  'Free delivery on orders over AED 250',
  'Curated Gulf fragrances',
  'Luxury scents, refined taste',
  'New launches every week',
];

const products = [
  {
    id: 1,
    name: 'Azzaro Wanted Girl',
    brand: 'Azzaro',
    store: 'Afnan Egypt',
    price: 'AED 385',
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Maison Alhambra',
    brand: 'Maison',
    store: 'Emarati Scents',
    price: 'AED 295',
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Lattafa Khamrah',
    brand: 'Lattafa',
    store: 'Afnan Egypt',
    price: 'AED 415',
    tag: 'Luxury',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Armaf Club de Nuit',
    brand: 'Armaf',
    store: 'Emarati Scents',
    price: 'AED 420',
    tag: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  },
];

const brands = [
  { name: 'AMOUAGE', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=500&q=80' },
  { name: 'LATTAFA', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80' },
  { name: 'ARMAF', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=500&q=80' },
  { name: 'AFNAN', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80' },
  { name: 'RASASI', image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=500&q=80' },
  { name: 'Maison Alhambra', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80' },
];

const stores = [
  { name: 'Afnan Egypt', city: 'Cairo', image: 'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80' },
  { name: 'Emarati Scents', city: 'Dubai', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Élan Boutique', city: 'UAE', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80' },
];

const categories = [
  { title: 'For Him', count: '120 scents', icon: 'M' },
  { title: 'For Her', count: '118 scents', icon: 'F' },
  { title: 'Luxury', count: '64 scents', icon: 'L' },
  { title: 'Fresh', count: '90 scents', icon: 'R' },
  { title: 'Oriental', count: '76 scents', icon: 'O' },
  { title: 'Gift Sets', count: '40 sets', icon: 'G' },
];

const moments = [
  'Evening',
  'Wedding',
  'Office',
  'Anniversary',
  'Summer',
  'VIP Gift',
  'Daily Wear',
  'Luxury Night',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="ticker">
          {topTicker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>

      <header className="main-header">
        <div className="header-left">
          <button className="icon-button" aria-label="Open menu">☰</button>
          <button className="icon-button" aria-label="Search">⌕</button>
        </div>

        <div className="brand-block">
          <span className="brand-kicker">THE HOME OF GULF FRAGRANCES</span>
          <div className="brand-logo">Élan Scents</div>
        </div>

        <div className="header-right">
          <button className="language-toggle">AR</button>
          <button className="language-toggle">EN</button>
          <button className="icon-button" aria-label="Favorites">♡</button>
          <button className="icon-button bag" aria-label="Shopping bag">👜</button>
        </div>
      </header>

      <nav className="nav-bar">
        {navItems.map((item) => (
          <a href="#" key={item} className="nav-item">
            {item}
          </a>
        ))}
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Curated fine fragrance</p>
          <h1>Pure elegance in every spray.</h1>
          <p className="subtitle">
            Discover luxury Gulf scents crafted for a refined, modern lifestyle.
          </p>
          <div className="cta-row">
            <a href="#" className="primary-btn">Shop Collection</a>
            <a href="#" className="secondary-btn">Explore Brands</a>
          </div>
          <div className="stat-row">
            <div>
              <strong>350+</strong>
              <span>Luxury scents</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Dispatch</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Customer rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card floating-card card-one" >
            <span>Signature Collection</span>
            <strong>Amber Oud</strong>
          </div>

          <div className="hero-card floating-card card-two">
            <span>Limited Drop</span>
            <strong>Velvet Musk</strong>
          </div>

          <img
            src="https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury fragrance bottle"
            className="hero-image"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Explore</p>
            <h2>Offers & Bundles</h2>
          </div>
          <a href="#" className="inline-link">View all</a>
        </div>

        <div className="horizontal-scroll">
          {products.map((product) => (
            <article key={product.id} className="mini-product-card">
              <div className="mini-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="mini-body">
                <span className="tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.store}</p>
                <div className="mini-meta">
                  <strong>{product.price}</strong>
                  <button>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Fresh arrivals</p>
            <h2>Newly arrived</h2>
          </div>
          <a href="#" className="inline-link">View all</a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-info">
                <div className="info-row">
                  <span className="brand-name">{product.brand}</span>
                  <span className="store-name">{product.store}</span>
                </div>
                <h3>{product.name}</h3>
                <p>Warm amber and velvety musk with a rich oriental finish.</p>
                <div className="price-row">
                  <strong>{product.price}</strong>
                  <button>Add to bag</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block categories-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Explore by taste</p>
            <h2>Fragrance categories</h2>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.title} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Moments</p>
            <h2>Occasions & moments</h2>
          </div>
        </div>

        <div className="moment-row">
          {moments.map((moment) => (
            <button className="moment-pill" key={moment}>{moment}</button>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Premium brands</p>
            <h2>Élan Scents favourites</h2>
          </div>
          <a href="#" className="inline-link">View all brands</a>
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

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Trusted stores</p>
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

      <section className="section-block about-section">
        <div className="about-copy">
          <p className="eyebrow">About Gulf Élan</p>
          <h2>Luxury fragrance, shaped by the Gulf.</h2>
          <p>
            Élan Scents brings together the elegance of European design with the richness of Gulf perfumery. We curate premium scents that feel modern, intimate, and unforgettable.
          </p>
          <a href="#" className="primary-btn">Learn more</a>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80" alt="Luxury perfume concept" />
        </div>
      </section>

      <section className="section-block contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>Contact Élan Scents</h2>
          </div>
          <div className="contact-links">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>WhatsApp</span>
            <span>hello@elanscents.com</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-logo small">Élan Scents</div>
          <p>The home of Gulf fragrances.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <a href="#">Offers</a>
            <a href="#">New Arrivals</a>
            <a href="#">Best Sellers</a>
          </div>
          <div>
            <h4>Brands</h4>
            <a href="#">AMOUAGE</a>
            <a href="#">Lattafa</a>
            <a href="#">Armaf</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
