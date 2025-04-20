import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import allProducts from "../data/allProducts";
import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // ⭐ Eklenen yıldız ikonları
import ProductList from "../components/ProductList"; 
import "../assets/product-page.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleFavorite, favorites } = useFavorites();
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) return <p>Ürün bulunamadı.</p>;

  const similarProducts = allProducts
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const renderStars = () => {
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

        {/* ⭐ Puan Bileşeni */}
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
