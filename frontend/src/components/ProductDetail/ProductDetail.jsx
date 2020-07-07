import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.scss"



const ProductDetail = (props) => {
  console.log(props, "PROPS");
return (
    <div className="product-detail">
      <img className="product-detail__img" src={props.product.image} alt="cheese"/>
      <div className="product-detail__container">
      <h1>{props.product.name}</h1>
        <p>{props.product.description}</p>
      <p>Price: {props.product.price} €</p>
        

        
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
  