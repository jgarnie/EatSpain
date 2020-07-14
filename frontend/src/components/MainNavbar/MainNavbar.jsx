import React, { useContext,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.scss";
import { CartContext } from "../../providers/CartProvider";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const { cartCount } = useContext(CartContext);
  const [value, setValue] = useState('');
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(value);
    }
  };
  const handleClick=(e)=>{
    handleSearch(value)
  };


  return (
    <nav className="mainNav">
      <Link to="/">
        <img
          className="mainNav__img"
          src={require("../../img/logo.png")}
          alt="logo"
        />
      </Link>

      <h1>
        <Link className="mainNav__title" to="/">
          Eat Spain
        </Link>
      </h1>

      <div className="mainNav__Container">
        <div className="mainNav__searchContainer">

        <input
        onKeyDown={handleKeyDown}
        onChange={e=>{ setValue( e.target.value ) }}
        className="mainNav__search"
        value={ value }
        type="text"
        placeholder="Search"/>
        <FontAwesomeIcon onClick={e=>{handleClick(e)}} className="mainNav__magnifyingGlass" icon={faSearch}></FontAwesomeIcon>

        </div>
        
        

        <Link className="mainNav__cartLink" to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="mainNav__cartNum">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
