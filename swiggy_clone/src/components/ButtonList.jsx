import React from "react";

const ButtonList = () => {
  const buttons = [
    "Filter",
    "Sort By",
    "Fats Delivery",
    "New to Swiggy",
    "Ratting 4.0+",
    "Pure Veg",
    "Rs. 300-Rs. 600",
    "Less then 300",
  ];
  return (
    <div className="flex items-center flex-wrap">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white border border-gray-300 m-2 px-3 py-2  max-w-max shadow-md transition duration-100 ease-in"
        >
          <p className="text-sm font-extralight cursor-pointer">{button}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
