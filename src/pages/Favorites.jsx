import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import ProductList from "../components/ProductList";
import "../assets/favorites.css";

function Favorites() {
  const { token } = useAuth();
  const { favorites, fetchFavorites } = useFavorites();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      setLoading(true);
      if (token) {
        await fetchFavorites();
      }
      setLoading(false);
    };

    loadFavorites();
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
