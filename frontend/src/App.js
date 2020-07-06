import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MainNavbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { CartApi } from "./api/CartApi";
import SearchPage from "./pages/SearchPage/SearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [cart, setCart] = useState({});
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [token, setToken] = useState(window.localStorage.getItem("_cartToken"));

  useEffect(() => {
    CartApi.getToken(token, setToken);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("_cartToken", token);
    CartApi.getCartItems(token, setCart, setIsCartLoading);
  }, [token]);

  return (
    <Router>
      <MainNavbar />
      <CategoryNavbar />
      <Switch>
        <Route component={CategoryPage} path="/category/:categoryName" />
        <Route component={SearchPage} path="/search/" />

        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
