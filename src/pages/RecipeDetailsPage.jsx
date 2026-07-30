import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { getRecipe } from '../services/recipes';
import { getReviews, addReview} from "../services/reviews";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";

function RecipeDetailsPage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {

  async function loadData() {

    try {

      // Get recipe details
      const recipeData = await getRecipe(id);
      setRecipe(recipeData);


      // Get reviews for this recipe
      const reviewData = await getReviews(id);
      console.log("REVIEWS:", reviewData);
      setReviews(reviewData);


    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  loadData();

}, [id]);

async function handleReviewSubmit(e) {
  e.preventDefault();

  try {

    await addReview(id, {
      rating: rating,
      comment: comment
    });

    alert("Review added successfully!");

    // clear form
    setRating(0);
    setComment("");

    // refresh reviews
    const updatedReviews = await getReviews(id);
    setReviews(updatedReviews);

  } catch(error) {

    alert(error.message);

  }
}

if (loading) {
  return (
      <>
        <Navbar />
        <div className="container" style={styles.page}>
          <h2>Loading recipe...</h2>
        </div>
      </>
    );
  }


  if (error) {
    return (
      <>
        <Navbar />
        <div className="container" style={styles.page}>
          <h2>{error}</h2>
        </div>
      </>
    );
  }


  if (!recipe) {
    return (
      <>
        <Navbar />
        <div className="container" style={styles.page}>
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
            recipe.image_url
                ? `http://127.0.0.1:5000/uploads/${recipe.image_url}`
      :         "https://via.placeholder.com/900x450?text=Recipe+Image"
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

          {recipe.instructions_list?.length ? (
            <ol style={styles.list}>
              {recipe.instructions_list.map((instruction) => (
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

  {reviews.length ? (
    reviews.map((review) => (
      <ReviewCard
        key={review.review_id}
        review={review}
      />
    ))
  ) : (
    <p>No reviews yet.</p>
  )}

</div>

      <div style={styles.section}>
  <h2>Add Review</h2>

  <form onSubmit={handleReviewSubmit}>

    <StarRating 
      rating={rating}
      setRating={setRating}
    />

    <textarea
      placeholder="Write your review..."
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      style={{
        width: "100%",
        marginTop: "15px",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd"
      }}
    />

    <button 
      type="submit"
      style={{
        marginTop: "15px",
        background: "#4CAF50",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      Submit Review
    </button>

  </form>
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