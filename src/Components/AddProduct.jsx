import { useState } from "react";
import { supabase, isSupabaseConfigured } from "../supabase";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image_url: "",
    reviews: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isSupabaseConfigured || !supabase) {
      setMessage("Supabase is not configured. Cannot add products.");
      return;
    }

    try {
      const { error } = await supabase.from("products").insert([
        {
          name: product.name,
          price: product.price,
          category: product.category,
          image_url: product.image_url,
          reviews: product.reviews || "0",
        },
      ]);

      if (error) {
        setMessage("Product could not be added. Please try again.");
        return;
      }

      setMessage("Product added successfully.");

      setProduct({
        name: "",
        price: "",
        category: "",
        image_url: "",
        reviews: "",
      });
    } catch (err) {
      setMessage("Error connecting to database. Please try again.");
      console.log("Error:", err);
    }
  }

  return (
    <section className="add-product-page">
      <div className="add-product-card">
        <p className="section-label">ADMIN PRODUCT CONTROL</p>
        <h1>Add Product</h1>
        <p className="admin-subtitle">
          Add a new product using image URL and product details. Saved products
          will appear on the homepage featured collection and category pages.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Example: Diamond Gold Watch"
            value={product.name}
            onChange={handleChange}
            required
          />

          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Example: ₹49,999"
            value={product.price}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
            <option value="collections">Collections</option>
          </select>

          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            placeholder="Paste product image URL"
            value={product.image_url}
            onChange={handleChange}
            required
          />

          <label>Reviews</label>
          <input
            type="text"
            name="reviews"
            placeholder="Example: 25"
            value={product.reviews}
            onChange={handleChange}
          />

          <button type="submit">SAVE PRODUCT</button>
        </form>

        {message && <p className="admin-message">{message}</p>}
      </div>
    </section>
  );
}

export default AddProduct;