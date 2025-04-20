import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome, FaUser, FaHeart, FaShoppingCart, FaThLarge, FaBars
} from "react-icons/fa";
import logo from "../assets/images/taki-dunyasi-logo-2.png";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
      <div className="logo-container">
  <Link to="/">
    <img src={logo} alt="Takı Dünyası" className="logo" />
  </Link>
  <span className="logo-text">Takı Dünyası</span> 
</div>


        <input type="text" placeholder="Ara..." className="search-bar" />

        <div className="nav-icons desktop-only">
          <Link to="/"><FaHome /></Link>
          <Link to="/profile"><FaUser /></Link>
          <Link to="/favorites"><FaHeart /></Link>
          <Link to="/cart" className="cart-icon-wrapper">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount > 9 ? "+9" : cartCount}</span>
            )}
          </Link>
          <Link to="/categories"><FaThLarge /></Link>
        </div>

        <button className="menu-toggle mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <nav className="mobile-nav mobile-only">
          <Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Ana Sayfa</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}><FaUser /> Profil</Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}><FaHeart /> Favoriler</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="cart-icon-wrapper">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount > 9 ? "+9" : cartCount}</span>
            )}
          </Link>
          <Link to="/categories" onClick={() => setMenuOpen(false)}><FaThLarge /> Kategoriler</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
