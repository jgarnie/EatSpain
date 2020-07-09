import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

const CartPage = () => {
  const { cart, isCartLoading } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Items</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartPage;
