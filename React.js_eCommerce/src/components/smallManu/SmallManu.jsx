import React from "react";
import { FaAmbulance, FaCartPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import SmallManuButton from "../smallManuButton/SmallManuButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SmallManu({ setIsOpenSmallManu }) {
  const user = useSelector((state) => state.allCartData.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manuData = [
    {
      buttonName: "Profile",
      icon: <RxAvatar />,
      to: "/profile",
    },
    {
      buttonName: "My Order",
      icon: <FaAmbulance />,
      to: "/myorder",
    },
    {
      buttonName: "My Cart",
      icon: <FaCartPlus />,
      to: "/cart",
    },
  ];

  function handleClickAway() {
    setIsOpenSmallManu(false);
  }

  function logout() {
    toast.error(`${user.name} is Logout`);
    dispatch(removeUser());
    navigate("/");
    setIsOpenSmallManu(false);
    localStorage.removeItem("auth-token");
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="w-[160px] z-50">
        <div
          className="w-0 h-0 relative left-[75px]
        border-l-[10px] border-l-transparent
        border-b-[15px] border-b-gray-400
        border-r-[10px] border-r-transparent"
        ></div>
        <div className="flex flex-col bg-blue-400 p-4 gap-3 font-bodyFont rounded-md">
          {manuData.map((data, index) => {
            return (
              <SmallManuButton
                key={index}
                buttonName={data.buttonName}
                icon={data.icon}
                to={data.to}
                setIsOpenSmallManu={setIsOpenSmallManu}
              />
            );
          })}
          <div>
            <button
              onClick={logout}
              className="flex items-center gap-2 md:text-xl text-base hover:shadow-md hover:shadow-gray-600 hover:rounded-lg px-1 bg-red-600 rounded-lg text-white py-1"
            >
              <LuLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default SmallManu;
