import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";

function MovieCard({ poster, title, date, rating, genre_ids, id, mediaType }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState("true");
  const [image, setImage] = useState(poster);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  function handelNavigate() {
    navigate(`/${mediaType}/${id}`);
  }

  const value = rating.toFixed(1);
  return (
    <div className="bg-[#333233] w-[210px] h-[300px]  p-2 rounded-lg">
      <div className="relative">
        <div>
          {isLoading ? (
            <div className="h-[230px]">
              <Skeleton h={240} />
            </div>
          ) : (
            <img
              onLoad={() => setIsLoading(false)}
              onClick={handelNavigate}
              className="h-[220px] w-full rounded-lg cursor-pointer"
              src={poster}
              alt={title}
            />
          )}
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
          {title?.length > 15 ? title?.slice(0, 15) + "..." : title}
        </p>
        <p>{dayjs(date).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
}

export default MovieCard;
