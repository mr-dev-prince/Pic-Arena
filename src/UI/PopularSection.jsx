import React from "react";
import v5 from "../assets/person-5.png";
import v6 from "../assets/person-3.png";
import v7 from "../assets/person-6.png";
import v8 from "../assets/person-4.png";
import gradient2 from "../assets/circle-gradient.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const PopularSection = () => {
  return (
    <div className="h-[400px] w-full flex items-start justify-between mt-32 mb-44 relative  ">
      <img
        src={gradient2}
        alt=""
        className="h-[50%] hue-rotate-360 absolute top-[18%] right-[3%] blur-2xl hidden lg:block "
      />
      <img
        src={gradient2}
        alt=""
        className="h-[30%] hue-rotate-120 absolute bottom-[30%] left-[40%] blur-3xl hidden lg:block"
      />
      <div className="h-full w-[50%] grid grid-cols-2 justify-center gap-16 place-items-center">
        <div className="h-[150px] w-[250px]  rounded-xl relative bg-sky-200/[0.3] backdrop-blur-3xl">
          <img src={v5} alt="" className="absolute bottom-0 h-[200px]" />
        </div>
        <div className="h-[150px] w-[250px]  rounded-xl relative bg-red-200/[0.3] backdrop-blur-3xl">
          <img src={v6} alt="" className="absolute bottom-0 h-[200px]" />
        </div>
        <div className="h-[150px] w-[250px]  rounded-xl relative bg-blue-200/[0.3] backdrop-blur-3xl">
          <img src={v7} alt="" className="absolute bottom-0 h-[200px]" />
        </div>
        <div className="h-[150px] w-[250px]  rounded-xl relative bg-orange-200/[0.3] backdrop-blur-3xl">
          <img src={v8} alt="" className="absolute bottom-0 h-[200px]" />
        </div>
      </div>
      <div className="h-[100%] w-[50%] flex flex-col p-6  gap-3 select-none ">
        <p className="text-lime-400 text-md mb-4">Popular</p>
        <h1 className="text-6xl font-bold lg:text-7xl text-[#EBE8E2] tracking-wide mb-2">
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
  );
};

export default PopularSection;
