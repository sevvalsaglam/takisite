import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaThLarge,
  FaBars
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src="/images/taki-dunyasi-logo-2.png" alt="Takı Dünyası" className="logo" />
          </Link>
          <span className="logo-text">Takı Dünyası</span>
        </div>

        {/* Arama çubuğu */}
        <input type="text" placeholder="Ara..." className="search-bar" />
        <SearchBar />

        {/* Masaüstü ikonları */}
        <div className="nav-icons desktop-only">
          <Link to="/"><FaHome /></Link>
          <Link to="/profile"><FaUser /></Link>
          <Link to="/favorites"><FaHeart /></Link>
          <Link to="/cart" className="cart-icon-wrapper">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount > 9 ? "+9" : cartCount}
              </span>
            )}
          </Link>
          <Link to="/categories"><FaThLarge /></Link>
        </div>

        {/* Mobil menü açma butonu */}
        <button
          className="menu-toggle mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <nav className="mobile-nav mobile-only">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FaHome /> Ana Sayfa
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            <FaUser /> Profil
          </Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>
            <FaHeart /> Favoriler
          </Link>
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="cart-icon-wrapper"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount > 9 ? "+9" : cartCount}
              </span>
            )}
          </Link>
          <Link to="/categories" onClick={() => setMenuOpen(false)}>
            <FaThLarge /> Kategoriler
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
