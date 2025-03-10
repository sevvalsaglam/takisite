import { Link } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaShoppingCart, FaThLarge } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">Takı Dünyası</div>
      <input type="text" placeholder="Ara..." className="search-bar" />
      <nav className="nav-icons">
        <Link to="/"><FaHome /></Link>
        <Link to="/profile"><FaUser /></Link>
        <Link to="/favorites"><FaHeart /></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        <Link to="/categories"><FaThLarge /></Link>
      </nav>
      {user && <button className="logout-btn" onClick={logout}>Çıkış Yap</button>}
    </header>
  );
}

export default Header;
