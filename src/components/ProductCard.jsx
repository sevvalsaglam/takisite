import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductCard({ product }) {
  const user = JSON.parse(localStorage.getItem("user")); // Giriş yapan kullanıcı
  const userEmail = user?.email;

  const addToFavorites = async () => {
    if (!userEmail) {
      alert("Ürünü favorilere eklemek için giriş yapınız.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/favorites", {
        user: { email: userEmail },
        product: { id: product.id }
      });
      alert("Ürün favorilere eklendi!");
    } catch (error) {
      console.error("Favori eklenemedi:", error);
      alert("Bir hata oluştu.");
    }
  };

  const addToCart = async () => {
    if (!userEmail) {
      alert("Ürünü sepete eklemek için giriş yapınız.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/cart", {
        user: { email: userEmail },
        product: { id: product.id },
        quantity: 1
      });
      alert("Ürün sepete eklendi!");
    } catch (error) {
      console.error("Sepete eklenemedi:", error);
      alert("Bir hata oluştu.");
    }
  };

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
        <button className="fav-btn" onClick={addToFavorites}>
          <FaHeart />
        </button>

        <button className="cart-btn" onClick={addToCart}>
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
