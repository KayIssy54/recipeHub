import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import recipes from '../data/recipes';

function RecipeDetailsPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  const [saved, setSaved] = useState(false);

  if (!recipe) {
    return <h2 style={{ padding: '40px' }}>Recipe not found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        {/* Large recipe image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          style={styles.heroImage}
        />

        {/* Title and save button */}
        <div style={styles.header}>
          <div>
            <span style={styles.category}>{recipe.category}</span>
            <h1 style={styles.title}>{recipe.title}</h1>
            <p style={styles.rating}>⭐ {recipe.rating} / 5</p>
          </div>

          <button
            onClick={() => setSaved(!saved)}
            style={{
              ...styles.saveBtn,
              background: saved ? '#4CAF50' : '#FF9800',
            }}
          >
            {saved ? 'Saved ✓' : 'Save Recipe'}
          </button>
        </div>

        {/* Recipe stats */}
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <h4>Preparation</h4>
            <p>{recipe.prepTime}</p>
          </div>

          <div style={styles.statCard}>
            <h4>Cooking</h4>
            <p>{recipe.cookTime}</p>
          </div>

          <div style={styles.statCard}>
            <h4>Servings</h4>
            <p>{recipe.servings} people</p>
          </div>
        </div>

        <div style={styles.content}>
          {/* Ingredients */}
          <div style={styles.section}>
            <h2>Ingredients</h2>

            <ul style={styles.list}>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div style={styles.section}>
            <h2>Cooking Instructions</h2>

            <ol style={styles.list}>
              {recipe.instructions.map((step, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Reviews */}
        <div style={styles.section}>
          <h2>Reviews</h2>

          {recipe.reviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <h4>{review.user}</h4>
              <p>{review.comment}</p>
            </div>
          ))}

          <button style={styles.reviewBtn}>Write Review</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    padding: '40px 0',
  },

  heroImage: {
    width: '100%',
    height: '420px',
    objectFit: 'cover',
    borderRadius: '20px',
    marginBottom: '30px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },

  category: {
    background: '#F8F9FA',
    color: '#4CAF50',
    padding: '8px 14px',
    borderRadius: '999px',
    fontWeight: '600',
  },

  title: {
    fontSize: '42px',
    margin: '16px 0 8px',
  },

  rating: {
    fontSize: '18px',
    color: '#666',
  },

  saveBtn: {
    color: '#fff',
    padding: '14px 22px',
    borderRadius: '12px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },

  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },

  statCard: {
    background: '#F8F9FA',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'center',
  },

  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginBottom: '40px',
  },

  section: {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
  },

  list: {
    marginTop: '16px',
    paddingLeft: '20px',
    lineHeight: '1.8',
  },

  reviewCard: {
    background: '#F8F9FA',
    padding: '16px',
    borderRadius: '12px',
    marginTop: '16px',
  },

  reviewBtn: {
    marginTop: '24px',
    background: '#4CAF50',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '12px',
    fontWeight: '600',
  },
};

export default RecipeDetailsPage;