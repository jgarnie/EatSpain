import React from "react";
import "./RecipeOfTheWeek.scss";

const recipeSection = () => {
  return (
    <section className="recipe">
      <a
        href="https://cookbook.codeboot.cz/recipe/13"
        target="_blank"
        rel="noreferrer noopener"
        className="recipe__link"
      >
        <div className="recipe__image"></div>

        <div className="recipe__container">
          <h1 className="recipe__heading">Discover a new recipe every week</h1>

          <p className="recipe__text">
            Here at EatSpain, we are always searching for the next exciting
            tastes to tantalise you’re tastebuds. Our specialised team is here
            for you! Find all the ingredients listed below the recipe.
          </p>
        </div>
      </a>
    </section>
  );
};

export default recipeSection;
