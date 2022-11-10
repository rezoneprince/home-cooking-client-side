import React from "react";

const SliderItem = () => {
  return (
    <div id="item1" className="carousel-item w-full">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/800/200/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
