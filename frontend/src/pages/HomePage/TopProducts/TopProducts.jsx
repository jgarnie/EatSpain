import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import ProductSlider from "../../../components/ProductSlider/ProductSlider.jsx";
import "./TopProducts.scss";
import { ProductsApi } from "../../../api/ProductsApi";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ProductsApi.getNewProducts(setProducts, setIsLoading);
  }, []);

  return (
    <ProductSlider header={"Top Products"} className={"carousel"}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductSlider>
  );
};

export default TopProducts;
