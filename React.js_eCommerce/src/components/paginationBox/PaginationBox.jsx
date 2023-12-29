import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function PaginationBox({ totalPage, pageNo, setPageNo }) {
  return (
    <div className="paginationBox flex items-center gap-1">
      <button
        onClick={() => setPageNo(pageNo - 1)}
        className={`${
          pageNo <= 1 ? "hidden" : "block"
        } border-2 px-2 py-2 rounded-md active:bg-orange-400`}
      >
        <FaArrowLeft />
      </button>
      <div className="flex flex-wrap">
        {totalPage &&
          totalPage.map((_, i) => {
            return (
              <span
                className={`pageNo ${
                  pageNo == i + 1 ? "bg-orange-600 text-white" : ""
                } border-2 px-2 cursor-pointer rounded-md`}
                onClick={() => setPageNo(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
      </div>

      <button
        onClick={() => setPageNo(pageNo + 1)}
        className={`${
          pageNo >= totalPage.length ? "hidden" : "block"
        } border-2 px-2 py-2 rounded-md active:bg-orange-400`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PaginationBox;
