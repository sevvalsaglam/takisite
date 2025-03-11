import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import allProducts from "../data/allProducts";
import { useEffect, useState } from "react";

function HomePage() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setRandomProducts([...allProducts].sort(() => 0.5 - Math.random()).slice(0, 8));
  }, []);

  return (
    <main>
      <Slider />
      <h2>Yeni Ürünler</h2>
      <ProductList products={randomProducts} itemsPerRow={4} />
    </main>
  );
}

export default HomePage;
