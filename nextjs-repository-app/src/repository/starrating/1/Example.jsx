import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';

const Example = ({totalStars }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <p>{rating} out of {totalStars}</p>
    </>
  );
};

export default Example;
