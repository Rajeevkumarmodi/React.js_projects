import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import SwitchTabs from "../switchTabs/SwitchTabs";

function Trending() {
  const [activeTab, setActiveTab] = useState("Day");
  const tabs = ["Day", "Week"];

  return (
    <div className="my-10 md:mx-[60px] mx-[10px]">
      <div className="flex justify-between py-2">
        <h3 className="font-bold">Trending</h3>
        <SwitchTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <Carousel url={`/trending/movie/${activeTab.toLocaleLowerCase()}`} />
    </div>
  );
}

export default Trending;
