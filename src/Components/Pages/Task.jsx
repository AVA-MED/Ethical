import React from 'react';

const Task = () => {
  return (
    <div className="w-full">
      {/* Top black bar with red dot */}
      <div className="bg-black h-1 flex justify-center items-center">
      
      </div>

      {/* Main banner section with scrolling text */}
      <div className="bg-black py-4 px-6 overflow-hidden whitespace-nowrap">
        <p className="text-white text-lg font-semibold inline-block animate-marquee">
       
Ethical Solution provide you best assistance in IT field with 24/7 facilities.
        </p>
      </div>

      {/* Add the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Task;
