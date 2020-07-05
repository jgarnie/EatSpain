import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import ProductSlider from "../../../components/ProductSlider/ProductSlider.jsx";
import "./topproducts.scss";

const TopProducts = () => {
  return (
    <ProductSlider header={"Top Products"} className={"carousel"}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductSlider>
  );
};

export default TopProducts;
