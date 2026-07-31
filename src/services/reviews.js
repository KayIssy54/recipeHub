import API_URL from "../api/api";
import { logout } from "./authHelpers";

export async function getReviews(recipeId){

  const response = await fetch(
    `${API_URL}/api/reviews/recipe/${recipeId}`
  );
 
  const text = await response.text();
  console.log("Review response:", text);
  

  if(!response.ok){
    throw new Error("Failed to fetch reviews");
  }

  return JSON.parse(text);
}



export async function addReview(recipeId, review){

  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/api/reviews/${recipeId}`,
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

  const text = await response.text();
  console.log("Add review response:", text);


  if(!response.ok){
    throw new Error(data.error || "Failed to add review");
  }


  return JSON.parse(text);
}

export async function getMyReviews() {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${API_URL}/api/reviews/my`,
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

  const data = JSON.parse(text);

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch your reviews");
  }

  return data;
}