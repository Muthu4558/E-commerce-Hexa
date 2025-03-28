import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Minus, Plus } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProduct = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [mainImage, setMainImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => setSelectedSize(size);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        {product ? (
          <>
            {/* Left Side - Images */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* Main Image with Zoom */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center">
                <Zoom>
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="w-full h-[400px] object-contain cursor-pointer"
                  />
                </Zoom>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto p-2">
                {product.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.title}
                    className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer transition-all ${mainImage === img
                        ? "border-black scale-105"
                        : "border-gray-300 hover:scale-105"
                      }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">{product.title}</h2>
              <p className="text-gray-500 text-lg">{product.category}</p>

              {/* Price Section */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-green-500">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center text-yellow-500 text-lg">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
              </div>

              {/* Size Selection */}
              <div className="w-full">
                <p className="font-semibold text-lg md:text-base">Size:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["S", "M", "L", "XL", "XXS", "XS"].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-4 py-2 border-2 rounded-md text-sm font-medium transition-all 
          ${selectedSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:bg-gray-200"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>


              {/* Quantity Selector */}
              <div className="flex items-center gap-5">
                <p className="font-semibold">Quantity:</p>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all"
                    onClick={() => handleQuantityChange("dec")}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all"
                    onClick={() => handleQuantityChange("inc")}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart / Buy Now Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold transition-all hover:bg-gray-800"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-all hover:bg-blue-700">
                  Buy Now
                </button>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No product selected</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;