import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
      alert("Signup failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      
      <motion.div
        className="relative bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-4">Create an Account</h2>
        <p className="text-center text-gray-300 mb-6">Sign up to start shopping</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 pl-10 rounded-lg bg-white bg-opacity-20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-500"
            />
            <FaUser className="absolute left-3 top-3 text-white" />
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 pl-10 rounded-lg bg-white bg-opacity-20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-500"
            />
            <FaEnvelope className="absolute left-3 top-3 text-white" />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 pl-10 rounded-lg bg-white bg-opacity-20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-500"
            />
            <FaLock className="absolute left-3 top-3 text-white" />
          </motion.div>

          {/* Signup Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:opacity-80 transition duration-300 shadow-lg"
            >
              Sign Up
            </button>
          </motion.div>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-4">
          Already have an account? {" "}
          <span onClick={() => navigate("/login")} className="text-yellow-400 hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
