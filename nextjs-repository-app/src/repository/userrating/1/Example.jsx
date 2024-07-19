import React, { useState } from "react";

const Example = ({totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  return (
    <>
     <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${
              rating >= starValue ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => handleClick(starValue)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        );
      })}
    </div>
    </>
  )
};

export default Example;
