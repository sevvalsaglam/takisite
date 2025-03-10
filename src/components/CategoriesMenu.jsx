import { useState } from "react";
import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";

function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Küpe", "Bileklik", "Kolye", "Yüzük", "Piercing", "Broş", "Halhal"];

  return (
    <div className="categories-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="categories-btn">
        <FaThLarge /> Tüm Kategoriler
      </button>
      {isOpen && (
        <ul className="categories-list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriesMenu;
