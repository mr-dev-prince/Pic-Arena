import React from "react";
import v8 from "../assets/circle-gradient-2.png";
import v9 from "../assets/circle-gradient.png";
import Footer from "./Footer";

const Home4 = () => {
  return (
    <div className=" h-screen max-w-full bg-gray-900 p-10 relative ">
      <img
        src={v8}
        alt=""
        className="h-[50%] hue-rotate-90 absolute top-[3%] right-[3%] blur-3xl hidden lg:block "
      />
      <img
        src={v9}
        alt=""
        className="h-[20%] hue-rotate-360 absolute bottom-[18%] left-[3%] blur-2xl hidden lg:block "
      />
      <img
        src={v9} 
        alt=""
        className="h-[30%] hue-rotate-120 absolute bottom-[20%] right-[40%] blur-3xl hidden lg:block"
      />
      <div className="h-[60%] w-[80%] lg:w-[60%] flex flex-col p-5 lg:10 relative ">
        <h1 className="text-white text-4xl lg:text-7xl font-bold tracking-wider mb-8 lg:mb-16">
          Subscribe to Get Updates About Fresh & New Uploads.
        </h1>
        <button className="h-12 w-44 flex justify-center items-center rounded-full bg-lime-500 font-bold uppercase p-5 text-lg text-white duration-200 hover:bg-emerald-500">
          Subscribe
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home4;
