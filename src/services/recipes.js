import API_URL from "../api/api";
import { logout } from "./authHelpers";

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

  const token = localStorage.getItem("access_token");
  console.log("Token:", token);

  const response = await fetch(`${RECIPES_URL}/`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(recipeData),
  });

  if (response.status === 401) {
  logout();
  return;
}

  const data = await response.json();


  if (!response.ok) {
    console.log("Backend error:", JSON.stringify(data, null, 2));
    throw new Error(data.error || "Failed to create recipe");
  }


  return data;
}

export async function getMyRecipes() {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/recipes/my-recipes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch recipes");
  }

  return data;
}

export async function updateRecipe(id, data) {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${RECIPES_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
  logout();
  return;
}

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to update recipe");
  }

  return result;
}

export async function deleteRecipe(id) {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${RECIPES_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
  logout();
  return;
}

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to delete recipe");
  }

  return result;
}

export async function uploadImage(file) {

  const formData = new FormData();

  formData.append("image", file);


  const response = await fetch(
    `${API_URL}/api/upload/`,
    {
      method: "POST",
      body: formData
    }
  );



  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.error ||"Failed to upload image");
  }


  return data;
}