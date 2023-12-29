import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { allProducts } from "../../API/api";
import PaginationBox from "../../components/paginationBox/PaginationBox";

function Shop() {
  const [isOpenFiltermanu, setIsOpenFilterManu] = useState(false);
  const [allProductsData, setAllProductsData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  // const [skip, setSkip] = useState(0);
  let skip = 0;
  const [totalPage, setTotalPage] = useState(Array(9).fill(null));

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

  useEffect(() => {
    if (pageNo > 1) {
      skip = pageNo * 12 - 12;
    }
    fetchAllProducts();
  }, [pageNo]);

  async function fetchAllProducts() {
    const res = await allProducts(skip);
    setTotalPage(Array(Math.ceil(res.total / 12)).fill(null));
    setAllProductsData(res.products);
  }

  return (
    <div className="md:mt-[110px] mt-[145px]">
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
          className={` py-5 pl-5 pr-3 bg-gray-200 ease-in-out duration-500   md:relative absolute md:z-0 z-10 ${
            isOpenFiltermanu
              ? "left-[-14px] md:w-[300px] w-[250px]"
              : "left-[-280px] w-[0px]"
          } `}
        >
          <div className="absolute top-2 right-2">
            <IoClose
              onClick={() => setIsOpenFilterManu(!isOpenFiltermanu)}
              className="text-3xl cursor-pointer hover:scale-105 duration-300"
            />
          </div>
          <div className="w-[200px]">
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
        <div className="mt-[40px] flex items-center justify-center flex-wrap gap-11">
          {allProductsData &&
            allProductsData.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard
                    price={product.price}
                    rating={product.rating}
                    title={product.title}
                    discountPercentage={product.discountPercentage}
                    thumbnail={product.thumbnail}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex justify-center my-5">
        <PaginationBox
          totalPage={totalPage}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
      </div>
    </div>
  );
}

export default Shop;
