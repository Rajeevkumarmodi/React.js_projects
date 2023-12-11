import React, { useState } from "react";

function Categories({ selected, setSelected }) {
  const categories = ["All", "AI", "Startups", "Tech", "Security", "Apps"];
  return (
    <div className="flex items-center justify-center py-3 md:py-5 gap-5">
      {categories.map((item, index) => {
        return (
          <p
            onClick={() => setSelected(item)}
            className={`cursor-pointer ${
              selected == item ? "text-orange-500 underline font-bold" : ""
            }`}
            key={index}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Categories;
