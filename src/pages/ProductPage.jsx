import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import allProducts from "../data/allProducts";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../assets/product-page.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleFavorite, favorites } = useFavorites();
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) return <p>Ürün bulunamadı.</p>;

  return (
    <main className="product-page">
      <img src={product.image} alt={product.title} className="product-large-image" />
      <div className="product-details">
        <h3>{product.category.toUpperCase()}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className="price">{product.price} TL</span>
        <div className="product-actions">
          <button className={`fav-btn ${favorites.some((fav) => fav.id === product.id) ? "active" : ""}`} 
                  onClick={() => toggleFavorite(product)}>
            <FaHeart />
          </button>
          <button className="cart-btn" onClick={() => addToCart(product)}>
            <FaShoppingCart /> Sepete Ekle
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
