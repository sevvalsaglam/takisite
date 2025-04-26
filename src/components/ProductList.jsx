import ProductCard from "./ProductCard";

function ProductList({ products = [], itemsPerRow = 3 }) {
  return (
    <div
      className="product-list"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
        gap: "20px", // ürünler arası boşluk eklendi
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
