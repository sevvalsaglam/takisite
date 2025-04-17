import { Link } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaShoppingCart, FaThLarge } from "react-icons/fa";
import logo from "../assets/images/taki-dunyasi-logo-2.png";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Takı Dünyası" className="logo" />
        </Link>
        <span>Takı Dünyası</span>
      </div>

      <input type="text" placeholder="Ara..." className="search-bar" />

      <nav className="nav-icons">
        <Link to="/"><FaHome /></Link>
        <Link to="/profile"><FaUser /></Link>
        <Link to="/favorites"><FaHeart /></Link>

        {/* ✅ Sepet ikonu + sayaç */}
        <Link to="/cart" className="cart-icon-wrapper">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount > 9 ? "+9" : cartCount}</span>
          )}
        </Link>

        <Link to="/categories"><FaThLarge /></Link>
      </nav>
    </header>
  );
}

export default Header;
