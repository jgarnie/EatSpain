import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

import "./CartPage.scss";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, cartTotal, isCartLoading } = useContext(CartContext);

  return (
    <div className="cart">
      <h1 className="cart__name">Shoping Cart</h1>
      <div className="cart__heading">
        <p className="cart__item">Item</p>
        <p className="cart__price">Price</p>
        <p className="cart__qty">Qty</p>
        <p>Subtotal</p>
      </div>
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
