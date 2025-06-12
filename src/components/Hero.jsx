import React from "react";
import profilePic from "../assets/skk.png";

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-white bg-gray-900 h-[100vh] px-6">

      {/* Left Side - Text */}
      <div className="md:w-1/2 h-full flex flex-col justify-center pl-[10%] w-auto">
        <h1 className="text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Subh</span>
        </h1>
        <h2 className="text-4xl font-semibold text-gray-300">
          Java Full Stack Developer
        </h2>

        {/* Button Fixed */}
        <button
          onClick={handleScroll}
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition text-lg inline-block w-fit"
        >
          View My Work
        </button>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center items-center h-full">
        <img
          src={profilePic}
          alt="Subh"
          className="w-[80vh] h-[100vh] object-cover shadow-lg"
        />
      </div>

    </section>
  );
}

export default Hero;