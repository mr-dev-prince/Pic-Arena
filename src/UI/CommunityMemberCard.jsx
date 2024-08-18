import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const CommunityMemberCard = ({ name, location, image, description }) => {
  return (
    <div className="w-[300px] lg:w-[400px] p-6 bg-gray-800/60 backdrop-blur-xl rounded-2xl flex flex-col items-center text-center space-y-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-2xl font-bold text-white">{name}</h2>
      <p className="text-lime-400 text-sm">{location}</p>
      <p className="text-gray-400 text-md">{description}</p>
      <button className="mt-4 flex items-center gap-2 text-lime-400 hover:text-white transition duration-300">
        <HiOutlineChatAlt2 />
        Connect
      </button>
    </div>
  );
};

export default CommunityMemberCard;