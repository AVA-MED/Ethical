import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";

import remoteImg from "/src/assets//35.png";
import phoneImg from "/src/assets//34.png";
import hardwareImg from "/src/assets//36.png";
import heroVideo from "/src/assets/32.mp4";

const stickersData = [
  {
    id: 1,
    img: remoteImg,
    title: "Remote Desktop Support",
    points: [
      "Enables technicians to troubleshoot and repair issues as if they were in front of the user's computer.",
      "File Transfer facilitates fast and secure file transfer from the technician to the user.",
      "Multi-Platform Support compatible with Windows, macOS, Linux, and mobile devices.",
      "Maintains accountability and offers references for future troubleshooting.",
      "Employing encryption standards and authentication mechanisms to secure data and connections.",
    ],
    description: "",
  },
  {
    id: 3,
    img: phoneImg,
    title: "Telephonic Support",
    points: [
      "Real-time interaction enables instant troubleshooting and resolution.",
      "Human Interaction offers personal interaction that could be used in building trust and rapport with the customers.",
      "24/7 Availability: Most companies provide round-the-clock support for critical services.",
      "Call Recording & Monitoring: Useful for quality assurance, training, and compliance purposes.",
      "Multi-Language Support: Able to serve varying customer bases through supporting different language",
    ],
    description: "",
  },
  {
    id: 6,
    img: hardwareImg,
    title: "Hardware & Software Support",
    points: [
      "Diagnosis and repair of hardware failures (PCs, servers, printers, etc.)",
      "Software installation, configuration, and troubleshooting",
      "System updates, patches, and performance optimization",
      "Antivirus setup and malware removal",
      "Peripheral support (printers, scanners, monitors, etc.)",
      "Operating system support across Windows, macOS, and Linux",
    ],
    description: "",
  },
];

const Support = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Video Banner */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Your Trusted IT Support Partner
          </h1>
          <p className="text-xl max-w-xl">
            Innovative solutions and 24/7 support to help your business thrive in the digital world.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="text-center my-10 px-4" data-aos="fade-down">
        <h1 className="text-3xl font-bold">OUR SERVICES</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-10" data-aos="fade-up">
        {stickersData.map((sticker, index) => (
          <div
            key={sticker.id}
            className="bg-black shadow-md rounded-lg overflow-hidden border border-gray-700"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={sticker.img} alt={sticker.title} className="w-full h-80 object-cover" />

            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-semibold underline">{sticker.title}</h2>

              {sticker.points && (
                <ul className="list-disc text-left pl-6 space-y-2 text-base">
                  {sticker.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <Link to="/Enquiry" className="mt-4 inline-block">
                <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
