import React, { useEffect } from "react";
import { useState } from "react";
import assets from "../assets/assets";
import menuIcon from "../assets/icon/menu_icon.svg";
import crossIcon from "../assets/icon/cross_icon.svg";

const NavBar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img
          className="w-32 h-auto md:w-32 lg:w-[200px] transition-all duration-300 hover:scale-105"
          src={assets.affichage.TAPMACHINE}
          alt="Logo"
        />

        <ul className="hidden md:flex   gap-7 text-white  ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>

          <a href="#" className="cursor-pointer hover:text-gray-400">
            About
          </a>

          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Machine
          </a>

          
        </ul>

        <button className="hidden md:block bg-white  px-8 py-2 rounded-full">
          Languages
        </button>
        <img
          src={menuIcon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
          onClick={() => setshowMobileMenu(true)}
        />
      </div>
      {/*-----mobile menu-----*/}
      <div
        className={`md:hidden fixed right-0 top-0 bottom-0 bg-white transition-all duration-300 ease-in-out ${
          showMobileMenu
            ? "w-full opacity-100"
            : "w-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex justify-end p-6  cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={crossIcon}
            className="w-6 "
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-meduim  ">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Header"
            className="px-4 py2 rounded-full inline-block "
          >
            Home
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 py2 rounded-full inline-block "
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Projects"
            className="px-4 py2 rounded-full inline-block "
          >
            Projects
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Testimonails"
            className="px-4 py2 rounded-full inline-block "
          >
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
