export default function ContactPage() {
  return (
    <main className="page-shell inner-page">
      <div className="breadcrumb">Home / Contact</div>
      <section className="contact-page-box">
        <div>
          <p className="eyebrow">Contact us</p>
          <h1>Let’s talk fragrance.</h1>
        </div>

        <div className="contact-info-grid">
          <div className="contact-tile">
            <h3>Email</h3>
            <p>hello@elanscents.com</p>
          </div>
          <div className="contact-tile">
            <h3>Instagram</h3>
            <p>@elanscents</p>
          </div>
          <div className="contact-tile">
            <h3>WhatsApp</h3>
            <p>+971 50 000 0000</p>
          </div>
        </div>
      </section>
    </main>
  );
}
