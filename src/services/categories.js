import API_URL from "../api/api";

export async function getCategories() {
  const response = await fetch(`${API_URL}api/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

