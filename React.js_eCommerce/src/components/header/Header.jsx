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

import "./header.css";

function Header() {
  const [isOpenManu, setIsOpenManu] = useState(false);

  // return (
  //   <div className="w-full">
  //     <div className="sticky flex items-center justify-between md:px-[80px] px-[30px] h-[50px] border-b-2 border-gray-400">
  //       <Link
  //         to="/"
  //         className="flex items-center gap-2 font-bodyFont text-xl  font-bold"
  //       >
  //         <img className="w-[40px]" src={pngLogo} alt="" />
  //         <div className="flex gap-1">
  //           <p className="text-red-700">Shoping</p>
  //           <p className="text-blue-600">Karo</p>
  //         </div>
  //       </Link>
  //       <div className="flex gap-8 relative items-center">
  //         <div>
  //           <button className="border-2 border-gray-500 text-red-500 px-4 font-bold rounded-lg hover:bg-blue-700 hover:text-white">
  //             Home
  //           </button>
  //         </div>

  //         <VscThreeBars />
  //         <Link to="/cart">
  //           <HiOutlineShoppingBag className="text-3xl" />
  //           <p className="absolute text-orange-500 top-[-13px] left-[130px] font-bold">
  //             13
  //           </p>
  //         </Link>
  //         {/* <div>
  //           <RxAvatar
  //             onClick={handelMyManu}
  //             className="text-3xl cursor-pointer"
  //           />
  //         </div> */}
  //         <div>
  //           <button className="bg-blue-600 py-1 px-4 text-white font-bold rounded-lg">
  //             Login
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     {isOpenMyMamu && (
  //       <div className=" absolute right-0 top-10 w-[150px] rounded-lg  p-3 shadow-lg shadow-gray-400">
  //         <Link
  //           to="/order"
  //           onClick={handelMyManu}
  //           className="flex items-center gap-2 font-bodyFont pt-2"
  //         >
  //           <LiaAmbulanceSolid className="text-2xl" />
  //           <p>My Order</p>
  //         </Link>
  //         <Link
  //           to="/cart"
  //           onClick={handelMyManu}
  //           className="flex items-center gap-2 font-bodyFont py-3"
  //         >
  //           <FaCartArrowDown className="text-2xl" />
  //           <p>My Cart</p>
  //         </Link>
  //         <Link
  //           to="/profile"
  //           onClick={handelMyManu}
  //           className="flex items-center gap-2 font-bodyFont "
  //         >
  //           <RxAvatar className="text-2xl" />
  //           <p>My Profile</p>
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // );

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
          <div className="flex items-center gap-4 md:gap-6">
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
