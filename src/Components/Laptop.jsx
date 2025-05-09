import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Image Imports
import img1 from "/src/assets/201.jpg";
import img2 from "/src/assets/202.jpg";
import img3 from "/src/assets/203.jpg";
import img4 from "/src/assets/204.jpg";


// ✅ Updated sticker data with imported images
const stickersData = [
  {
    id: 1,
    img: img1,
    title: "Dell Latitude 5420 Intel i5 1135G7 14 inches FHD Business Laptop",
  },
  {
    id: 2,
    img: img2,
    title: "Lenovo ThinkPad L490 8th Gen Intel Core i5 Thin & Light FHD Laptop",
  },
  {
    id: 3,
    img: img3,
    title: "Lenovo ThinkPad T14 (2021) Intel Core i5 11th Gen 14 inches FHD IPS",
  },
  {
    id: 4,
    img: img4,
    title: "Lenovo ThinkPad T490 8th Gen Intel Core i5 Thin & Light Touchscreen Laptop",
  },
 
  
];

const Laptop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Page Header */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-4xl font-bold">LAPTOP</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stickersData.map((sticker, index) => (
          <div
            key={sticker.id}
            className="bg-gray-900 text-white shadow-md rounded-lg overflow-hidden border border-gray-800"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="overflow-hidden">
              <img
                src={sticker.img}
                alt={sticker.title}
                className="w-full h-60 sm:h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold mb-2">{sticker.title}</h2>
              <button
                onClick={() => navigate(`/Laptop/${sticker.id}`)}
                className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
