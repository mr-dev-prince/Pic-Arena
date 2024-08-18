import React from "react";
import gradient from "../assets/circle-gradient.png";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900 relative">
      <img
        src={gradient}
        alt="gradient"
        className="h-[30%] hue-rotate-120 absolute top-[10%] left-[3%] blur-3xl hidden lg:block"
      />
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg relative">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-6 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
      <img
        src={gradient}
        alt="gradient"
        className="h-[20%] hue-rotate-120 absolute bottom-[15%] right-[5%] blur-3xl hidden lg:block"
      />
    </div>
  );
};

export default Login;