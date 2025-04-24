import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductList from "../components/ProductList"; 
import "../assets/product-page.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleFavorite, favorites } = useFavorites();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        fetchSimilarProducts(res.data.category, res.data.id);
      })
      .catch((err) => {
        console.error("Ürün alınamadı:", err);
      });
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
      <img
        src={product.image}
        alt={product.title}
        className="product-large-image"
      />

      <div className="product-details">
        <h3>{product.category.toUpperCase()}</h3>
        <h2>{product.title}</h2>

        <div className="star-rating">{renderStars()}</div>

        <p>{product.description}</p>
        <span className="price">{product.price} TL</span>
        <div className="product-actions">
          <button
            className={`fav-btn ${favorites.some((fav) => fav.id === product.id) ? "active" : ""}`}
            onClick={() => toggleFavorite(product)}
          >
            <FaHeart />
          </button>
          <button className="cart-btn" onClick={() => addToCart(product)}>
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
