import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import heroImage from "../../assets/1.png"; // Adjust based on file structure


const Hero = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            IT solutions for <br />
            <span className="text-blue-300">Smarter Business</span>
          </h1>
          <p className="text-gray-300 text-xl">
            24/7 Online & Offline Technical Support
          </p>
          <button className="flex items-center space-x-2 text-blue-300 hover:text-white">
            <PlayCircleIcon className="h-8 w-8" />
            <span>Watch Video</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
          <img
            src={heroImage}
            alt="Data Center Server Room Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

