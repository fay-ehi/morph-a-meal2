import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import { getRecipeFromMistral } from "/netlify/functions/mistralRecipe.js";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe(event) {
    event.preventDefault();
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  const ingredientListElement = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));
  function PopUp(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    event.currentTarget.reset();
    if (newIngredients.length > 0) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }
  }

  return (
    <>
      <form onSubmit={PopUp}>
        <input
          className="textBox"
          type="text"
          placeholder="eg. Yam..."
          name="ingredient"
        />
        <button className="submitButton">+ Add Ingredients</button>
      </form>
      {ingredients.length > 0 ? (
        <Ingredient ingr={ingredientListElement} click={getRecipe} />
      ) : null}

      {recipe && <Recipe recipe={recipe} />}
    </>
  );
}
