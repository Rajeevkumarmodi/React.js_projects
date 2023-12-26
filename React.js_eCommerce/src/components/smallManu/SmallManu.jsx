import React from "react";
import { FaAmbulance, FaCartPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import SmallManuButton from "../smallManuButton/SmallManuButton";

function SmallManu() {
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
    {
      buttonName: "Logout",
      icon: <MdLogout />,
      to: "",
    },
  ];

  return (
    <div className="w-[160px]">
      <div
        className="w-0 h-0 relative left-[75px]
        border-l-[10px] border-l-transparent
        border-b-[15px] border-b-gray-400
        border-r-[10px] border-r-transparent"
      ></div>
      <div className="flex flex-col bg-gray-300 p-4 gap-3 font-bodyFont rounded-md">
        {manuData.map((data, index) => {
          return (
            <SmallManuButton
              key={index}
              buttonName={data.buttonName}
              icon={data.icon}
              to={data.to}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SmallManu;
