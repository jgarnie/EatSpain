import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import TopProducts from "./TopProducts/TopProducts";
import RecipeOfTheWeek from "./RecipeOfTheWeek/RecipeOfTheWeek";
import GoGreen from "./GoGreen/GoGreen";

const HomePage = () => {
  return (
    <div>
      <AboutSection />
      <TopProducts />
      <div className="textSection">
        <RecipeOfTheWeek />
        <GoGreen />
      </div>
    </div>
  );
};

export default HomePage;
