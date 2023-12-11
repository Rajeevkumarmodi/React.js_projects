import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";

function AuthorCard({ img, name, noOfArtical, position }) {
  return (
    <div className="w-[250px] bg-gray-50 rounded-lg shadow-md  p-3 cursor-pointer hover:scale-105 duration-500">
      <div className="flex flex-col items-center text-center gap-1">
        <img className="w-[80px]" src={img} alt="" />
        <p className="font-bold">{name}</p>
        <p>{position}</p>
        <div className="flex items-center gap-1">
          <IoDocumentTextSharp />
          {noOfArtical}
          <p>Artical Published</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
