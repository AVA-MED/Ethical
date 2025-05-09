/*import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images
import image1 from "/src/assets/202.jpg";
import image2 from "/src/assets/203.jpg";
import image3 from "/src/assets/201.jpg";

const Laptop2 = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(image1);  // Default main image

  const product = {
    name: "(Refurbished) Lenovo ThinkPad L490 8th Gen Intel Core i5 Thin & Light FHD Laptop",
    description: "8 GB DDR4 RAM/256 GB SSD/14\" FHD/Windows 11/MS Office/WiFi/Bluetooth/Webcam/Intel Graphics",
    thumbnails: [image2, image3, image1],  // Use imported images here
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

        {/* Small Preview Boxes *
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
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-lg text-white">Professional/Black/1.53Kg, 20W0S03C00</p>
        <p className="text-lg text-white">{product.description}</p>
        <div className="text-lg space-y-1">
          <p><strong>Brand:</strong> Lenovo</p>
          <p><strong>Model Name:</strong> Lenovo ThinkPad</p> 
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5</p>
          <p><strong>RAM Memory Installed Size:</strong> 8 GB</p>
          <p><strong>Operating System:</strong> Windows</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
          <p><strong>Graphics Coprocessor:</strong> Intel UHD Graphics 620</p>
        </div>

        {/* Quantity Selector *

        {/* About Section *
        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-xl space-y-1 mt-2">
            <li>This Renewed product is tested to work and look like new with minimal to no signs of wear & tear.</li>
            <li>Comes with relevant accessories and backed by a minimum six month seller warranty.</li>
            <li>Ideal for professionals/students needing best-in-class, slim and light laptops.</li>
            <li>Intel Core i5 8265U up to 3.9 GHz with Intel Turbo Boost Technology, 6 MB cache.</li>
            <li>Features Intel UHD Graphics, 14-inch FHD display, Webcam, and Microphone.</li>
            <li>Includes USB, Security lock slot, HDMI, LAN, power port, headphone/mic jack.</li>
            <li>Advanced technician support, fast solutions, parts prioritization, and single point of contact.</li>
          </ul>
        </div>

        {/* Buttons *
        <div className="flex gap-4 mt-6">
          <Link to="/Enquiry">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Enquire Now
            </button>
          </Link>
          <Link to="/Laptop">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Back now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop2;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
// ❌ Don't import the CSS file, since you're using Tailwind
// import 'react-inner-image-zoom/style.css';

import image1 from "/src/assets/202.jpg";
import image2 from "/src/assets/203.jpg";
import image3 from "/src/assets/201.jpg";

const Laptop2 = () => {
  const [mainImage, setMainImage] = useState(image1);

  const product = {
    name: "(Refurbished) Lenovo ThinkPad L490 8th Gen Intel Core i5 Thin & Light FHD Laptop",
    description: "8 GB DDR4 RAM/256 GB SSD/14\" FHD/Windows 11/MS Office/WiFi/Bluetooth/Webcam/Intel Graphics",
    thumbnails: [image2, image3, image1],
  };

  return (
    <div className="flex flex-col bg-black text-white lg:flex-row p-6 gap-8 max-w-full mx-auto">
      {/* Image Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-md overflow-hidden rounded-xl">
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

      {/* Info Section */}
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-lg text-white">Professional/Black/1.53Kg, 20W0S03C00</p>
        <p className="text-lg text-white">{product.description}</p>
        <div className="text-lg space-y-1">
          <p><strong>Brand:</strong> Lenovo</p>
          <p><strong>Model Name:</strong> Lenovo ThinkPad</p> 
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5</p>
          <p><strong>RAM Memory Installed Size:</strong> 8 GB</p>
          <p><strong>Operating System:</strong> Windows</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
          <p><strong>Graphics Coprocessor:</strong> Intel UHD Graphics 620</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-xl space-y-1 mt-2">
            <li>This Renewed product is tested to work and look like new with minimal to no signs of wear & tear.</li>
            <li>Comes with relevant accessories and backed by a minimum six month seller warranty.</li>
            <li>Ideal for professionals/students needing best-in-class, slim and light laptops.</li>
            <li>Intel Core i5 8265U up to 3.9 GHz with Intel Turbo Boost Technology, 6 MB cache.</li>
            <li>Features Intel UHD Graphics, 14-inch FHD display, Webcam, and Microphone.</li>
            <li>Includes USB, Security lock slot, HDMI, LAN, power port, headphone/mic jack.</li>
            <li>Advanced technician support, fast solutions, parts prioritization, and single point of contact.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Link to="/Enquiry">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Enquire Now
            </button>
          </Link>
          <Link to="/Laptop">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Back now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop2;

