import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import allProducts from "../data/allProducts";
import { useEffect, useState } from "react";

// 📸 İkinci slider görsellerini import et
const secondSliderImages = [
  "src/assets/images/sale-2.jpg",
  "src/assets/images/sale-1.jpg",
  "src/assets/images/tum-takilar-1.jpg"
];

const firstSliderImages = [
  "src/assets/images/sale-2.jpg",
  "src/assets/images/sale-1.jpg",
  "src/assets/images/tum-takilar-1.jpg"
];

function HomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setRandomProducts([...allProducts].sort(() => 0.5 - Math.random()).slice(0, 8));
  }, []);

  return (
    <main className="homepage">
      <div className="slider-container">
        <Slider images={firstSliderImages} />
      </div>

      <div className="spacer-between-banner-and-title"></div>

      <h2>Yeni Ürünler</h2>

      <div className="product-section">
        <ProductList products={randomProducts} itemsPerRow={4} />
      </div>

      <div className="slider-container second-slider-container">
        <Slider images={secondSliderImages} />
      </div>

      <div className="spacer-between-banner-and-title"></div>

      <h2>Çok Satanlar</h2>

      <div className="product-section">
        <ProductList products={randomProducts} itemsPerRow={4} />
      </div>
    </main>
  );
}

export default HomePage;
