import { NavLink } from "react-router-dom";

function Navbar({ isAdmin }) {
  return (
    <>
      <div className="top-offer">
        FREE SHIPPING ON ORDERS ABOVE ₹4999 | EASY 30-DAY RETURNS
      </div>

      <header className="navbar">
        <h2 className="brand">NORTH & NOBLE</h2>

        <nav className="nav-links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/collections">COLLECTIONS</NavLink>
          <NavLink to="/men">MEN</NavLink>
          <NavLink to="/women">WOMEN</NavLink>
          <NavLink to="/accessories">ACCESSORIES</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </nav>

        <div className="nav-actions">
          <span>⌕</span>
          <span>♡</span>
          <span>🛍</span>

          {isAdmin && (
            <NavLink to="/admin/add-product" className="add-link">
              + ADD
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;