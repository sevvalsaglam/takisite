import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // ✅ bunu ekledik
import ProductList from "../components/ProductList";
import "../assets/favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, token } = useAuth(); // ✅ token buradan alınacak

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/favorites", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setFavorites(response.data);
      } catch (error) {
        console.error("Favoriler alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [token]);

  return (
    <main className="favorites-page">
      <h1>Favorilerim</h1>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : favorites.length > 0 ? (
        <ProductList products={favorites} />
      ) : (
        <p className="no-favori">Henüz favorilere eklediğiniz ürün yok.</p>
      )}
    </main>
  );
}

export default Favorites;
