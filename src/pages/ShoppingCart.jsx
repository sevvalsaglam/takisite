import { useCart } from "../context/CartContext";

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <main>
      <h1>Sepetim</h1>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-image" />
              <h3>{product.title}</h3>
              <span>{product.price} TL</span>
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              <button onClick={() => removeFromCart(product.id)}>X</button>
            </div>
          ))}
          <h3>Toplam: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} TL</h3>
        </div>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </main>
  );
}

export default ShoppingCart;
