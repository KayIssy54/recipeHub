import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FavoritesPage() {
  const [search, setSearch] = useState('');

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Creamy Pasta',
      category: 'Dinner',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
    },
    {
      id: 2,
      title: 'Pancakes',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600',
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'Healthy',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600',
    },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
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
              <div key={recipe.id} style={styles.card}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={styles.image}
                />

                <div style={styles.content}>
                  <p style={styles.category}>{recipe.category}</p>

                  <h3>{recipe.title}</h3>

                  <button
                    onClick={() => removeFavorite(recipe.id)}
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