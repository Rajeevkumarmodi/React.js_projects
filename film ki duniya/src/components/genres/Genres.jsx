import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Genres({ ids }) {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="flex gap-3 items-center">
      {ids?.map((g) => {
        if (!genres[g]?.name) return;

        return (
          <p className="bg-red-400 bg-opacity-70 text-xs">{genres[g]?.name}</p>
        );
      })}
    </div>
  );
}

export default Genres;
