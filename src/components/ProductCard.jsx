import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleFavorite } = useFavorites();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.category}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className="price">{product.price} TL</span>
      </div>
      <div className="product-actions">
        <button className="fav-btn" onClick={() => toggleFavorite(product)}>
          <FaHeart />
        </button>
        <button className="cart-btn" onClick={() => addToCart(product)}>
          <FaShoppingCart />
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="details-btn">
        Ürüne Git
      </Link>
    </div>
  );
}

export default ProductCard;
