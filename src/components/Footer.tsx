import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'; // Use react-icons for social icons

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      {/* Footer links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FIND A STORE</a></li>
            <li><a href="#" className="hover:text-white">BECOME A MEMBER</a></li>
            <li><a href="#" className="hover:text-white">SIGN UP FOR EMAIL</a></li>
            <li><a href="#" className="hover:text-white">Send Us Feedback</a></li>
            <li><a href="#" className="hover:text-white">STUDENT DISCOUNTS</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-2">GET HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Delivery</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Payment Options</a></li>
            <li><a href="#" className="hover:text-white">Contact Us On Nike.com Inquiries</a></li>
            <li><a href="#" className="hover:text-white">Contact Us On All Other Inquiries</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-2">ABOUT NIKE</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">News</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Investors</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
          </ul>
        </div>

        {/* Column 4: Social Icons */}
        <div className="flex flex-col items-end">
          <ul className="flex space-x-4 mb-4">
            <li><a href="#" className="hover:text-white"><FaTwitter /></a></li>
            <li><a href="#" className="hover:text-white"><FaFacebookF /></a></li>
            <li><a href="#" className="hover:text-white"><FaYoutube /></a></li>
            <li><a href="#" className="hover:text-white"><FaInstagram /></a></li>
          </ul>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">India</span>
            <span className="text-gray-400">&copy; 2023 Nike, Inc. All Rights Reserved</span>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-between text-sm text-gray-500">
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-white">Guides</a></li>
          <li><a href="#" className="hover:text-white">Terms of Sale</a></li>
          <li><a href="#" className="hover:text-white">Terms of Use</a></li>
          <li><a href="#" className="hover:text-white">Nike Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
