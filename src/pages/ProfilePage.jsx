import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getRecipes } from "../services/recipes";
import { getFavorites } from "../services/favorites";
import { getMyReviews } from "../services/reviews";
import { getMyRecipes } from "../services/recipes";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user")) || {
  first_name: "",
  last_name: "",
  email: "",
  profile_image: "",
};
    
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const handleEditProfile = () => {
    alert('Edit Profile feature will be connected to the backend later.');
  };
  const navigate = useNavigate();

   function handleLogout() {
   localStorage.removeItem("access_token");
   localStorage.removeItem("user");

   navigate("/login");
  }
  /*
  useEffect(() => {
  async function loadProfileData() {
    try {
      const recipeData = await getMyRecipes();
      const favoriteData = await getFavorites();
      const reviewData = await getMyReviews();

      setRecipes(recipeData);
      setFavorites(favoriteData);
      setReviews(reviewData);
    } catch (error) {
      console.error(error);
    }
  }

  loadProfileData();
}, []);
*/

useEffect(() => {
  async function loadProfileData() {
    try {
      const recipeData = await getMyRecipes();
      console.log("MY RECIPES:", recipeData);

      const favoriteData = await getFavorites();
      console.log("FAVORITES:", favoriteData);

      const reviewData = await getMyReviews();
      console.log("REVIEWS:", reviewData);

      setRecipes(recipeData);
      setFavorites(favoriteData);
      setReviews(reviewData);

    } catch (error) {
      console.error("PROFILE ERROR:", error);
    }
  }

  loadProfileData();
}, []);
  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <div style={styles.profileCard}>
          <img
            src={user.profileImage}
            alt={`${user.first_name} ${user.last_name}`}
            style={styles.image}
          />

          <h1 style={styles.name}>{user.first_name} {user.last_name}</h1>

          <p style={styles.email}>{user.email}</p>

          <h2 style={styles.heading}>My Statistics</h2>

          <div style={styles.stats}>

            <Link to="/my-recipes" style={styles.statLink}>
              <div style={styles.statCard}>
                <h2>{recipes.length}</h2>
                <p>Recipes Created</p>
              </div>
            </Link>

            <Link to="/favorites" style={styles.statLink}>
              <div style={styles.statCard}>
                <h2>{favorites.length}</h2>
                <p>Favorite Recipes</p>
              </div>
            </Link>

            

          </div>

          <div style={styles.buttons}>
            <button
              onClick={handleEditProfile}
              style={styles.editBtn}
            >
              Edit Profile
            </button>

            <button
              onClick={handleLogout}
              style={styles.logoutBtn}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    padding: '50px 0',
    background: '#F8F9FA',
    minHeight: '100vh',
  },

  profileCard: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    padding: '40px',
    borderRadius: '18px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },

  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #4CAF50',
    marginBottom: '20px',
  },

  name: {
    color: '#333',
    marginBottom: '8px',
  },

  email: {
    color: '#666',
    fontSize: '17px',
    marginBottom: '35px',
  },

  heading: {
    marginBottom: '25px',
    color: '#333',
  },

  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },

  statLink: {
    textDecoration: 'none',
    color: 'inherit',
  },

  statCard: {
    background: '#F8F9FA',
    padding: '25px',
    borderRadius: '14px',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  editBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },

  logoutBtn: {
    background: '#E53935',
    color: '#fff',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
};

export default ProfilePage;
