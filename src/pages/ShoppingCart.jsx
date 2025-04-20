import { useCart } from "../context/CartContext";
import "../assets/shopping-cart.css"; 

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main>
      <h1>Sepetim</h1>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} className="cart-image" />
                <h3>{product.title}</h3>
                <span>{product.price} TL</span>
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                <button onClick={() => removeFromCart(product.id)} className="remove-btn">X</button>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-header">
              <h3>Toplam: {totalPrice} TL</h3>
              <button className="clear-cart-btn" onClick={clearCart}>Sepeti Boşalt</button>
            </div>
            <button className="checkout-btn">Ödeme Yap</button>
          </div>
        </div>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </main>
  );
}

export default ShoppingCart;
