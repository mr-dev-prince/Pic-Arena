import React from "react";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="py-3 text-xl w-full flex justify-between items-center text-white  p-4 bg-gray-900 px-32 ">
      <Link to={"/"}>
        <p className="bg-gradient-to-br from-sky-500 via-pink-700 to-blue-900 font-black bg-clip-text text-transparent text-4xl">
          Art-Arena
        </p>
      </Link>
      <div className="space-x-24 font-semibold">
        <Link to={"/collections"}>Collections</Link>
        <Link to={"/creators"}>Creators</Link>
        <Link to={"/community"}>Community</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Home1;
