import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{product.name}</h2>
        <div className="flex justify-between items-center">
          <p className="">Price: ${product.price}</p>
          <p className="">Rating: {product.rating}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
