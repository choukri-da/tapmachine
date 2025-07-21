import React from "react";
import NavBAr from "./NavBAr";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="Header">
      {/* Image de fond avec brightness */}
      <img
        src="bg.png"
        alt="maison"
        className="w-full h-full object-cover brightness-[0.6] transition duration-500 ease-in-out hover:brightness-75"
      />

      {/* Overlay foncé */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar au-dessus */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBAr />
      </div>

      {/* Contenu texte centré */}
      <motion.div
      initial={{ opacity: 0, y:100 }}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-bold drop-shadow-lg mb-4">
          FABRICANT DE MACHINES POUR LE NETTOYAGE DE TAPIS
        </h2>
      </motion.div>
    </div>
  );
}

export default Header;
