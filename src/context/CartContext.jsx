import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/api/cart", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCart(response.data); 
        } catch (error) {
          console.error("Sepeti getirirken hata:", error);
        }
      }
    };

    fetchCart();
  }, [token]);

  const addToCart = async (product) => {
    if (!token) {
      console.error("Sepete eklemek için giriş yapmanız gerekiyor.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/cart", 
        { productId: product.id, quantity: 1 }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(response.data); 
    } catch (error) {
      console.error("Ürün sepete eklenemedi:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
