// src/pages/Products.tsx
import React, { useState } from "react";
import Footer from "../components/Footer";

interface Product {
  id: number;
  brand: string;
  name: string;
  img: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    brand: "Canon",
    name: "EOS R5",
    img: "../../assets/canon.jpeg",
    price: "Tsh 1,500,000",
    description: "Professional mirrorless camera with superb 8K video capabilities.",
  },
  {
    id: 2,
    brand: "Nikon",
    name: "Z7 II",
    img: "../../assets/nikon.jpeg",
    price: "Tsh 2,500,000",
    description: "High-resolution full-frame camera with dual processors.",
  },
  {
    id: 3,
    brand: "Nikon",
    name: "Z7 IV",
    img: "../../assets/nikon2.jpeg",
    price: "Tsh 2,000,000",
    description: "Versatile mirrorless camera with excellent autofocus.",
  },
  {
    id: 4,
    brand: "Canon",
    name: "EOS 6D mark II",
    img: "../../assets/camera3.jpg",
    price: "Tsh 2,700,000",
    description: "Compact and powerful camera with in-body stabilization.",
  },
  {
    id: 5,
    brand: "Canon",
    name: "EOS 5D mark IV",
    img: "../../assets/camera2.jpg",
    price: "Tsh 3,500,000",
    description: "Professional mirrorless camera with superb 8K video capabilities.",
  },
  {
    id: 6,
    brand: "Canon",
    name: "EOS 7D mark II",
    img: "../../assets/camera1.jpg",
    price: "Tsh 2,000,000",
    description: "High-resolution full-frame camera with dual processors.",
  },
  {
    id: 7,
    brand: "Canon",
    name: "Lens I",
    img: "../../assets/lens1.jpeg",
    price: "Tsh 800,000",
    description: "Versatile mirrorless camera with excellent autofocus.",
  },
  {
    id: 8,
    brand: "Nikon",
    name: "Lens II",
    img: "../../assets/lens2.jpg",
    price: "Tsh 700,000",
    description: "Compact and powerful camera with in-body stabilization.",
  },
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero / Banner */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-900 via-blue-500 to-pink-600 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-gray-600">
          Explore our premium collection of cameras
        </p>
        <p className="text-gray-600">
          All used from USA
        </p>
      </section>

      {/* Products Grid Heading */}
      <section className="mx-6 mb-5 flex">
        <p className="text-blue-800 text-2xl md:text-3xl font-bold">
          All products.
        </p>
        <p className="text-blue-600 text-2xl md:text-3xl font-bold">
          Take your pick.
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition h-[500px] cursor-pointer flex flex-col"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-md mb-4"
            />
            <div className="absolute mt-5 mx-5">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-500 to-pink-600 bg-clip-text text-transparent">{product.brand}</h2>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-500 to-pink-600 bg-clip-text text-transparent">{product.name}</h2>
            </div>
            <p className="text-blue-800 font-bold mt-2 mx-5">{product.price}</p>
          </div>
        ))}
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl  w-11/12 md:w-2/3 lg:w-1/2 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            {/* Product Details */}
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mx-6 mb-2 text-blue-800">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mx-6 mb-4">{selectedProduct.description}</p>
            <p className="text-xl font-bold text-blue-800 mx-6 mb-6">
              {selectedProduct.price}
            </p>

            <div className="flex space-x-4 mx-6 mb-6">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition cursor-pointer"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Products;
