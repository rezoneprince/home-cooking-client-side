import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { img, name, body, price, rating } = product;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 w-full">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between ">
          <span className="">Price: ${price}</span>
          <span className="">Rating: {rating}</span>
        </div>
        <p className="">{body}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
