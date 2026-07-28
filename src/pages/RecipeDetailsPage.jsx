import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { getRecipe } from '../api/recipes';

function RecipeDetailsPage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadRecipe() {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadRecipe();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2>Loading recipe...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2>{error}</h2>
        </div>
      </>
    );
  }

  if (!recipe) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2>Recipe not found.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <img
          src={
            recipe.image_url||
            'https://via.placeholder.com/900x450?text=Recipe+Image'
          }
          alt={recipe.title}
          style={styles.heroImage}
        />

        <div style={styles.header}>
          <div>
            <span style={styles.category}>
              {recipe.category?.category_name}
            </span>

            <h1 style={styles.title}>
              {recipe.title}
            </h1>

            <p style={styles.rating}>
              By {recipe.author?.first_name} {recipe.author?.last_name}
            </p>
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

        <div style={styles.stats}>
          <div style={styles.statCard}>
            <h4>Preparation</h4>
            <p>{recipe.prep_time} mins</p>
          </div>

          <div style={styles.statCard}>
            <h4>Cooking</h4>
            <p>{recipe.cook_time} mins</p>
          </div>

          <div style={styles.statCard}>
            <h4>Servings</h4>
            <p>{recipe.servings}</p>
          </div>
        </div>

        <div style={styles.section}>
          <h2>Description</h2>
          <p>{recipe.description}</p>
        </div>

        <div style={styles.section}>
          <h2>Ingredients</h2>

          {recipe.recipe_ingredients?.length ? (
            <ul style={styles.list}>
              {recipe.recipe_ingredients.map((ingredient) => (
                <li key={ingredient.recipe_ingredient_id}>
                  {ingredient.quantity} {ingredient.unit}{' '}
                  {ingredient.ingredient?.ingredient_name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No ingredients added yet.</p>
          )}
        </div>

        <div style={styles.section}>
          <h2>Instructions</h2>

          {recipe.instructions?.length ? (
            <ol style={styles.list}>
              {recipe.instructions.map((instruction) => (
                <li key={instruction.instruction_id}>
                  {instruction.step_description}
                </li>
              ))}
            </ol>
          ) : (
            <p>No instructions added yet.</p>
          )}
        </div>

        <div style={styles.section}>
          <h2>Reviews</h2>

          {recipe.reviews?.length ? (
            recipe.reviews.map((review) => (
              <div
                key={review.review_id}
                style={styles.reviewCard}
              >
                <h4>{review.user?.first_name}</h4>

                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
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
    margin: '15px 0',
  },

  rating: {
    color: '#666',
  },

  saveBtn: {
    color: '#fff',
    padding: '14px 22px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
  },

  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))',
    gap: '20px',
    marginBottom: '40px',
  },

  statCard: {
    background: '#F8F9FA',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'center',
  },

  section: {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    marginBottom: '30px',
  },

  list: {
    paddingLeft: '20px',
    lineHeight: '2',
  },

  reviewCard: {
    background: '#F8F9FA',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '15px',
  },
};

export default RecipeDetailsPage;