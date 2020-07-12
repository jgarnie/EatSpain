import React, { useState, useEffect, createContext } from "react";
import { CartApi } from "../api/CartApi";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
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

  return (
    <CartContext.Provider
      value={{
        token,
        cart,
        cartCount,
        cartTotal,
        isCartLoading,
        deliveryDetails,
        addToCart,
        updateCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
