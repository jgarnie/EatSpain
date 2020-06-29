import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import styled from "styled-components";

const StyledTopProducts = styled.div``;

const StyledProductSlider = styled.div`
  width: 100%;
  height: 400px;
  background-color: #a4521c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopProducts = () => {
  return (
    <StyledTopProducts>
      Top Products
      <StyledProductSlider>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </StyledProductSlider>
    </StyledTopProducts>
  );
};

export default TopProducts;
