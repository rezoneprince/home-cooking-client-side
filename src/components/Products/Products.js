import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <div className="text-center flex flex-col gap-1">
          <p className="text-2xl">Popular Menu</p>
          <h4 className="text-3xl font-semibold">
            Some Popular Delicious Foods
          </h4>
          <p className="mt-5">
            Objectively pontificate quality models before intuitive information.{" "}
            <br />
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary">View All menus</button>
      </div>
    </div>
  );
};

export default Products;
