import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSnapchat, faPinterest, faLinkedin, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fffcdc] to-[#14281d] text-gray-900 py-12 px-6 transition-all duration-1000">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaShoppingCart className="text-[#f4f1de] text-3xl" />
              <h2 className="text-[#f4f1de] text-4xl font-extrabold tracking-wide lowercase">Pumart</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Your one-stop solution for e-commerce success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faSnapchat} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#69c9d6] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-700 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  E-commerce Platform
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  POS System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Stay in Touch</h4>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; 2025 Pumart. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;