import React from "react";

function PageNotFound() {
  const url = window.location.href;
  return (
    <div className="mt-[50px] w-full h-[90vh] flex items-center justify-center ">
      <div className="flex flex-col items-center gap-5">
        <h2 className="font-bold md:text-6xl text-6xl">4😒4</h2>
        <p className="font-bold text-3xl">Page Not Found</p>
        <p className="font-bold px-10">
          The requested URL{" "}
          <span className="text-blue-500 underline">{url}</span> was not found
          on this server.
        </p>
        <button className="bg-blue-500 px-8 py-2 rounded-lg font-bold text-white text-xl">
          Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
