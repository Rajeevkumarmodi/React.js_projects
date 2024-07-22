import React from "react";
import burgerImg from "../assets/burger-img.png";

function LoaderSkeleton() {
  return (
    <div className="h-96 bg-[#171a29] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="animate-spin absolute rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-300 mx-auto"></div>
        <img src={burgerImg} alt="ice-cream" className="w-11 mt-3" />
      </div>
      <div className="text-white text-xl font-bold mt-6">
        Looking for great food near you...
      </div>
    </div>
  );
}

export default LoaderSkeleton;
