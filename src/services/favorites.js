import API_URL from "../api/api";
import { logout } from "./authHelpers";

export async function addFavorite(recipeId) {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/api/favorites/${recipeId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 401) {
  logout();
  return;
}

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to add favorite");
  }

  return data;
}


export async function removeFavorite(recipeId) {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/api/favorites/${recipeId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

if (response.status === 401) {
  logout();
  return;
}

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to remove favorite");
  }

  return data;
}

export async function getFavorites() {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/api/favorites/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 401) {
  logout();
  return;
}


  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.error || "Failed to load favorites");
  }


  return data;
}