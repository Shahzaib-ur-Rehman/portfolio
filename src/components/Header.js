import React from "react";
import { NavLinks } from "../constans/constants";
import ProfilePic from "../images/profile.png";
const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="#"
        >
          <img
            src={ProfilePic}
            class="w-8 h-8 text-white p-2 bg-indigo-400 rounded-full"
            alt="Logo"
          />
          <span className="ml-3 text-xl">Shahzaib ur Rehman</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {NavLinks.map((NavItem, index) => {
            return (
              <a key={index} href="#" className="mr-5 hover:text-white">
                {NavItem}
              </a>
            );
          })}
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
