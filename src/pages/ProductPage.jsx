import { useParams } from "react-router-dom";

const allProducts = [
  { id: 1, title: "Altın Küpe", category: "Küpe", price: 250, description: "Şık altın küpe", image: "/assets/küpe1.jpg" }
];

function ProductPage() {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) return <p>Ürün bulunamadı.</p>;

  return (
    <main className="product-page">
      <img src={product.image} alt={product.title} className="product-large-image" />
      <div className="product-details">
        <h3>{product.category}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className="price">{product.price} TL</span>
        <button className="cart-btn">Sepete Ekle</button>
      </div>
    </main>
  );
}

export default ProductPage;
