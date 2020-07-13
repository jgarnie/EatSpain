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


          <div className="cartItem__container1">
            <img
              className="cartItem__img"
              src={`${baseUrl}/images/uploads/${item.image}`}
              alt={item.name}
            />
            <h3 className="cartItem__name">{item.name}</h3>
          </div>

          <div className="cartItem__container2">
            <div className="cartItem__price">{item.price} eur</div>
          </div>

          <div className="cartItem__container3">
            <input
              className="cartItem__number"
              type="number"
              value={input}
              onChange={handleInputChange}/>
          </div>



          <div className="cartItem__container4">
          <button className="cartItem__btn" onClick={handleDelete}>
              &times;
            </button>
            Subtotal
          </div>
      </div>

  );
};

export default CartItem;
