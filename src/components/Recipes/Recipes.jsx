import React from "react";
import "./Recipes.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  {
    return (
      <div>
        <div className="card white darken-1">
          <div className="card-image">
            <img
              src={image}
              alt="Recipe Image"
              className="image"
              style={{ width: "100%" }}
            />
          </div>
          <div className="card-content center">
            <h2 className="card-title">{title}</h2>
            <p>Calories: {Math.round(calories)}</p>
            <ul style={{ listStyle: "none" }}>
              {ingredients.map((ingredient) => (
                <li key={Math.random()}>→ {ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Recipes;
