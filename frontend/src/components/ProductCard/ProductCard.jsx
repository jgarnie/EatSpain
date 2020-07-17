import React, { useContext, useState } from "react";
import "./ProductCard.scss";
import { baseUrl } from "./../../env.js";
import { Link } from "react-router-dom";
import { CartContext } from "../../providers/CartProvider";
import Modal from "../Modal/Modal";

const ProductCard = ({ id, name, image, price, slider }) => {
  const { addToCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (count) => {
    addToCart(id, count);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cardStyles = slider
    ? `product-card product-card--slider`
    : `product-card`;

  return (
    <div className={cardStyles}>
      <Link className="product-card" to={`/products/${id}`}>
        <img
          className="product-card__img"
          src={`${baseUrl}/images/uploads/${image}`}
          alt={name}
        />
      </Link>
      <h3 className="product-card__title">{name}</h3>
      <div className="product-card__container">
        <button
          className="product-card__btn"
          onClick={() => handleAddToCart(1)}
        >
          Add to cart
        </button>
        <div className="product-card__price">{price} EUR</div>
      </div>
      <Modal show={showModal} handleCloseModal={handleCloseModal}>
        <div className="product-card__modal">
          <img src={`${baseUrl}/images/uploads/${image}`} alt={name} />
          <h3 className="product-card__modal__title">
            {name} has been successfully added to cart.
          </h3>
        </div>
      </Modal>
    </div>
  );
};
export default ProductCard;
