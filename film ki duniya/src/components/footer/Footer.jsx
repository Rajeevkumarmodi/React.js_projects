import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 md:mx-[80px] mx-[10px] py-4">
      <ul className="flex md:gap-7 gap-5 flex-wrap">
        <li>Terms Of Use</li>
        <li>Privacy-Policy</li>
        <li>About</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>
      <div className="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className="flex gap-6">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
