import React from "react";
import HeroImage from "../assets/Hero/hero.jpg"; // Update the path if needed
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
        <motion.h1
          className="text-white text-[10vw] md:text-[7vw] lg:text-[6vw] font-bold leading-none uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Fashion
        </motion.h1>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-black text-white py-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-[3vw] md:text-[1.5vw] lg:text-lg font-semibold px-4">
          <span className="text-gray-300">JACKET</span>
          <span className="text-red-500">BABY</span>
          <span className="text-gray-300">SNEAKERS</span>
          <span className="text-red-500">ACCESSORIES</span>
          <span className="text-gray-300">MEN</span>
          <span className="text-red-500">WOMEN</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
