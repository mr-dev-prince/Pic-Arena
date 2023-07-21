import React from "react";
import v4 from "../assets/profile.png";
import v2 from "../assets/circle-gradient.png";
import v5 from "../assets/person-5.png";
import v6 from "../assets/person-3.png";
import v7 from "../assets/person-6.png";
import v8 from "../assets/person-4.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home2 = () => {
  return (
    <div className=" h-screen max-w-[100vw] bg-gray-900 p-8 md:p-10 relative flex justify-center items-center flex-col">
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-1/3 right-[70%] top-[10%] rotate-12 blur-3xl select-none hidden xl:block  "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-1/4 right-[45%] top-[60%] rotate-12 hue-rotate-180 blur-3xl select-none hidden xl:block "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-1/3 right-[5%] top-[10%] -hue-rotate-30 rotate-12 blur-3xl select-none hidden xl:block"
      />
      {/* Home-2 tally content starts here */}
      <div className=" w-[90%] flex flex-wrap p-4 justify-center absolute top-0 bg-white/[0.1] backdrop-blur-3xl rounded-[4rem] lg:h-56 lg:w-[75%] lg:px-12 lg:py-16 lg:flex-nowrap lg:justify-between">
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
      {/* Home-2 second content starts here */}
      <div className=" h-[60%] w-[75%] flex items-start justify-between absolute top-[38%]">
        <div className=" h-[100%] w-[60%] gap-8 grid-cols-2 grid-rows-2 place-items-center hidden lg:grid">
          <div className=" relative h-[90%] w-[100%] bg-red-500/[0.1] backdrop-blur-3xl rounded-[4rem] ">
            <img src={v5} alt="" className="absolute bottom-0 left-5 h-60" />
          </div>
          <div className=" h-[90%] w-[100%] bg-blue-500/[0.1] backdrop-blur-3xl rounded-[4rem] ">
            <img src={v6} alt="" className="absolute bottom-0 left-10  h-60" />
          </div>
          <div className=" h-[90%] w-[100%] bg-green-500/[0.1] backdrop-blur-3xl rounded-[4rem] ">
            <img src={v7} alt="" className="absolute bottom-0 left-5 h-60" />
          </div>
          <div className=" h-[90%] w-[100%] bg-white/[0.1] backdrop-blur-3xl rounded-[4rem] ">
            <img src={v8} alt="" className="absolute bottom-0 left-5 h-60" />
          </div>
        </div>
        <div className="h-[100%] w-full lg:w-[35%] lg:[35%] flex flex-col p-6  gap-3 select-none">
          <p className="text-lime-400 text-md mb-4">Popular</p>
          <h1 className="text-6xl lg:text-7xl text-[#EBE8E2] font-normal tracking-wide mb-2">
            Hot trending this week.
          </h1>
          <p className="text-[#DAF7A6] tracking-wide lg:block">
            Trending photos capture powerful moments defining our world, from
            social movements to natural wonders, bridging cultures and igniting
            emotions globally.
          </p>
          <button className=" w-full flex flex-row items-center gap-4 text-white">
            <p></p>
            See more <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home2;

