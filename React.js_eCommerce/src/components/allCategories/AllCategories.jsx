import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../API/api";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "./allCategories.css";

function AllCategories({
  setIsCategoryManuOpen,
  isCategoryManuOpen,
  selectedCategories,
  setSelectedCategories,
}) {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetchCategories();
      data = data.map((data) => data.replace("-", " "));
      setCategoriesData(data);
    })();
  }, []);

  // manu logic

  function handelClick(item) {
    setSelectedCategories(item);
    setIsCategoryManuOpen(false);
  }

  function handleClickAway() {
    setIsCategoryManuOpen(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="div md:w-[200px] w-[200px] h-[200px] overflow-x-hidden ">
        <div className=" shadow-lg shadow-gray-400 bg-gray-100 rounded-lg p-5">
          <ul className="flex items-center flex-col flex-wrap gap-3">
            <li className="border-2 px-2 rounded-md">
              <p>{selectedCategories}</p>
            </li>
            {categoriesData &&
              categoriesData.map((item, index) => {
                return (
                  <li
                    onClick={() => handelClick(item)}
                    className="font-bold cursor-pointer hover:text-orange-500"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default AllCategories;
