import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CartPage from "./pages/CartPage/CartPage";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ScrollToTop from "./utils/ScrollToTop";
import ThanksPage from "./pages/PaymentPage/ThanksPage";


function App() {
  const [ searchValue, setSearchValue ] = useState('');
  const [ redirect, setRedirect ] = useState(false);
  const [ thanks, setThanks ] = useState(null);

const thankerHandler=(value)=>{
  setThanks(value)
}
  

  const handleSearch = (value) => {
    setSearchValue(value);
    setRedirect(true);
  };

  return (<Router>
      {redirect && <Redirect to={`/search/${searchValue}`} />} 
      {thanks && <Redirect to={`/thankyou`} />}
      <MainNavbar handleSearch={handleSearch}/>
      <CategoryNavbar />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={CategoryPage} path="/category/:categoryName" />
        <Route
          component={SearchPage}
          searchValue={searchValue}
          path="/search/:query"
        />
        <Route component={ProductDetailPage} path="/products/:productId" />
        <Route component={AboutPage} path="/about" />
        <Route component={CartPage} path="/cart" />
        <Route component={OrderDetailsPage} path="/order-details" />
        <Route
          path="/payment"
          render={(routerProps) => <PaymentPage {...routerProps} thankerHandler={thankerHandler} />}
        />
        <Route component={ThanksPage} path="/thankyou" />
        <Route component={HomePage} path="/" />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
