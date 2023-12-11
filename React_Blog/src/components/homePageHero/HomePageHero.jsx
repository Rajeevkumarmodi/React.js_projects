import React from "react";
import { FaArrowRight } from "react-icons/fa";

function HomePageHero() {
  return (
    <div className="w-full">
      <div className="bg-black py-14 text-white text-center px-[50px] w-full">
        <h2 className=" text-2xl md:text-5xl font-bold py-4">
          Welcome to Our Blog
        </h2>
        <p className="pb-4 text-xs md:text-lg">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and <br /> ideas. We offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
      </div>
    </div>
  );
}

export default HomePageHero;
