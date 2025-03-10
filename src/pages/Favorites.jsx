import ProductList from "../components/ProductList";
import { useState } from "react";

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([
    { id: 1, title: "Altın Küpe", category: "Küpe", price: 250, description: "Şık altın küpe", image: "/assets/küpe1.jpg" }
  ]);

  return (
    <main>
      <h1>Favorilerim</h1>
      {favoriteProducts.length > 0 ? (
        <ProductList products={favoriteProducts} />
      ) : (
        <p>Henüz favorilere eklediğiniz ürün yok.</p>
      )}
    </main>
  );
}

export default Favorites;
