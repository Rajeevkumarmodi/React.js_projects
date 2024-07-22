import React, { useState, useEffect, Fragment } from "react";
import RestaurantCard from "./RestaurantCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function TopRestaurant({ restaurantCarousel }) {
  const [windowWidth, setWindtwWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWindtwWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [windowWidth]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1.3,
    },
  };

  return (
    <div className="mt-10 pb-12 border-b-[1px] border-gray-400">
      <h2 className="text-2xl font-bold">Top restaurant chains in Patna</h2>
      <div className="">
        <Carousel responsive={responsive}>
          {restaurantCarousel?.map((item) => (
            <Link to={`/restaurant/${item?.info.id}`} key={item?.info.id}>
              <RestaurantCard
                name={item.info.name}
                avgRating={item.info.avgRating}
                cuisines={item.info.cuisines}
                areaName={item.info.areaName}
                cloudinaryImageId={item.info.cloudinaryImageId}
                aggregatedDiscountInfoV3={item.info.aggregatedDiscountInfoV3}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TopRestaurant;
