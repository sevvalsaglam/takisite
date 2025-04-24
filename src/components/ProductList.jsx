import ProductCard from "./ProductCard";

function ProductList({ products = [], itemsPerRow = 3 }) {
  return (
    <div className="product-list" style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
