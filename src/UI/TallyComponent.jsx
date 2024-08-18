import React from "react";
import v4 from "../assets/profile.png";

const TallyComponent = () => {
  return (
    <div className=" w-full flex justify-center gap-44 items-center bg-white/[0.1] backdrop-blur-3xl rounded-xl py-12 ">
      <div className="text-white ">
        <p className=" text-xl font-light font-mono">Artwork</p>
        <h1 className=" text-4xl font-bold font-mono ">0k+</h1>
      </div>
      <div className=" text-orange-400">
        <p className=" text-xl font-light font-mono">Auction</p>
        <h1 className=" text-4xl font-bold font-mono ">0k+</h1>
      </div>
      <div className=" text-sky-400">
        <p className=" text-xl font-light font-mono">Artist</p>
        <h1 className=" text-4xl font-bold font-mono ">0k+</h1>
      </div>
      <div className=" text-red-500">
        <p className=" text-xl font-light font-mono">Featured</p>
        <div className="flex flex-row mt-2">
          <img src={v4} className="h-10 -mr-2 outline outline-2 outline-gray-600 rounded-full" alt="featured acc" />
          <img src={v4} className="h-10 -mr-2 outline outline-2 outline-gray-600 rounded-full" alt="featured acc" />
          <img src={v4} className="h-10 -mr-2 outline outline-2 outline-gray-600 rounded-full" alt="featured acc" />
          <img src={v4} className="h-10 -mr-2 outline outline-2 outline-gray-600 rounded-full" alt="featured acc" />
          <img src={v4} className="h-10 -mr-2 outline outline-2 outline-gray-600 rounded-full" alt="featured acc" />
        </div>
      </div>
    </div>
  );
};

export default TallyComponent;
