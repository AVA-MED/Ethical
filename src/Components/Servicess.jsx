
import React from 'react';
import call1 from "/src/assets/2.png";
import call2 from "/src/assets/3.png";
import call3 from "/src/assets/4.png";
import call4 from "/src/assets/5.png";
import call5 from "/src/assets/6.png";
import call6 from "/src/assets/7.png";

const Servicess = () => {
  return (
    <div className="p-6 bg-black">
      <div className="text-center mb-6" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-white">OUR SERVICES</h1>
      </div>

      <div className="grid pt-3 text-2xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[ 
          { src: call1, title:"IT Service & Management" },
          { src: call2, title: "Network Management"},
          { src: call3, title:  "Internet Security" },
          { src: call4, title: "System Automation" },
          { src: call5, title: "Web Development"},
          { src: call6, title: "Data Recovery & Storage Management" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img 
              src={item.src} 
              alt={item.title} 
              className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 mb-2" 
            />
            <p className="text-white font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicess;
