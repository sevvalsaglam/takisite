import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useAuth();

  const fetchFavorites = async () => {
    if (!token) return;
    try {
      const response = await axios.get("http://localhost:8080/api/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites(response.data);
    } catch (error) {
      console.error("Favoriler alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [token]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, fetchFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
