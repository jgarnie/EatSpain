import React from "react";
import "./ProductCard.scss";
import {baseUrl} from "./../../env.js";

const ProductCard = ({id,name,image,price}) => {
 
  return (
    
    <div className="product-card" id={id}>
      <img
        className="product-card__img"
        src={`${baseUrl}/images/uploads/${image}`}
      />
      <h3 className="product-card__title">{name}</h3>
      <div className="product-card__price">{price} EUR</div>
    </div>
  );
};
export default ProductCard;


