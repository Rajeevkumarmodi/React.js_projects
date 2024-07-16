import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

function ProductCard({
  title,
  price,
  discountPercentage,
  rating,
  thumbnail,
  id,
  category,
}) {
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
    <div className="flex w-[300px]  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        to={`/product/${id}`}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className=" hover:scale-105 duration-500"
          src={thumbnail}
          alt={title}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discountPercentage}% OFF
        </span>
      </Link>
      <div className="mt-4 px-3 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              ${(price - (price * discountPercentage) / 100).toFixed(1)}
            </span>
            <span className="pl-1 text-sm text-slate-900 line-through">
              {price}
            </span>
          </p>
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <IoIosStarHalf />
            <span className="mr-2 ml-3 rounded text-black font-bold bg-yellow-200 px-2.5 py-0.5 text-xs">
              {rating}
            </span>
          </div>
        </div>
        <button
          onClick={() =>
            handelAddToCart(
              id,
              title,
              price,
              rating,
              discountPercentage,
              thumbnail,
              category
            )
          }
          className=" w-full flex gap-1 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
        >
          <FaCartPlus className="text-xl" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
