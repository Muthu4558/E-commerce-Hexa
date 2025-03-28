import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Header/logo.png';
import { Menu, X, ShoppingCart, LogOut } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-[#D9D9D9] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-12" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-gray-700 hover:underline">Home</a>
          <a href="/men" className="hover:text-gray-700 hover:underline">Men's</a>
          <a href="/women" className="hover:text-gray-700 hover:underline">Women's</a>
          <a href="/kid" className="hover:text-gray-700 hover:underline">Kid's</a>
          <a href="/about" className="hover:text-gray-700 hover:underline">About Us</a>
          <a href="/contact" className="hover:text-gray-700 hover:underline">Contact Us</a>
          <a href="/cart"><ShoppingCart size={24} /></a>
          <button onClick={handleLogout} className="text-gray-700 hover:text-red-600">
            <LogOut className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 py-4 space-y-4 text-center">
          <a href="/" className="block hover:text-gray-700">Home</a>
          <a href="/men" className="block hover:text-gray-700">Men's</a>
          <a href="/women" className="block hover:text-gray-700">Women's</a>
          <a href="/kid" className="block hover:text-gray-700">Kid's</a>
          <a href="/about" className="block hover:text-gray-700">About Us</a>
          <a href="/contact" className="block hover:text-gray-700">Contact Us</a>
          <a href="/cart" className="block text-center"><ShoppingCart size={24} /></a>
          <button onClick={handleLogout} className="block w-full text-center text-red-600 hover:text-red-800">
            <LogOut className="w-5 h-5 mx-auto" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
