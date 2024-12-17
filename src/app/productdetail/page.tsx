"use client";

import Image from "next/image";

export default function HardcodedProductDetail() {
  // Hardcoded product details
  const product = {
    name: "Nike Air Force 1 '07",
    image: "/assests/p1.png", // Example image, replace with an actual image URL
    price: "$99.99",
    description: "This is a hardcoded description for the product.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={250} 
            height={48}
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-2xl font-bold mb-6">{product.price}</div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
