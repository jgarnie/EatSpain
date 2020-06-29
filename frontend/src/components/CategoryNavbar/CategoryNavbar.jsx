import React from "react";
import { Link } from "react-router-dom";

const CategoryNavbar = () => {
  return (
    <nav>
      <Link to="/category/meat">Meat</Link>
      <Link to="/category/canned">Canned</Link>
      <Link to="/category/dried">Dried</Link>
      <Link to="/category/drinks">Drinks</Link>
      <Link to="/">Sweets</Link>
      <Link to="/">Cheese</Link>
    </nav>
  );
};

export default CategoryNavbar;
