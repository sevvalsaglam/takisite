import { useFavorites } from "../context/FavoritesContext";
import ProductList from "../components/ProductList";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main >
      <h1>Favorilerim</h1>
      {favorites.length > 0 ? <ProductList products={favorites} /> : <p>Henüz favorilere eklediğiniz ürün yok.</p>}
    </main>
  );
}

export default Favorites;
