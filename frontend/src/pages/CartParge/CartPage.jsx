import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

const CartPage = () => {
  const { cart, isCartLoading } = useContext(CartContext);

  return (
    <div>
      test
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartPage;
