import React from "react";
import v8 from "../assets/circle-gradient-2.png";
import v9 from "../assets/circle-gradient.png";
import v10 from "../assets/painting-girl-2.jpg";
import v11 from "../assets/sculpture-1.jpg";
import v12 from "../assets/profile-1.jpg";
import v13 from "../assets/profile-2.jpg";
import l1 from "../assets/google-glass.svg";
import l2 from "../assets/oculus.svg";
import l3 from "../assets/binance.svg";
import l4 from "../assets/spectacles.svg";
import l5 from "../assets/meta.svg";

const Home3 = () => {
  return (
    <div className="h-screen max-w-[100vw] bg-gray-900 lg:p-10 relative flex justify-center ">
      {/*gradients-added*/}
      <img
        src={v8}
        alt=""
        className="h-[50%] hue-rotate-90 absolute top-[3%] right-[3%] blur-3xl hidden lg:block "
      />
      <img
        src={v9}
        alt=""
        className="h-[30%] hue-rotate-90 absolute bottom-[18%] left-[3%] blur-3xl hidden lg:block"
      />
      {/*the main div*/}
      <div className="h-[80%] lg:h-[50%] w-[80%] absolute top-[5%] lg:top-[20%] flex flex-row">
        <div className="h-full w-[30%] p-4 mr-5 hidden lg:block">
          <p className="text-md text-lime-500 mb-5  ">Artist</p>
          <h1 className="text-white text-8xl mb-5 ">Top List Artist.</h1>
          <p className="text-yellow-500 tracking-wider text-justify ">
            we have dozens of artists who contribute to create amazing work.
          </p>
        </div>
        <div className="h-full w-full lg:w-[70%] flex flex-wrap lg:flex-nowrap justify-evenly gap-20">
          {/* neeraj sharma */}
          <div className=" h-64 lg:h-full w-full lg:w-[90%] flex justify-center items-end rounded-3xl bg-gray-500/[0.1] backdrop-blur-xl relative">
            <div className=" h-16 lg:h-28 w-16 lg:w-28 rounded-full absolute top-[5%] lg:top[-14%]  flex  overflow-hidden  justify-center items-center bg-lime-400/20 backdrop-blur-xl ">
              <img src={v13} alt="" className="w-26 bg-no-repeat bg-contain " />
            </div>
            <div className="absolute bottom-[50%] flex justify-center items-center flex-col w-full ">
              <h1 className="text-xl lg:text-2xl text-white font-bold">
                Neeraj Sharma
              </h1>
              <p className=" text-white font-light text-md tracking-wide">
                Chandigarh, India
              </p>
            </div>
            <div className=" w-full h-[45%] bg-lime-400/[0.3] backdrop-blur-3xl rounded-3xl flex justify-center items-center overflow-hidden">
              <img src={v10} alt="" />
            </div>
          </div>
          {/* megan stanley */}
          <div className="h-64 lg:h-full w-full lg:w-[90%] flex justify-center items-end rounded-3xl bg-gray-500/[0.1] backdrop-blur-xl relative  ">
            <div className="h-16 lg:h-28 w-16 lg:w-28 rounded-full absolute top-[5%] lg:top[-14%]  flex  overflow-hidden  justify-center items-center bg-lime-400/20 backdrop-blur-xl">
              <img src={v12} alt="" className="w-26 bg-no-repeat bg-contain " />
            </div>
            <div className="absolute bottom-[50%] flex justify-center items-center flex-col w-full ">
              <h1 className="text-xl lg:text-2xl text-white font-bold">
                Megan Stanley
              </h1>
              <p className=" text-white font-light text-md tracking-wide">
                Amsterdam, USA
              </p>
            </div>
            <div className=" w-full h-[45%] bg-yellow-400/[0.3] backdrop-blur-3xl rounded-3xl flex justify-center items-center overflow-hidden ">
              <img src={v11} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*the main div end*/}
      {/*Footer div*/}
      <div className="w-full h-[16%] absolute bottom-7 lg:bottom-5 p-5 flex flex-wrap lg:flex-nowrap justify-evenly items-center flex-row">
        <div>
          <img src={l2} alt="" className="h-20 lg:24 invert-[100]" />
        </div>
        <div>
          <img src={l1} alt="" className="h-20 lg:24 invert-[100]" />
        </div>
        <div>
          <img src={l3} alt="" className="h-20 lg:24 invert-[100] " />
        </div>
        <div>
          <img src={l4} alt="" className="h-20 lg:24 invert-[100]" />
        </div>
        <div>
          <img src={l5} alt="" className="h-20 lg:24 invert-[100]" />
        </div>
      </div>
      {/*Footer div end*/}
    </div>
  );
};

export default Home3;
