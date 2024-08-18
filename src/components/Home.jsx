import React from "react";
import ArtistSection from "../UI/ArtistSection";
import PopularSection from "../UI/PopularSection";
import HomeMainSection from "../UI/HomeMainSection";
import CallToActionSection from "../UI/CallToActionSection";

const Home = () => {
  return (
    <div className="bg-gray-900 px-32 h-fit">
      <HomeMainSection />
      <PopularSection />
      <ArtistSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
