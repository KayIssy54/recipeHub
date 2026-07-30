import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getFavorites, removeFavorite } from "../services/favorites";

function FavoritesPage() {
  const [search, setSearch] = useState('');

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

  async function loadFavorites(){

    try {

      const data = await getFavorites();

      setFavorites(data);

    } catch(error){

      console.error(error);
      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  loadFavorites();

}, []);

  const handleRemoveFavorite = async (recipeId) => {

  try {

    await removeFavorite(recipeId);

    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (recipe) => recipe.recipe_id !== recipeId
      )
    );

    alert("Removed from favorites");

  } catch(error) {

    console.error(error);
    alert(error.message);

  }

};


  const filteredFavorites = favorites.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <h1 style={styles.title}>My Favorite Recipes</h1>

        <input
          type="text"
          placeholder="Search favorites..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {filteredFavorites.length === 0 ? (
          <div style={styles.empty}>
            <h2>No favorite recipes found.</h2>
            <p>Save recipes to see them here.</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {filteredFavorites.map((recipe) => (
              <div key={recipe.recipe_id} style={styles.card}>
                <img
                  src={recipe.image_url
                    ? `http://127.0.0.1:5000/uploads/${recipe.image_url}`
                    : "https://via.placeholder.com/400x250" 
                  }
                  alt={recipe.title}
                  style={styles.image}
                />

                <div style={styles.content}>
                  <p style={styles.category}>{recipe.category?.category_name}</p>

                  <h3>{recipe.title}</h3>

                  <button
                    onClick={() => handleRemoveFavorite(recipe.recipe_id)}
                    style={styles.removeBtn}
                  >
                    Remove Favorite
                  </button>
                </div>
              </div>
            ))}
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

  title: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333',
  },

  search: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    marginBottom: '30px',
    fontSize: '16px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },

  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
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
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: '10px',
  },

  removeBtn: {
    marginTop: '16px',
    width: '100%',
    padding: '12px',
    background: '#E53935',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
  },

  empty: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#666',
  },
};

export default FavoritesPage;