import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BGIMG from "../assets/Hero/bg-about.png";

const About = () => {
  return (
    <div>
      <Header />

      {/* Background Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12"
        style={{ backgroundImage: `url(${BGIMG})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative max-w-6xl mx-auto text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">About Us</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Statement */}
            <div className="bg-orange-500 text-black p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Mission Statement
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Vision Statement
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>

            {/* Target Market Summary */}
            <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Target Market Summary
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-orange-500 text-black p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Core Values</h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>

            {/* Brief Company History (Full Width) */}
            <div className="col-span-1 md:col-span-2 bg-gray-400 text-black p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Brief Company History
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
