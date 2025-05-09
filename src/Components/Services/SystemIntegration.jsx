
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; 

const SystemIntegration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const sections = [
    {
      title: "Ethical Solution provides System Integration which often includes:",
      image:  "/src/assets/27.png",
      points: [
        "Wireless Solution"
,        "Access Control Mechanism",
        " Server Integration",
        " Cloud Management",
        " Data Clone Integration",
      ],
      description:"",
    }
  ]
  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/src/assets/26.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
          System Integration
          </h1>
        </div>
      </div>
      <div className="px-6 md:px-16 py-10 bg-black text-white">
  <p className="text-xl leading-relaxed text-justify"> 
  On broad terms in the IT world, a Systems Integrator (“SI”) is regarded as a company that specializes in implementing, planning, coordinating, scheduling, testing, improving and sometimes maintaining IT systems.</p>
  <h1 className="text-2xl leading-relaxed font-bold text-justify">Highly recommended as it brings:-</h1>
<li className="text-xl leading-relaxed text-justify">Convenience, Accuracy, Productivity and Efficiency.</li>
  <li className="text-xl leading-relaxed text-justify">Cost-Effectiveness.</li>
  <li className="text-xl leading-relaxed text-justify"> Scalability</li>
  <li className="text-xl leading-relaxed text-justify">Security
</li>
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

export default SystemIntegration;
