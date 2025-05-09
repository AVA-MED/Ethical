/*import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Import images
import mainImg from "/src/assets/203.jpg";
import thumb1 from "/src/assets/204.jpg";
import thumb2 from "/src/assets/201.jpg";
import thumb3 from "/src/assets/202.jpg";

const Laptop3 = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(mainImg);

  const product = {
    name: "Lenovo ThinkPad T14 (2021) Intel Core i5 11th Gen 14 inches FHD IPS Thin and Light Laptop (16GB RAM/512GB SSD/Windows 10",
    description: "Professional/Black/1.53Kg), 20W0S03C00",
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
          <p><strong>Model Name:</strong> Thinkpad T14</p>
          <p><strong>Screen Size:</strong> 14 Inches</p>
          <p><strong>Hard Disk Size:</strong> 512 GB</p>
          <p><strong>CPU Model:</strong> Core i5</p>
          <p><strong>RAM Memory Installed Size:</strong> 16 GB</p>
          <p><strong>Operating System:</strong> Windows 10 Pro</p>
          <p><strong>Special Feature:</strong> Webcam, Light Weight, Thin</p>
          <p><strong>Graphics Card Description:</strong> Integrated</p>
        </div>

        {/* About Section *
        <div>
          <h3 className="text-xl font-semibold mt-4">About this item</h3>
          <ul className="list-disc pl-6 text-xl space-y-1 mt-2">
            <li>ThinkPad Reliability tested on 12 MIL-STD 810G Methods Procedures | Built to withstand rugged usage and can handle accidental knocks, drops, and even spills</li>
            <li>Processor: 11th Gen Intel Core i5-1135G7 processor, 2.4 Ghz base speed, 4.2 Ghz max speed, 4 Cores, 8 Mb Smart Cache Powerful</li>
            <li>Operating System: Pre-loaded Windows 10 Professional 64 with lifetime validity.</li>
            <li>Memory: 16GB RAM | Storage: 512GB SSD</li>
            <li>Display: 14" (1920x1080) Full HD IPS 300 Nits AntiGlare Display | 720p HD Camera with Privacy shutter | Connectivity: Intel Wi-Fi 6E AX210, 802.11ax 2x2 Wi-Fi + Bluetooth 5.2 | Audio: High Definition (HD) Audio, Realtek ALC3287 codec | Stereo speakers, 2W x2, Dolby Audio | 1x headphone / microphone combo jack (3.5mm)</li>
            <li>Design and battery: Thin and light Laptop | 180 Degree Hinge | Laptop weight 1.53kg | Battery Life: Upto 10.7 hours* as per MobileMark | Integrated Li-Polymer 50Wh battery, supports Rapid Charge (charge up to 80% in 1hr) with 65W AC adapter</li>
            <li>Ports & CD drive: 1x USB 3.2 Gen 1 | 1x USB 3.1 Gen 1 (one Always On) | 2x Thunderbolt 4 / USB4 40Gbps (support data transfer, Power Delivery 3.0 and DisplayPort 1.4a) | 1x HDMI 1.4b | Ethernet RJ-45 (LAN Port) | Headphone/microphone combo jack | Without DVD-drive</li>
            <li>Security: Integrated power button with touch FPR for power-on and secure login in one touch | Discrete TPM 2.0 chip for encryption of data and passwords | ThinkShutter for privacy from hackers and intruders | Spill Resistant Backlit Keyboard with Trackpoint</li>
            <li>This genuine Lenovo Laptop comes with 3 Year Onsite Warranty and now its pre-bundled with 3 year Premier Support also (24*7*365 dedicated line to advanced technician, Comprehensive hardware & OEM software support, Fast unscripted solutions and parts prioritization, Technical Account Managers and single point of contact)</li>
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

export default Laptop3;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';

import mainImg from "/src/assets/203.jpg";
import thumb1 from "/src/assets/204.jpg";
import thumb2 from "/src/assets/201.jpg";
import thumb3 from "/src/assets/202.jpg";

const Laptop3 = () => {
  const [mainImage, setMainImage] = useState(mainImg);

  const product = {
    name: "Lenovo ThinkPad T14 (2021)...",
    description: "Professional/Black/1.53Kg), 20W0S03C00",
    thumbnails: [thumb1, thumb2, thumb3],
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
          {product.thumbnails.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setMainImage(thumb)}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === thumb ? "border-indigo-600" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p>{product.description}</p>
        <ul className="list-disc pl-5 text-white">
          <li>ThinkPad Reliability...</li>
          <li>Processor: 11th Gen Intel Core i5...</li>
          {/* Add other specs here */}
        </ul>

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

export default Laptop3;
