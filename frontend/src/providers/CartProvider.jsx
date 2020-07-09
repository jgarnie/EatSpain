import React, { useState, useEffect, createContext } from "react";
import { CartApi } from "../api/CartApi";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [token, setToken] = useState(window.localStorage.getItem("_cartToken"));

  useEffect(() => {
    CartApi.getToken(token, setToken);
  }, [token]);

  useEffect(() => {
    window.localStorage.setItem("_cartToken", token);
    CartApi.getCartItems(token, setCart, setIsCartLoading);
  }, [token]);

  const cartCount = cart.length;

  const addToCart = (productId, count) => {
    CartApi.addToCart({ productId, token, count }, setCart, setIsCartLoading);
  };

  const updateCart = (productId, count) => {
    CartApi.updateCart({ productId, token, count }, setCart, setIsCartLoading);
  };

  const removeFromCart = (productId) => {
    console.log("test");
    CartApi.removeFromCart({ productId, token }, setCart, setIsCartLoading);
  };

  return (
    <CartContext.Provider
      value={{
        token,
        cart,
        cartCount,
        isCartLoading,
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
