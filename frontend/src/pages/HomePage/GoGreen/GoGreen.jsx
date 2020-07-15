import React from "react";
import "./GoGreen.scss";
import { Link } from "react-router-dom";

const goGreenSection = () => {
  return (
    <Link className="goGreen" to="/about">
      <section>
        <div className="goGreen__image"></div>

        <div className="goGreen__container">
          <h1 className="goGreen__heading">Go Green</h1>

          <p className="goGreen__text">
            We are passionate about food, and inspired by our beautiful country.
            Find out how you can help us protect our planet for future
            generations...
          </p>
        </div>
      </section>
    </Link>
  );
};

export default goGreenSection;
