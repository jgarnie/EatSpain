import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CategoryNavbar.scss";
import { CategoryContext } from "../../providers/CategoryProvider";

const CategoryNavbar = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <nav className="categoryNav">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="categoryNav__input"
          to={`/category/${category.slug}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNavbar;
