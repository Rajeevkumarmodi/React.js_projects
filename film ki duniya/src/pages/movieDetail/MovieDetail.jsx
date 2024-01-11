import React from "react";
import { useParams } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";
import MovieDetailBanner from "../../components/movieDetailBanner/MovieDetailBanner";
import BannerSkeleton from "../../components/bannerSkeleton/bannerSkeleton";

function MovieDetail() {
  const { mediaType, id } = useParams();

  const { data, loading } = useApiFetch(`/${mediaType}/${id}`);
  const { data: creditData, loading: creditLoading } = useApiFetch(
    `/${mediaType}/${id}/credits`
  );

  // console.log(creditData);
  return (
    <div>
      {loading ? (
        <BannerSkeleton />
      ) : (
        <MovieDetailBanner data={data && data} credit={creditData?.crew} />
      )}
    </div>
  );
}

export default MovieDetail;
