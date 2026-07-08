import React, { useState } from 'react';
import { Animal } from '../types';
import { ChevronLeft, ChevronRight, Heart, Info, Stethoscope, PawPrint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AnimalCardProps {
  animal: Animal;
  onAdopt: (animal: Animal) => void;
}

export function AnimalCard({ animal, onAdopt }: AnimalCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % animal.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + animal.images.length) % animal.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-sm border border-amber-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden group bg-amber-50">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={animal.images[currentImageIndex]}
            alt={`${animal.name} - Photo ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {animal.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-1.5 rounded-full shadow-md transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-1.5 rounded-full shadow-md transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {animal.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full text-amber-700 shadow-sm">
            {animal.age}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 font-sans tracking-tight">{animal.name}</h3>
            <p className="text-amber-600 font-medium text-sm flex items-center gap-1 mt-1">
              <PawPrint size={14} />
              {animal.breed}
            </p>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              animal.gender === 'Female' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
            }`}
          >
            {animal.gender}
          </span>
        </div>

        <div className="mt-4 space-y-3 flex-grow text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="leading-relaxed">{animal.personality}</p>
          </div>
          <div className="flex items-start gap-2">
            <Stethoscope size={16} className="text-emerald-400 mt-0.5 shrink-0" />
            <p className="leading-relaxed">{animal.health}</p>
          </div>
        </div>

        {/* Adopt Button */}
        <button
          onClick={() => onAdopt(animal)}
          className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Heart size={18} className="fill-white/20" />
          我想認養 {animal.name}
        </button>
      </div>
    </motion.div>
  );
}
