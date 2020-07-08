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
import { throttle } from "../../utils/throttle.js";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./ProductSlider.scss";

const ProductSlider = ({ children, header, className }) => {
  const [displaySlides, setDisplaySlides] = useState(2);

  useEffect(() => {
    const checkWindowSize = () => {
      let display = null;
      //Set responsivity:
      if (window.innerWidth < 1024) {
        display = 2;
      } else {
        display = 4;
      }
      setDisplaySlides(display);
    };

    const throttledWindowSize = () => {
      throttle(checkWindowSize, 200);
    };

    window.addEventListener("resize", throttledWindowSize);
    checkWindowSize();
    return function cleanup() {
      window.removeEventListener("resize", throttledWindowSize);
    };
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={125}
      naturalSlideHeight={100}
      totalSlides={children.length}
      visibleSlides={displaySlides}
      interval={5000}
      infinite={true}
      isPlaying={true}
      className={className}
    >
      <h2 className="carousel__header">{header}</h2>
      <div className="product-slider">
        <Slider className="product-slider__slider">
          {children.map((child, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className="product-slider__slide"
              >
                {child}
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className="btn btn--back">
          <FontAwesomeIcon icon={faAngleLeft} />
        </ButtonBack>
        <ButtonNext className="btn btn--next">
          <FontAwesomeIcon icon={faAngleRight} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ProductSlider;
