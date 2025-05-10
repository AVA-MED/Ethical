/*import React, { useState } from "react";

import { Link } from "react-router-dom";

// Import images
import image1 from "/src/assets/204.jpg";
import image2 from "/src/assets/201.jpg";
import image3 from "/src/assets/202.jpg";

const Laptop4 = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(image1);  // Set default image

  const product = {
    name: "(Refurbished) Lenovo ThinkPad T490 8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop...",
    description: "8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop (16 GB DDR4 RAM/256 GB SSD/14\" HD/Windows 11 Pro)",
    thumbnails: [image1, image2, image3],  // Use imported images here
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
        <p className="text-lg text-white">{product.description}</p>
        <div className="text-lg space-y-1">
          <p><strong>Brand:</strong> Lenovo</p>
          <p><strong>Model Name:</strong> Lenovo ThinkPad T490</p>
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5</p>
          <p><strong>RAM Memory Installed Size:</strong> 16 GB</p>
          <p><strong>Operating System:</strong> Windows</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
          <p><strong>CPU Speed:</strong> 1.6 GHz</p>
        </div>

        {/* About Section *
        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-xl space-y-1 mt-2">
            <li>Lenovo ThinkPad T490 gives fast performance at an affordable price. Laptop Ideal for professionals/students needing best-in-class, business rugged notebooks. It's powered with Intel Core i5 8365U 1.6 GHz upto 4.1 GHz with Intel Turbo Boost Technology, 16 GB DDR4 RAM along with 256 GB SSD Storage which enhances the overall performance of the machine and 6 MB cache.</li>
            <li>Features like Intel UHD Graphics make it an ideal product to carry out all your tasks in one place.</li>
            <li>Ideal for professionals/students needing best-in-class, slim and light laptops.</li>
            <li>It offers Brighter, crisper display with 14-inch FHD Touch Screen along with Webcam and Microphone which enhances your video conferencing experience. Pre-installed with Windows 11 and MS Office (Trial Version).</li>
            <li>It encompasses a wide range of slots and ports, it comes along with USB, Security lock slot, HDMI port, LAN Port (RJ-45), Power connector, Headphone/Microphone combo jack reader. It also comes with Bluetooth making your wireless connectivity easier and faster.</li>
            <li>6 Month Extendable Pan India Warranty. Experience hassle-free ownership, with Pan India comprehensive warranty covering component, labor, and shipping (If required).</li>
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

export default Laptop4;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// ✅ Import images
import image1 from "/src/assets/204.jpg";
import image2 from "/src/assets/201.jpg";
import image3 from "/src/assets/202.jpg";

const Laptop4 = () => {
  const [mainImage, setMainImage] = useState(image1); // Set default image

  const product = {
    name: "(Refurbished) Lenovo ThinkPad T490 8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop...",
    description: "8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop (16 GB DDR4 RAM/256 GB SSD/14\" HD/Windows 11 Pro)",
    thumbnails: [image1, image2, image3], // Use imported images here
  };

  return (
    <div className="flex flex-col bg-black text-white lg:flex-row p-6 gap-8 max-w-full mx-auto">
      {/* Image Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-md overflow-hidden rounded-xl">
          {/* Image Zoom */}
          <Zoom>
            <img
              src={mainImage}
              alt="Zoomable"
              className="rounded-lg object-cover w-full"
            />
          </Zoom>
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
          <p><strong>Brand:</strong> Lenovo</p>
          <p><strong>Model Name:</strong> Lenovo ThinkPad T490</p>
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 256 GB</p>
          <p><strong>CPU Model:</strong> Intel Core i5</p>
          <p><strong>RAM Memory Installed Size:</strong> 16 GB</p>
          <p><strong>Operating System:</strong> Windows</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
          <p><strong>CPU Speed:</strong> 1.6 GHz</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-lg space-y-1 mt-2">
            <li>Lenovo ThinkPad T490 gives fast performance at an affordable price. Laptop Ideal for professionals/students needing best-in-class, business rugged notebooks. It's powered with Intel Core i5 8365U 1.6 GHz upto 4.1 GHz with Intel Turbo Boost Technology, 16 GB DDR4 RAM along with 256 GB SSD Storage which enhances the overall performance of the machine and 6 MB cache.</li>
            <li>Features like Intel UHD Graphics make it an ideal product to carry out all your tasks in one place.</li>
            <li>Ideal for professionals/students needing best-in-class, slim and light laptops.</li>
            <li>It offers Brighter, crisper display with 14-inch FHD Touch Screen along with Webcam and Microphone which enhances your video conferencing experience. Pre-installed with Windows 11 and MS Office (Trial Version).</li>
            <li>It encompasses a wide range of slots and ports, it comes along with USB, Security lock slot, HDMI port, LAN Port (RJ-45), Power connector, Headphone/Microphone combo jack reader. It also comes with Bluetooth making your wireless connectivity easier and faster.</li>
            <li>6 Month Extendable Pan India Warranty. Experience hassle-free ownership, with Pan India comprehensive warranty covering component, labor, and shipping (If required).</li>
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
              Back Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Laptop4;
