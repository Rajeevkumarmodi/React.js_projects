import React from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";

function BlogCard({ image, title, author, date, id }) {
  return (
    <div className="p-3 shadow-lg shadow-gray-300 max-w-[300px] rounded-lg overflow-hidden">
      <Link to="/blog/1">
        <img
          className="hover:scale-105 duration-500 rounded-lg cursor-pointer"
          src={image}
          alt=""
        />
      </Link>
      <Link to={`/blog/${id}`}>
        <h3 className="text-base font-bold hover:underline hover:cursor-pointer">
          {title}
        </h3>
      </Link>
      <div className="flex items-center gap-2 py-1">
        <IoIosContact className="text-2xl" />
        <p className="text-sm">{author}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Published:</p>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
