import React, { useContext } from "react";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";
import "./OrderDetailsPage.scss";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../providers/CartProvider";
import CartHeading from "../../components/CartHeading/CartHeading";
import CartFooter from "../../components/CartFooter/CartFooter";

const OrderDetailsPage = () => {
  const { cart, cartTotal, isCartLoading } = useContext(CartContext);

  return (
    <div>
      <div>
        <h3 className="summary">Order Summary</h3>
        <CartHeading />
        {cart.map((item) => (
          <CartItem compact key={item.id} item={item} />
        ))}
        <CartFooter />
        <DeliveryAddress className="summary__address" />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
