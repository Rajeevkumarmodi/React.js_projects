import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const [isOpenMyMamu, setIsOpenMyManu] = useState(false);

  function handelMyManu() {
    setIsOpenMyManu(!isOpenMyMamu);
  }

  return (
    <div className="w-full">
      <div className="sticky flex items-center justify-between md:px-[80px] px-[30px] h-[50px] border-b-2 border-gray-400">
        <Link to="/" className="flex gap-2 font-bodyFont text-xl  font-bold">
          <p className="text-red-700">Shoping</p>
          <p className="text-blue-600">Karo</p>
        </Link>
        <div className="flex gap-5 relative items-center">
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-3xl" />
            <p className="absolute left-[24px] top-[-10px] font-bold">13</p>
          </Link>
          <div>
            <RxAvatar
              onClick={handelMyManu}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isOpenMyMamu && (
        <div className=" absolute right-0 top-10 w-[150px] rounded-lg  p-3 shadow-lg shadow-gray-400">
          <Link
            to="/order"
            onClick={handelMyManu}
            className="flex items-center gap-2 font-bodyFont pt-2"
          >
            <LiaAmbulanceSolid className="text-2xl" />
            <p>My Order</p>
          </Link>
          <Link
            to="/cart"
            onClick={handelMyManu}
            className="flex items-center gap-2 font-bodyFont py-3"
          >
            <FaCartArrowDown className="text-2xl" />
            <p>My Cart</p>
          </Link>
          <Link
            to="/profile"
            onClick={handelMyManu}
            className="flex items-center gap-2 font-bodyFont "
          >
            <RxAvatar className="text-2xl" />
            <p>My Profile</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
