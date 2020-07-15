import React from "react";
import "./EasterEgg.scss";

const EasterEgg = () => {
  return (
    <section className="easter">
      <img
        className="easter__image"
        src={require("../../img/egg.jpg")}
        alt=""
      />
      <h1 className="easter__heading">
        You found an easter egg congratulations
      </h1>
      <p className="easter__text">
        If you made it here it means you win 1 beer.
        <span className="easter__letKnow"> Let us know! </span>
        Just in case you are all going to find this? It is just for the first 3
        of you!!!
      </p>
    </section>
  );
};

export default EasterEgg;
