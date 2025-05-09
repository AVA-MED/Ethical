import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import AOS from "aos";
import "aos/dist/aos.css";

const It = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fruits = [
    {
      title: "IT Infrastructure Management",
      image: "/src/assets/10.png",
      points: [
        "System Hardware & Software Solution",
        "Printer Repairing Solution",
        "Network Management",
        "Maintenance & Installation of Softwares.",
        "Workstation & Server Solution.",
        "Antivirus Management.",
        "Electronic Data archiving",
        "Data Recovery and storage solution",
        "Data Security Solution",
        "Internet & Intranet Solution",
        "Application Maintenance",
        "Cartridges",
      ],
      description:
        "IT is the backbone of a business efficiency eco-system and we provide complete solutions to address all aspects of your business, and across the entire chain – from conceptualization, to implementation and actually running the process for you.",
    },
    {
      title: "IT Consulting:",
      image:  "/src/assets/12.png",
      points: [
        "Remote Desktop Support",
        "Application Maintenance Service",
        "Risk Management",
        "Patch Management",
        "Internet Security",
        "Electronic Data archiving",
        "Data Recovery and storage solution",
        "Data Security Solution",
        "Internet & Intranet Solution",
        "Application Maintenance",
        "Cartridges",
      ],
      description:
        "A Unique feature provided by Ethical Solution is IT Consulting Service. Ethical Solution provides information solution by the professionals to upgrade a best technology strategy for your business.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/src/assets/11.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            IT Service & Consulting
          </h1>
        </div>
      </div>

      {/* IT Sections */}
      {fruits.map((fruit, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center justify-center py-10 border-b border-gray-300 px-6 md:px-16`}
        >
          <img
            src={fruit.image}
            alt={fruit.title}
            className="w-[300px] h-[300px] object-cover rounded-md shadow-md"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          />
          <div
            className="md:w-1/2 mt-6 md:mt-0 md:px-12"
            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
              {fruit.title}
            </h2>
            <p className="mt-4 pb-2 text-xl">{fruit.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {fruit.points.map((point, i) => (
                <li key={i} className="text-xl">
                  {point}
                </li>
              ))}
            </ul>

            {/* Enquire Now Button */}
            <div className="mt-6">
              <Link to="/enquiry">
                <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default It;
