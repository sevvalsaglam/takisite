import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cart, removeFromCart } = useCart();

  return (
    <main>
      <h1>Sepetim</h1>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <span>{product.price} TL</span>
                <button onClick={() => removeFromCart(product.id)}>X</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Toplam: {cart.reduce((acc, item) => acc + item.price, 0)} TL</h3>
            <Link to="/checkout">
              <button className="checkout-btn">Ödeme Yap</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </main>
  );
}

export default ShoppingCart;
