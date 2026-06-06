function Hero() {
  return (
    <section className="hero">
      {/* Left slide numbers like reference design */}
      <div className="slide-count">
        <span className="selected">01</span>
        <span>02</span>
        <span>03</span>
      </div>

      <div className="hero-content">
        <p className="small-heading">LUXURY FASHION HOUSE</p>

        <h1>
          Timeless Style.
          <br />
          <span>Modern Standards.</span>
        </h1>

        <p className="hero-text">
          Crafted for those who value quality over trends.
          Designed for life, confidence, and quiet luxury.
        </p>

        <div className="hero-buttons">
          <button className="gold-btn">EXPLORE COLLECTION</button>
          <button className="outline-btn">DISCOVER MORE</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;