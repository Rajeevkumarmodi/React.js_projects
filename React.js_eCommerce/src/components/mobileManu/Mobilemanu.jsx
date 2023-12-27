import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { LuLogOut } from "react-icons/lu";

function Mobilemanu({ setIsOpenManu }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.allCartData.userInfo);
  function handelLogout() {
    toast.error(`${user.name} is Logout `);
    dispatch(removeUser());
    localStorage.removeItem("auth-token");
    navigate("/");
  }

  return (
    <div className="rounded-l-lg h-[250px] z-30 md:hidden flex flex-col gap-5 items-center justify-center w-[200px] bg-gray-300">
      <button
        onClick={handelLogout}
        className=" flex items-center gap-1 bg-red-700 text-white px-4 py-1 rounded-lg hover:shadow-md  hover:shadow-gray-600 "
      >
        <LuLogOut />
        Logout
      </button>
      <NavLink
        to="/"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700 font-bodyFont px-2 py-1 ml-2 font-bold hover:shadow-md    hover:shadow-gray-600 hover:rounded-lg  "
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700  font-bodyFont px-2 py-1 ml-2 font-bold hover:shadow-md   hover:shadow-gray-600 hover:rounded-lg "
      >
        Shop
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setIsOpenManu(false)}
        className=" text-gray-700  font-bodyFont px-2 py-1 ml-2 font-bold hover:shadow-md hover:px-2  hover:shadow-gray-600 hover:rounded-lg "
      >
        About
      </NavLink>
      <Toaster />
    </div>
  );
}

export default Mobilemanu;
