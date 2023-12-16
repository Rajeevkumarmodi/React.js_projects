import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { FaCartArrowDown } from "react-icons/fa";
import pngLogo from "../../assets/pngLogo.png";
import { IoCloseSharp } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";
import AllCategories from "../allCategories/AllCategories";

import "./header.css";

function Header() {
  const [isOpenManu, setIsOpenManu] = useState(false);
  const [isCategoryManuOpen, setIsCategoryManuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("All");

  return (
    <div className="w-full">
      <div className="sticky top-0 ">
        <div className="flex items-center justify-between md:px-[80px] px-[10px] h-[50px] bg-white border-b-2 border-gray-400">
          <div>
            <Link
              to="/"
              className="flex items-center gap-1 md:gap-2 font-bodyFont md:text-xl text-sm  font-bold"
            >
              <img className="md:w-[40px] w-[30px]" src={pngLogo} alt="" />
              <div className="flex gap-1">
                <p className="text-red-700">Shoping</p>
                <p className="text-blue-600">Karo</p>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <NavLink
              to="/"
              className=" text-gray-700 hover:border-2 hover:duration-200 hover:border-orange-500 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className=" text-gray-700 hover:border-2 hover:border-orange-500 hover:duration-200 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className=" text-gray-700 hover:border-2 hover:duration-200 hover:border-orange-500 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
            >
              About
            </NavLink>
          </div>
          <div className=" flex items-center gap-4 md:gap-6">
            <Link to="/cart" className="flex gap-3 items-center relative">
              <HiOutlineShoppingBag className="text-3xl" />
              <p className="font-bold hidden md:block">Cart</p>
              <p className="absolute font-bold text-orange-500 top-[-10px] left-[25px]">
                0
              </p>
            </Link>
            <Link
              to="/login"
              className="bg-gray-500 text-white py-1 md:px-5 px-3 rounded-lg "
            >
              Login
            </Link>
            {/* <RxAvatar className="text-3xl cursor-pointer" /> */}
            {isOpenManu ? (
              <IoClose
                onClick={() => setIsOpenManu(!isOpenManu)}
                className="md:hidden  text-3xl cursor-pointer"
              />
            ) : (
              <VscThreeBars
                onClick={() => setIsOpenManu(!isOpenManu)}
                className="md:hidden  text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* filter and search */}

        <div className=" bg-gray-100 flex md:flex-row flex-col items-center justify-center md:gap-10 gap-3 py-4">
          <div className="relative flex items-center gap-2 cursor-pointer">
            <HiOutlineBars4
              onClick={() => setIsCategoryManuOpen(!isCategoryManuOpen)}
              className="text-2xl"
            />
            <p
              onClick={() => setIsCategoryManuOpen(!isCategoryManuOpen)}
              className=" font-bold"
            >
              Filter by Category
            </p>
            {isCategoryManuOpen && (
              <div className="absolute md:top-[30px] top-[20px] md:left-[-80px] left-[-50px]  z-10">
                <AllCategories
                  setIsCategoryManuOpen={setIsCategoryManuOpen}
                  isCategoryManuOpen={isCategoryManuOpen}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
              </div>
            )}
          </div>
          <div className=" flex items-center relative">
            <input
              className="border-2 border-gray-400 border-r-0 rounded-l-lg outline-none px-2  "
              type="text"
            />
            <div className=" bg-blue-600 p-[6px] rounded-r-lg ">
              <FaSearch className="text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile manu */}

      {isOpenManu && (
        <div className="md:hidden  fixed  right-0 flex flex-col gap-5 items-center justify-center w-[200px] h-full bg-gray-300">
          <NavLink
            to="/"
            onClick={() => setIsOpenManu(false)}
            className=" text-gray-700 hover:border-2 hover:duration-200 hover:border-orange-500 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsOpenManu(false)}
            className=" text-gray-700 hover:border-2 hover:border-orange-500 hover:duration-200 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpenManu(false)}
            className=" text-gray-700 hover:border-2 hover:duration-200 hover:border-orange-500 rounded-lg font-bodyFont px-2 ml-2 font-bold rounded-l"
          >
            About
          </NavLink>
        </div>
      )}
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default Header;
