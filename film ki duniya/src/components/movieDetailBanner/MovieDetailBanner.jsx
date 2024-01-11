import React from "react";
import BannerSkeleton from "../bannerSkeleton/bannerSkeleton";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaRegPlayCircle } from "react-icons/fa";
import dayjs from "dayjs";

function MovieDetailBanner({ data, credit }) {
  const { url } = useSelector((state) => state.home);
  const value = data?.vote_average.toFixed(1);

  const director = credit?.filter((f) => f.job === "Director");
  const writer = credit?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="  bg-gray-900 ">
      <div className="pt-4 max-w-[1280px] m-auto md:mx-[80px] mx-[10px] flex items-center gap-7">
        {/* background image */}
        <div className="absolute top-0 left-0 opacity-5 ">
          <img
            className="w-[100vw] h-[100vh]"
            src={url?.poster + data?.backdrop_path}
            alt=""
          />
        </div>

        <div className="">
          <img
            className="h-[400px] w-[30vw]"
            src={url?.poster + data?.poster_path}
            alt=""
          />
        </div>
        <div className="w-[60vw]">
          <div>
            <h3 className="font-bold text-4xl">
              {data?.title}({dayjs(data?.release_date).format("YYYY")})
            </h3>
            <p className="text-gray-400 pt-2 italic">{data?.tagline}</p>
            <div className="flex gap-4 py-4">
              {data?.genres.map((item) => {
                return (
                  <p className="bg-red-400 px-2" key={item.id}>
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-16">
              <CircularProgressbar
                value={value}
                maxValue={10}
                text={value}
                styles={buildStyles({
                  pathColor:
                    data?.vote_average < 5
                      ? "red"
                      : data?.vote_average < 7
                      ? "orange"
                      : "green",
                  textColor: "white",
                  textSize: "40px",
                  trailColor: "#1e1e0f",
                  pathTransitionDuration: 2,
                  strokeLinecap: "butt",
                })}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaRegPlayCircle className="text-6xl hover:text-gray-600 cursor-pointer" />
              <p>Watch Trailer</p>
            </div>
          </div>
          <div>
            <h3 className="pt-1 font-bold text-2xl">Overview</h3>
            <p className="text-gray-300">{data?.overview}</p>
          </div>
          <div className="flex my-3 pt-1 gap-3 border-t-2 border-gray-600">
            <p>Status : {data?.status}</p>
            <p>
              Release Date : {dayjs(data?.release_date).format("MMM D ,YYYY")}
            </p>
            <p>Duration : {toHoursAndMinutes(data?.runtime)} </p>
          </div>

          <div className="flex  gap-4 border-t-2 border-gray-500 pt-1 my-2">
            <p>Director : {director && director[0]?.name}</p>
            <p>Writer : {writer && writer[0]?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailBanner;
