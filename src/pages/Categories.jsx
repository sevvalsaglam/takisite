import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ProductList from "../components/ProductList";
import allProducts from "../data/allProducts";
import "../assets/categories.css";

const categories = [
  { name: "Küpe", slug: "küpe" },
  { name: "Bileklik", slug: "bileklik" },
  { name: "Kolye", slug: "kolye" },
  { name: "Yüzük", slug: "yuzuk" },
  { name: "Broş", slug: "bros" },
  { name: "Piercing", slug: "piercing" },
  { name: "Halhal", slug: "halhal" }
];

const banners = [
  { type: "grid", image: "/images/tum-takilar-1.jpg" },
  { category: "küpe", image: "/images/kupe-banner.jpg" },
  { category: "bileklik", image: "/images/bileklik-banner.jpg" },
  { category: "kolye", image: "/images/kolye-banner.jpg" },
  { category: "yuzuk", image: "/images/yuzuk-banner.jpg" },
  { category: "bros", image: "/images/bros-banner.jpg" },
  { category: "piercing", image: "/images/piercing-banner.jpg" },
  { category: "halhal", image: "/images/halhal-banner.jpg" }
];

function Categories() {
  const { category } = useParams();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  let filteredProducts = category
    ? allProducts.filter((product) => product.category === category)
    : allProducts;

  if (sortOption === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "random" || sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort(() => 0.5 - Math.random());
  }

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <main className="category-page">
      <div className="banner-container">
        {banners[currentBanner].type === "grid" ? (
          <div className="first-banner" style={{ backgroundImage: `url(${banners[currentBanner].image})` }}>
            <div className="category-grid">
              {categories.map((cat) => (
                <Link key={cat.slug} to={`/categories/${cat.slug}`} className="category-box">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="image-banner" style={{ backgroundImage: `url(${banners[currentBanner].image})` }}>
            <Link to={`/categories/${banners[currentBanner].category}`} className="category-button">
              {banners[currentBanner].category.toUpperCase()}
            </Link>
          </div>
        )}
        <button className="prev-button" onClick={prevBanner}>&lt;</button>
        <button className="next-button" onClick={nextBanner}>&gt;</button>
      </div>

      <div className="category-header">
        <h1>{category ? category.toUpperCase() : "Tüm Ürünler"}</h1>

        <div className="sort-dropdown">
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
            <option value="default">Sıralama Seçin</option>
            <option value="price-asc">Fiyata Göre Artan</option>
            <option value="price-desc">Fiyata Göre Azalan</option>
            <option value="random">En Çok Satanlar</option>
            <option value="rating">Puanına Göre</option>
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>Bu kategoride ürün bulunmamaktadır.</p>
      )}
    </main>
  );
}

export default Categories;
