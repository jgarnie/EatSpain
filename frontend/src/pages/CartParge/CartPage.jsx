import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

import "./CartPage.scss";

const CartPage = () => {
  const { cart, isCartLoading } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <p className="cart__total">Total price: 000 eur</p>

      <button className="cart__btn">Continue</button>

    </div>
  );
};

export default CartPage;
