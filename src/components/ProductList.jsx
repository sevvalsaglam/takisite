import ProductCard from "./ProductCard";
import "../assets/product-list.css";

function ProductList({ products = [], itemsPerRow = 3 }) {
  return (
    <div
      className="product-list"

    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
