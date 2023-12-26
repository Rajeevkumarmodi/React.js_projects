import React from "react";
import { NavLink } from "react-router-dom";

function Mobilemanu({ setIsOpenManu }) {
  function handelLogout() {
    dispatch(removeUser());
    localStorage.removeItem("auth-token");
  }

  return (
    <div className="rounded-l-lg h-[250px] z-30 md:hidden flex flex-col gap-5 items-center justify-center w-[200px] bg-gray-300">
      <button
        onClick={handelLogout}
        className="  bg-red-700 text-white px-4 py-1 rounded-lg"
      >
        Logout
      </button>
      <NavLink
        to="/"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700  rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
      >
        Shop
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700   rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
      >
        About
      </NavLink>
    </div>
  );
}

export default Mobilemanu;
