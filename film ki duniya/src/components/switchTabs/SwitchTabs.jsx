import React, { useState } from "react";

function SwitchTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex w-[200px] bg-white text-black font-bold border-2 rounded-full">
      {tabs?.map((item, index) => {
        return (
          <div
            onClick={() => setActiveTab(item)}
            className={`${
              activeTab === item &&
              "bg-gradient-to-br from-green-400 to-blue-600 text-white font-bold"
            } rounded-full w-[100px] py-1 text-center cursor-pointer`}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default SwitchTabs;
