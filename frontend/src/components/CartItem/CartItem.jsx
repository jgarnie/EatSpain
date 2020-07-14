import React, { useContext, useState, useReducer, useEffect } from "react";
import { CartContext } from "../../providers/CartProvider";
import "./CartItem.scss";
import { baseUrl } from "../../env";

const initialState = 1;

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      if (count <= 1) {
        return 1;
      } else return count - 1;
    case "set":
      return Number(action.value);
    default:
      throw new Error();
  }
}

const CartItem = ({ item, compact }) => {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (count) {
      updateCart(item.id, count);
    }
  }, [count]);

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  const displayCSS = compact ? "cartItem compact" : "cartItem";

  return (
    <div className={displayCSS}>
      <div className="cartItem__container1 compact__container1">
        <img
          className="cartItem__img compact__img"
          src={`${baseUrl}/images/uploads/${item.image}`}
          alt={item.name}
        />
        <h3 className="cartItem__name compact__name">{item.name}</h3>
      </div>

      <div className="cartItem__container2 compact__container2">
        <div className="cartItem__price compact__price">{item.price} eur</div>
      </div>

      <div className="cartItem__container3 compact__container3">
        <input
          className="cartItem__number compact__number"
          type="number"
          value={count}
          onChange={(e) => dispatch({ type: "set", value: e.target.value })}
        />
        <div className="cartItem__valueChangeContainer compact__valueChangeContainer">
          <button
            className="cartItem__valueChange
            compact__valueChange"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
          <button
            className="cartItem__valueChange
            compact__valueChange"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
        </div>
      </div>

      <div className="cartItem__container4">
        <button className="cartItem__btn" onClick={handleDelete}>
          &times;
        </button>

        {`${(item.price * count).toFixed(2)} €`}
      </div>
    </div>
  );
};

export default CartItem;
