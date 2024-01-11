import React from "react";
import Skeleton from "../skeleton/Skeleton";
import { useSelector } from "react-redux";
import avatar from "../../assets/avatar.png";
import "./cast.css";

function Casts({ casts, creditLoading }) {
  const { url } = useSelector((state) => state.home);
  const demoData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="pt-4 max-w-[1280px] m-auto md:mx-[80px] mx-[10px]">
      <h2 className="font-bold text-xl">Top Cast</h2>
      {!casts ? (
        <div className=" allCasts overflow-auto mb-[50px] flex gap-5 mt-4 h-[200px]">
          {demoData.map((data, index) => {
            return (
              <div className="overflow-hidden min-w-[150px]" key={index}>
                <Skeleton />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="allCasts mt-4 flex gap-6 overflow-auto w-full">
          {casts?.map((cast) => {
            const imgUrl = cast.profile_path
              ? url?.profile + cast?.profile_path
              : avatar;

            return (
              <div key={cast?.id} className=" flex flex-col items-center  ">
                <div className="w-[150px]">
                  <img
                    className="h-[150px] w-[100vw] rounded-full"
                    src={imgUrl}
                    alt={cast?.name}
                  />
                </div>
                <p>{cast?.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// function CastCard({ cast }) {
//   const { url } = useSelector((state) => state.home);

//   const imgUrl = cast.profile_path ? url?.profile + cast?.profile_path : avatar;
//   return (

//   );
// }

export default Casts;
