import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.scss"



const ProductDetail = (props) => {
  console.log(props);
return (
    <div className="product-detail">
      <img className="product-detail__img" src={require("../../img/main.jpg")} alt="cheese"/>
      <div className="product-detail__container">
        <h1>Name of the product</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nisi obcaecati deserunt, reprehenderit ipsum, aliquid sapiente molestiae laborum dolores placeat labore.</p>
        <p>Price: 3$</p>
        

        
        <div>
          <input className="product-detail__number" type="number" placeholder="1" />
          <button className="product-detail__btn">Add to cart
            <FontAwesomeIcon className="product-detail__cart" icon={faShoppingCart} />
          </button>
        </div>

        <p>Ships Worldwide</p>
      </div>

    </div>
    );
  };
  
  export default ProductDetail;
  