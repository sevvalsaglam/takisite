import Slider from "../components/Slider";
import ProductList from "../components/ProductList";

const products = [
  { id: 1, title: "Altın Küpe", category: "Küpe", price: 250, description: "Şık altın küpe", image: "/assets/küpe1.jpg" },
  { id: 2, title: "Gümüş Bileklik", category: "Bileklik", price: 180, description: "Modern tasarım bileklik", image: "/assets/bileklik1.jpg" },
  { id: 3, title: "İnci Kolye", category: "Kolye", price: 300, description: "Klasik inci kolye", image: "/assets/kolye1.jpg" }
];

function HomePage() {
  return (
    <main>
      <Slider />
      <h2>Yeni Ürünler</h2>
      <ProductList products={products} />
    </main>
  );
}

export default HomePage;
