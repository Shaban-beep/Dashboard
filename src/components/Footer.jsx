import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-4 px-6 flex justify-center items-center">
      <div className="container mx-auto flex flex-col whitespace-nowrap items-center justify-between gap-4 text-center">
        <div className="flex space-x-1">
          <span>© {currentYear}, made with</span>
          <span className="text-gray-700">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>by</span>
          <a
            href="https://"
            className="text-gray-800 hover:text-blue-800 font-medium"
          >
            Shaban Basra
          </a>
          <span>for a better web.</span>
        </div>

        <nav className="flex space-x-7 justify-center">
          <a href="/dashboard" className="text-gray-600 hover:text-gray-800">
            Shaban-Beep
          </a>
          <a href="/about-us" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </a>
          <a href="/blog" className="text-gray-600 hover:text-gray-800">
            License
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
