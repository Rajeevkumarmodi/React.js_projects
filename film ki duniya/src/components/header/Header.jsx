import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/movix-logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpenManu, setIsOpenManu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handelSearch(event) {
    if (
      (event.key === "Enter" && searchQuery.length > 0) ||
      (event === "submit" && searchQuery.length > 0)
    ) {
      setSearchQuery("");
      setIsOpenSearch(false);
      navigate(`/search/${searchQuery}`);
    }
  }

  function handelManu() {
    setIsOpenManu(!isOpenManu);
    setIsOpenSearch(false);
  }

  function openSearchHandel() {
    setIsOpenSearch(!isOpenSearch);
    setIsOpenManu(false);
  }

  return (
    <div className="sticky top-0 z-50 bg-opacity-10">
      <div className="flex justify-between items-center md:px-[80px] px-[10px] py-2 bg-opacity-0 bg-gradient-to-r from-gray-800 via-orange-900 to-gray-500 ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <div className="hidden md:flex items-center gap-5 font-bold">
            <div className="hidden md:block relative">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[300px] rounded-xl px-3 py-1 focus:outline-none text-black"
                type="text"
                onKeyUp={handelSearch}
                placeholder="Search fro movie / tv show"
              />
              <button
                onClick={() => handelSearch("submit")}
                className="absolute right-0 bg-blue-500 rounded-xl px-2 py-1"
              >
                Search
              </button>
            </div>
            <Link to="/explore/movie">Movies</Link>
            <Link to="/explore/tv">Tv Shows</Link>
          </div>
          <ul className="md:hidden flex gap-2 text-2xl">
            <li>
              {isOpenSearch ? (
                <IoClose onClick={openSearchHandel} />
              ) : (
                <IoSearch onClick={openSearchHandel} />
              )}
            </li>
            <li>
              {isOpenManu ? (
                <IoClose onClick={handelManu} />
              ) : (
                <FaBars onClick={handelManu} />
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* mobile manu */}
      <div
        className={`md:hidden absolute duration-500 ${
          isOpenManu ? "top-[55px]" : "top-[-75px]"
        }  w-full flex flex-col  px-7 gap-2 py-2 font-bold bg-[#242424]`}
      >
        <Link to="/explore/movie">Movies</Link>
        <Link to="/explore/tv">Tv Shows</Link>
      </div>

      <div>
        {isOpenSearch && (
          <duv className="absolute w-[80vw] right-3 top-[60px]">
            <div className=" md:hidden flex relative">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl px-3 py-1 focus:outline-none text-black"
                type="text"
                onKeyUp={handelSearch}
                placeholder="Search fro movie / tv show"
              />
              <button
                onClick={() => handelSearch("submit")}
                className="absolute right-0 bg-blue-500 rounded-xl px-2 py-1"
              >
                Search
              </button>
            </div>
          </duv>
        )}
      </div>
    </div>
  );
}

export default Header;
