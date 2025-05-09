import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom"; 
import "aos/dist/aos.css";

const NetworkingMarketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "NETWORKING MANAGEMENT",
      image:  "/src/assets/14.png",
      points: [
        " Security, Performance & Reliability",
        " Monitoring LAN & WAN",
        " Printer Networking Service",
        " Managed Network Services",
        " Remote Network Services",
        "IP Telephony Services",
        "Wireless Services",
        "Fault Management",
        "Security Management",
      ],
      description:"",
    },
  ]
  return (
    
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src= "/src/assets/16.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            NETWORKING MANAGEMENT
          </h1>
        </div>
      </div>
      <div className="px-6 md:px-16 py-10 bg-black text-white">
  <p className="text-xl leading-relaxed text-justify"> 
  Network management is the process of administering and managing computer networks. Various services provided by this discipline include fault analysis, performance management, provisioning of networks, maintaining the quality of service, and so on. Software that enables network administrators to perform their functions is called network management software.
  </p>
 <p className="text-xl leading-relaxed text-justify"> Networking management is about keeping the flow of communication and information open and available, usually on an intranet or Internet system. A network manager is an expert in dealing with the technology that allows for employee interaction with other employees and customers, as well as allowing network users access to other systems, such as databases and e-mail. Professionals in this field may also be responsible for training others on network use, network security and keeping users accountable for what goes on in a system's network.</p>
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
            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
              {section.title}
            </h2>
            <p className="mt-4 pb-4 text-xl">{section.description}</p>
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

export default NetworkingMarketing;
