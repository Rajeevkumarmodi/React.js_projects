import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import MovieCard from "../../components/movieCard/MovieCard";
import Caroudel from "../../components/carousel/Caroudel";

function Home() {
  return (
    <div className="h-[1000px]">
      <HeroBanner />
      <SwitchTabs />
      <div className="m-10">
        <Caroudel />
      </div>
    </div>
  );
}

export default Home;
