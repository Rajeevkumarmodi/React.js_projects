import React from "react";
function Pagination({ totalPage, activePageNo, setActivePageNo }) {
  return (
    <div className="flex items-center flex-wrap gap-2 py-5 px-[30px]">
      <button
        disabled={activePageNo > 1 ? false : true}
        onClick={() => setActivePageNo((activePageNo -= 1))}
      >
        Previous
      </button>
      {totalPage.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => setActivePageNo(index)}
            className={`border-2 border-gray-400 rounded-md px-2 font-bold  cursor-pointer  ${
              activePageNo === index ? "bg-orange-600 text-white" : ""
            } `}
          >
            {index + 1}
          </p>
        );
      })}
      <button
        disabled={activePageNo < totalPage.length - 1 ? false : true}
        onClick={() => setActivePageNo((activePageNo += 1))}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
