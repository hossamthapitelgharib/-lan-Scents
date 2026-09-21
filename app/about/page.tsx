export default function AboutPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / About</div>
      <section className="about-section single-about">
        <div className="about-copy">
          <p className="eyebrow">Our story</p>
          <h2>Luxury with a Gulf soul.</h2>
          <p>
            Élan Scents was created to bring together premium fragrance houses, trusted stores, and a refined shopping experience for modern perfume enthusiasts.
          </p>
          <p>
            We celebrate identity, elegance, and modern luxury through carefully selected scents inspired by the Gulf and elevated by a global approach to fragrance design.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80" alt="Élan Scents about" />
        </div>
      </section>
    </main>
  );
}
