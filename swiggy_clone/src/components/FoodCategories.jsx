import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../App.css";
import { FOOD_All_CATEGORY } from "../mocks/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FoodCategorys() {
  const [windowWidth, setWindtwWidth] = useState(window.innerWidth);
  const [allCategory, setAllCategory] = useState(FOOD_All_CATEGORY);

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
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full">
      <div className="w-[100%] filx border-b-[1px] border-gray-400 md:pb-9 pb-6 pt-4">
        <Carousel responsive={responsive}>
          {allCategory.map((item) => (
            <div className="" key={item.id}>
              <img
                className="max-w-[139px] max-h-[173px] cursor-pointer duration-300 hover:scale-105 object-cover rounded-3xl"
                alt="category image"
                src={item.src}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FoodCategorys;
