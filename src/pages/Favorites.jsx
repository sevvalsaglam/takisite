import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = 1; // 🔒 Demo kullanıcı ID’si — Gerçek uygulamada oturum açmış kullanıcıdan alınmalı

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}/favorites`);
        setFavorites(response.data);
      } catch (error) {
        console.error("Favoriler alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <main>
      <h1>Favorilerim</h1>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : favorites.length > 0 ? (
        <ProductList products={favorites} />
      ) : (
        <p>Henüz favorilere eklediğiniz ürün yok.</p>
      )}
    </main>
  );
}

export default Favorites;
