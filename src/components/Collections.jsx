import React from "react";
import gradient1 from "../assets/circle-gradient-2.png";
import gradient2 from "../assets/circle-gradient.png";
import collectionItem1 from "../assets/collection-1.jpeg";
import collectionItem2 from "../assets/collection-2.webp";
import collectionItem3 from "../assets/collection-3.webp";
import collectionItem4 from "../assets/collection-4.jpeg";

const CollectionPage = () => {
  return (
    <div className="relative h-[100vh] w-full bg-gray-900 pt-24 ">
      <img
        src={gradient2}
        alt="Background"
        className="absolute top-0 left-0 h-[50%] object-cover opacity-30 blur-3xl"
      />
      <img
        src={gradient1}
        alt="Background"
        className="absolute top-[50%] right-0 h-[50%] object-cover opacity-30 blur-2xl"
      />
      <div className="relative h-full w-full flex flex-col justify-center items-center">
        <div className="w-full h-[20%] flex flex-col justify-center items-center mb-12">
          <p className="text-lime-400 text-md mb-4">Collection</p>
          <h1 className="text-6xl font-bold lg:text-7xl text-white tracking-wide mb-2">
            Our Exclusive Collection
          </h1>
          <p className="text-[#DAF7A6] text-xl text-center">
            Discover our curated collection of unique artworks and collectibles. 
            Explore pieces that captivate and inspire.
          </p>
        </div>
        <div className="h-[60%] w-full flex flex-wrap justify-center gap-8">
          <div className="relative w-[300px] h-[400px] rounded-xl bg-gray-800 overflow-hidden">
            <img src={collectionItem1} alt="Collection Item 1" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h2 className="text-2xl font-bold">Hand-Made</h2>
              <p className="text-md">Chuck Norris</p>
            </div>
          </div>
          <div className="relative w-[300px] h-[400px] rounded-xl bg-gray-800 overflow-hidden">
            <img src={collectionItem2} alt="Collection Item 2" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h2 className="text-2xl font-bold">Paper Art</h2>
              <p className="text-md">Simon Doull</p>
            </div>
          </div>
          <div className="relative w-[300px] h-[400px] rounded-xl bg-gray-800 overflow-hidden">
            <img src={collectionItem3} alt="Collection Item 3" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h2 className="text-2xl font-bold">Clay Art</h2>
              <p className="text-md">Nolan Cipher</p>
            </div>
          </div>
          <div className="relative w-[300px] h-[400px] rounded-xl bg-gray-800 overflow-hidden">
            <img src={collectionItem4} alt="Collection Item 4" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h2 className="text-2xl font-bold">Antique Collection</h2>
              <p className="text-md">Matt Henry</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center items-center ">
          <button className="px-8 py-4 text-white bg-lime-500 rounded-lg font-semibold text-lg hover:bg-lime-600 transition">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;