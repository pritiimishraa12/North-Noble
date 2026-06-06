import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Philosophy from "./components/Philosophy";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Philosophy />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;