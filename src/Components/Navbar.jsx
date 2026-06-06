function Navbar() {
  return (
    <>
      <div className="top-offer">
        ✦ FREE SHIPPING ON ORDERS ABOVE ₹4999 &nbsp; | &nbsp; EASY 30-DAY RETURNS
      </div>

      <header className="navbar">
        <h2 className="brand">NORTH & NOBLE</h2>

        <nav className="nav-links">
          <a className="active" href="#">HOME</a>
          <a href="#">COLLECTIONS</a>
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">ACCESSORIES</a>
          <a href="#">ABOUT</a>
        </nav>

        <div className="nav-actions">
          <span>⌕</span>
          <span>♡</span>
          <span>🛍</span>
        </div>
      </header>
    </>
  );
}

export default Navbar;