import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black pt-10 pb-5 md:px-[50px] px-3">
      <div className=" flex flex-wrap  justify-between">
        <div>
          <ul>
            <li className="text-gray-300 font-bold">Categoty</li>
            <li className="text-gray-400 text-base">News</li>
            <li className="text-gray-400 text-base">World</li>
            <li className="text-gray-400 text-base">Games</li>
            <li className="text-gray-400 text-base">Refernces</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-300 font-bold">Apples</li>
            <li className="text-gray-400 text-base">Web</li>
            <li className="text-gray-400 text-base">eCommerce</li>
            <li className="text-gray-400 text-base">Business</li>
            <li className="text-gray-400 text-base">Entertainment</li>
            <li className="text-gray-400 text-base">Portfolio</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-300 font-bold">Media</li>
            <li className="text-gray-400 text-base">Brochure</li>
            <li className="text-gray-400 text-base">Nonprofit</li>
            <li className="text-gray-400 text-base">Educational</li>
            <li className="text-gray-400 text-base">Projects</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-300 font-bold">Infopreneur</li>
            <li className="text-gray-400 text-base">Personal</li>
            <li className="text-gray-400 text-base">Wiki</li>
            <li className="text-gray-400 text-base">Forum</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-300 font-bold py-2">
              Subscribe fro updates
            </li>
            <li>
              <input
                className="px-1 py-1 rounded-md"
                type="text"
                placeholder="Email"
              />
              <button className=" text-gray-300 border px-3 py-1 ml-2 rounded-md">
                Subscribe
              </button>
            </li>
            <li className="text-gray-400 text-base py-2">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto <br />{" "}
              chicken spare ribs salami.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex items-center  flex-wrap justify-between text-gray-300 pt-4">
        <div>
          <p>© Copyright 2023 Rajeev Kumar inc. All rights reserved</p>
        </div>
        <div className="flex gap-3 text-2xl">
          <a href="https://www.github.com/Rajeevkumarmodi" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/rajeev.modi.1422" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/rajeev_coder" target="_blank">
            <FaInstagram />
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
