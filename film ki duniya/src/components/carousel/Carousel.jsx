import React, { useEffect, useRef, useState } from "react";
import useApiFetch from "../../hooks/useApiFetch";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./carousel.css";
import Skeleton from "../skeleton/Skeleton";
import noPoster from "../../assets/no-poster.png";

function Carousel({ url, activeTab }) {
  const baseUrl = useSelector((state) => state.home.url.backdrop);
  const { data, loading } = useApiFetch(url);
  const [current, setCurrent] = useState(0);
  const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="carousel relative overflow-x-auto">
      <div className=" flex gap-5 duration-500 ">
        {data
          ? data.results?.map((movie) => {
              const poster = movie?.poster_path
                ? baseUrl + movie?.poster_path
                : noPoster;
              return (
                <div key={movie.id}>
                  <MovieCard
                    poster={poster}
                    date={movie.release_date || movie.first_air_date}
                    title={movie.title ? movie.title : movie.name}
                    rating={movie.vote_average}
                    genre_ids={movie.genre_ids}
                    id={movie.id}
                    mediaType={
                      movie.media_type || activeTab === "Movies"
                        ? "movie"
                        : "tv"
                    }
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
