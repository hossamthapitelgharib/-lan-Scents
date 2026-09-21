export default function SearchPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Search</div>

      <section className="section-block">
        <div className="search-box">
          <input type="text" value="Azzaro" readOnly />
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <p className="eyebrow">Results</p>
            <h2>Search matches</h2>
          </div>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-image-wrap">
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80" alt="Azzaro Wanted Girl" />
            </div>
            <div className="product-info">
              <h3>Azzaro Wanted Girl</h3>
              <div className="price-row">
                <strong>AED 385</strong>
                <button>+</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
