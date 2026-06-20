import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Philosophy from "./Components/Philosophy";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Philosophy />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function About() {
  return (
    <section className="about-page">
      <p className="section-label">ABOUT NORTH & NOBLE</p>

      <h1>Crafting Timeless Fashion With Modern Elegance.</h1>

      <p>
        North & Noble is a luxury fashion storefront concept designed for people
        who value refined style, premium presentation, and confident everyday
        dressing. The brand reflects a balance of classic elegance, modern
        aesthetics, and a polished digital shopping experience.
      </p>

      <div className="about-boxes">
        <div>
          <h3>Refined Aesthetic</h3>
          <p>Built around a premium black, gold, and neutral visual identity.</p>
        </div>

        <div>
          <h3>Frontend Focus</h3>
          <p>Designed using React components, routing, and clean UI structure.</p>
        </div>

        <div>
          <h3>Dynamic Experience</h3>
          <p>Products can be added through Supabase and displayed on the site.</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  const isAdmin = true;

  return (
    <div className="app">
      <Navbar isAdmin={isAdmin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Products filterCategory="collections" title="Collections" />} />
        <Route path="/men" element={<Products filterCategory="men" title="Men Collection" />} />
        <Route path="/women" element={<Products filterCategory="women" title="Women Collection" />} />
        <Route path="/accessories" element={<Products filterCategory="accessories" title="Accessories Collection" />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;