import React, { useEffect, useState } from "react";
import Carousel_img1 from "../../assets/Carousel_images/Carousel_img1.png";
import Carousel_img2 from "../../assets/Carousel_images/Carousel_img2.png";
import Carousel_img3 from "../../assets/Carousel_images/Carousel_img3.png";
import Carousel_img4 from "../../assets/Carousel_images/Carousel_img4.png";
import Carousel_img5 from "../../assets/Carousel_images/Carousel_img5.png";
import Carousel_img6 from "../../assets/Carousel_images/Carousel_img6.png";
import Carousel_img7 from "../../assets/Carousel_images/Carousel_img7.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Carousel() {
  const [currentVal, setCurrentVal] = useState(0);
  let current = 200;

  const allImages = [
    Carousel_img1,
    Carousel_img2,
    Carousel_img3,
    Carousel_img4,
    Carousel_img5,
    Carousel_img6,
    Carousel_img7,
  ];

  function handelCarousel(val) {
    return () => {
      if (val == "-1") {
        if (currentVal / 100 >= allImages.length - 1) {
          setCurrentVal(0);
        } else {
          setCurrentVal(currentVal + 100);
        }
      } else {
        if (currentVal / 100 <= 0) {
          setCurrentVal((allImages.length - 1) * 100);
        } else {
          setCurrentVal(currentVal - 100);
        }
      }
    };
  }

  return (
    <div className="  my-3 overflow-x-hidden relative w-full ">
      <div className="z-0">
        <FaArrowAltCircleRight
          onClick={handelCarousel(+1)}
          className=" absolute right-3 top-[50%] z-10   w-10 cursor-pointer text-center rounded-lg text-4xl text-white"
        />
        <FaArrowAltCircleLeft
          onClick={handelCarousel(-1)}
          className=" absolute left-3 top-[50%] z-10  w-10 cursor-pointer text-center rounded-lg text-4xl text-white"
        />
      </div>
      <div
        className="transition-transform ease-in-out duration-500 "
        style={{ transform: `translateX(-${currentVal}%)` }}
      >
        <div className=" flex">
          {allImages.map((img, index) => {
            return (
              <img
                key={index}
                className=" md:h-[400px] h-[150px] w-[100vw] "
                src={img}
                alt={img}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-2 md:left-[45%] left-[40%] flex gap-2">
        {allImages.map((item, index) => {
          return (
            <p
              onClick={() => setCurrentVal(index * 100)}
              key={index}
              className={`md:w-3 w-2 md:h-3 h-2 cursor-pointer rounded-full ${
                currentVal / 100 == index ? "bg-black" : "bg-white"
              }`}
            ></p>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
