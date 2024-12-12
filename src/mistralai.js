// export async function getRecipeFromMistral(ingredients) {
//   const ingredientsString = ingredients.join(", ");

//   try {
//     const response = await fetch(
//       "https://morph-meal.netlify.app/.netlify/functions/recipe-function",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ingredients: ingredientsString }),
//       }
//     );

//     const data = await response.json();
//     return data.recipe;
//   } catch (error) {
//     console.error("Error fetching recipe:", error);
//     return "An error occurred while fetching the recipe.";
//   }
// }
