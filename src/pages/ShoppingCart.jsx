import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/shopping-cart.css";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId") || 1;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}/cart`);
        setCart(response.data);
      } catch (error) {
        console.error("Sepet verisi alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

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
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} className="cart-image" />
                <h3>{product.title}</h3>
                <span>{product.price} TL</span>
                <button disabled>-</button>
                <span>{product.quantity}</span>
                <button disabled>+</button>
                <button className="remove-btn" disabled>X</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-header">
            <h3>Toplam: {isCartEmpty ? "0 TL" : `${totalPrice} TL`}</h3>
            <button className="clear-cart-btn" disabled={isCartEmpty}>
              Sepeti Boşalt
            </button>
          </div>
          <button className="checkout-btn" disabled={isCartEmpty}>Ödeme Yap</button>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
