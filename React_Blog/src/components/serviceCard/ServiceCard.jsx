import React from "react";
import { AiOutlineLike } from "react-icons/ai";

function ServiceCard({ icon, content, heading }) {
  return (
    <div className="w-[300px] shadow-md shadow-gray-400 rounded-md p-4 cursor-pointer hover:scale-105 duration-500">
      <div className="text-blue-400 text-4xl">{icon}</div>
      <div>
        <p className="font-bold py-1">{heading}</p>
      </div>
      <div>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
