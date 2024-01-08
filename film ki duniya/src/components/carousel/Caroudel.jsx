import React from "react";
import useApiFetch from "../../hooks/useApiFetch";
import MovieCard from "../movieCard/MovieCard";
import { getApiConfigutation } from "../../redux/homeSlice";
import { useSelector } from "react-redux";

function Caroudel() {
  const baseUrl = useSelector((state) => state.home.url.backdrop);
  const { data, loading } = useApiFetch("/trending/movie/day");

  console.log(data?.results);
  return (
    <div className="flex gap-10">
      {data?.results?.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              poster={baseUrl + movie.backdrop_path}
              date={movie.release_date}
              title={movie.title}
              rating={movie.vote_average}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Caroudel;
