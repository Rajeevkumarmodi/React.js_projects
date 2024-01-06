import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";
import { useSelector } from "react-redux";

function HeroBanner() {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useApiFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;

    console.log(bg);
    setBackground(bg);
  }, [data]);

  //=====================   handel search==========================
  function handelSearch(event) {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div>
      <div
        className="  md:h-[400px] h-[350px] bg-cover bg-center relative flex flex-col gap-3 items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl pb-3">Welcome.</h2>
          <p className="font-bold md:text-3xl text-xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="relative">
          <input
            className="w-[90vw] py-2 rounded-full pl-4"
            type="text"
            placeholder="Search for a movie | tv show..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handelSearch}
          />
          <button className="absolute right-0 bg-teal-500 px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
