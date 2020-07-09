import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import "./CartItem.scss"
import { baseUrl } from "../../env";

const CartItem = ({ item }) => {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    updateCart(item.id, e.target.value);
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (

    <div className="cartItem">
      <div>
        <img className="cartItem__img" src={`${baseUrl}/images/uploads/${item.image}`} alt={item.name} />
      </div>

      <div className="cartItem__text">
        <h3 className="cartItem__name">{item.name}</h3>
        
        <input className="cartItem__number"
          type="number"
          value={item.pivot.count}
          onChange={handleInputChange}
        />
        <div className="cartItem__price">{item.price} eur</div>
      </div>

      <div>
          <button className="cartItem__btn" onClick={handleDelete}>&times;</button>
        </div>

    </div>
  );
};

export default CartItem;






