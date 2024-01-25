import React from "react";
import useApiFetch from "../../hooks/useApiFetch";
import Carousel from "../carousel/Carousel";
function Recommendation({ mediaType, id }) {
  const { data, loading } = useApiFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <>
      {data?.results?.length > 0 && (
        <div className=" md:mx-[80px] my-4 ">
          <h2 className="py-4 font-bold text-2xl">
            Recommendation {mediaType === "movie" ? "Movies" : "TV Shows"}
          </h2>
          <Carousel url={`/${mediaType}/${id}/recommendations`} />
        </div>
      )}
    </>
  );
}

export default Recommendation;
