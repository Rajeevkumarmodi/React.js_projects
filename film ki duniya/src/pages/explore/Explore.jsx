import React, { useEffect, useState } from "react";
import { fetchDataFromApi, searchAPI } from "../../utils/Api";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/Spinner";
import noPoster from "../../assets/no-poster.png";
import MovieCard from "../../components/movieCard/MovieCard";

function Explore() {
  const { genres } = useSelector((state) => state.home);
  const baseUrl = useSelector((state) => state.home.url.backdrop);
  const { mediatype } = useParams();
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ with_genres: "All" });
  let allGenres = [];
  for (let g in genres) {
    allGenres = [...allGenres, genres[g]];
  }

  async function fetchInitialData() {
    setLoading(true);
    const res = await searchAPI(
      `/discover/${mediatype}?page=${pageNum}`,
      filter.with_genres !== "All" && filter
    );
    setData(res);
    setPageNum((prev) => prev + 1);
    setLoading(false);
    // console.log(res);
  }

  console.log(filter);
  async function fetchNextData() {
    searchAPI(
      `/discover/${mediatype}?page=${pageNum}`,
      filter.with_genres !== "All" && filter
    ).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res.results] });
      } else {
        setData(res);
      }

      setPageNum((prev) => prev + 1);
    });
  }

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [mediatype, filter]);

  return (
    <div className="md:mx-[80px] mx-[10px]">
      <div className="flex md:flex-row flex-col md:justify-between items-center">
        <h2 className=" my-2 font-bold">
          {mediatype === "movie" ? "Explore Movies" : "Explore TV Showes"}{" "}
        </h2>
        <div className="z-10 flex gap-2">
          <label htmlFor="sort">Sort by genres</label>
          <select
            onChange={(e) => setFilter({ with_genres: e.target.value })}
            className="bg-gray-200 text-black text-center rounded-md focus:outline-none"
            id="sort"
          >
            <option key="#4dfhf" value="All">
              All
            </option>
            {allGenres.map((g) => {
              return (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {loading && (
        <div className="w-[90vw] h-[50vh] flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div>
          {data?.results?.length > 0 ? (
            <div>
              <InfiniteScroll
                className="flex justify-center flex-wrap gap-5 "
                dataLength={data?.results?.length || []}
                next={fetchNextData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item) => {
                  if (item.media_type === "person") return;
                  const poster = item?.poster_path
                    ? baseUrl + item?.poster_path
                    : noPoster;
                  return (
                    <div key={item.id}>
                      <MovieCard
                        poster={poster}
                        date={item.release_date || item.first_air_date}
                        title={item.title ? item.title : item.name}
                        rating={item.vote_average}
                        genre_ids={item.genre_ids}
                        id={item.id}
                        mediaType={mediatype}
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
          )}
        </div>
      )}
    </div>
  );
}

export default Explore;
