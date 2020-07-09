import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../providers/CartProvider";

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
    <div>
      <button onClick={handleDelete}>&times;</button>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <img src={item.image} alt={item.name} />
      <input type="number" value={input} onChange={handleInputChange} />
      <div>{item.price} USD</div>
    </div>
  );
};

export default CartItem;
