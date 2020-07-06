import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryNavbar.scss";
import { CategoriesApi } from "../../api/CategoriesApi.js";

const CategoryNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CategoriesApi.getAllCategories(setCategories, setIsLoading);
  }, []);

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
