import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";

function MovieCard({ poster, title, date, rating, genre_ids, id, mediaType }) {
  const navigate = useNavigate();

  function handelNavigate() {
    navigate(`/${mediaType}/${id}`);
  }

  const value = rating.toFixed(1);
  return (
    <div className="bg-[#212021] md:w-[210px] md:h-[300px] h-[320px] w-[250px]  p-2 rounded-lg">
      <div className="relative">
        <div>
          <img
            onClick={handelNavigate}
            className="md:h-[220px] h-[250px] w-full rounded-lg cursor-pointer"
            src={poster}
            alt={title}
          />
          <div className="absolute bottom-3">
            <Genres
              ids={genre_ids.length > 2 ? genre_ids.slice(0, 2) : genre_ids}
            />
          </div>
        </div>
        <div className="w-[30px] absolute bottom-[-12px] bg-black rounded-full right-4">
          <CircularProgressbar
            value={value}
            maxValue={10}
            text={value}
            styles={buildStyles({
              pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
              textColor: "white",
              textSize: "40px",
              trailColor: "#1e1e0f",
              pathTransitionDuration: 2,
              strokeLinecap: "butt",
            })}
          />
        </div>
      </div>
      <div className="mt-3">
        <p
          onClick={handelNavigate}
          className="font-bold hover:underline hover:text-blue-400 cursor-pointer"
        >
          {" "}
          {title?.length > 20 ? title?.slice(0, 20) + "..." : title}
        </p>
        <p>{dayjs(date).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
}

export default MovieCard;
