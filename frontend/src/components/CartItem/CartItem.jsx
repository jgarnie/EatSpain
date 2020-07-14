import React, { useContext, useReducer, useEffect } from "react";
import { CartContext } from "../../providers/CartProvider";
import "./CartItem.scss";
import { baseUrl } from "../../env";
import { Link } from "react-router-dom";

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

const CartItem = ({ item }) => {
  const { updateCart, removeFromCart } = useContext(CartContext);
  const [count, dispatch] = useReducer(reducer, item.pivot.count);

  useEffect(() => {
    if (count) {
      updateCart(item.id, count);
    }
  }, [count]);

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cartItem">
      <div className="cartItem__container1">
        <Link to={`/products/${item.id}`}>
          <img
            className="cartItem__img"
            src={`${baseUrl}/images/uploads/${item.image}`}
            alt={item.name}
          />
        </Link>
        <h3 className="cartItem__name">{item.name}</h3>
      </div>

      <div className="cartItem__container2">
        <div className="cartItem__price">{item.price} eur</div>
      </div>

      <div className="cartItem__container3">
        <input
          className="cartItem__number"
          type="number"
          value={count}
          onChange={(e) => dispatch({ type: "set", value: e.target.value })}
        />
        <div className="cartItem__valueChangeContainer">
          <button className="cartItem__valueChange" onClick={() => dispatch({ type: "increment" })}>+</button>
          <button className="cartItem__valueChange" onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>

      </div>

      <div className="cartItem__container4">
        
        {`${(item.price * count).toFixed(2)} €`}

        <button className="cartItem__btn" onClick={handleDelete}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
