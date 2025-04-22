import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductCard() {
  const { cart, addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const [products, setProducts] = useState([]);
  
  // Verileri backend'den almak için useEffect kullanıyoruz
  useEffect(() => {
    axios.get('http://localhost:8080/api/products') // Backend URL'ini güncelle
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const isFavorite = (productId) => favorites.some((item) => item.id === productId);
  const isInCart = (productId) => cart.some((item) => item.id === productId);

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
    <>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
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
              className={`fav-btn ${isFavorite(product.id) ? "active" : ""}`}
              onClick={() => toggleFavorite(product)}
            >
              <FaHeart />
            </button>

            <button
              className={`cart-btn ${isInCart(product.id) ? "active" : ""}`}
              onClick={() => addToCart(product)}
            >
              <FaShoppingCart />
            </button>
          </div>

          <Link to={`/product/${product.id}`} className="details-btn">
            Ürüne Git
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
