import React from "react";
import gradient from "../assets/circle-gradient-2.png";
import gradient2 from "../assets/circle-gradient.png";
import CommunityMemberCard from "../UI/CommunityMemberCard";

const Community = () => {
  const members = [
    {
      name: "Alice Johnson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
      description: "Digital artist passionate about creating immersive art.",
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
      description: "Sculptor and art educator focused on contemporary designs.",
    },
    {
      name: "Sophia Zhang",
      location: "Beijing, China",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      description: "Mixed media artist exploring the boundaries of creativity.",
    },
    {
      name: "Carlos Ruiz",
      location: "Madrid, Spain",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
      description: "Photographer capturing the essence of urban life.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col justify-center items-center py-24 relative px-24">
      <img
        src={gradient}
        alt="gradient"
        className="h-[20%] hue-rotate-90 absolute top-[3%] right-[3%] blur-3xl hidden lg:block "
      />
      <img
        src={gradient2}
        alt="gradient"
        className="h-[20%] hue-rotate-90 absolute bottom-[18%] left-[3%] blur-3xl hidden lg:block"
      />
      <h1 className="text-white text-5xl font-bold mb-12">Our Community</h1>
      <p className="text-gray-400 text-xl text-center max-w-3xl mb-16">
        Join our vibrant community of artists, creators, and art enthusiasts.
        Connect, collaborate, and share your passion with others who appreciate
        the beauty of creativity.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {members.map((member, index) => (
          <CommunityMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Community;