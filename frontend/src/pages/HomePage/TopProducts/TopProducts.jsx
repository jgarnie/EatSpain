import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import styled from "styled-components";
import Slider from "react-slick";
import "./topproducts.scss";

const StyledTopProducts = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledProductSlider = styled.div`
  width: 100%;
  height: 400px;
  background-color: #a4521c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopProducts = () => {
  const settings = {
    infinite: false,
    speed: 500,
    className: "test",
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledTopProducts>
      Top Products
      <Slider {...settings}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </StyledTopProducts>
  );
};

export default TopProducts;
