import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BGIMG from "../assets/Hero/bg-about.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#E5E7EB]">
      <Header />

      {/* Background Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-36 px-6 flex flex-col items-center text-center"
        style={{ backgroundImage: `url(${BGIMG})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Title */}
        <h2 className="relative text-white text-4xl md:text-5xl font-bold">
          Get In Touch
        </h2>
      </div>

      {/* Contact Cards Section */}
      <div className="py-16 px-6 md:px-12 flex flex-col md:flex-row justify-center gap-8">
        {/* Talk to Sales Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full hover:shadow-2xl transition-shadow duration-300">
          <FaPhoneAlt className="text-5xl text-black mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Talk To Sales</h3>
          <p className="text-gray-600 text-sm mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a
            href="#"
            className="text-black font-semibold border-b-2 border-black hover:text-gray-700"
          >
            View all global Members
          </a>
        </div>

        {/* Contact Customer Support Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full hover:shadow-2xl transition-shadow duration-300">
          <FaHeadset className="text-5xl text-black mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Contact Customer Support</h3>
          <p className="text-gray-600 text-sm mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="border border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition">
            Customer Support
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
