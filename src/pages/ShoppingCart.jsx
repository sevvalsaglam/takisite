import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { FaTrash } from "react-icons/fa";
import "../assets/shopping-cart.css";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(response.data);
      } catch (error) {
        console.error("Sepet alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  const updateQuantity = async (item, delta) => {
    const newQty = item.quantity + delta;
    if (newQty < 1) return;

    try {
      await axios.post(
        "http://localhost:8080/api/cart",
        { productId: item.productId, quantity: newQty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, quantity: newQty } : i))
      );
    } catch (error) {
      console.error("Adet güncellenemedi:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      console.error("Ürün silinemedi:", error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/clear/${user.email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart([]);
    } catch (error) {
      console.error("Sepeti temizleme hatası:", error);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <main className="shopping-cart-page">
      <h1>Sepetim</h1>
      <div className="cart-container">
        <div className="cart-items">
          {loading ? (
            <div>Yükleniyor...</div>
          ) : isCartEmpty ? (
            <div className="empty-cart-message">Sepetiniz boş.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-image" />
                <h3>{item.title}</h3>
                <span>{item.price} TL</span>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-header">
            <h3>Toplam: {totalPrice} TL</h3>
            <button className="clear-cart-btn" disabled={isCartEmpty} onClick={clearCart}>
              Sepeti Boşalt
            </button>
          </div>
          <button className="checkout-btn" disabled={isCartEmpty}>
            Ödeme Yap
          </button>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
