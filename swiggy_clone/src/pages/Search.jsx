import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [initialFoods, setInitialFoods] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSearchItemFoods();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchText.length > 2) {
        getSearchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  function getNameFromPopularCusines(id) {
    console.log("id", id);
  }

  const getSearchItemFoods = async () => {
    const data = await fetch(
      "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D12.9715987%26lng%3D77.5945627"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setInitialFoods(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  };

  // food search function
  const getSearchSuggestions = async () => {
    const data = await fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchText}&trackingId=undefined`
        )
    );
    const json = await data.json();
    console.log("suggesition", json?.data?.suggestions);
    setSuggestions(json?.data?.suggestions);
  };

  return (
    <>
      <div className="sticky top-20 left-0 pb-2 pt-12 bg-white z-2">
        <div className="max-w-[800px] mx-auto px-5">
          {/* search box */}
          <div className="relative">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full  border-[1.5px] border-gray-200 outline-none  leading-relaxed rounded-md py-3 px-5"
              type="text"
              placeholder="Search for restaurants and food "
            />
            <IoMdSearch className="absolute top-3 right-3 text-3xl" />
          </div>
        </div>
      </div>
      {searchText === "" ? (
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="font-bold text-xl">Popular Cuisines</h2>
          <div className="flex flex-wrap">
            {initialFoods?.map((foodItem) => (
              <div
                key={foodItem.id}
                className="pr-2 cursor-pointer"
                onClick={() => getNameFromPopularCusines(foodItem.entityId)}
              >
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${foodItem.imageId}`}
                  className="border-none max-w-[100px] "
                  alt={`Image ${foodItem.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* show suggesition card */}
      <ul>
        {searchText !== "" && suggestions.length !== 0
          ? suggestions.map((suggestion, index) => (
              <li key={`suggestion_${index}`}>
                <Link>
                  <div className="max-w-[800px] my-3 p-1 mx-auto px-5 flex duration-300 hover:bg-gray-100">
                    <img
                      className="w-16 h-16 object-contain rounded"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${suggestion.cloudinaryId}`}
                      alt="Food-Image"
                    />
                    <div className="ml-4">
                      <p className="text-sm">{suggestion.text}</p>
                      <p className="text-sm">{suggestion.type}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
}

export default Search;
