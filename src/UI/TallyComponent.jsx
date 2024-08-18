import React from "react";
import v4 from "../assets/profile.png";

const TallyComponent = () => {
  return (
    <div className=" w-[90%] flex flex-wrap p-4 justify-center absolute top-0 bg-white/[0.1] backdrop-blur-3xl rounded-[2rem] lg:rounded-[4rem] lg:h-56 lg:w-[75%] lg:px-12 lg:py-16 lg:flex-nowrap lg:justify-between">
      <div className=" w-full mb-10 flex  justify-evenly gap-5 items-center lg:justify-between lg:w-[60%] lg:mb-0 lg:gap-16">
        <div className="text-white ">
          <p className=" text-xl font-light font-mono">Artwork</p>
          <h1 className=" text-3xl font-bold font-mono lg:text-6xl">0k+</h1>
        </div>
        <div className=" text-orange-400">
          <p className=" text-xl font-light font-mono">Auction</p>
          <h1 className=" text-3xl font-bold font-mono lg:text-6xl">0k+</h1>
        </div>
        <div className=" text-sky-400">
          <p className=" text-xl font-light font-mono">Artist</p>
          <h1 className=" text-3xl font-bold font-mono lg:text-6xl">0k+</h1>
        </div>
      </div>
      <div className="w-full lg:h-full text-lime-400 gap-3 select-none lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <p className=" text-xl font-light font-mono hidden lg:block">
          Featured
        </p>
        <div className="flex items-center justify-center">
          <img
            src={v4}
            alt=""
            className="h-16 rounded-full outline outline-6 outline-gray-700 mx-1 lg:-mx-2"
          />
          <img
            src={v4}
            alt=""
            className="h-16 rounded-full outline outline-6 outline-gray-700 mx-1 lg:-mx-2"
          />
          <img
            src={v4}
            alt=""
            className="h-16 rounded-full outline outline-6 outline-gray-700 mx-1 lg:-mx-2"
          />
          <img
            src={v4}
            alt=""
            className="h-16 rounded-full outline outline-6 outline-gray-700 mx-1 lg:-mx-2"
          />
          <img
            src={v4}
            alt=""
            className="h-16 rounded-full outline outline-6 outline-gray-700 mx-2 lg:-mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TallyComponent;
