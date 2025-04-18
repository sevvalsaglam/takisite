import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ProductList from "../components/ProductList";
import allProducts from "../data/allProducts";
import "../assets/Categories.css";

// Banner görselleri
import firstBannerImage from "../assets/images/tum-takilar-1.jpg";
import kupeBanner from "../assets/images/kupe-banner.jpg";
import bileklikBanner from "../assets/images/bileklik-banner.jpg";
import kolyeBanner from "../assets/images/kolye-banner.jpg";
import yuzukBanner from "../assets/images/yuzuk-banner.jpg";
import brosBanner from "../assets/images/bros-banner.jpg";
import piercingBanner from "../assets/images/piercing-banner.jpg";
import halhalBanner from "../assets/images/halhal-banner.jpg";

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
  { type: "grid", image: firstBannerImage },
  { category: "küpe", image: kupeBanner },
  { category: "bileklik", image: bileklikBanner },
  { category: "kolye", image: kolyeBanner },
  { category: "yuzuk", image: yuzukBanner },
  { category: "bros", image: brosBanner },
  { category: "piercing", image: piercingBanner },
  { category: "halhal", image: halhalBanner }
];

function Categories() {
  const { category } = useParams();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  // Kategoriye göre filtreleme
  let filteredProducts = category
    ? allProducts.filter((product) => product.category === category)
    : allProducts;

  // ✅ Sıralama işlemleri
  if (sortOption === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "random") {
    filteredProducts = [...filteredProducts].sort(() => 0.5 - Math.random());
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort(() => 0.5 - Math.random()); // Dummy sıralama
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

        {/* ✅ Sıralama Dropdown */}
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
