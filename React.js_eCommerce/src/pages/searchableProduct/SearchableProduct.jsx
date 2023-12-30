import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { searchProduct } from "../../API/api";
import Spinner from "../../components/spinner/Spinner";
import ProductCard from "../../components/productCard/ProductCard";
import { FaCartPlus } from "react-icons/fa";

function SearchableProduct() {
  const { productName } = useParams();
  const [allData, setAllData] = useState([]);
  const [loadign, setLoading] = useState(false);
  const [sortSelected, setSortSelected] = useState("Relevance");
  useEffect(() => {
    fetchSearchableProduct();
  }, [productName, sortSelected]);

  async function fetchSearchableProduct() {
    setLoading(true);
    const res = await searchProduct(productName);
    console.log(res);
    if (sortSelected === "Relevance") {
      setAllData(res.products);
    } else if (sortSelected === "high-low") {
      const sortData = res.products.sort((pre, nex) => nex.price - pre.price);
      setAllData(sortData);
    } else if (sortSelected === "low-high") {
      const sortData = res.products.sort((pre, nex) => pre.price - nex.price);
      setAllData(sortData);
    }
    setLoading(false);
  }

  return (
    <div className="md:mt-[120px] mt-[160px] md:mx-[80px] mx-[10px]">
      <div>
        <label className="font-bold" htmlFor="sort">
          Sort
        </label>
        <select
          onChange={(e) => setSortSelected(e.target.value)}
          className="border-2 rounded-lg py-1 ml-2"
          name=""
          id="sort"
        >
          <option value="Relevance">Relevance</option>
          <option value="low-high">Low to high</option>
          <option value="high-low">High to low</option>
        </select>
      </div>
      {loadign ? (
        <div className="w-full h-[50vh] items-center flex justify-center">
          <Spinner />
        </div>
      ) : allData.length <= 0 ? (
        <div className="w-full h-[30vh] items-center flex flex-col gap-3 justify-center">
          {" "}
          <p className="text-2xl font-bold"> Product Not Found 😒</p>
          <Link
            to="/shop"
            className="flex items-center gap-1 text-white bg-blue-600 px-5 py-1 rounded-lg "
          >
            {" "}
            <FaCartPlus /> Shop Now
          </Link>
        </div>
      ) : (
        <div className=" py-10 flex flex-wrap justify-center gap-9">
          {allData &&
            allData.map((product) => {
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
      )}
    </div>
  );
}

export default SearchableProduct;
