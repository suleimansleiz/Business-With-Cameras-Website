import React from "react";
import Footer from "../components/Footer";
import ProductSlider from "../components/ProductSlider";
import About from "./About";

const Home: React.FC = () => {

  const handleShopNow = () => {
    // Logic to navigate to the Products page
    window.location.href = "/products";
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-5 bg-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">
          Capture Life’s Best Moments
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-xl mb-6 text-gray-900 px-3">
          Discover our premium collection of cameras designed to help you
          capture memories in stunning detail.
        </p>
        <div className="flex space-x-4">
          <button className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
          Learn More
        </button>
        <button
        onClick={handleShopNow}
         className="px-6 py-3 bg-white text-blue-800 border rounded-full hover:bg-blue-800 hover:text-white transition cursor-pointer">
          Shop Now
        </button>
        </div>
        <div className="w-full mt-10 bg-white">
          <img
            src="../../assets/man_and_camera.png"
            alt="Camera Banner"
            className="w-full max-h-[800px] object-cover "
          />
        </div>
      </section>

      <ProductSlider />

      {/* Featured Products Preview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {/* Product Card */}
        <div className="relative w-full h-140 overflow-hidden rounded-md cursor-pointer">
          <img
            src="../../assets/canon.jpeg"
            alt="Canon"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-opacity-40"></div>
          {/* Text & Buttons */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 mt-50">
            <h2 className="text-2xl font-bold mb-2">Canon</h2>
            <p className="mb-4 text-gray-200">The whole Canon collection that we have</p>
            <div className="flex space-x-4">
              <button className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
              <button className="px-5 py-2 border text-blue-800 rounded-full hover:bg-blue-800 hover:text-white hover:border-blue-800 transition cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate for Nikon */}
        <div className="relative w-full h-140 overflow-hidden rounded-md cursor-pointer">
          <img
            src="../../assets/nikon.jpeg"
            alt="Nikon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 mt-50">
            <h2 className="text-2xl font-bold mb-2">Nikon</h2>
            <p className="mb-4 text-gray-200">The whole Nikon collection that we have</p>
            <div className="flex space-x-4">
              <button className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
              <button className="px-5 py-2 border text-blue-800 rounded-full hover:bg-blue-800 hover:text-white hover:border-blue-800 transition cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate for Video Cameras */}
        <div className="relative w-full h-140 overflow-hidden rounded-md cursor-pointer">
          <img
            src="../../assets/nikon2.jpeg"
            alt="CompactGo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 mt-50">
            <h2 className="text-2xl font-bold mb-2">Production Cameras</h2>
            <p className="mb-4 text-gray-200">Are you passionate about filming? here is your collection</p>
            <div className="flex space-x-4">
              <button className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
              <button className="px-5 py-2 border text-blue-800 rounded-full hover:bg-blue-800 hover:text-white hover:border-blue-800 transition cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate for Lenses */}
        <div className="relative w-full h-140 overflow-hidden rounded-md cursor-pointer">
          <img
            src="../../assets/lens1.jpeg"
            alt="CompactGo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-2xl font-bold mb-2">Lenses</h2>
            <p className="mb-4 text-gray-200">Upgrade your camera now by upgrading your lens</p>
            <div className="flex space-x-4">
              <button className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
              <button className="px-5 py-2 border text-blue-800 rounded-full hover:bg-blue-800 hover:text-white hover:border-blue-800 transition cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Footer />
    </div>
  );
};

export default Home;
