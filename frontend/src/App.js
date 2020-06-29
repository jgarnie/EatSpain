import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MainNavbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <MainNavbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
