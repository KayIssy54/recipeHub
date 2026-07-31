import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from "../services/favorites";

function RecipeCard({ recipe }) {
  console.log("RECIPE CARD:", recipe);

  const [saved, setSaved] = useState(false);

     const handleSave = async () => {
       try {

         if (!saved) {

         await addFavorite(recipe.recipe_id);

         setSaved(true);

         alert("Recipe saved!");

       } else {

         await removeFavorite(recipe.recipe_id);

         setSaved(false);

         alert("Recipe removed!");

       }

       } catch(error) {
         console.error(error);
         alert(error.message);
       }
  };

  return (
    <div style={styles.card}>
      <img
        src={
          recipe.image_url 
           ? recipe.image_url
      :    "https://via.placeholder.com/400x250?text=Recipe+Image"
        }
        alt={recipe.title}
        style={styles.image}
      />

      <div style={styles.content}>
        <div style={styles.topRow}>
          <span style={styles.category}>
            {recipe.category?.category_name}
          </span>

          <button
            style={{
              ...styles.favoriteBtn,
              background: saved ? '#4CAF50' : '#FF9800',
            }}
            onClick={handleSave}
          >
            {saved ? 'Saved ✓' : 'Save'}
          </button>
        </div>

        <h3 style={styles.title}>{recipe.title}</h3>

        <p style={styles.description}>
          {recipe.description}
        </p>

        <div style={styles.info}>
          <span>
            👨‍🍳 {recipe.author?.first_name}
          </span>

          <span>
            ⏱ {recipe.prep_time + recipe.cook_time} mins
          </span>
        </div>

        <div style={styles.info}>
          <span>
            🍽 {recipe.servings} Servings
          </span>
        </div>

        <Link
          to={`/recipes/${recipe.recipe_id}`}
          style={styles.button}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease',
  },

  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },

  content: {
    padding: '20px',
  },

  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },

  category: {
    background: '#F8F9FA',
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '14px',
    color: '#4CAF50',
    fontWeight: '600',
  },

  favoriteBtn: {
    color: '#fff',
    padding: '8px 14px',
    borderRadius: '10px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },

  title: {
    marginBottom: '10px',
    fontSize: '22px',
  },

  description: {
    color: '#666',
    marginBottom: '15px',
    lineHeight: '1.5',
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    color: '#666',
    fontSize: '14px',
  },

  button: {
    display: 'inline-block',
    background: '#4CAF50',
    color: '#fff',
    padding: '12px 18px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    marginTop: '10px',
  },
};

export default RecipeCard;