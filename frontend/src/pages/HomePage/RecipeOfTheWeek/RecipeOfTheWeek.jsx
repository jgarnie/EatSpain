import React from "react";
import "./RecipeOfTheWeek.scss"



const recipeSection = () => {
    return (
    <section className="recipe">
        
        <div className="recipe__image">

        </div>
        
        <div className="recipe__container">
            <h1 className="recipe__heading">Recipe Of the week</h1>

            <h3 className="recipe__name">Name</h3>

            <p className="recipe__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus
            facere totam iure maiores quis odio ea provident autem exercitationem
            voluptatibus quam veniam fugit.
            </p>

            <button className="recipe__btn">more info</button>

        </div>


    </section>
    );
};

export default recipeSection;