import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Eksik CSS dosyaları eklendi!
import "./assets/styles.css";        // Genel tasarım
import "./assets/header.css";        // Header bileşeni
import "./assets/footer.css";        // Footer bileşeni (Eklendi!)
import "./assets/product-card.css";  // Ürün kartı tasarımı
import "./assets/cart.css";          // Sepet ve ödeme sayfası
import "./assets/profile.css";       // Profil ve giriş sayfası
import "./assets/slider.css";        // Ana sayfa slider tasarımı
import "./assets/categories.css";    // Kategoriler menüsü (Eklendi!)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
