import React from 'react';
import aboutImage from '/src/assets/8.png'; // Adjust path as necessary

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-20 flex flex-col md:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={aboutImage}
          alt="Cyber Security"
          className="rounded-2xl w-full h-auto"
          data-aos="fade-right"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2" data-aos="fade-left">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">About Us</h2>
        <p className="text-xl font-semibold mb-6 text-center md:text-left">
          Ethical Solution provide you best assistance in IT field with 24/7 facilities.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center bg-gray-800 rounded-full px-6 py-3">
            <span className="text-green-400 mr-4 text-xl">✔</span>
            <span>Let's be Digitally Sure</span>
          </li>
          <li className="flex items-center bg-gray-800 rounded-full px-6 py-3">
            <span className="text-green-400 mr-4 text-xl">✔</span>
            <span>Simplified your Business with Basic Web Applications</span>
          </li>
          <li className="flex items-center bg-gray-800 rounded-full px-6 py-3">
            <span className="text-green-400 mr-4 text-xl">✔</span>
            <span>Your Partner for Innovations goes with your Ethical Needs for Technology</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
