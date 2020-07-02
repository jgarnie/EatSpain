import React from "react";
import "./AboutSection.scss"


const AboutSection = () => {
  return (
    <section className="about">
      <h1 className="about__heading">EatSpain</h1>

    <div className="about__section">
    <p className="about__text">

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus
            facere totam iure maiores quis odio ea provident autem exercitationem
            voluptatibus quam veniam fugit.
          </p>

          <img className="about__mainImg" src={require("../../../img/main.jpg")} alt="paella"/>

    </div>


    </section>
  );
};

export default AboutSection;
