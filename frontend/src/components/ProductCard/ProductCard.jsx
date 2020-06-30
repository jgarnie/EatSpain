import React from "react";
import styled from "styled-components";

const StyledProductCard = styled.div`
  /* width: 350px;
  height: 350px; */
  border-radius: 10px;
  background-color: #1e1e26;

  & img {
    height: 150px;
  }
`;

const StyledProductTitle = styled.h3`
  margin: 0;
`;

const StyledCartButton = styled.button`
  background-color: pink;
`;

const ProductCard = () => {
  return (
    <StyledProductCard>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51E36huSj0L._AC_.jpg"
        alt="rice"
      />
      <StyledProductTitle>Good rice - very good</StyledProductTitle>
      <div className="price">24,49 EUR</div>
      <StyledCartButton>TEst</StyledCartButton>
    </StyledProductCard>
  );
};

export default ProductCard;
