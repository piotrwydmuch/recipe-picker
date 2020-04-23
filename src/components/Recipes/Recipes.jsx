import React from "react";

const Recipes = ({ title, calories, image, ingredients }) => {
  {
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text center">
            <img src={image} alt="Recipe Image" className="image" />
            <span className="card-title">{title}</span>
            <p>Calories: {calories}</p>
            <ul style={{ listStyle: "none" }}>
              {ingredients.map((ingredient) => (
                <li key={Math.random()}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Recipes;
