import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpenManu, setIsOpenManu] = useState(false);
  return (
    <div>
      <div className="overflow-x-hidden fixed top-0 flex justify-between items-center gap-10 bg-black w-[100%] px-[50px] py-2 z-10">
        <div>
          <Link to="/" className="text-white text-2xl font-bold">
            Blog<span className="text-red-600"> App</span>
          </Link>
        </div>

        {!isOpenManu && (
          <div className="hidden md:block md:flex duration-500 gap-5 text-white font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Servies</NavLink>
            <NavLink to="/about">Ablout</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
          </div>
        )}

        <div className="md:hidden">
          {isOpenManu ? (
            <IoClose
              onClick={() => setIsOpenManu(!isOpenManu)}
              className="text-white text-3xl cursor-pointer "
            />
          ) : (
            <FaBars
              onClick={() => setIsOpenManu(!isOpenManu)}
              className="text-white text-3xl cursor-pointer "
            />
          )}
        </div>
      </div>
      {isOpenManu && (
        <div className="fixed z-30 flex flex-col items-center justify-center gap-6 w-[200px] h-[300px] pt-3 bg-gray-600 text-white right-0 top-12 rounded-b-lg ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Servies</NavLink>
          <NavLink to="/blogs">Ablout</NavLink>
          <NavLink to="/contact">Blogs</NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
