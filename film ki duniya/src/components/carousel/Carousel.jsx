import React, { useEffect, useRef, useState } from "react";
import useApiFetch from "../../hooks/useApiFetch";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./carousel.css";
import Skeleton from "../skeleton/Skeleton";

function Carousel({ url }) {
  const ref = useRef();
  const baseUrl = useSelector((state) => state.home.url.backdrop);
  const { data, loading } = useApiFetch(url);
  const [current, setCurrent] = useState(0);
  const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handelScroll(value) {
    if (value === "left") {
      setCurrent(current + 100);
    } else {
      setCurrent(current - 100);
    }
  }

  return (
    <div className="carousel relative md:overflow-hidden overflow-x-auto">
      <div className="md:flex hidden z-50">
        <FaArrowCircleLeft
          onClick={() => handelScroll("left")}
          className={`z-30 absolute ${
            current >= 300 ? "hidden" : "block"
          } left-0 top-[100px] text-3xl text-yellow-500 cursor-pointer`}
        />
        <FaArrowCircleRight
          onClick={() => handelScroll("rigth")}
          className={`${
            current <= 0 ? "hidden" : "block"
          } z-30 absolute right-0 top-[100px] text-3xl text-yellow-500 cursor-pointer`}
        />
      </div>
      <div
        className=" flex gap-5 duration-500 "
        style={{ transform: `translateX(-${current}%)` }}
      >
        {data
          ? data.results?.map((movie) => {
              return (
                <div onScroll={scroll} key={movie.id}>
                  <MovieCard
                    poster={baseUrl + movie.backdrop_path}
                    date={movie.release_date}
                    title={movie.title}
                    rating={movie.vote_average}
                  />
                </div>
              );
            })
          : demo.map((_, i) => {
              return (
                <div key={i}>
                  <Skeleton />{" "}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Carousel;
