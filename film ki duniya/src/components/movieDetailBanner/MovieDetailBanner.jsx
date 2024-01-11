import React from "react";
import BannerSkeleton from "../bannerSkeleton/bannerSkeleton";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaRegPlayCircle } from "react-icons/fa";

function MovieDetailBanner({ data }) {
  const { url } = useSelector((state) => state.home);
  const value = data?.vote_average.toFixed(1);
  return (
    <div className=" mt-4 bg-gray-900 ">
      <div className="max-w-[1280px] m-auto md:mx-[80px] mx-[10px] flex items-center gap-7">
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
            <h3 className="font-bold text-4xl">{data?.title}</h3>
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
              <FaRegPlayCircle className="text-5xl hover:text-gray-400 cursor-pointer" />
              <p>Watch Trailer</p>
            </div>
          </div>
          <div>
            <h3 className="pt-1 font-bold text-2xl">Overview</h3>
            <p>{data?.overview}</p>
          </div>
          <div className="flex my-2 gap-3">
            <p>Status : {data?.status}</p>
            <p>Release Date : {data?.release_date}</p>
            <p>Duration : {(data?.runtime / 60).toFixed(1)} min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailBanner;
