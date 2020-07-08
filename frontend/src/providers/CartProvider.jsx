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

  const countCart = () => {
    let count = 0;

    cart.forEach((item) => {
      count += Number(item.pivot.count);
    });
    return count;
  };

  const addToCart = () => {
    console.log("add item to cart");
  };

  const removeFromCart = () => {
    console.log("remove item from cart");
  };

  const cartCount = countCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        isCartLoading,
        token,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
