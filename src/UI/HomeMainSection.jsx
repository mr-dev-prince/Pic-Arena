import React from "react";
import gradient from "../assets/circle-gradient-2.png";
import gradient2 from "../assets/circle-gradient.png";
import splash from "../assets/splash.png";
import Carousel from "./swiper/Carousel";
import TallyComponent from "./TallyComponent";

const HomeMainSection = () => {
  return (
    <div className="h-fit w-full relative flex flex-col justify-center items-center">
      <img
        src={gradient}
        alt="gradient"
        className="h-[30%] hue-rotate-90 absolute top-[3%] left-[30%] blur-3xl hidden lg:block "
      />
      <img
        src={gradient2}
        alt="gradient"
        className="h-[30%] hue-rotate-90 absolute bottom-[18%] left-0 blur-3xl hidden lg:block"
      />
      <div className="h-screen w-full flex justify-between items-center mb-24">
        <div className="w-[50%] h-full flex flex-col justify-center items-center space-y-3">
          <p className="font-black text-6xl text-white ">Imagine.</p>
          <p className="font-black text-8xl text-red-700">Create.</p>
          <p className="font-black text-9xl text-sky-700 z-10">Share.</p>
        </div>
        <div className=" h-full w-[50%]">
          <div className="w-full h-full flex justify-center items-center">
            <Carousel />
          </div>
        </div>
      </div>
      <TallyComponent />
      <img
        src={splash}
        alt="v1"
        className="absolute top-24 left-44  h-[500px]"
      />
    </div>
  );
};

export default HomeMainSection;
