import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = () => {
  return (
    <div id="review1" className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/80/80/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center ">Name</h2>
          <p className="text-primary">Rating: 4</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            optio, quasi nesciunt officiis sunt officia a nisi possimus vitae,
            velit odit molestiae explicabo ex reiciendis. Cumque nesciunt
            tempora repellat autem?{" "}
            <Link className="text-primary" to="">
              See More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
