import { AddToCartButton } from '../../../components/AddToCartButton';
import { productDetails } from '../../../data/productDetails';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = productDetails.find((item) => item.id === params.id);

  if (!product) return <main className="page-shell"><section className="section-block"><h2>Product not found</h2></section></main>;

  const numericPrice = Number(product.price.replace(/[^0-9.]/g, ''));

  return (
    <main className="page-shell">
      <section className="section-block product-detail-layout">
        <div className="product-gallery">
          <img src={product.heroImage} alt={product.name} className="product-main-image" />
          <div className="product-thumbs">{product.gallery.map((img, index) => <img key={index} src={img} alt={`${product.name} view ${index + 1}`} />)}</div>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">{product.tag}</p><h1>{product.name}</h1>
          <div className="product-meta-row"><span>{product.brand}</span><span>{product.store}</span></div>
          <div className="product-price-row"><strong>{product.price}</strong><span className={`stock-badge ${product.stock === 'In stock' ? 'in-stock' : 'low-stock'}`}>{product.stock}</span></div>
          <p className="product-description">{product.description}</p>
          <div className="attribute-block"><h3>Size</h3><div className="pill-row"><span className="detail-pill">{product.size}</span></div></div>
          <div className="attribute-block"><h3>Fragrance notes</h3><div className="pill-row">{product.notes.map((note) => <span key={note} className="detail-pill">{note}</span>)}</div></div>
          <div className="rating-box"><strong>{product.rating.toFixed(1)}</strong><span>Customer rating</span></div>
          <div className="detail-actions"><AddToCartButton id={product.id} name={product.name} brand={product.brand} store={product.store} price={numericPrice} currency="AED" image={product.heroImage} size={product.size} /><a href="/favorites" className="secondary-btn">Add to favorites</a></div>
        </div>
      </section>
    </main>
  );
}
