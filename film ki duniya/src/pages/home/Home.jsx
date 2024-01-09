import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import MovieCard from "../../components/movieCard/MovieCard";
import Caroudel from "../../components/carousel/Carousel";
import Trending from "../../components/trending/Trending";
import Skeleton from "../../components/skeleton/Skeleton";
import Popular from "../../components/popular/Popular";

function Home() {
  return (
    <div className="h-[1000px]">
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  );
}

export default Home;
