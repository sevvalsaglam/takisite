import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

const allProducts = [
  { id: 1, title: "Altın Küpe", category: "küpe", price: 250, description: "Şık altın küpe", image: "/assets/küpe1.jpg" },
  { id: 2, title: "Gümüş Bileklik", category: "bileklik", price: 180, description: "Modern tasarım bileklik", image: "/assets/bileklik1.jpg" },
  { id: 3, title: "Lüks Kolye", category: "kolye", price: 450, description: "Zarif tasarım kolye", image: "/assets/kolye1.jpg" }
];

function Categories() {
  const { category } = useParams();
  
  // Eğer category parametresi varsa, kategoriye göre filtrele
  const filteredProducts = category 
    ? allProducts.filter((product) => product.category === category) 
    : allProducts;

  return (
    <main>
      <h1>{category ? category.toUpperCase() : "Tüm Ürünler"}</h1>
      
      {/* Kategoriler listesi */}
      {!category && (
        <div>
          <h2>Kategoriler:</h2>
          <ul>
            <li><Link to="/categories/küpe">Küpe</Link></li>
            <li><Link to="/categories/bileklik">Bileklik</Link></li>
            <li><Link to="/categories/kolye">Kolye</Link></li>
          </ul>
        </div>
      )}

      {/* Kategorilere göre ürün listesi */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>Bu kategoride ürün bulunmamaktadır.</p>
      )}
    </main>
  );
}

export default Categories;
