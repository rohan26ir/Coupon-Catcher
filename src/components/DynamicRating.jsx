import React from "react";

const DynamicRating = () => {
  return (
    <div>
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
        />
      </div>
    </div>
  );
};

export default DynamicRating;