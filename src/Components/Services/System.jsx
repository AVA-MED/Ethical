import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const System = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "System Automation",
      image:  "/src/assets/44.png",
      points: [
        "Data-Security First: Every automated system we build is structured around your data protection needs.",
        "Customizable Workflows: Solutions tailored specifically for your organization’s structure and scale",
        "Experienced Team: Backed by IT professionals with deep expertise in scripting, integration, and secure system design",
        "IT Infrastructure Automation: Automating system updates, backups, and server maintenance.",
      ],
      description: "",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/src/assets/43.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            System Automation
          </h1>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="px-6 md:px-16 py-10">
        <ul className="space-y-4 list-disc list-inside text-xl leading-relaxed text-justify">
         
          <p>At Ethical Solution, we specialize in delivering intelligent and secure System Automation services tailored to enhance operational efficiency, reduce manual effort, and improve accuracy across IT environments. Our automation solutions are designed with a strong emphasis on data security, reliability, and scalability, making them ideal for enterprises looking to streamline their digital workflows.</p>
          
        </ul>
      </div>

      {/* Section Mapping */}
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center justify-center py-12 border-b border-gray-700 px-6 md:px-16`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-md shadow-md"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          />
          <div
            className="md:w-1/2 mt-6 md:mt-0 md:px-12"
            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
              {section.title}
            </h2>
            {section.description && (
              <p className="mt-2 pb-4 text-xl">{section.description}</p>
            )}
            {section.points.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="text-xl">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
              <Link to="/Enquiry">
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

export default System;
