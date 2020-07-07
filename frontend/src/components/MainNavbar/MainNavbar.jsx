import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.scss";
import { CartContext } from "../../providers/CartProvider";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const { cartCount } = useContext(CartContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="mainNav">
      <h1 className="mainNav__title">
        <Link to="/">Eat Spain </Link>
      </h1>

      <img
        className="mainNav__img"
        src={require("../../img/logo.png")}
        alt="logo"
      />

      <input
        onKeyDown={handleKeyDown}
        className="mainNav__search"
        type="text"
        placeholder="Search"
      />
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="mainNav__cartNum">{cartCount}</span>
    </nav>
  );
};

export default Navbar;
