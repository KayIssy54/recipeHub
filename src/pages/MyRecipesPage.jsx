import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getMyRecipes,deleteRecipe } from '../services/recipes';

function MyRecipesPage() {
  
  const [myRecipes, setMyRecipes] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await getMyRecipes();
        setMyRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  // Delete recipe
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) return;

    try {
      await deleteRecipe(id);

      setMyRecipes((currentRecipes)=>
        currentRecipes.filter((recipe) => recipe.recipe_id !== id)
      );

      alert("Recipe deleted successfully!");

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>My Recipes</h1>
            <p style={styles.subtitle}>
              Manage the recipes you have created.
            </p>
          </div>

          <Link to="/add-recipe" style={styles.addBtn}>
            + Add New Recipe
          </Link>
        </div>

        {/* Recipe Grid */}
        <div style={styles.grid}>
          {myRecipes.map((recipe) => (
            <div key={recipe.recipe_id} style={styles.card}>
              <img
                src={recipe.image_url
                   ? `http://127.0.0.1:5000/uploads/${recipe.image_url}`
      :            "https://via.placeholder.com/400x250?text=Recipe+Image"
                }
                alt={recipe.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <span style={styles.category}>{recipe.category?.category_name}</span>

                <h3 style={styles.recipeTitle}>{recipe.title}</h3>

                <div style={styles.actions}>
                  <Link
                    to={`/recipes/${recipe.recipe_id}/edit`}
                    style={styles.editBtn}
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(recipe.recipe_id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {myRecipes.length === 0 && (
          <div style={styles.emptyState}>
            <h2>No recipes yet</h2>
            <p>Start by adding your first recipe.</p>

            <Link to="/add-recipe" style={styles.emptyBtn}>
              Add Recipe
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    padding: '40px 0',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },

  title: {
    fontSize: '40px',
    marginBottom: '8px',
  },

  subtitle: {
    color: '#666',
    fontSize: '18px',
  },

  addBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px 20px',
    borderRadius: '12px',
    fontWeight: '600',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },

  card: {
    background: '#fff',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  },

  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },

  content: {
    padding: '20px',
  },

  category: {
    background: '#F8F9FA',
    color: '#4CAF50',
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: '600',
  },

  recipeTitle: {
    fontSize: '24px',
    margin: '16px 0',
  },

  actions: {
    display: 'flex',
    gap: '12px',
  },

  editBtn: {
    flex: 1,
    textAlign: 'center',
    background: '#FF9800',
    color: '#fff',
    padding: '12px',
    borderRadius: '10px',
    fontWeight: '600',
  },

  deleteBtn: {
    flex: 1,
    background: '#F44336',
    color: '#fff',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  },

  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
  },

  emptyBtn: {
    display: 'inline-block',
    marginTop: '20px',
    background: '#4CAF50',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '12px',
    fontWeight: '600',
  },
};

export default MyRecipesPage;