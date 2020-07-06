import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.scss"


const Navbar = () => {
  return (
    <nav className="mainNav">
      <h1 className="title">Eat Spain</h1>
      <img className="mainNav__img"
        src={require("../../img/logo.png")}
        alt="logo"
      />
      <input className="mainNav__search" type="text" placeholder="Search" />
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="mainNav__cartNum">0</span>
    </nav>
  );
};

export default Navbar;
