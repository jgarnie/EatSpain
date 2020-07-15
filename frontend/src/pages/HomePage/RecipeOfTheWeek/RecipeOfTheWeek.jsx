import React from "react";
import "./RecipeOfTheWeek.scss";

const recipeSection = () => {
  return (
    <section className="recipe">
      <div className="recipe__image"></div>

      <div className="recipe__container">
        <h1 className="recipe__heading">Discover a new recipe every week</h1>

        {/* <h3 className="recipe__name">Name</h3> */}

        <p className="recipe__text">
          Here at EatSpain, we are always searching for the next exciting tastes
          to tantalise you’re tastebuds. Our specialised team is here for you!
          Find all the ingredients listed below the recipe
        </p>
      </div>
    </section>
  );
};

export default recipeSection;
