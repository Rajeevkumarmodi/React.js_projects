import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { Link } from "react-router-dom";
function OrderSuccess() {
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center">
      <div className=" px-10">
        <h1 className=" text-4xl text-green-600 font-bold">
          🎊 Congratulation 🎉
        </h1>
        <h2 className=" text-2xl text-green-500">
          You have successfully 👍 purchased the product👍
        </h2>
      </div>
      <div className="mt-6 flex items-center gap-5">
        <Link
          to="/"
          className="flex items-center gap-1 text-white font-bold bg-blue-600 px-6 py-1 rounded-lg"
        >
          <FaArrowLeftLong /> Home
        </Link>
        <Link
          to="/myorder"
          className="flex items-center gap-1 text-white font-bold bg-orange-600 px-6 py-1 rounded-lg"
        >
          <FaAmbulance />
          My Order
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
