import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import { getRecipeFromMistral } from "./mistralai";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "rice",
    "beans",
    "vegetable",
    "oil",
    "spice",
  ]);

  const [recipe, setRecipe] = useState("");

  const handleRecipeFetch = async () => {
    const recipe = await getRecipeFromMistral(ingredients);
    setRecipe(recipe);
  };
  function PopUp(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    event.currentTarget.reset();
    if (newIngredients.length > 0) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }
  }
  const ingredientListElement = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));
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
        <Ingredient ingr={ingredientListElement} click={handleRecipeFetch} />
      ) : null}

      {recipe && <Recipe getRecipe={recipe} />}
    </>
  );
}
