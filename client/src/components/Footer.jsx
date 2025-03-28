import React from "react";
import Logo from "../assets/Header/f-logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div className="space-y-3">
          <img src={Logo} alt="Logo" className="w-32" />
          <p>Address: Lahore Road, Sheikhupura</p>
          <p>E-mail: Example@gmail.com</p>
          <p>Phone: 0092 356 3656210</p>
        </div>

        {/* Shopping Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Shopping and Categories</h4>
          <ul className="space-y-2">
            <li><a href="/men" className="hover:text-gray-400">Men’s Shopping</a></li>
            <li><a href="/women" className="hover:text-gray-400">Women’s Shopping</a></li>
            <li><a href="/kid" className="hover:text-gray-400">Kid’s Shopping</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Homepage</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/help" className="hover:text-gray-400">Help</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Help & Information */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Help & Information</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">FAQ’S</a></li>
            <li><a href="#" className="hover:text-gray-400">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-400">Tracking Id</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 bg-[#1F2937] py-4">
        <h3 className="font-bold">Copyrights @2025</h3>
      </div>
    </div>
  );
};

export default Footer;
