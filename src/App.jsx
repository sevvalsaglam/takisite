import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories"; // Categories sayfasını import et
import ProductPage from "./pages/ProductPage"; 

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/categories" element={<Categories />} /> {/* Kategoriler için genel sayfa */}
              <Route path="/categories/:category" element={<Categories />} /> {/* Kategoriye özgü sayfa */}
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
            <Footer />
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
