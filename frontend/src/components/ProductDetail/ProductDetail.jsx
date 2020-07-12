import React, { useContext, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.scss";
import { CartContext } from "../../providers/CartProvider";
import { baseUrl } from "../../env";

const initialState = 1;

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "set":
      return action.value;
    default:
      throw new Error();
  }
}

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="product-detail">
      <div className="product-detail__img">
        <img
          src={`${baseUrl}/images/uploads/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="product-detail__container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price} €</p>

        <div>
          <input
            className="product-detail__number"
            type="number"
            value={count}
            onChange={(e) => dispatch({ type: "set", value: e.target.value })}
          />
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button
            className="product-detail__btn"
            onClick={() => addToCart(product.id, count)}
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
