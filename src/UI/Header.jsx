import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appwriteContext } from "../context/AppwriteContext";
import { userContext } from "../context/UserContext";

const Home1 = () => {
  const { user } = useContext(userContext);
  console.log("header---->", user);

  return (
    <div className="py-3 text-xl w-full flex justify-between items-center text-white  p-4 bg-gray-900 px-32 ">
      <Link to={"/"}>
        <p className="bg-gradient-to-br from-sky-500 via-pink-700 to-blue-900 font-black bg-clip-text text-transparent text-4xl">
          Art-Arena
        </p>
      </Link>
      <div className="space-x-24 font-semibold flex ">
        <Link to={"/collections"}>Collections</Link>
        <Link to={"/creators"}>Creators</Link>
        <Link to={"/community"}>Community</Link>
        {user ? (
          <Link
            to={"/profile"}
            className="h-8 w-8 rounded-full bg-gradient-to-bl from-red-500 via-purple-700 to-sky-600 text-center flex justify-center items-center"
          >
            <p className="text-center font-black font-serif">
              {user?.name?.charAt(0)}
            </p>
          </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Home1;
