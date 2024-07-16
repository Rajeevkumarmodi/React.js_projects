import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { allProducts } from "../../API/api";
import PaginationBox from "../../components/paginationBox/PaginationBox";
import Spiner from "../../components/spinner/Spinner";
import { allCategories } from "../../common/common";
import { useLocation } from "react-router-dom";

function Shop() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenFiltermanu, setIsOpenFilterManu] = useState(false);
  const [allProductsData, setAllProductsData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(Array(9).fill(null));
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Relevance");
  const { pathname } = useLocation();
  let skip = 0;

  useEffect(() => {
    if (pageNo > 1) {
      skip = pageNo * 12 - 12;
    }

    fetchAllProducts();
  }, [pageNo, filter, sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  async function fetchAllProducts() {
    setIsLoading(true);
    const res = await allProducts(skip, filter);
    setTotalPage(Array(Math.ceil(res.total / 12)).fill(null));
    if (sort === "Relevance") {
      setAllProductsData(res.products);
    } else if (sort === "high-low") {
      const sortData = res.products.sort((pre, nex) => nex.price - pre.price);
      setAllProductsData(sortData);
    } else if (sort === "low-high") {
      const sortData = res.products.sort((pre, nex) => pre.price - nex.price);
      setAllProductsData(sortData);
    }
    setIsLoading(false);
  }

  return (
    <div className="md:mt-[110px] mt-[145px]">
      {isLoading ? (
        <div className="w-full h-[70vh]  flex items-center m-auto justify-center">
          <Spiner />
        </div>
      ) : (
        <>
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
                  <li
                    onClick={() => setSort("Relevance")}
                    className="flex gap-1"
                  >
                    <input
                      id="rele"
                      checked={sort === "Relevance"}
                      name="sort"
                      type="radio"
                    />
                    <label className="cursor-pointer" htmlFor="rele">
                      Relevance
                    </label>
                  </li>
                  <li
                    onClick={() => setSort("high-low")}
                    className="flex gap-1"
                  >
                    <input id="high" name="sort" type="radio" />
                    <label className="cursor-pointer" htmlFor="high">
                      Price-- High to Low
                    </label>
                  </li>
                  <li
                    onClick={() => setSort("low-high")}
                    className="flex gap-1"
                  >
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
                <li onClick={() => setFilter("All")} className="flex gap-2 ">
                  <input
                    id="all"
                    type="radio"
                    checked={filter === "All"}
                    name="item"
                  />
                  <label className="cursor-pointer" htmlFor="all">
                    All
                  </label>
                </li>
                {allCategories.map((item, index) => {
                  return (
                    <li
                      onClick={() => setFilter(item)}
                      key={index}
                      className="flex gap-2 "
                    >
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
                        id={product.id}
                        category={product.category}
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
        </>
      )}
    </div>
  );
}

export default Shop;
