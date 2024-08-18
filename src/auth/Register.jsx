import React from "react";
import gradient from "../assets/circle-gradient-2.png";

const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900 relative">
      <img
        src={gradient}
        alt="gradient"
        className="h-[30%] hue-rotate-90 absolute top-[10%] right-[3%] blur-3xl hidden lg:block"
      />
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg relative">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Register
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-lime-600 text-white font-bold hover:bg-lime-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-white mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-lime-400 hover:underline">
            Login
          </a>
        </p>
      </div>
      <img
        src={gradient}
        alt="gradient"
        className="h-[20%] hue-rotate-90 absolute bottom-[15%] left-[5%] blur-3xl hidden lg:block"
      />
    </div>
  );
};

export default Register;
