import React, { useState } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Importing the logo image
import logoImage from "/src/assets/39.png";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/Abouts" },
];

const ServicesDropdown = [
  { id: 1, name: "It Service Consulting", link: "/It" },
  { id: 2, name: "System Automation", link: "/System" },
  { id: 3, name: "Network Management", link: "/NetworkingMarketing" },
  { id: 4, name: "Internet Security", link: "/Internet" },
  { id: 5, name: "Data Recovery & Storage Management", link: "/DataRecovery" },
  { id: 6, name: "System Integration", link: "/SystemIntegration" },
  { id: 7, name: "Web App Development", link: "/WebDev" },
];

const Manu = [
  { id: 3, name: "Support", link: "/Support" },
  { id: 4, name: "Products", link: "/Laptop" },
  { id: 5, name: "Contact Us", link: "/Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shadow-md text-white bg-black relative z-50">
      <div className="bg-primary py-1">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="flex items-center gap-1">
            {/* Using the imported logo image */}
            <img
              src={logoImage}
              alt="Company Logo"
              className="h-25 w-25 object-contain"
            />
            <div className="[mask-type:luminance]">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 animate-pulse hover:animate-spin transition duration-700 ease-in-out cursor-pointer">
                ETHICAL SOLUTION
              </p>
            </div>
          </a>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="sm:flex hidden font-serif text-center items-center gap-5 pr-4">
            {Menu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="px-2 hover:text-primary transition">
                  {item.name}
                </a>
              </li>
            ))}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                Services <FaCaretDown />
              </div>
              <ul className="absolute hidden group-hover:block bg-black mt-2 rounded-md w-64 z-50">
                {ServicesDropdown.map((service) => (
                  <li key={service.id}>
                    <a
                      href={service.link}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {Manu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="px-2 hover:text-primary transition">
                  {item.name}
                </a>
              </li>
            ))}

            {/* Login Button */}
            <li>
              <button
                onClick={() => window.location.href = "https://avimedtech.com"}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-indigo-700 transition"
              >
                AVI MEDTECH
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-black p-4 space-y-2">
            {Menu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block px-2 py-2 border-b border-gray-700"
              >
                {item.name}
              </a>
            ))}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex justify-between items-center px-2 py-2 border-b border-gray-700"
              >
                Services <FaCaretDown className={`${mobileDropdownOpen ? "rotate-180" : ""} transition-transform`} />
              </button>
              {mobileDropdownOpen && (
                <div className="bg-gray-800 rounded-md mt-1">
                  {ServicesDropdown.map((service) => (
                    <a
                      key={service.id}
                      href={service.link}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {Manu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block px-2 py-2 border-b border-gray-700"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Login Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = "https://avimedtech.com";
              }}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              AVI MEDTECH
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
