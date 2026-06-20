import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="categories">
      <Link to="/men" className="category men">
        <div className="category-content">
          <h2>MEN</h2>
          <p>EXPLORE NOW →</p>
        </div>
      </Link>

      <Link to="/women" className="category women">
        <div className="category-content">
          <h2>WOMEN</h2>
          <p>EXPLORE NOW →</p>
        </div>
      </Link>

      <Link to="/accessories" className="category accessories">
        <div className="category-content">
          <h2>ACCESSORIES</h2>
          <p>EXPLORE NOW →</p>
        </div>
      </Link>

      <Link to="/collections" className="category footwear">
        <div className="category-content">
          <h2>FOOTWEAR</h2>
          <p>EXPLORE NOW →</p>
        </div>
      </Link>
    </section>
  );
}

export default Categories;