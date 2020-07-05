import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import ProductSlider from "../../../components/ProductSlider/ProductSlider.jsx";
import "./topproducts.scss";

const TopProducts = () => {
  return (
    <div>
      <ProductSlider header={"Top Products"}>
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
    </div>
  );
};

export default TopProducts;
