import React, { useContext, useEffect, useState } from "react";
import gradient from "../assets/circle-gradient-2.png";
import { appwriteContext } from "../context/AppwriteContext.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { appwrite } = useContext(appwriteContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters!");
      return;
    }

    const user = { name, email, password };

    try {
      const newUser = await appwrite.createAccount(user);
      console.log("User Registration Successful!!", newUser);
      setError("");
      navigate("/login");
    } catch (error) {
      console.error("User registration error", error);
      setError(error?.message || "An error occurred during registration");
    }
  };

  return (
    <div className="h-[90vh] w-full flex justify-center items-center bg-gray-900 relative">
      <img
        src={gradient}
        alt="gradient"
        className="h-[30%] hue-rotate-90 absolute top-[10%] right-[3%] blur-3xl hidden lg:block"
      />
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg relative">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Register
        </h2>
        <p className="text-red-500 h-10 my-2">{error}</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <p className="text-white text-sm mt-1">Minimum 8 characters.</p>
          </div>
          <button
            type="submit"
            onClick={handleRegister}
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
