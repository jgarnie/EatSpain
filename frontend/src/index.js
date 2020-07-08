import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import CartProvider from "./providers/CartProvider";
import CategoryProvider from "./providers/CategoryProvider";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
