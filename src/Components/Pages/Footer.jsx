import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // X icon
import { FaThreads } from "react-icons/fa6"; // If not available, use a placeholder icon

const Footer = () => {
  return (
    <footer className="bg-black pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 1. Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">ETHICAL SOLUTION</h2>
          <p className="mt-3 text-white">GF 59, A-19</p>
          <p className="text-white">Gurunanakpura, Nirman Vihar Metro</p>
          <p className="text-white">Laxmi Nagar, Delhi-92</p>
          <p className="mt-3 font-semibold text-white">Phone: <span>+91 9718054212</span></p>
          <p className="font-semibold text-white">Email: <span>ethicalsolutiondelhi@gmail.com</span></p>
        </div>

        {/* 2. Useful Links */}
        <div>
  <h3 className="text-lg font-semibold text-white">Useful Links</h3>
  <ul className="mt-3 space-y-3 text-white">
    <li><a href="/" className="hover:underline">➤ Home</a></li>
    <li><a href="/Abouts" className="hover:underline">➤ About us</a></li>
    <li><a href="/Servicess" className="hover:underline">➤ Services</a></li>
    <li><a href="/Laptop" className="hover:underline">➤ Products</a></li>
    <li><a href="/Support" className="hover:underline">➤ Support</a></li>
  </ul>
</div>


        {/* 3. Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="mt-3 space-y-3 text-white">
            <li>✔ Laptop Sales</li>
            <li>✔ Repair & Maintenance</li>
            <li>✔ IT Consultancy</li>
          </ul>
        </div>

        {/* 4. Social Networks */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Social Networks</h3>
          <p className="mt-3 text-white">You can visit and follow us on these social networks</p>
          <div className="flex space-x-3 mt-4">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FEthicalSol" className="bg-white text-black p-2 rounded-full"><FaXTwitter size={20} /></a>
            <a href="https://www.facebook.com/ethicalsolution/" className="bg-white text-black p-2 rounded-full"><FaFacebookF size={20} /></a>
            <a href="https://www.instagram.com/ethical__solution/" className="bg-white text-black p-2 rounded-full"><FaInstagram size={20} /></a>
            <a href="https://www.threads.net/@ethical__solution" className="bg-white text-black p-2 rounded-full"><FaThreads size={20} /></a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F105968692%2F" className="bg-white text-black p-2 rounded-full"><FaLinkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-white text-center py-4 mt-8">
        <p>© Copyright <span className="font-bold">Ethical Solution</span>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
