import React from "react";
import { useParams } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";
import MovieDetailBanner from "../../components/movieDetailBanner/MovieDetailBanner";
import BannerSkeleton from "../../components/bannerSkeleton/bannerSkeleton";
import Casts from "../../components/casts/Casts";
import Similar from "../../components/similar/Similar";

function MovieDetail() {
  const { mediaType, id } = useParams();

  const { data, loading } = useApiFetch(`/${mediaType}/${id}`);
  // console.log(data);
  const { data: creditData, loading: creditLoading } = useApiFetch(
    `/${mediaType}/${id}/credits`
  );

  console.log(creditData);
  return (
    <div>
      {loading ? (
        <BannerSkeleton />
      ) : (
        <MovieDetailBanner
          data={data && data}
          credit={creditData?.crew}
          mediaType={mediaType}
        />
      )}
      <Casts casts={creditData?.cast} creditLoading={creditLoading} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
}

export default MovieDetail;
