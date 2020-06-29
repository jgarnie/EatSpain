import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
