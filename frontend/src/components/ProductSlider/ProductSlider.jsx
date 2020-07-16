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

      if (window.innerWidth < 550) {
        display = 1;
      } else if (window.innerWidth < 800) {
        display = 2;
      } else if (window.innerWidth < 1024) {
        display = 3;
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
      naturalSlideHeight={125}
      totalSlides={children.length}
      visibleSlides={displaySlides}
      step={displaySlides}
      interval={8000}
      infinite={true}
      isPlaying={true}
      className={className}
    >
      <h2 className="carousel__header">{header}</h2>
      <div className="product-slider">
        <Slider className="product-slider__slider">
          {children.map((child, index) => {
            return (
              <Slide key={index} index={index} innerClassName="test">
                {child}
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className="product-slider__btn product-slider__btn--back">
          <FontAwesomeIcon icon={faAngleLeft} />
        </ButtonBack>
        <ButtonNext className="product-slider__btn product-slider__btn--next">
          <FontAwesomeIcon icon={faAngleRight} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ProductSlider;
