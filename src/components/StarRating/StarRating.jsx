import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <span
            key={index}
            className={currentRating <= rating ? "filled-star" : "empty-star"}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
