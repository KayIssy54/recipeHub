function ReviewCard({ review }) {
  return (
    <div style={styles.card}>

      <div style={styles.header}>
        <h4>
          {review.user?.first_name} {review.user?.last_name}
        </h4>

        <span>
          ⭐ {review.rating}/5
        </span>
      </div>


      <p style={styles.comment}>
        {review.comment}
      </p>


      <small style={styles.date}>
        {new Date(review.created_at).toLocaleDateString()}
      </small>

    </div>
  );
}


const styles = {

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    marginBottom: "15px",
  },


  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },


  comment: {
    marginTop: "15px",
    color: "#555",
    lineHeight: "1.5",
  },


  date: {
    color: "#999",
  }

};


export default ReviewCard;