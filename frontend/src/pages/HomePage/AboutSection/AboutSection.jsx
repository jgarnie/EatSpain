import React from "react";
import "./AboutSection.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const AboutSection = () => {
  return (
    <section className="about">

      {/* <h1 className="about__heading">Eat Spain</h1> */}

      <p className="about__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus
            facere totam iure maiores quis odio ea provident autem exercitationem
            voluptatibus quam veniam fugit.
      </p>
    <FontAwesomeIcon className="about__scroll" icon={faChevronDown}/>

    </section>
  );
};

export default AboutSection;
