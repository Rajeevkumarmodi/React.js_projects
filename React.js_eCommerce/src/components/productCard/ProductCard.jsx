import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

function ProductCard() {
  return (
    <div className="flex w-[300px]  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className=" hover:scale-105 duration-500"
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </Link>
      <div className="mt-4 px-3 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            Nike Air MX Super 2500 - Red
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">$449</span>
            <span className="pl-1 text-sm text-slate-900 line-through">
              $699
            </span>
          </p>
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <IoIosStarHalf />
            <span className="mr-2 ml-3 rounded text-black font-bold bg-yellow-200 px-2.5 py-0.5 text-xs">
              4.5
            </span>
          </div>
        </div>
        <button className=" w-full flex gap-1 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
          <FaCartPlus className="text-xl" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
