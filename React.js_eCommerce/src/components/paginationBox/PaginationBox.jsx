import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function PaginationBox({ totalPage, pageNo, setPageNo }) {
  const totalPages = totalPage.length;

  // Helper function to generate the page numbers to be displayed
  const getDisplayedPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (pageNo <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (pageNo >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(1, "...", pageNo - 1, pageNo, pageNo + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const displayedPages = getDisplayedPages();

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
      <div className="flex flex-wrap items-center">
        {displayedPages.map((page, index) => {
          return (
            <span
              className={`pageNo ${
                pageNo === page ? "bg-orange-600 text-white" : ""
              } border-2 px-2 cursor-pointer rounded-md ${
                page === "..." ? "pointer-events-none" : ""
              }`}
              onClick={() => page !== "..." && setPageNo(page)}
              key={index}
            >
              {page}
            </span>
          );
        })}
      </div>
      <button
        onClick={() => setPageNo(pageNo + 1)}
        className={`${
          pageNo >= totalPages ? "hidden" : "block"
        } border-2 px-2 py-2 rounded-md active:bg-orange-400`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PaginationBox;
