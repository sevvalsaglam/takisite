import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import axios from "axios";
import "../assets/product-card.css";

function ProductCard({ product }) {
  const { user, token } = useAuth();
  const { favorites, setFavorites, fetchFavorites } = useFavorites();

  // Gerçek ürün ID’si: ProductPage ve Favorites için uyumlu
  const productId = product.productId || product.id;

  const isFavorited = favorites.some((fav) => fav.productId === productId);

  const toggleFavorite = async () => {
    if (!user || !token) {
      alert("Favorilere eklemek için giriş yapınız.");
      return;
    }

    try {
      if (isFavorited) {
        const favToRemove = favorites.find((fav) => fav.productId === productId);
        await axios.delete(`http://localhost:8080/api/favorites/${favToRemove.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchFavorites();
      } else {
        await axios.post(
          "http://localhost:8080/api/favorites",
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchFavorites();
      }
    } catch (err) {
      console.error("Favori işlemi hatası:", err);
    }
  };

  const addToCart = async () => {
    if (!user || !token) {
      alert("Sepete eklemek için giriş yapınız.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/cart",
        { productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Ürün sepete eklendi!");
    } catch (error) {
      console.error("Sepete eklenemedi:", error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="star full" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      else stars.push(<FaRegStar key={i} className="star empty" />);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <Link to={`/product/${productId}`}>
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
          className={`fav-btn ${isFavorited ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          <FaHeart />
        </button>
        <button className="cart-btn" onClick={addToCart}>
          <FaShoppingCart />
        </button>
      </div>

      <Link to={`/product/${productId}`} className="details-btn">
        Ürüne Git
      </Link>
    </div>
  );
}

export default ProductCard;
