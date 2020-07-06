import React from "react";
import "./ProductCard.scss";

const ProductCard = ({key,name,description,image,price}) => {
  return (
    <div className="product-card" id={key}>
      <img
        className="product-card__img"
        src={`/public/images/upload/{image}`}
      />
      <h3 className="product-card__title">{name}</h3>
      <div className="product-card__price">{price} EUR</div>
    </div>
  );
};
export default ProductCard;


