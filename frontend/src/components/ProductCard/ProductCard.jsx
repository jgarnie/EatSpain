import React from "react";
import "./ProductCard.scss";
import { baseUrl } from "./../../env.js";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price }) => {
  return (
    <div className="product-card">
      <Link className="product-card" to={`/products/${id}`} >
      <img
        className="product-card__img"
        src={`${baseUrl}/images/uploads/${image}`}
        alt={name}
      />
      <h3 className="product-card__title">{name}</h3>
      <div className="product-card__price">{price} EUR</div>
    </Link>
    </div>
  );
};
export default ProductCard;
