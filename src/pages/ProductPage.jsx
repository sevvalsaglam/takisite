import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import ProductList from "../components/ProductList";
import "../assets/product-page.css";

function ProductPage() {
  const { id } = useParams();
  const { user, token } = useAuth();
  const { favorites, setFavorites, fetchFavorites } = useFavorites();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        fetchSimilarProducts(res.data.category, res.data.id);
      })
      .catch((err) => console.error("Ürün alınamadı:", err));
  }, [id]);

  const fetchSimilarProducts = (category, productId) => {
    axios
      .get(`http://localhost:8080/api/products/category/${category}`)
      .then((res) => {
        const filtered = res.data.filter((item) => item.id !== parseInt(productId));
        setSimilarProducts(filtered.slice(0, 4));
      })
      .catch((err) => console.error("Benzer ürünler alınamadı:", err));
  };

  const isFavorited = favorites.some((fav) => fav.productId === product?.id);

  const toggleFavorite = async () => {
    if (!user || !token || !product) return;

    try {
      if (isFavorited) {
        const favToRemove = favorites.find((fav) => fav.productId === product.id);
        await axios.delete(`http://localhost:8080/api/favorites/${favToRemove.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites((prev) => prev.filter((f) => f.productId !== product.id));
      } else {
        await axios.post(
          "http://localhost:8080/api/favorites",
          { productId: product.id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchFavorites();
      }
    } catch (err) {
      console.error("Favori işlemi hatası:", err);
    }
  };

  const addToCart = async () => {
    if (!user || !token || !product) return;

    try {
      await axios.post(
        "http://localhost:8080/api/cart",
        { productId: product.id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Ürün sepete eklendi!");
    } catch (error) {
      console.error("Sepete eklenemedi:", error);
    }
  };

  const renderStars = () => {
    if (!product) return null;

    const stars = [];
    const fullStars = Math.floor(product.point);
    const hasHalfStar = product.point % 1 >= 0.4;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="star empty" />);
    }

    return stars;
  };

  if (!product) return <p>Ürün yükleniyor...</p>;

  return (
    <main className="product-page">
      <img src={product.image} alt={product.title} className="product-large-image" />

      <div className="product-details">
        <h3>{product.category.toUpperCase()}</h3>
        <h2>{product.title}</h2>

        <div className="star-rating">{renderStars()}</div>

        <p>{product.description}</p>
        <span className="price">{product.price} TL</span>

        <div className="product-actions">
          <button
            className={`fav-btn ${isFavorited ? "active" : ""}`}
            onClick={toggleFavorite}
            title={isFavorited ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            <FaHeart />
          </button>
          <button className="cart-btn" onClick={addToCart}>
            <FaShoppingCart /> Sepete Ekle
          </button>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <section className="similar-products-section">
          <h2>Benzer Ürünler</h2>
          <ProductList products={similarProducts} itemsPerRow={4} />
        </section>
      )}
    </main>
  );
}

export default ProductPage;
