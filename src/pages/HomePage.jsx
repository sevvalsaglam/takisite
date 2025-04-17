import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import allProducts from "../data/allProducts";

// Slider görselleri
const firstSliderImages = [
  "src/assets/images/sale-2.jpg",
  "src/assets/images/sale-1.jpg",
  "src/assets/images/tum-takilar-1.jpg"
];

const secondSliderImages = [
  "src/assets/images/sale-2.jpg",
  "src/assets/images/sale-1.jpg",
  "src/assets/images/tum-takilar-1.jpg"
];

function HomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 8));
  }, []);

  return (
    <main className="homepage">
      {/* ✅ Tam ekran banner */}
      <div className="slider-container">
        <Slider images={firstSliderImages} fullScreen={true} />
      </div>

      <h2>Yeni Ürünler</h2>
      <div className="product-section">
        <ProductList products={randomProducts} itemsPerRow={4} />
      </div>

      {/* ✅ Alt banner (standart yükseklik) */}
      <div className="slider-container second-slider-container">
        <Slider images={secondSliderImages} />
      </div>

      <h2>Çok Satanlar</h2>
      <div className="product-section">
        <ProductList products={randomProducts} itemsPerRow={4} />
      </div>
    </main>
  );
}

export default HomePage;
