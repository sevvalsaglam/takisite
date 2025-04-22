import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList({ products: propProducts = null, itemsPerRow = 3 }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!propProducts) {
      axios.get("http://localhost:8080/api/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.error("Ürünler alınamadı:", error));
    }
  }, [propProducts]);

  const productList = propProducts || products;

  return (
    <div className="product-list" style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
