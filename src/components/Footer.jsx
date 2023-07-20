import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord, BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[35%] w-full bg-white/10 backdrop-blur-2xl p-8 rounded-3xl flex justify-between">
      <div className="h-full w-[20%]">
        <h1 className="text-white font-bold text-3xl mb-5 ">Pic-Arena</h1>
        <p className=" text-white mb-5 tracking-wide">
          Feel free to contact us. Here's Our social medial Handles:
        </p>
        <div className="w-full flex justify-between text-3xl invert-[1] mb-5">
          <div className="opacity-50 cursor-pointer hover:opacity-100">
            <AiFillFacebook />
          </div>
          <div className="opacity-50 cursor-pointer hover:opacity-100">
            <AiFillLinkedin />
          </div>
          <div className="opacity-50 cursor-pointer hover:opacity-100">
            <BsDiscord />
          </div>
          <div className="opacity-50 cursor-pointer hover:opacity-100">
            <BsTelegram />
          </div>
          <div className="opacity-50 cursor-pointer hover:opacity-100">
            <BsTwitter />
          </div>
        </div>
        <p className=" text-white">copyright &#169; PrinceDevelops 2023</p>
      </div>
      <div className="px-10 w-[70%] flex justify-between ">
        <div className="text-white w-[20%] tracking-wider ">
          <h1 className="text-xl mb-5 font-semibold">Explore</h1>
          <p>Art</p>
          <p>Collection</p>
          <p>Domain Name</p>
          <p>Utility</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Statics</h1>
          <p>Ranking</p>
          <p>Activity</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Resources</h1>
          <p>Help Center</p>
          <p>Platform Status</p>
          <p>Partners</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>
        <div className="text-white w-[20%] tracking-wider">
          <h1 className="text-xl mb-5 font-semibold">Company</h1>
          <p>About Us</p>
          <p>Career</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
