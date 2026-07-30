import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getCategories } from "../services/categories";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  async function loadCategories() {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch(error) {
      console.log(error.message);
    }
  }

  loadCategories();
}, []);
  
  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        {/* Page header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Recipe Categories</h1>
          <p style={styles.subtitle}>
            Browse recipes by category and discover your next favorite meal.
          </p>
        </div>

        {/* Category grid */}
        <div style={styles.grid}>
        {categories.map((category) => (
  <Link
    key={category.id}
    to="/recipes"
    style={styles.card}
  >

    <div style={styles.content}>
      <h3 style={styles.name}>
        {category.category_name}
      </h3>

      <span style={styles.link}>
        View Recipes →
      </span>
    </div>

  </Link>
))}
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
    marginBottom: '40px',
  },

  title: {
    fontSize: '42px',
    marginBottom: '12px',
  },

  subtitle: {
    color: '#666',
    fontSize: '18px',
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
    transition: 'transform 0.2s ease',
  },

  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },

  content: {
    padding: '20px',
  },

  name: {
    fontSize: '24px',
    marginBottom: '8px',
  },

  count: {
    color: '#666',
    marginBottom: '16px',
  },

  link: {
    color: '#4CAF50',
    fontWeight: '600',
  },
};

export default CategoriesPage;