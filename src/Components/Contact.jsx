import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';

// Import the background image
import backgroundImage from '/src/assets/31.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:5000/send-Contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported background image here
    >
      <div className="bg-opacity-70 w-full max-w-6xl p-10 md:flex rounded-lg shadow-lg ">
        {/* Contact Info */}
        <div className="md:w-1/2 text-white space-y-6 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-300 font-semibold text-xl">
            Ethical Solution is your trusted IT partner, delivering secure, scalable, and smart tech solutions
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-teal-400" />
              <div>
                <p className="font-bold text-2xl">Address:</p>
                <p className="text-xl text-gray-300">
                  GF 59-A19, Gurunanakpura, Nirman Vihar Metro, Laxmi Nagar, Delhi-92
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-teal-400" />
              <div>
                <p className="font-bold text-2xl">Phone:</p>
                <p className="text-xl text-gray-300">+91 9718054212</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-teal-400" />
              <div>
                <p className="font-bold text-2xl">Email:</p>
                <p className="text-xl text-gray-300">ethicalsolutiondelhi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-xl shadow-xl  bg-opacity-80">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              pattern="[0-9]{10}"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
            {status && <p className="text-white mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
