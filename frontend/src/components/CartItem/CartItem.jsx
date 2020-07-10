import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../providers/CartProvider";
import "./CartItem.scss";
import { baseUrl } from "../../env";

const CartItem = ({ item }) => {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const [input, setInput] = useState(item.pivot.count);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input) {
      updateCart(item.id, input);
    }
  }, [input]);

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cartItem">
      <div>
        <img
          className="cartItem__img"
          src={`${baseUrl}/images/uploads/${item.image}`}
          alt={item.name}
        />
      </div>

      <div className="cartItem__text">
        <h3 className="cartItem__name">{item.name}</h3>

<<<<<<< HEAD
        <input
          className="cartItem__number"
=======
        
        <input className="cartItem__number"
>>>>>>> jakub
          type="number"
          value={input}
          onChange={handleInputChange}
        />
        <div className="cartItem__price">{item.price} eur</div>
      </div>

      <div>
        <button className="cartItem__btn" onClick={handleDelete}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
