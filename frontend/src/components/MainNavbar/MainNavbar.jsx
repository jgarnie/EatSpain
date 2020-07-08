import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.scss";
import { CartContext } from "../../providers/CartProvider";



const Navbar = ({handleSearch}) => {

  const { cartCount } = useContext(CartContext);
  
  const handleKeyDown=(e)=>{
 
    if(e.key==='Enter'){
      
      handleSearch(e.target.value)
      
    }
  }
 
  return (
    <nav className="mainNav">
      <h1 className="mainNav__title">Eat Spain</h1>

      <img
        className="mainNav__img"
        src={require("../../img/logo.png")}
        alt="logo"
      />
      {/* <form action="/search"> */}
        <input onKeyDown={handleKeyDown} className="mainNav__search" type="text" placeholder="Search" />
      {/* </form> */}

      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="mainNav__cartNum">{cartCount}</span>
    </nav>
  );
};

export default Navbar;