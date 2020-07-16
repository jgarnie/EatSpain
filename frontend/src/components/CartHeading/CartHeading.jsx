import React from "react";

const CartHeading = () => {
  return (
    <div className="cart__heading">
      <p className="cart__item">Item</p>
      <p className="cart__price">Price</p>
      <p className="cart__qty">Qty</p>
      <p >Subtotal</p>
    </div>
  );
};

export default CartHeading;
