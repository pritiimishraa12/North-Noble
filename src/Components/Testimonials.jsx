function Testimonials() {
  return (
    <section className="testimonials">
      <p className="section-label">CUSTOMER STORIES</p>
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="testimonial-grid">
        <div className="review">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Customer" />
          <p className="stars">★★★★★</p>
          <p>“The collection feels premium, minimal, and perfect for formal occasions.”</p>
          <h3>Riya Kapoor</h3>
          <span>Verified Buyer</span>
        </div>

        <div className="review">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Customer" />
          <p className="stars">★★★★★</p>
          <p>“The quality, packaging, and overall look feel truly high-end.”</p>
          <h3>Arjun Mehra</h3>
          <span>Verified Buyer</span>
        </div>

        <div className="review">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Customer" />
          <p className="stars">★★★★★</p>
          <p>“Elegant products, fast delivery, and a very professional shopping feel.”</p>
          <h3>Meera Sethi</h3>
          <span>Verified Buyer</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;