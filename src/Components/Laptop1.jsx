/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
// ✅ Import images
import imgMain from "/src/assets/201.jpg";
import thumb1 from "/src/assets/204.jpg";
import thumb2 from "/src/assets/201.jpg";
import thumb3 from "/src/assets/202.jpg";

const Laptop1 = () => {
  const [mainImage, setMainImage] = useState(imgMain);

  const product = {
    name: "Dell Latitude 5420 Intel i5 1135G7 14 inches FHD Business Laptop",
    description:
      "8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop (16 GB DDR4 RAM/256 GB SSD/14 HD/Windows 11 Pro)",
    thumbnails: [thumb1, thumb2, thumb3],
  };

  return (
    <div className="flex flex-col bg-black text-white lg:flex-row p-6 gap-8 max-w-full mx-auto">
      {/* Image Section *
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-full overflow-hidden rounded-xl group relative">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name,
                isFluidWidth: true,
                src: mainImage,
              },
              largeImage: {
                src: mainImage,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerStyle: { zIndex: 9 },
            }}
          />
        </div>

        {/* Thumbnails *
        <div className="flex gap-2 mt-4">
          {product.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(thumb)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === thumb ? "border-indigo-600" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info Section *
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-white">{product.description}</p>
        </div>

        <div className="text-lg space-y-1">
          <p><strong>Brand:</strong> Dell</p>
          <p><strong>Model Name:</strong> Dell Latitude 5420</p>
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5-1135G7</p>
          <p><strong>RAM Memory Installed Size:</strong> 8 GB</p>
          <p><strong>Operating System:</strong> Windows 10 Pro</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-lg space-y-1 mt-2">
            <li>Included components: Laptop & Adaptor</li>
            <li>Display size: 14.0 inches</li>
            <li>Ram memory installed size: 8.0 GB</li>
            <li>Hard disk size: 256.0 GB</li>
          </ul>
        </div>

        {/* Buttons *
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Enquiry Now
          </button>
          <Link to="/Laptop">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Back Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop1;*/


import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
// ❌ Don't import the CSS file, since you're using Tailwind
// import 'react-inner-image-zoom/style.css';

// ✅ Import images
import imgMain from "/src/assets/201.jpg";
import thumb1 from "/src/assets/204.jpg";
import thumb2 from "/src/assets/201.jpg";
import thumb3 from "/src/assets/202.jpg";

const Laptop1 = () => {
  const [mainImage, setMainImage] = useState(imgMain);

  const product = {
    name: "Dell Latitude 5420 Intel i5 1135G7 14 inches FHD Business Laptop",
    description:
      "8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop (16 GB DDR4 RAM/256 GB SSD/14 HD/Windows 11 Pro)",
    thumbnails: [thumb1, thumb2, thumb3],
  };

  return (
    <div className="flex flex-col bg-black text-white lg:flex-row p-6 gap-8 max-w-full mx-auto">
      {/* Image Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-md overflow-hidden rounded-xl">
          {/* Inner Image Zoom */}
          <InnerImageZoom
            src={mainImage}
            zoomSrc={mainImage}
            zoomType="hover"
            zoomScale={1.5}
            className="rounded-lg"
            hideHint={true}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4">
          {product.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(thumb)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === thumb ? "border-indigo-600" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-white">{product.description}</p>
        </div>

        <div className="text-lg space-y-1">
          <p><strong>Brand:</strong> Dell</p>
          <p><strong>Model Name:</strong> Dell Latitude 5420</p>
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5-1135G7</p>
          <p><strong>RAM Memory Installed Size:</strong> 8 GB</p>
          <p><strong>Operating System:</strong> Windows 10 Pro</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-lg space-y-1 mt-2">
            <li>Included components: Laptop & Adaptor</li>
            <li>Display size: 14.0 inches</li>
            <li>Ram memory installed size: 8.0 GB</li>
            <li>Hard disk size: 256.0 GB</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Enquiry Now
          </button>
          <Link to="/Laptop">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Back Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop1;

