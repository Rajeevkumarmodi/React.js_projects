import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { FaCartArrowDown } from "react-icons/fa";
import pngLogo from "../../assets/pngLogo.png";
import { IoCloseSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { VscThreeBars } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";
import AllCategories from "../allCategories/AllCategories";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/cartSlice";
import "./header.css";
import SmallManu from "../smallManu/SmallManu";
import Mobilemanu from "../mobileManu/Mobilemanu";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.allCartData.userInfo);
  const [isOpenManu, setIsOpenManu] = useState(false);
  const [isOpenSmallManu, setIsOpenSmallManu] = useState(false);
  const [isCategoryManuOpen, setIsCategoryManuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("All");

  function handelLogout() {
    toast.error(`${isLogin.name} is Logout`);
    dispatch(removeUser());
    localStorage.removeItem("auth-token");
    navigate("/");
  }

  const cartData = useSelector((state) => state.allCartData.cart);
  return (
    <div className="w-full">
      <div className="z-20 fixed w-full top-0 ">
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
          <div className="hidden md:flex gap-3 items-center">
            <NavLink
              to="/"
              className=" text-gray-700  hover:shadow-md  hover:py-1  hover:shadow-gray-600 rounded-lg font-bodyFont px-2 ml-2 font-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className=" text-gray-700  hover:shadow-md  hover:py-1 hover:shadow-gray-600 hover:duration-200 rounded-lg font-bodyFont px-2 ml-2 font-bold"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className=" text-gray-700   hover:shadow-md  hover:py-1 hover:shadow-gray-600 rounded-lg font-bodyFont px-2 ml-2 font-bold"
            >
              About
            </NavLink>
          </div>
          <div className=" flex items-center gap-4 md:gap-6">
            <Link to="/cart" className="flex gap-3 items-center relative">
              <HiOutlineShoppingBag className="text-3xl" />
              <p className="font-bold hidden md:block">Cart</p>
              <p className="absolute font-bold text-orange-500 top-[-10px] left-[25px]">
                {cartData.length}
              </p>
            </Link>

            {isLogin ? (
              <div className="flex gap-2 relative">
                {isLogin.photoUrl ? (
                  <img
                    onClick={() => setIsOpenSmallManu(!isOpenSmallManu)}
                    className="w-[30px] rounded-full cursor-pointer"
                    src={isLogin.photoUrl}
                    alt="login image"
                  />
                ) : (
                  <RxAvatar
                    onClick={() => setIsOpenSmallManu(!isOpenSmallManu)}
                    className="text-3xl cursor-pointer"
                  />
                )}
                <button
                  onClick={handelLogout}
                  className="hidden md:flex items-center gap-1  bg-red-700 text-white px-2 rounded-lg"
                >
                  <LuLogOut />
                  Logout
                </button>
                <div className="absolute z-50 top-7 md:right-3 right-[-50px]">
                  {isOpenSmallManu && (
                    <SmallManu setIsOpenSmallManu={setIsOpenSmallManu} />
                  )}
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gray-500 text-white py-1 md:px-5 px-3 rounded-lg "
              >
                Login
              </Link>
            )}

            {isOpenManu ? (
              <div className="relative">
                <IoClose
                  onClick={() => setIsOpenManu(!isOpenManu)}
                  className="md:hidden  text-3xl cursor-pointer"
                />
                <div className="absolute z-40 top-10 right-[-10px]">
                  {/* ============================mobile manu================ */}

                  <Mobilemanu setIsOpenManu={setIsOpenManu} />
                </div>
              </div>
            ) : (
              <VscThreeBars
                onClick={() => setIsOpenManu(!isOpenManu)}
                className="md:hidden  text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* ==============================filter and search================================ */}

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
              <div className=" absolute z-30 md:top-[30px] top-[20px] md:left-[-80px] left-[-50px] ">
                <AllCategories
                  setIsCategoryManuOpen={setIsCategoryManuOpen}
                  isCategoryManuOpen={isCategoryManuOpen}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
              </div>
            )}
          </div>
          <div className="z-0 flex items-center relative">
            <input
              className="border-2 border-gray-400 border-r-0 rounded-l-lg outline-none px-2  "
              type="text"
            />
            <div className=" z-0 bg-blue-600 p-[6px] rounded-r-lg ">
              <FaSearch className="text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Header;
