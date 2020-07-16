import React from "react";
import "./AboutSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <section className="about">
      <h1 className="about__header">We are EatSpain.</h1>
      <p className="about__text">
        The speciality food shop of spanish products. Have you ever tried to
        make paella but you couldn’t find the correct type of rice? Well you
        have come to the right place. Check out all our typical Spanish products
        in one place, and help the environment when buying them.
      </p>
      <FontAwesomeIcon className="about__scroll" icon={faChevronDown} />
    </section>
  );
};

export default AboutSection;
