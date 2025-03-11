import { Link } from "react-router-dom";
import { FaHome, FaUser, FaHeart, FaShoppingCart, FaThLarge } from "react-icons/fa";
import logo from "../assets/images/taki-dunyasi-logo-2.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Takı Dünyası" className="logo" />
        <span>Takı Dünyası</span>
      </div>
      <input type="text" placeholder="Ara..." className="search-bar" />
      <nav className="nav-icons">
        <Link to="/"><FaHome /></Link>
        <Link to="/profile"><FaUser /></Link>
        <Link to="/favorites"><FaHeart /></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        <Link to="/categories"><FaThLarge /></Link>
      </nav>
    </header>
  );
}

export default Header;
