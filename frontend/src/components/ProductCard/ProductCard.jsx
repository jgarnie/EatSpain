import React from "react";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src="https://images-na.ssl-images-amazon.com/images/I/51E36huSj0L._AC_.jpg"
        alt="rice"
      />
      <h3 className="product-card__title">Good rice - very good</h3>
      <div className="product-card__price">24,49 EUR</div>
    </div>
  );
};

export default ProductCard;
