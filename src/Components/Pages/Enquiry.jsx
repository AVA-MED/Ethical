import React, { useState } from 'react';
import axios from "axios";

// Import the background image
import backgroundImage from '/src/assets/31.png';

const Enquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });

  const [status, setStatus] = useState(""); // <-- Added status state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-Enquiry", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          mobile: '',
          address: '',
          message: '',
        });
        setStatus("Submitted successfully!");
      } else {
        alert('Something went wrong. Please try again.');
        setStatus("Failed to submit");
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
      setStatus("Error occurred");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image here
    >
      <div className="max-w-xl w-full p-6 bg-opacity-70 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Enquire Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-white rounded-md bg-transparent text-white"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-white rounded-md bg-transparent text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-lg font-medium text-white">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-white rounded-md bg-transparent text-white"
              placeholder="e.g., 9876543210"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-medium text-white">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-white rounded-md bg-transparent text-white"
              rows="2"
              placeholder="Your address"
              required
            ></textarea>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-white rounded-md bg-transparent text-white"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition"
            >
              Submit
            </button>
            {status && <p className="mt-2 text-sm text-white">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquire;
