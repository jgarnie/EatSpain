import React, { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "../../components/CartItem/CartItem";

import CartHeading from "../../components/CartHeading/CartHeading";

import "./CartPage.scss";
import { Link } from "react-router-dom";
import CartFooter from "../../components/CartFooter/CartFooter";

const CartPage = () => {
  const { cart, cartTotal, isCartLoading } = useContext(CartContext);

  return (
    <div className="cart">
      <h1 className="cart__name">Shoping Cart</h1>

      <CartHeading />

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <CartFooter />

      <Link to="/order-details" className="cart__btn">
        Continue
      </Link>
    </div>
  );
};

export default CartPage;
