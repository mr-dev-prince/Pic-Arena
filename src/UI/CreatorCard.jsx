import React from "react";

const CreatorCard = ({ image, name, title, description }) => {
  return (
    <div className="w-[300px] h-fit flex flex-col items-center bg-gray-800 rounded-2xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-[350px] object-cover" />
      <div className="w-full p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lime-400 mt-2">{title}</p>
        <p className="text-gray-400 mt-4 text-center">{description}</p>
      </div>
    </div>
  );
};

export default CreatorCard;
