import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

function ProductCard({ product }) {
  const { cart, addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  // ⭐ Yıldızları puana göre oluştur
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="star full" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
      </Link>

      <div className="product-info">
        <h3>{product.category}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="product-rating">{renderStars(product.point)}</div>
        <span className="price">{product.price} TL</span>
      </div>

      <div className="product-actions">
        <button
          className={`fav-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(product)}
        >
          <FaHeart />
        </button>

        <button
          className={`cart-btn ${isInCart ? "active" : ""}`}
          onClick={() => addToCart(product)}
        >
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
