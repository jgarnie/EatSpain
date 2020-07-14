import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

const CartFooter = () => {
  const { cart, cartTotal, isCartLoading } = useContext(CartContext);
  return <p className="cart__total">Total price: {cartTotal} €</p>;
};

export default CartFooter;
