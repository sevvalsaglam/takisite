import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const updatedCart = existingProduct
      ? cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cart, { ...product, quantity: 1 }];

    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
    ).filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
