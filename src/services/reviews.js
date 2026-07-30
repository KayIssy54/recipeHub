import API_URL from "../api/api";
import { logout } from "./authHelpers";

export async function getReviews(recipeId){

  const response = await fetch(
    `${API_URL}/reviews/recipe/${recipeId}`
  );
 

  const data = await response.json();

  if(!response.ok){
    throw new Error("Failed to fetch reviews");
  }

  return data;
}



export async function addReview(recipeId, review){

  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/reviews/${recipeId}`,
    {
      method: "POST",

      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      },

      body: JSON.stringify(review)
    }
  );

  if (response.status === 401) {
  logout();
  return;
}

  const data = await response.json();


  if(!response.ok){
    throw new Error(data.error || "Failed to add review");
  }


  return data;
}

export async function getMyReviews() {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/reviews/my`,
    {
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
    throw new Error(data.error || "Failed to fetch your reviews");
  }

  return data;
}