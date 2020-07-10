import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.scss";
import { CartContext } from "../../providers/CartProvider";
import { baseUrl } from "../../env";



const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [countInput, setCountInput] = useState(1);
  return (
    <div className="product-detail">
      <div className="product-detail__img">
      <img  src={`${baseUrl}/images/uploads/${product.image}`} alt={product.name} />
        </div>
      <div className="product-detail__container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price} €</p>

        <div>
          <input
            className="product-detail__number"
            type="number"
            value={countInput}
            onChange={(e) => setCountInput(e.target.value)}
          />
          <button
            className="product-detail__btn"
            onClick={() => addToCart(product.id, countInput)}
          >
            Add to cart
            <FontAwesomeIcon
              className="product-detail__cart"
              icon={faShoppingCart}
            />
          </button>
        </div>

        <p>Ships Worldwide</p>
      </div>
    </div>
  );
};

export default ProductDetail;
