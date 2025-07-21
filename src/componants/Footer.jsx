import React from "react";
import assets from "../assets/assets";
import { PhoneIcon, EnvelopeIcon ,MapPinIcon  } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div
      className="p-10 px-4 md:px-30 lg:px32 bg-gray-900 w-full overflow-hidden "
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <img src={assets.affichage.TAPMACHINE_G} alt="" />
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Compsny</h3>
          <ul className="flex flex-col gap-2 text-gray-400 ">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Machine" className="hover:text-white">
              Machine
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 text-gray-400 ">
            <a
              href="https://www.google.com/maps/place/Tapmachine+Systems/@36.3120516,6.6077126,16z/data=!4m6!3m5!1s0x12f171f12ef8aeb9:0x525ddc65821ac786!8m2!3d36.3120793!4d6.6064421!16s%2Fg%2F11t5wx_bjp?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              className="hover:text-white"
            >
              <MapPinIcon  className="w-5 h-5 inline mr-3" />
              <span >Ain El Bey Constantine</span>
            </a>
            <a href="mailto:dse@gmail.com" className="hover:text-white">
              <EnvelopeIcon className="w-5 h-5 inline mr-3" />
              <span >dse@gmail.com</span>
            </a>

            <a href="tel:+213552533651" className="hover:text-white">
              <PhoneIcon className="w-5 h-5 inline mr-2" />
              <span className="hidden sm:inline">+213 552 53 36 51</span>
            </a>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
