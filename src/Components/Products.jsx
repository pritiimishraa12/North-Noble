function Products() {
  return (
    <section className="products">
      <p className="section-label">HANDPICKED FOR YOU</p>
      <h2 className="section-title">Featured Collection</h2>
      <p className="section-subtitle">
        Curated essentials crafted for luxury, confidence, and timeless style.
      </p>

      <div className="product-grid">
        <div className="product-card">
          <span className="heart">♡</span>
          <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg" alt="Black jacket" />
          <div className="product-info">
            <h3>Luxury Wardrobe Collection</h3>
            <p className="price">₹4,999</p>
            <p className="stars">★★★★★ <span>(128)</span></p>
            <button>ADD TO CART</button>
          </div>
        </div>

        <div className="product-card">
          <span className="heart">♡</span>
          <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg" alt="Luxury gold watch" />
          <div className="product-info">
            <h3>Luxury Brown Watch</h3>
            <p className="price">₹3,499</p>
            <p className="stars">★★★★★ <span>(96)</span></p>
            <button>ADD TO CART</button>
          </div>
        </div>

        <div className="product-card">
          <span className="heart">♡</span>
          <img src="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg" alt="Premium leather shoes" />
          <div className="product-info">
            <h3>Luxury Leather Shoes</h3>
            <p className="price">₹2,999</p>
            <p className="stars">★★★★★ <span>(76)</span></p>
            <button>ADD TO CART</button>
          </div>
        </div>

        <div className="product-card">
          <span className="heart">♡</span>
          <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" alt="Luxury handbag" />
          <div className="product-info">
            <h3>Luxury Leather Handbag</h3>
            <p className="price">₹3,299</p>
            <p className="stars">★★★★★ <span>(54)</span></p>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;