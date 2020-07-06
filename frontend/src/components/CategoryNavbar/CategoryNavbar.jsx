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

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  console.log(uuidv4());

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
