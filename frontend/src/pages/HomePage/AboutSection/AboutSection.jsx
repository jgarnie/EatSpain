import React from "react";
import "./AboutSection.scss"


const AboutSection = () => {
  return (
    <section className="about">

      <h1 className="about__heading">Eat Spain</h1>

      <p className="about__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus
            facere totam iure maiores quis odio ea provident autem exercitationem
            voluptatibus quam veniam fugit.
      </p>

    <img className="about__scroll" src={require("../../../img/arrow.svg")} alt="scroll"/>


    </section>
  );
};

export default AboutSection;
