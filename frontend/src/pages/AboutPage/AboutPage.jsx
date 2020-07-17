import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPage__headline">
        <h1>Who are we and why are we doing this?</h1>
        <h4>
          It all started with a simple idea. How can we find some Spanish food
          in Prague and try to help the Environment. After a while we found
          Joaquin’s family. They have a small corner shop in Betxí (Spain). We
          just realised that this would be a great idea to help them open an
          online shop, and then with some extra money that people will spend on
          the purchase we can plant trees.
        </h4>
      </div>

      <div className="aboutPage__first">
        <img
          className="aboutPage__img"
          src={require("../../img/dry.jpg")}
          alt="dryNature"
        />
        <p className="aboutPage__text">
          The environment is changing all around us. And especially countries in
          southern Europe will have bigger and bigger problems with retaining
          water in the soil. We do not have enough rain coming here like there
          was here 30, 20 or even 10 years ago. But there is a really easy
          solution to fix at least some of the problems associated with global
          warming. To retain water is probably the most important one. If you
          want to keep the largest amount of water as possible in the soil it is
          necessary to have enough vegetation.
        </p>
      </div>

      <div className="aboutPage__second">
        <p className="aboutPage__text">
          And thats why we started project EatSpain for the forest. For every
          100€ order we are going to plant a tree in Betxí area (east part of
          Spain). That is also the reason why we didn’t choose any fresh
          products because all your orders are going to be delivered to you by
          land and not by Air mail. With your help, we can make a difference in
          the global warming crisis.
        </p>

        <img
          className="aboutPage__img"
          src={require("../../img/green.jpg")}
          alt="greenNature"
        />
      </div>

      <p className="aboutPage__thankYou">
        {" "}
        Thank you for helping the environment!
      </p>

      <img
        className="aboutPage__imgParents"
        src={require("../../img/parents.jpg")}
        alt="parents"
      />
    </div>
  );
};

export default AboutPage;
