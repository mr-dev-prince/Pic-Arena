import React from "react";
import v1 from "../assets/shapes.png";
import v2 from "../assets/circle-gradient.png";
import v3 from "../assets/dog-1.png";
import { IoSearchCircle, IoReorderThree } from "react-icons/io5";

const Home1 = () => {
  return (
    <div className=" h-screen max-w-[100vw] bg-gray-900 p-4 relative md:p-10 ">
      <div className="w-full h-[7%] flex justify-between p-2 items-center">
        <h1 className=" h-full font-semibold text-2xl text-white">
          Pic-Arena.
        </h1>

        <div className="h-full w-[25%] rounded-full bg-white text-[100%] justify-center items-center flex-row hidden xl:flex ">
          <input
            type="text"
            className="h-full w-full p-4 outline-none border-none rounded-full text-lg font-semibold tracking-wider "
          />
          <button type="submit">
            <IoSearchCircle className="text-3xl" />
          </button>
        </div>

        <main className="h-full hidden lg:block">
          <nav>
            <ul className=" list-none flex gap-10 text-slate-300 font-semibold text-xl cursor-pointer">
              <li className="hover:text-white">Collection</li>
              <li className="hover:text-white">Marketplace</li>
              <li className="hover:text-white">Community</li>
              <li>
                <button className=" h-full p-2 outline outline-2  duration-300 outline-slate-400 w-40 rounded-full hover:bg-gray-700 hover:text-white text-center ">
                  Sign In
                </button>
              </li>
            </ul>
          </nav>
        </main>
        <IoReorderThree className="text-white text-6xl lg:hidden" />
      </div>
      <img
        src={v1}
        alt="SHAPE"
        className="absolute h-3/6 left-1/2 top-1/4 rotate-12 blur-sm select-none hidden xl:block  "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-3/6 right-1/6 top-1/6 rotate-12 blur-2xl select-none hidden xl:block "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-3/6 right-[40%] top-[45%] rotate-12 blur-2xl select-none hue-rotate-90 hidden xl:block "
      />
      <img
        src={v3}
        alt="Dog"
        className="absolute h-[50%] right-[20%] bottom-3 -rotate-1 animate-wiggle select-none lg:h-[80%] lg:right-[10%]"
      />
      <div className="absolute left-[20%] top-[15%] lg:top-[30%]">
        <h1 className=" text-white font-bold text-6xl xl:text-7xl">focus.</h1>
        <h1 className=" text-orange-500 font-bold text-7xl xl:text-8xl ">
          shoot.
        </h1>
        <h1 className=" text-sky-600 font-bold text-8xl xl:text-9xl">share.</h1>
      </div>
    </div>
  );
};

export default Home1;
