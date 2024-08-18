import React, { useContext, useState } from "react";
import { HiLogout, HiOutlinePlusCircle } from "react-icons/hi";
import { FaRegEdit, FaUpload } from "react-icons/fa";
import sampleImage from "../assets/profile-picture.webp";
import gradient from "../assets/circle-gradient-2.png";
import gradient2 from "../assets/circle-gradient.png";
import { appwriteContext } from "../context/AppwriteContext";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(userContext);
  const { appwrite, isLoggedIn } = useContext(appwriteContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile || !description) {
      setError("All fields required!");
      console.log("fields empty!!!");
      return;
    }

    try {
      const uploadFile = await appwrite.storage?.createFile(
        "66c21e8b0034b1305a87",
        "unique()",
        selectedFile
      );

      const document = await appwrite.database?.createDocument(
        "66c21cd60010a852dfe2",
        "unique()",
        {
          description,
          image_id: uploadFile.$id,
        }
      );

      console.log("Your Art is uploaded :", document);
    } catch (error) {
      console.log("Error uploading file or creating document", error?.message);
      setError("Failed to upload your art...");
    }
  };

  const handleDummyUpload = async (e) => {
    e.preventDefault();

    const docum = {
      name: "siri",
      kaam: "slavery",
    };
    try {
      await appwrite.createDocument(docum);
      console.log("uploaded---->");
    } catch (error) {
      console.log("dummy error---->", error?.message);
    }
  };

  const navigate = useNavigate();
  console.log(isLoggedIn);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await appwrite.logOutAccount();
      console.log("Logout Successful!!");
      navigate("/login");
    } catch (error) {
      console.log("logout error --->", error?.message);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col items-center bg-gray-900 text-white p-8 min-h-screen px-32">
      <img
        src={gradient}
        alt="gradient"
        className="h-[25%] hue-rotate-90 absolute top-[20%] right-[30%] blur-3xl "
      />
      <img
        src={gradient}
        alt="gradient"
        className="h-[15%] hue-rotate-270 absolute bottom-[30%] right-[10%] blur-3xl "
      />
      <img
        src={gradient2}
        alt="gradient"
        className="h-[30%] hue-rotate-90 absolute bottom-[18%] left-44  blur-[60px]"
      />
      <div className="w-full flex flex-row justify-between  items-center outline  rounded-xl p-2 bg-gray-700/50">
        <div className="flex flex-row gap-10 text-center justify-center items-center ">
          <img
            src={sampleImage}
            alt={user?.name}
            className="w-40 h-40 rounded-2xl object-cover"
          />
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h2 className="text-3xl font-bold">{user?.name}</h2>
            <p className="text-lime-400 text-md">{user?.email}</p>
            <button className="mt-4 flex items-center gap-2 text-lime-400 hover:text-white transition duration-300">
              <FaRegEdit />
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full flex justify-center">
            <button
              onClick={() => setUpload(!upload)}
              className="flex items-center gap-2 bg-lime-500 text-gray-800 px-6 py-3 rounded-2xl hover:bg-lime-600 transition duration-300"
            >
              <HiOutlinePlusCircle size={24} />
              Post Your Work
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-slate-500/25 hover:bg-red-500 w-full text-white  px-6 py-3 rounded-2xl transition duration-300 text-center"
            >
              <HiLogout size={24} />
              Logout
            </button>
          </div>
        </div>
      </div>
      {upload && (
        <div className="flex outline w-full mt-8 rounded-2xl h-[400px] p-4 gap-5">
          <div className="w-[40%] outline h-full rounded-xl flex justify-center items-center overflow-hidden">
            {selectedFile && (
              <img
                src={selectedFile}
                alt="preview"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col w-[60%] justify-evenly gap-2">
            <input
              type="file"
              placeholder="Upload image..."
              accept="image/*"
              onChange={handleFileChange}
              className="w-full outline rounded-md p-2"
            />
            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
              className=" resize-none w-[full] bg-transparent text-white outline outline-2 rounded-xl p-2"
            />
            <button
              onClick={handleDummyUpload}
              className="w-full outline bg-gray-700/50 backdrop-blur-2xl p-1 text-xl rounded-xl hover:bg-green-600 transition-all duration-200 text-center flex justify-center items-center gap-10"
            >
              <FaUpload />
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
