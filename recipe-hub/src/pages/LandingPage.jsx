import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Navbar />

      <section style={styles.hero}>
        <div className="container" style={styles.heroContent}>
          <div>
            <h1 style={styles.title}>Discover Delicious Recipes</h1>
            <p style={styles.text}>
              Explore easy and tasty recipes, save your favorites,
              and share your own cooking creations.
            </p>

            <div style={styles.buttons}>
              <Link to="/recipes" style={styles.primaryBtn}>
                Explore Recipes
              </Link>

              <Link to="/add-recipe" style={styles.secondaryBtn}>
               Add Recipe
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
            alt="Food"
            style={styles.image}
          />
        </div>
      </section>

      <section className="container" style={styles.section}>
        <h2>Featured Recipes</h2>

        <div style={styles.cards}>
          <div style={styles.card}>Pasta Carbonara</div>
          <div style={styles.card}>Chicken Curry</div>
          <div style={styles.card}>Veggie Salad</div>
        </div>
      </section>

      <section
        className="container"
        style={{ ...styles.section, background: '#F8F9FA' }}
      >
        <h2>Popular Categories</h2>

        <div style={styles.cards}>
          <div style={styles.card}>Breakfast</div>
          <div style={styles.card}>Lunch</div>
          <div style={styles.card}>Dinner</div>
          <div style={styles.card}>Desserts</div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  hero: {
    padding: '60px 0',
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
  },
  primaryBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px 24px',
    borderRadius: '12px',
  },
  secondaryBtn: {
    background: '#FF9800',
    color: '#fff',
    padding: '14px 24px',
    borderRadius: '12px',
  },
  image: {
    width: '500px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  section: {
    padding: '40px',
    borderRadius: '16px',
    marginTop: '40px',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    fontWeight: '600',
  },
};

export default LandingPage;