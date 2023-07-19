import React from "react";
import v1 from "../assets/shapes.png";
import v2 from "../assets/circle-gradient.png";
import v3 from "../assets/dog-1.png";

const Home1 = () => {
  return (
    <div className=" h-screen max-w-[100vw] bg-gray-900 p-10 relative ">
      <div className="w-sceen h-10 flex justify-between p-2 items-center ">
        <h1 className="font-semibold text-4xl text-white">Pic-Arena.</h1>
        <main className="h-full">
          <nav>
            <ul className=" list-none flex gap-10 text-slate-300 font-semibold text-xl cursor-pointer">
              <li className="hover:text-white">Collection</li>
              <li className="hover:text-white">Marketplace</li>
              <li className="hover:text-white">Community</li>
              <li>
                <button className=" h-full p-2 outline outline-2  duration-300 outline-slate-400 w-40 rounded-full hover:bg-gray-700 hover:text-white text-center ">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </nav>
        </main>
      </div>
      <img
        src={v1}
        alt="SHAPE"
        className="absolute h-3/6 left-1/2 top-1/4 rotate-12 blur-sm select-none "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-3/6 right-1/6 top-1/6 rotate-12 blur-2xl select-none "
      />
      <img
        src={v2}
        alt="SHAPE"
        className="absolute h-3/6 right-[40%] top-[45%] rotate-12 blur-2xl select-none hue-rotate-90 "
      />
      <img
        src={v3}
        alt="SHAPE"
        className="absolute h-[80%] right-[10%] bottom-3 -rotate-1 animate-wiggle select-none"
      />
      <div className="absolute left-[20%] top-[30%]">
        <h1 className=" text-white font-bold text-7xl ">focus.</h1>
        <h1 className=" text-orange-500 font-bold text-8xl ">shoot.</h1>
        <h1 className=" text-sky-600 font-bold text-9xl ">share.</h1>
      </div>
    </div>
  );
};

export default Home1;
