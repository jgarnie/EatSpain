import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <img
        src="https://hotemoji.com/images/emoji/g/g0i0931p62s3g.png"
        style={{ width: "50px" }}
        alt="logo"
      />
      <span>EatSpain</span>
      <input type="text" placeholder="Search" />
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>0</span>
    </nav>
  );
};

export default Navbar;
