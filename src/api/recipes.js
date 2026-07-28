import API_URL from "./api";

const RECIPES_URL = `${API_URL}/recipes`;

export async function getRecipes() {
  const response = await fetch(`${RECIPES_URL}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes.");
  }

  return response.json();
}

export async function getRecipe(recipeId) {
  const response = await fetch(`${RECIPES_URL}/${recipeId}`);

  if (!response.ok) {
    throw new Error("Recipe not found.");
  }

  return response.json();
}

export async function createRecipe(recipeData) {
  const response = await fetch(`${RECIPES_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });

  if (!response.ok) {
    throw new Error("Failed to create recipe.");
  }

  return response.json();
}