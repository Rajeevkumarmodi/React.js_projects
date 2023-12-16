import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import googlePlayImg from "../../assets/google-play.png";
import appleStoreImg from "../../assets/app-store.png";
import payment1 from "../../assets/1st payment-method.png";
import payment2 from "../../assets/2nd payment-method.png";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black md:px-[80px] px-[10px] py-8 ">
      <div className="flex gap-3 flex-wrap justify-between">
        <div>
          <h3 className="text-white font-bodyFont font-bold text-2xl">
            Shoping <span className="text-blue-400">karo</span>
          </h3>
          <div className="text-gray-500 flex flex-col gap-2">
            <p className="text-gray-300 text-xl py-2 font-bold">Location</p>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-white" />
              <p> Madhepura Bihar 852113</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-white text-xs" />
              <p> +91 62012345809</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-white" />
              <p> rk0424067@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          <h2 className="text-white font-bold pb-2">Customer Care</h2>
          <ul className="flex flex-col gap-[6px]">
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">FAQS</li>
            <li className="cursor-pointer">Returns & Exchanges</li>
            <li className="cursor-pointer">Shipping & Handling</li>
            <li className="cursor-pointer">Terms of Service</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl">Install App</h2>
          <p className="text-gray-300 pt-2">from Apple store or Google Play</p>
          <div className="flex gap-2">
            <img className="w-[120px] " src={appleStoreImg} alt="" />
            <img className="w-[120px]" src={googlePlayImg} alt="" />
          </div>
          <p className="font-bold text-white pb-3">Payment methods</p>
          <div className="flex flex-row  gap-1">
            <img className="w-[100px]" src={payment1} alt="" />
            <img className="w-[100px]" src={payment2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          © 2023 Rajeev Kumar All Rights Reserved.
        </p>
        <div className="flex gap-3 text-2xl text-white pt-5">
          <a href="https://www.github.com/Rajeevkumarmodi" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/rajeev.modi.1422" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/rajeev_coder" target="_blank">
            <FaSquareInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rajeev-kumar-774503264"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
