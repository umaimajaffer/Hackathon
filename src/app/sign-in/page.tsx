// pages/login.tsx
import React from 'react';
import Image from 'next/image';  // Import this to use for logo

export default function signin() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <Image src="/assests/logo.png" alt="Nike Logo" width={150} height={150} />
          </div>
          
          {/* Heading */}
          <h1 className="text-xl font-bold mb-4 text-center uppercase">
            Your Account for Everything Nike
          </h1>
          
          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black p-2"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black p-2"
                placeholder="Password"
              />
            </div>
            
            {/* Keep me signed in and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keep-me-signed-in"
                  name="keep-me-signed-in"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="keep-me-signed-in" className="ml-2 block text-sm text-gray-900">
                  Keep me signed in
                </label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Forgotten your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Sign In
            </button>
          </form>

          {/* Join Us Link */}
          <div className="mt-4 text-center">
            <span className="text-gray-500">Not a Member? </span>
            <a href="#" className="text-black font-bold hover:underline">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
