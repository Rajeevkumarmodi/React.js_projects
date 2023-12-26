import React from "react";
import { NavLink } from "react-router-dom";

function SmallManuButton({ buttonName, icon, to }) {
  return (
    <div>
      <NavLink
        to={to}
        className="flex items-center gap-2 md:text-xl text-base hover:shadow-md hover:shadow-gray-600 hover:rounded-lg px-1 py-1"
      >
        {icon}
        {buttonName}
      </NavLink>
    </div>
  );
}

export default SmallManuButton;
