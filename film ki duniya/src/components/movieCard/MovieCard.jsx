import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";

function MovieCard({ poster, title, date, rating }) {
  const value = rating.toFixed(1);
  // const ;
  return (
    <div className="bg-[#212021] w-[200px] h-[300px]  p-2 rounded-lg">
      <div className="relative">
        <div>
          <img
            className="h-[220px] rounded-lg cursor-pointer"
            src={poster}
            alt={title}
          />
          <p className="absolute bottom-3 left-1 text-black bg-gray-400 bg-opacity-30 font-semibold">
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </p>
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
        <p className="font-bold">
          {" "}
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </p>
        <p>{dayjs(date).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
}

export default MovieCard;
