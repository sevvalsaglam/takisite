import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import CategoryGrid from "../components/CategoryGrid";
import VideoBanner from "../components/VideoBanner";
import allProducts from "../data/allProducts";

const firstSliderImages = [
  "/images/banner-foto-3.jpg",
  "/images/banner-foto-2.jpg",
  "/images/banner-foto-4.jpg"
];

const secondSliderImages = [
  "/images/banner-foto-5.jpg",
  "/images/banner-foto-6.jpg",
  "/images/banner-foto-7.jpg"
];

function HomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 8));
  }, []);

  return (
    <main className="homepage no-header-padding">
      <div className="slider-container">
        <Slider images={firstSliderImages} fullScreen={true} />
      </div>

      <CategoryGrid />

      <VideoBanner src="/images/banner-video.mp4" />

      <h2>Yeni Ürünler</h2>
      <div className="product-section">
        <ProductList products={randomProducts} itemsPerRow={4} />
      </div>

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
