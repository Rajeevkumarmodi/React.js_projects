import React from "react";
import Carousel from "../carousel/Carousel";
function Similar({ mediaType, id }) {
  return (
    <div className=" md:mx-[80px] my-4">
      <h2 className="py-4 font-bold text-2xl">
        Similr {mediaType === "movie" ? "Movies" : "TV Shows"}
      </h2>
      <Carousel url={`/${mediaType}/${id}/similar`} />
    </div>
  );
}

export default Similar;
