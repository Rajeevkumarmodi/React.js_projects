import React from "react";
import toast from "react-hot-toast";

import { IMG_CDN_URL } from "../constrants";
import { contexProvider } from "../contex/SwiggyContex";

const MenuCard = ({ ItemDetails }) => {
  const { imageId, name, defaultPrice, price, description, itemAttribute } =
    ItemDetails;

  const { addToCart } = contexProvider();

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div>
            <h3 className="text-sm mr-1 sm:text-base font-medium text-[#3e4152] break-words">
              {name}
            </h3>
          </div>
          <div>
            <span className="mr-2 font-normal text-[#3e4152] text-sm">
              Rs {defaultPrice / 100 || price / 100}
            </span>
          </div>
          <div className=" mt-3 text-[#282c3f73] text-sm overflow-x-auto max-w-md md:max-w-xl">
            {description}
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img
            src={IMG_CDN_URL + imageId}
            className="h-24 w-[118px] border border-[#d4d5d9] rounded-lg shadow-md"
            alt="menuItem"
          />
          <div className="absolute inset-0 left-1/2 top-20 -translate-x-1/2 grid item-center w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-white text-center border shadow-md">
            <button
              data-testid="addBtn"
              className=" text-[#60b246] w-full g-full cursor-pointer"
              onClick={() => {
                addToCart(
                  name,
                  ItemDetails.id,
                  defaultPrice / 100 || price / 100,
                  imageId
                );
                toast.success(name + "is added into cart");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="border-b my-5"></div>
    </div>
  );
};

export default MenuCard;
