import React from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <div>
      <div className="carousel carousel-center max-full p-4  space-x-4 bg-neutral rounded-box">
        <ReviewItem />
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#review1" className="btn btn-xs">
          1
        </a>
      </div>
    </div>
  );
};

export default Reviews;
