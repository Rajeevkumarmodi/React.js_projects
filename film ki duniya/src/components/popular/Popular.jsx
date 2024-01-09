import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import SwitchTabs from "../switchTabs/SwitchTabs";

function Popular() {
  const [activeTab, setActiveTab] = useState("Movie");
  const tabs = ["Movie", "TV"];

  return (
    <div className="my-10 md:mx-[60px] mx-[10px]">
      <div className="flex justify-between py-2">
        <h3 className="font-bold">Popular</h3>
        <SwitchTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <Carousel url={`/${activeTab.toLocaleLowerCase()}/popular`} />
    </div>
  );
}

export default Popular;
