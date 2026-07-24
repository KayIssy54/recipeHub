import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Alice',
      rating: 5,
      comment: 'Absolutely delicious! Easy to follow recipe.',
    },
    {
      id: 2,
      name: 'Brian',
      rating: 4,
      comment: 'Great recipe. I added extra garlic and loved it.',
    },
  ]);

  const [name, setName] = useState('');
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: reviews.length + 1,
      name,
      rating: Number(rating),
      comment,
    };

    setReviews([...reviews, newReview]);

    alert('Review added successfully!');

    setName('');
    setRating('5');
    setComment('');
  };

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <h1 style={styles.title}>Recipe Reviews</h1>

        <div style={styles.summary}>
          <h2>Overall Rating</h2>

          <p style={styles.rating}>
            ⭐ {averageRating.toFixed(1)} / 5
          </p>

          <p>{reviews.length} Reviews</p>
        </div>

        <div style={styles.reviewSection}>
          <h2>User Reviews</h2>

          {reviews.map((review) => (
            <div key={review.id} style={styles.card}>
              <h3>{review.name}</h3>

              <p style={styles.stars}>
                {'⭐'.repeat(review.rating)}
              </p>

              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <div style={styles.formSection}>
          <h2>Write a Review</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              style={styles.input}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>

            <textarea
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={styles.textarea}
              rows="5"
              required
            />

            <button type="submit" style={styles.button}>
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

  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },

  summary: {
    background: '#fff',
    padding: '25px',
    borderRadius: '16px',
    textAlign: 'center',
    marginBottom: '30px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },

  rating: {
    fontSize: '36px',
    color: '#FF9800',
    fontWeight: 'bold',
    margin: '10px 0',
  },

  reviewSection: {
    marginBottom: '40px',
  },

  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    marginBottom: '20px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },

  stars: {
    color: '#FF9800',
    fontSize: '18px',
    margin: '10px 0',
  },

  formSection: {
    background: '#fff',
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },

  textarea: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
    resize: 'vertical',
  },

  button: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
};

export default ReviewsPage;