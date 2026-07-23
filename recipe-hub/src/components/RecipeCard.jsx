import { useState } from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  // state to track if the recipe is saved
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved); // toggle between true and false
  };

  return (
    <div style={styles.card}>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={styles.image}
      />

      <div style={styles.content}>
        <div style={styles.topRow}>
          <span style={styles.category}>{recipe.category}</span>

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

        <div style={styles.info}>
          <span>⭐ {recipe.rating}</span>
          <span>⏱ {recipe.time}</span>
        </div>

        <Link to={`/recipes/${recipe.id}`} style={styles.button}>
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
    marginBottom: '12px',
    fontSize: '22px',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '18px',
    color: '#666',
  },
  button: {
    display: 'inline-block',
    background: '#4CAF50',
    color: '#fff',
    padding: '12px 18px',
    borderRadius: '12px',
    fontWeight: '600',
  },
};

export default RecipeCard;