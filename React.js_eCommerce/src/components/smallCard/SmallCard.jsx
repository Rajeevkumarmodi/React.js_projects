import React from "react";
import { Link } from "react-router-dom";

function SmallCard({ data }) {
  return (
    <>
      {data &&
        data.map((product) => {
          return (
            <div
              key={product.id}
              className="md:w-[200px] w-[280px] bg-gray-200 p-3 rounded-lg hover:shadow-lg duration-300 cursor-pointer shadow-gray-500"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  className="rounded-lg h-[150px] w-full hover:scale-105 overflow-hidden duration-500"
                  src={product.thumbnail}
                  alt=""
                />
              </Link>
              <div className="mt-3 flex gap-2 ">
                <p className="text-green-600 font-bold rounded-lg">
                  -{product.discountPercentage}%
                </p>
                <p className="text-red-400">
                  <del>${product.price}</del>
                </p>
                <p className="font-bold text-lg ">
                  $
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </p>
              </div>
              <p className="font-bold py-2">
                {product.title.length > 20
                  ? product.title.slice(0, 20) + ".."
                  : product.title}
              </p>

              <div className="text-center pt-2">
                <button className="bg-blue-700 px-4 py-1 rounded-lg text-white font-bold hover:shadow-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default SmallCard;
