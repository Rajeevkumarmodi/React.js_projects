import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import MovieCard from "../../components/movieCard/MovieCard";
import Caroudel from "../../components/carousel/Carousel";
import Trending from "../../components/trending/Trending";
import Skeleton from "../../components/skeleton/Skeleton";
import Popular from "../../components/popular/Popular";
import TopRated from "../../components/topRated/TopRated";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
