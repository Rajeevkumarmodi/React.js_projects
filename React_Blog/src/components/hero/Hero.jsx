import React from "react";

function Hero({ content }) {
  return (
    <div className=" w-full flex items-center justify-center mt-[48px] h-[150px] bg-black text-white">
      <div className="text-3xl font-bold">{content}</div>
    </div>
  );
}

export default Hero;
