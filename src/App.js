import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const APP_ID = "a503256a";
  const APP_KEY = "1022cb0457be50fb35c6052b425c0d7c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App container">
      <h1 className="main-title">Hello</h1>
      <form className="serach-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          placeholder="Type ingredient"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button btn">
          Search
        </button>
      </form>
      <div className="recepies">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
