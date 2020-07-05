import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { throttleFunction } from "../../utils/throttleFunction.js";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./ProductSlider.scss";

const ProductSlider = ({ children, heading }) => {
  const [displaySlides, setDisplaySlides] = useState(2);

  const checkWindowSize = () => {
    let display = displaySlides;
    //Set responsivity:
    if (window.innerWidth < 1024) {
      display = 2;
    } else {
      display = 4;
    }
    setDisplaySlides(display);
  };

  const throttledWindowSize = () => {
    throttleFunction(checkWindowSize, 200);
  };

  useEffect(() => {
    window.addEventListener("resize", throttledWindowSize);
    checkWindowSize();
    return function cleanup() {
      window.removeEventListener("resize", throttledWindowSize);
    };
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={children.length}
      visibleSlides={displaySlides}
      interval={2500}
      infinite={true}
      isPlaying={true}
      className="product-slider"
    >
      <h3>{heading}</h3>
      <Slider style={{ height: "200px" }}>
        {children.map((child, index) => {
          return (
            <Slide key={index} index={index}>
              {child}
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className="btn">
        <FontAwesomeIcon icon={faAngleLeft} />
      </ButtonBack>
      <ButtonNext className="btn">
        <FontAwesomeIcon icon={faAngleRight} />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default ProductSlider;
