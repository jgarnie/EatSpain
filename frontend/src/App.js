import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CartPage from "./pages/CartParge/CartPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";

function App() {
  return (
    <Router>
      <MainNavbar />
      <CategoryNavbar />
      <Switch>
        <Route component={CategoryPage} path="/category/:categoryName" />
        <Route component={SearchPage} path="/search/" />
        <Route component={AboutPage} path="/about" />
        <Route component={CartPage} path="/cart" />
        <Route component={OrderDetailsPage} path="/order-details" />
        <Route component={HomePage} path="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
