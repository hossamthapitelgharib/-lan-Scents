import { heroStats, topTicker, navItems, products, brands, stores, categories, moments, contactLinks } from '../data/mockData';

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
          <button className="icon-button" aria-label="Open menu">
            ☰
          </button>
          <a href="/products" className="icon-button" aria-label="Search" title="Search">
            ⌕
          </a>
        </div>

        <div className="brand-block">
          <span className="brand-kicker">THE HOME OF GULF FRAGRANCES</span>
          <div className="brand-logo">Élan Scents</div>
        </div>

        <div className="header-right">
          <button className="language-toggle">AR</button>
          <button className="language-toggle">EN</button>
          <a href="/favorites" className="icon-button" aria-label="Favorites" title="Favorites">
            ♡
          </a>
          <a href="/cart" className="icon-button bag" aria-label="Shopping bag" title="Cart">
            👜
          </a>
        </div>
      </header>

      <nav className="nav-bar" aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.label} className="nav-item">
            {item.label}
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
            <a href="/products" className="primary-btn">
              Shop Collection
            </a>
            <a href="/brands" className="secondary-btn">
              Explore Brands
            </a>
          </div>
          <div className="stat-row">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card floating-card card-one">
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
          <a href="/products" className="inline-link">
            View all
          </a>
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
                  <a href="/cart" className="mini-cart-btn" aria-label={`Add ${product.name} to cart`}>
                    +
                  </a>
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
          <a href="/products" className="inline-link">
            View all
          </a>
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
                  <a href="/checkout" className="price-action-btn">
                    Add to bag
                  </a>
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
            <a key={category.title} href="/products" className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <span>{category.count}</span>
            </a>
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
            <button className="moment-pill" key={moment} type="button">
              {moment}
            </button>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Premium brands</p>
            <h2>Élan Scents favourites</h2>
          </div>
          <a href="/brands" className="inline-link">
            View all brands
          </a>
        </div>

        <div className="brand-grid">
          {brands.map((brand) => (
            <a key={brand.name} href="/brands" className="brand-card">
              <img src={brand.image} alt={brand.name} />
              <div className="brand-overlay">
                <span>{brand.name}</span>
              </div>
            </a>
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
            <a key={store.name} href="/stores" className="store-card">
              <img src={store.image} alt={store.name} />
              <div className="store-info">
                <h3>{store.name}</h3>
                <span>{store.city}</span>
              </div>
            </a>
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
          <a href="/about" className="primary-btn">
            Learn more
          </a>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury perfume concept"
          />
        </div>
      </section>

      <section className="section-block contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>Contact Élan Scents</h2>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {link.label}
              </a>
            ))}
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
            <a href="/products">Offers</a>
            <a href="/products">New Arrivals</a>
            <a href="/products">Best Sellers</a>
          </div>
          <div>
            <h4>Brands</h4>
            <a href="/brands">AMOUAGE</a>
            <a href="/brands">Lattafa</a>
            <a href="/brands">Armaf</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="/contact">Contact</a>
            <a href="/about">Privacy Policy</a>
            <a href="/about">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
