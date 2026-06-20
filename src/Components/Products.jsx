import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Products({ filterCategory = "all", title = "Featured Collection" }) {
  const defaultProducts = [
    {
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      title: "Men's Premium Suit",
      price: "₹4,999",
      reviews: 128,
      category: "men",
      featured: true,
    },

    {
      image: "https://i.pinimg.com/1200x/bc/31/f8/bc31f8e55e1e9184b455985d0ba81eb8.jpg",
      title: "Classy Dinner Date Outfit",
      price: "₹7,985",
      reviews: 145,
      category: "women",
      featured: true,
    },


    {
      image: "https://i.pinimg.com/736x/41/f4/af/41f4afeb08d7182c960e034b9f5f630d.jpg",
      title: "Chanel Fragrance",
      price: "₹45,000",
      reviews: 175,
      category: "collections",
      featured: true,
    },

    {
      image: "https://i.pinimg.com/736x/d2/c5/fd/d2c5fddd122e892cc30e1a3fc4e9a35b.jpg",
      title: "Brilliance Diamond Jewelry Set",
      price: "₹3,45,000",
      reviews: 195,
      category: "accessories",
      featured: true,
    },


    {
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
      title: "Women's Luxury Outfit",
      price: "₹3,899",
      reviews: 92,
      category: "women",
      featured: true,
    },
    {
      image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg",
      title: "Luxury Gold Watch",
      price: "₹3,499",
      reviews: 96,
      category: "accessories",
      featured: true,
    },
    {
      image: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg",
      title: "Luxury Leather Shoes",
      price: "₹2,999",
      reviews: 76,
      category: "collections",
      featured: true,
    },
    {
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      title: "Luxury Leather Handbag",
      price: "₹3,299",
      reviews: 54,
      category: "collections",
      featured: false,
    },
    {
      image: "https://i.pinimg.com/1200x/f2/2c/fb/f22cfb679459a974df0df02613767edb.jpg",
      title: "Gentleman Blazer",
      price: "₹5,499",
      reviews: 68,
      category: "men",
      featured: false,
    },
    {
      image: "https://i.pinimg.com/736x/62/49/36/6249362f1fb6d5e7a552a0a9e99cddea.jpg",
      title: "Elegant Evening Wear",
      price: "₹4,299",
      reviews: 84,
      category: "women",
      featured: false,
    },
    {
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      title: "Classic Leather Watch",
      price: "₹2,799",
      reviews: 71,
      category: "accessories",
      featured: false,
    },
    {
      image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
      title: "Premium Formal Shoes",
      price: "₹3,199",
      reviews: 59,
      category: "collections",
      featured: false,
    },
  ];

  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.log("Error fetching products:", error.message);
      return;
    }

    if (data) {
      const adminProducts = data.map((product) => ({
        image: product.image_url,
        title: product.name,
        price: product.price,
        reviews: product.reviews || 0,
        category: product.category,
        featured: true,
      }));

      setProducts([...defaultProducts, ...adminProducts]);
    }
  }

  const visibleProducts =
    filterCategory === "all"
      ? products.filter((product) => product.featured)
      : products.filter((product) => product.category === filterCategory);

  return (
    <section className="products">
      <p className="section-label">HANDPICKED FOR YOU</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">
        Curated essentials crafted for luxury, confidence, and timeless style.
      </p>

      <div className={filterCategory === "all" ? "product-scroll" : "product-grid"}>
        {visibleProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <span className="heart">♡</span>
            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <p className="stars">
                ★★★★★ <span>({product.reviews})</span>
              </p>
              <button>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;