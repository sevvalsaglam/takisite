import { Link } from "react-router-dom";
import categories from "../data/categoriesData";
import "../assets/category-grid.css";
import allProducts from "../data/allProducts";

const clipPaths = [
  "polygon(0 0, 100% 10%, 95% 100%, 0% 90%)",
  "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
  "polygon(0 5%, 100% 0%, 100% 95%, 0 100%)",
  "polygon(0 0, 95% 5%, 100% 100%, 5% 95%)",
  "polygon(0 10%, 100% 0%, 90% 100%, 0% 90%)",
  "polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)",
  "polygon(0% 0%, 100% 10%, 90% 100%, 0% 90%)",
  "polygon(0 0, 100% 5%, 95% 95%, 0% 100%)"
];

function CategoryGrid() {
  const getOutletSlug = (slug) => {
    if (slug === "outlet") {
      const sorted = [...allProducts]
        .sort((a, b) => a.price - b.price)
        .slice(0, 20);
      localStorage.setItem("outletProducts", JSON.stringify(sorted));
    }
    return slug;
  };

  return (
    <section className="homepage-category-grid-container">
      <h2 className="homepage-category-title">Kategoriler</h2>
      <div className="homepage-category-grid">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            to={`/categories/${getOutletSlug(category.slug)}`}
            className="homepage-category-card"
          >
            <img
              src={category.image}
              alt={category.name}
              className="homepage-category-image"
              style={{ clipPath: clipPaths[index % clipPaths.length] }}
            />
            <div className="homepage-category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
