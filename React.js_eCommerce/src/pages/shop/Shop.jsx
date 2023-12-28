import React, { useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function Shop() {
  const [isOpenFiltermanu, setIsOpenFilterManu] = useState(false);
  const allCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <div className="mt-[110px] ">
      <div className="flex">
        <div className="px-2">
          <FaBars
            onClick={() => setIsOpenFilterManu(!isOpenFiltermanu)}
            className={` font-bold text-2xl relative  cursor-pointer top-2 ${
              isOpenFiltermanu ? "w-0" : "block"
            }`}
          />
        </div>
        <div
          className={` py-5 pl-5 pr-3 bg-gray-200 ease-in-out duration-500   md:relative ${
            isOpenFiltermanu
              ? "left-[-14px] w-[300px]"
              : "left-[-280px] w-[0px]"
          } `}
        >
          <div className="absolute top-2 right-2">
            <IoClose
              onClick={() => setIsOpenFilterManu(!isOpenFiltermanu)}
              className="text-3xl cursor-pointer hover:scale-105 duration-300"
            />
          </div>
          <div>
            <p className="font-bold text-xl border-b-2 border-gray-500 py-2">
              Sort by
            </p>
            <ul>
              <li className="flex gap-1">
                <input id="high" name="sort" type="radio" />
                <label className="cursor-pointer" htmlFor="high">
                  Price-- High to Low
                </label>
              </li>
              <li className="flex gap-1">
                <input id="low" name="sort" type="radio" />
                <label className="cursor-pointer" htmlFor="low">
                  Price-- Low to High
                </label>
              </li>
            </ul>
          </div>
          <ul className="w-[200px]">
            <li className="font-bold text-xl py-2 border-b-2 border-gray-500">
              Filter by Category
            </li>
            {allCategories.map((item, index) => {
              return (
                <li key={index} className="flex gap-2 ">
                  <input id={index} type="radio" name="item" />
                  <label className="cursor-pointer" htmlFor={index}>
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-11">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Shop;
