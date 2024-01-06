import React from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/movix-logo.svg";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-opacity-10">
      <div className="flex justify-between items-center md:px-[80px] px-[10px] py-2 bg-opacity-0 bg-gradient-to-r from-gray-800 via-orange-900 to-gray-500 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-5 font-bold">
            <li>Movies</li>
            <li>Tv Shows</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
