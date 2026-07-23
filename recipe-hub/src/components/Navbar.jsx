import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Recipe Hub</div>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" style={styles.signup}>

          Sign Up
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #eee',
    background: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#4CAF50',
  },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  signup: {
    background: '#4CAF50',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: '12px',
  },
};

export default Navbar;