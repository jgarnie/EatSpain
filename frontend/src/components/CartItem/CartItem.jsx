import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

const CartItem = ({ item }) => {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    updateCart(item.id, e.target.value);
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div>
      <button onClick={handleDelete}>&times;</button>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <img src={item.image} alt={item.name} />
      <input
        type="number"
        value={item.pivot.count}
        onChange={handleInputChange}
      />
      <div>{item.price} USD</div>
    </div>
  );
};

export default CartItem;
