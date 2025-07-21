import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getMachineImages } from "../assets/assets";
import products from "../assets/products";

const Machine = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // catégorie avec sous-machines
  const [selectedItem, setSelectedItem] = useState(null); // sous-machine sélectionnée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleItemClick = (item) => {
    if (item.isCategory) {
      setSelectedSubCategory(item);
      return;
    }

    setSelectedItem({
      ...item,
      mainImage: item.img,
      additionalImages: item.images || getMachineImages(item.machineId),
    });
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleCloseSubCategory = () => {
    setSelectedSubCategory(null);
  };

  const handleImageClick = (e, imgSrc) => {
    e.stopPropagation();
    setExpandedImage({ src: imgSrc, alt: selectedItem.name });
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? (selectedItem?.additionalImages?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === (selectedItem?.additionalImages?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      id="Machine"
      className="flex flex-col items-center justify-center container mx-auto px-4 py-14 w-full overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Découvrir{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Nos machines
          </span>
        </h1>
      </motion.div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => handleItemClick(item)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
          >
            <div className="relative w-full h-56 sm:h-80">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-center mb-2">
                {item.name}
              </h3>
              {item.isCategory && (
                <p className="text-sm text-gray-500 text-center">
                  {item.subProducts.length} modèles disponibles
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL 1 : catégorie contenant 2+ machines */}
      <AnimatePresence>
        {selectedSubCategory && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseSubCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <div className="relative">
                <h2 className="text-2xl font-bold text-center mb-4">
                  {selectedSubCategory.name}
                </h2>
                <button
                  onClick={handleCloseSubCategory}
                  className="absolute top-0 right-0 bg-white shadow p-2 rounded-full hover:bg-gray-100"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedSubCategory.subProducts.map((subItem) => (
                  <motion.div
                    key={subItem.id}
                    onClick={() => handleItemClick(subItem)}
                    whileHover={{ scale: 1.03 }}
                    className="cursor-pointer  rounded-lg shadow hover:shadow-md transition-all"
                  >
                    <img
                      src={subItem.img}
                      alt={subItem.name}
                      className="w-full h-52 object-contain p-4"
                    />
                    <div className="p-4 text-center font-medium text-gray-800">
                      {subItem.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2 : détails de la machine */}
      <AnimatePresence>
        {selectedItem && !selectedItem.isCategory && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative bg-gradient-to-r from-blue-50 to-gray-50 p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  {selectedItem.name}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div
                      className="relative h-64 w-full rounded-lg  mb-4 cursor-zoom-in"
                      onClick={(
                        e // Ajoutez (e) ici
                      ) =>
                        handleImageClick(
                          e,
                          selectedItem.additionalImages?.[currentImageIndex] ||
                            selectedItem.mainImage
                        )
                      }
                    >
                      <img
                        src={
                          selectedItem.additionalImages?.[currentImageIndex] ||
                          selectedItem.mainImage
                        }
                        alt={`${selectedItem.name} - Vue ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                      />
                      {selectedItem.additionalImages?.length > 0 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                          >
                            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                          >
                            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedItem.additionalImages?.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {[
                          selectedItem.mainImage,
                          ...selectedItem.additionalImages,
                        ].map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className={`h-20 w-20 object-contain rounded-md border ${
                              idx === currentImageIndex
                                ? "border-blue-500"
                                : "border-gray-300"
                            } cursor-pointer`}
                            onClick={() => setCurrentImageIndex(idx)}
                            alt={`Miniature ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2">
                    <div className="prose max-w-none text-gray-700 space-y-4">
                      {selectedItem.details}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 3 : Image agrandie */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseExpandedImage}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseExpandedImage}
                className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <XMarkIcon className="h-10 w-10" />
              </button>

              {/* Flèches de navigation (seulement si plusieurs images) */}
              {selectedItem?.additionalImages?.length > 0 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white z-10"
                  >
                    <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white z-10"
                  >
                    <ChevronRightIcon className="h-8 w-8 text-gray-700" />
                  </button>
                </>
              )}

              <img
                src={
                  currentImageIndex === 0
                    ? expandedImage.src
                    : selectedItem?.additionalImages[currentImageIndex - 1]
                }
                alt={expandedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />

              {/* Indicateurs de navigation (points en bas) */}
              {selectedItem?.additionalImages?.length > 0 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[
                    selectedItem.mainImage,
                    ...selectedItem.additionalImages,
                  ].map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-3 w-3 rounded-full ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Machine;
