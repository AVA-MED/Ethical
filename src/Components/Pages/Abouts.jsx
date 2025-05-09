import React from 'react';

// ✅ Image imports
import coreValuesImage from '/src/assets/38.png';
import teamImage from '/src/assets/42.png';
import officeImage from '/src/assets/41.png';

const Abouts = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Empowering digital transformation through secure and smart technology.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 px-4 max-w-full bg-black mx-auto">
        <h2 className="text-5xl text-white font-semibold mb-4">About us</h2>
        <p className="text-white text-xl leading-relaxed">
          Ethical Solution is a dedicated IT service provider based in Delhi, India, committed to delivering innovative and ethical digital solutions. Our mission is to serve as your trusted technology partner, offering a comprehensive suite of services tailored to meet your business needs.​
        </p>
        <p className="text-white text-xl leading-relaxed">
          At the heart of our operations lies a deep-rooted belief in integrity, transparency, and client-centricity, guiding us to build lasting partnerships with our clients as their trusted technology allies.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-white font-bold mb-2">Our Mission</h3>
            <p className="text-white leading-relaxed">
              At Ethical Solution, we aim to empower businesses by providing cutting-edge IT services that drive growth and efficiency. We believe in building long-term relationships with our clients by delivering solutions that are not only effective but also align with ethical standards.​
            </p>
          </div>
          <div>
            <h3 className="text-xl text-white font-bold mb-2">Our Vision</h3>
            <p className="text-white leading-relaxed">
              To be a global leader in digital innovation, security, and transformation—driving a safer and smarter internet for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Image Above Core Values */}
      <section className="w-full">
        <img
          src={coreValuesImage}
          alt="Our Core Values"
          className="w-full object-cover h-64 sm:h-96"
        />
      </section>

      {/* Core Values */}
      <section className="py-12 px-4 max-w-full bg-black mx-auto">
        <h2 className="text-2xl text-white font-semibold mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-2xl font-bold mb-2">Integrity</h4>
            <p className="text-black">
              We are committed to conducting our business with the highest ethical standards. Our goal is to build long-term relationships based on trust, transparency, and accountability. We believe that integrity is the foundation of great work, strong partnerships, and lasting impact.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-2xl font-bold mb-2">Innovation</h4>
            <p className="text-black">
              At Ethical Solution, innovation is the heartbeat of our organization. We don't just build software — we create forward-thinking solutions that redefine the way businesses operate. From automating repetitive tasks to building intelligent, data-driven platforms, our goal is to help you stay ahead in a constantly evolving digital landscape.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-2">Customer-Centric</h4>
            <p className="text-black">Our clients' needs drive our solutions, support, and strategies.</p>
          </div>
        </div>
      </section>

      {/* Two Additional Images */}
      <section className="py-12 px-4 bg-black max-w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={teamImage}
            alt="Company Team"
            className="w-full h-84 object-cover rounded-2xl shadow-md"
          />
          <img
            src={officeImage}
            alt="Office Environment"
            className="w-full h-84 object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Abouts;
