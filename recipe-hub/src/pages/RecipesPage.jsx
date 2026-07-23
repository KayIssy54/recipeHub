import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';

function RecipesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Healthy'];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <div style={styles.header}>
          <h1 style={styles.title}>Explore Recipes</h1>
          <p style={styles.subtitle}>
            Find delicious meals, desserts, and healthy dishes.
          </p>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {/* Category filters */}
        <div style={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.filterBtn,
                background:
                  selectedCategory === category ? '#4CAF50' : '#F8F9FA',
                color:
                  selectedCategory === category ? '#fff' : '#333',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe grid */}
        <div style={styles.grid}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found.</p>
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
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '42px',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#666',
    fontSize: '18px',
  },
  search: {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '24px',
  },
  filters: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  filterBtn: {
    padding: '10px 18px',
    borderRadius: '999px',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
};

export default RecipesPage;