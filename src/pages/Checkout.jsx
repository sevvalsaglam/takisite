import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cart } = useCart();
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Ödeme başarıyla tamamlandı!");
  };

  return (
    <main className="checkout-page">
      <h2>Ödeme Sayfası</h2>
      <div className="cart-summary">
        <h3>Toplam: {cart.reduce((acc, item) => acc + item.price, 0)} TL</h3>
      </div>
      <form onSubmit={handlePayment} className="payment-form">
        <input type="text" name="cardNumber" placeholder="Kart Numarası" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Kart Üzerindeki İsim" onChange={handleChange} required />
        <input type="text" name="expiry" placeholder="Son Kullanma Tarihi (MM/YY)" onChange={handleChange} required />
        <input type="password" name="cvv" placeholder="CVV" onChange={handleChange} required />
        <button type="submit">Ödeme Yap</button>
      </form>
    </main>
  );
}

export default Checkout;
