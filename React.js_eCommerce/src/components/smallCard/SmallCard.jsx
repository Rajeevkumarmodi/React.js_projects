import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";

function SmallCard({ data }) {
  const dispatch = useDispatch();

  function handelAddToCart(
    id,
    title,
    price,
    rating,
    discountPercentage,
    thumbnail,
    category
  ) {
    dispatch(
      addToCart({
        id,
        title,
        price,
        discountPercentage,
        rating,
        category,
        thumbnail,
        quentity: 1,
      })
    );
    toast.success(title + " is added");
  }

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
                <p className="font-semibold text-base ">
                  $
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </p>
              </div>
              <p className="font-bold py-2">
                {product.title.length > 15
                  ? product.title.slice(0, 15) + ".."
                  : product.title}
              </p>

              <div className="text-center pt-2">
                <button
                  onClick={() =>
                    handelAddToCart(
                      product.id,
                      product.title,
                      product.price,
                      product.rating,
                      product.discountPercentage,
                      product.thumbnail,
                      product.category
                    )
                  }
                  className="flex items-center  gap-1 bg-blue-700 px-4 py-1 rounded-lg text-white font-bold hover:shadow-lg"
                >
                  <FaCartPlus />
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      <Toaster />
    </>
  );
}

export default SmallCard;
