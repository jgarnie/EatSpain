import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

import "./CartPage.scss";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, cartTotal, isCartLoading } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <p className="cart__total">Total price: {cartTotal} €</p>

      <Link to="/order-details" className="cart__btn">
        Continue
      </Link>
    </div>
  );
};

export default CartPage;
