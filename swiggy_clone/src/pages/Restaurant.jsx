import React from "react";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../utils/useRestaurantMenu";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

import MenuItems from "../components/MenuItems";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { MdTimer } from "react-icons/md";
import CardSkeletons from "../components/CardSkeletons";

function Restaurant() {
  const { resId } = useParams();
  const { restaurantInfo, restaurantMenu } = useRestaruntMenu(resId);

  if (!restaurantInfo || !restaurantMenu) {
    return <CardSkeletons />;
  }

  return (
    <div className=" max-w-[800px] mt-5 mx-auto">
      <div className="max-w-[800px] h-8 text-xs text-[#93959f] flex items-center justify-between">
        <div>
          <span className="mx-1 text-inherit">Home</span>
          <span className="mx-1 text-inherit">/</span>
          <span className="mx-1 text-inherit">{restaurantInfo.name}</span>
        </div>
        <div className="flex cursor-pointer gap-4 pr-4">
          <AiOutlineHeart size={23} />
          <AiOutlineSearch size={23} color="black" />
        </div>
      </div>
      <div className="my-0 mx-4 ">
        <div className="pt-4 mb-4 flex justify-between">
          <div className="mr-4 inline-block">
            <h1 className="text-xl font-bold mb-2 text-[#282c3f] capitalize">
              {restaurantInfo.name}
            </h1>

            <p className="text-sm text-[#93959f] ">
              {restaurantInfo?.cuisines.join(", ")}
            </p>
            <p className="text-sm text-[#93959f]">
              <span>{restaurantInfo?.areaName} </span>
              <span>{restaurantInfo?.sla?.lastMileTravel} km</span>
            </p>
          </div>
          <button className="p-2 border border-[#e9e9eb]">
            <h3 className="text-[#3d9b6d] flex items-center gap-2 pb-[10px] mb-2 border-b font-bold">
              <FaStar className="text-xl text-orange-400" />
              {restaurantInfo?.avgRating}
            </h3>
            <h3 className="text-xs font-semibold text-[#8b8d97]">
              {restaurantInfo?.totalRatingsString}
            </h3>
          </button>
        </div>
        <hr className="border-dotted" />
        <div className="flex gap-6 mt-2">
          <h3 className="font-bold flex items-center gap-3">
            <MdTimer className="text-xl" />
            {restaurantInfo?.sla?.deliveryTime} MINS
          </h3>
          <h3 className="font-bold flex items-center gap-2">
            <HiOutlineCurrencyRupee className="text-xl" />
            {restaurantInfo?.costForTwoMessage}
          </h3>
        </div>
        <div className="hidden md:flex justify-between mt-2">
          <p>50% off upto Rs 100</p>
          <p>Flat Rs 100 off</p>
          <p>Flat 20 % off</p>
          <p>20% off upto Rs 100</p>
        </div>
      </div>

      <div></div>
      <div className="p-5">
        <ul data-testid="menu">
          {restaurantMenu.map((item, index) => {
            if (item.card.card.title) {
              return (
                <MenuItems
                  ItemCards={
                    item?.card?.card?.itemCards || item?.card?.card?.categories
                  }
                  key={index}
                  categoryLength={
                    item?.card?.card?.itemCards?.length ||
                    item?.card?.card?.categories?.length
                  }
                  title={item?.card?.card?.title}
                  nestingLevel={0}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Restaurant;
