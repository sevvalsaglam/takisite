import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/shopping-cart.css";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/cart/${userEmail}`);
        setCart(response.data);
      } catch (error) {
        console.error("Sepet verisi alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userEmail]);

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
                <span>Adet: {item.quantity}</span>
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
          <button className="checkout-btn" disabled={isCartEmpty}>
            Ödeme Yap
          </button>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
