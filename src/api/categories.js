import API_URL from "./api";
const CATEGORIES_URL = `${API_URL}/categories`;

export async function getCategories() {
  const response = await fetch(`${CATEGORIES_URL}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories.");
  }

  return response.json();
}