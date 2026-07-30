import { useState } from "react";

function StarRating({ rating, setRating }) {

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "35px",
            cursor: "pointer",
            color: star <= rating ? "#FF9800" : "#ccc"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;