import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <<< Burada AuthContext kullanıyoruz
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductList from "../components/ProductList"; 
import "../assets/product-page.css";

function ProductPage() {
  const { id } = useParams();
  const { user } = useAuth();
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

  const addToFavorites = async () => {
    if (!user) {
      alert("Ürünü favorilere eklemek için giriş yapınız.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/favorites", {
        user: { email: user.email },
        product: { id: product.id }
      });
      alert("Ürün favorilere eklendi!");
    } catch (error) {
      console.error("Favori eklenemedi:", error);
      alert("Bir hata oluştu.");
    }
  };

  const addToCart = async () => {
    if (!user) {
      alert("Ürünü sepete eklemek için giriş yapınız.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/cart", {
        user: { email: user.email },
        product: { id: product.id },
        quantity: 1
      });
      alert("Ürün sepete eklendi!");
    } catch (error) {
      console.error("Sepete eklenemedi:", error);
      alert("Bir hata oluştu.");
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
          <button className="fav-btn" onClick={addToFavorites}>
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
