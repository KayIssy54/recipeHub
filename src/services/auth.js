const API_URL = "http://127.0.0.1:5000";

export async function register(userData) {

  const response = await fetch(
    `${API_URL}/api/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );


  const data = await response.json();


  if (!response.ok) {

    throw new Error(
      data.message || "Registration failed"
    );

  }


  return data;

}

