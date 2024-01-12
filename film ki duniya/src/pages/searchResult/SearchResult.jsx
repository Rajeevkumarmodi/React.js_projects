import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi, searchAPI } from "../../utils/Api";
import Spinner from "../../components/spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movieCard/MovieCard";
import noPoster from "../../assets/no-poster.png";
import { useSelector } from "react-redux";
function SearchResult() {
  const baseUrl = useSelector((state) => state.home.url.backdrop);
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);

  const fetchInitialData = async () => {
    setLoading(true);
    const res = await searchAPI(`search/multi?query=${query}&page=${pageNum}`);
    setData(res);
    setPageNum((prev) => prev + 1);
    setLoading(false);
    console.log(res);
  };

  const fetchNextPageData = () => {
    searchAPI(`search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res.results] });
      } else {
        setData(res);
      }

      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div>
      {loading && (
        <div className="w-[90vw] h-[50vh] flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!loading &&
        (data?.results?.length > 0 ? (
          <div>
            <InfiniteScroll
              className="flex justify-center flex-wrap gap-5 md:mx-[80px] mx-[10px]"
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner />}
            >
              {data?.results?.map((item, i) => {
                if (item.media_type === "person") return;
                const poster = item?.poster_path
                  ? baseUrl + item?.poster_path
                  : noPoster;
                return (
                  <div key={i}>
                    <MovieCard
                      poster={poster}
                      date={item.release_date || item.first_air_date}
                      title={item.title ? item.title : item.name}
                      rating={item.vote_average}
                      genre_ids={item.genre_ids}
                      id={item.id}
                      mediaType={
                        item.media_type || activeTab === "Movies"
                          ? "movie"
                          : "tv"
                      }
                    />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <div className="w-[90vw] h-[40vh] flex items-center justify-center text-3xl font-bold ">
            Sorry, Results not found!😒
          </div>
        ))}
    </div>
  );
}

export default SearchResult;
