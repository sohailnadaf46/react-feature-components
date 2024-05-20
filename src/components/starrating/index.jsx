import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  

  function handleClick(index) {
    setRating(index);
    
  }

  function handleMouseHover(index) {
   setHover(index);
  }

  function handleMouseMove() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "rating"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseMove(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
