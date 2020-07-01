import React from "react";
import { Link } from "react-router-dom";
import "./CategoryNavbar.scss"


const CategoryNavbar = () => {
  return (
    <nav className="categoryNav">
      <Link className="categoryNav__input" to="/category/meat">Meat</Link>
      <Link className="categoryNav__input" to="/category/canned">Canned</Link>
      <Link className="categoryNav__input" to="/category/dried">Dried</Link>
      <Link className="categoryNav__input" to="/category/drinks">Drinks</Link>
      <Link className="categoryNav__input" to="/">Sweets</Link>
      <Link className="categoryNav__input" to="/">Cheese</Link>
    </nav>
  );
};

export default CategoryNavbar;
