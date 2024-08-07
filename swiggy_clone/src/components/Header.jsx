import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { contexProvider } from "../contex/SwiggyContex";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const { cartData } = contexProvider();
  return (
    <div className="select-none w-full px-10 md:px-20 h-20 top-0 flex justify-between items-center sticky shadow-lg bg-white z-[1001]">
      <div className="ml-6  flex items-center">
        <Link to="/" onClick={() => setIsOpenMenu(true)}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex gap-4 items-center md:hidden visible">
        <div>
          <Link
            onClick={() => setIsOpenMenu(true)}
            to="/cart"
            className="flex relative items-center hover:text-orange-500 gap-2 font-semibold"
          >
            <FaCartPlus className="text-xl" />
            Cart
            <span className="absolute bg-red-600 rounded-full h-[20px] w-[20px] -pt-1 text-center text-sm text-white top-[-18px] right-7">
              {cartData.length}
            </span>
          </Link>
        </div>
        {isOpenMenu ? (
          <IoMdMenu
            onClick={() => setIsOpenMenu(false)}
            className="text-4xl cursor-pointer"
          />
        ) : (
          <IoClose
            onClick={() => setIsOpenMenu(true)}
            className="text-4xl cursor-pointer"
          />
        )}
      </div>

      {/* menu */}

      <ul
        className={`flex  md:items-center items-start bg-gray-50 md:bg-white gap-7 duration-200 md:flex-row flex-col md:static fixed top-20 md:w-auto w-[300px] h-full md:shadow-none shadow-md md:p-0 py-6 ${
          isOpenMenu ? "right-[-320px]" : "right-0"
        }`}
      >
        <li className="md:border-0 border-b-[1px] md:py-0 py-2 md:px-0 px-6">
          <Link
            onClick={() => setIsOpenMenu(true)}
            className="flex items-center hover:text-orange-500 gap-2 font-semibold"
            to="/search"
          >
            <IoIosSearch className="text-xl" />
            Search
          </Link>
        </li>
        <li className="md:border-0 border-b-[1px] md:py-0 py-2 md:px-0 px-6">
          <Link
            onClick={() => setIsOpenMenu(true)}
            to="/offer"
            className="flex items-center hover:text-orange-500 gap-2 font-semibold"
          >
            <BiSolidOffer className="text-xl" />
            Offers
          </Link>
        </li>
        <li className="md:border-0 border-b-[1px] md:py-0 py-2 md:px-0 px-6">
          <Link
            onClick={() => setIsOpenMenu(true)}
            to="/help"
            className="flex items-center hover:text-orange-500 gap-2 font-semibold"
          >
            <MdHelpOutline className="text-xl" /> Help
          </Link>
        </li>
        <li className="md:border-0 border-b-[1px] md:py-0 py-2 md:px-0 px-6">
          <Link
            onClick={() => setIsOpenMenu(true)}
            className="flex items-center hover:text-orange-500 gap-2 font-semibold"
          >
            <CiUser className="text-xl" />
            Sign In
          </Link>
        </li>
        <li className="md:border-0 border-b-[1px] md:py-0 py-2 md:px-0 px-6">
          <Link
            onClick={() => setIsOpenMenu(true)}
            to="/cart"
            className="flex relative items-center hover:text-orange-500 gap-2 font-semibold"
          >
            <FaCartPlus className="text-xl" />
            Cart
            <span className="absolute bg-red-600 rounded-full h-[20px] w-[20px] -pt-1 text-center text-sm text-white top-[-18px] right-7">
              {cartData.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
