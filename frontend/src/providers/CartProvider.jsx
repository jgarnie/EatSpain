import React, { useState, useEffect, createContext } from "react";
import { CartApi } from "../api/CartApi";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [lastOrder, setLastOrder] = useState({});
  const [token, setToken] = useState(() =>
    window.localStorage.getItem("_cartToken")
  );

  useEffect(() => {
    CartApi.getToken(token, setToken);
  }, [token]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("_cartToken", token);
      CartApi.getCartItems(
        token,
        setCart,
        setDeliveryDetails,
        setIsCartLoading
      );
    }
  }, [token]);

  const cartCount = cart.length;
  const cartTotal = cart
    .reduce((acc, { price, pivot: { count } = {} }) => acc + price * count, 0)
    .toFixed(2);

  const addToCart = (productId, count) => {
    CartApi.addToCart({ productId, token, count }, setCart, setIsCartLoading);
  };

  const updateCart = (productId, count) => {
    CartApi.updateCart({ productId, token, count }, setCart, setIsCartLoading);
  };

  const removeFromCart = (productId) => {
    CartApi.removeFromCart({ productId, token }, setCart, setIsCartLoading);
  };

  const updateCheckoutData = (data) => {
    CartApi.updateCheckoutData(
      { token, total: cartTotal, ...data },
      setCart,
      setDeliveryDetails,
      setIsCartLoading
    );
    if (data.orderStatus === "Ordered") {
      let orderNumber = "#EAT" + ("000000" + deliveryDetails.id).slice(-6);

      setLastOrder({
        email: deliveryDetails.email,
        orderNumber: orderNumber,
        orderTotal: cartTotal,
        orderCart: cart,
      });
      setToken(null);
    }
  };

  return (
    <CartContext.Provider
      value={{
        token,
        cart,
        cartCount,
        cartTotal,
        isCartLoading,
        deliveryDetails,
        lastOrder,
        addToCart,
        updateCart,
        removeFromCart,
        updateCheckoutData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
