import React, { useContext } from "react";
import "./ProductCard.scss";
import { baseUrl } from "./../../env.js";
import { Link } from "react-router-dom";
import { CartContext } from "../../providers/CartProvider";

const ProductCard = ({ id, name, image, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link className="product-card" to={`/products/${id}`}>
        <img
          className="product-card__img"
          src={`${baseUrl}/images/uploads/${image}`}
          alt={name}
        />
      </Link>
      <h3 className="product-card__title">{name}</h3>
      <div className="product-card__container">
        <button className="product-card__btn" onClick={() => addToCart(id, 1)}>
          Add to cart
        </button>
        <div className="product-card__price">{price} EUR</div>
      </div>
    </div>
  );
};
export default ProductCard;
