import React from "react";
import gradient from "../assets/circle-gradient-2.png";
import gradient2 from "../assets/circle-gradient.png";
import creator1 from "../assets/profile-1.jpg";
import creator2 from "../assets/profile-2.jpg";
import creator3 from "../assets/profile-1.jpg";
import creator4 from "../assets/profile-2.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CreatorCard from "../UI/CreatorCard";

const creatorsdetails = [
  {
    image: creator1,
    name: "Sophie Williams",
    title: "Digital Artist",
    description: "Crafting vibrant digital landscapes and surreal artworks.",
  },
  {
    image: creator2,
    name: "Lucas Moore",
    title: "Sculptor",
    description: "Breathing life into clay with expressive sculptures.",
  },
  {
    image: creator3,
    name: "Isabella Johnson",
    title: "Graphic Designer",
    description: "Designing eye-catching visuals for the digital world.",
  },
  {
    image: creator4,
    name: "Ethan Brown",
    title: "Photographer",
    description: "Capturing moments that tell powerful stories.",
  },
];

const Creators = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center relative pb-12">
      <img
        src={gradient}
        alt="gradient"
        className="absolute top-0 right-0 h-[30%] hue-rotate-90 blur-3xl hidden lg:block"
      />
      <img
        src={gradient2}
        alt="gradient"
        className="absolute bottom-24 left-0 h-[30%] hue-rotate-90 blur-3xl hidden lg:block"
      />

      <div className="w-full text-center mt-24 mb-16">
        <h1 className="text-5xl lg:text-8xl font-bold">Meet Our Creators</h1>
        <p className="text-xl text-lime-400 mt-4">
          Innovators behind the scenes
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-16 px-8 z-50">
        {creatorsdetails.map((creator, index) => (
          <CreatorCard
            key={index}
            image={creator.image}
            name={creator.name}
            title={creator.title}
            description={creator.description}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="w-full flex justify-center mt-16 mb-24">
        <button className="flex items-center gap-4 bg-lime-500 text-black px-8 py-4 rounded-full text-xl hover:bg-lime-400 transition">
          Explore More Creators <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Creators;
