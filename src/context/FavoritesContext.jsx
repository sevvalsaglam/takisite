import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // AuthContext'ten token almak için

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useAuth(); // Kullanıcı token'ı

  useEffect(() => {
    const fetchFavorites = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/api/favorites", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFavorites(response.data); // API'den gelen favorileri state'e al
        } catch (error) {
          console.error("Favorileri getirirken hata:", error);
        }
      }
    };

    fetchFavorites();
  }, [token]);

  const toggleFavorite = async (product) => {
    if (!token) {
      console.error("Favori eklemek için giriş yapmanız gerekiyor.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/favorites", 
        { productId: product.id }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavorites(response.data); // Backend'den dönen yeni favori listesini kullan
    } catch (error) {
      console.error("Favori eklenemedi:", error);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
