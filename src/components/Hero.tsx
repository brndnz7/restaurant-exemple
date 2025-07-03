'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-luxury-black text-luxury-white flex items-center justify-center overflow-hidden">
      {/* Geometric elements - subtle */}
      <div className="absolute top-0 right-0 w-px h-full bg-luxury-gray-800" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-luxury-gray-800" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Main Title - Responsive et Mobile-First */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white">
            LE
          </h1>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-16">
            PALAIS
          </h1>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-16">
            DORÉ
          </h1>
        </motion.div>

        {/* Subtitle - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12 sm:mb-16 md:mb-24 lg:mb-32"
        >
          <div className="w-16 sm:w-24 md:w-32 h-px bg-luxury-white mx-auto mb-4 sm:mb-6 md:mb-8" />
          <p className="font-display text-xs sm:text-sm md:text-base tracking-widest uppercase text-luxury-gray-300 px-4">
            Gastronomie d'Exception • Place Vendôme
          </p>
        </motion.div>

        {/* Awards - Responsive layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24 mb-16 sm:mb-20"
        >
          <div className="text-center">
            <div className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-luxury-white mb-2 sm:mb-3 md:mb-4">
              III
            </div>
            <div className="w-6 sm:w-8 h-px bg-luxury-white mx-auto mb-1 sm:mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Michelin
            </p>
          </div>
          
          <div className="w-px h-12 sm:h-16 md:h-20 bg-luxury-gray-600" />
          
          <div className="text-center">
            <div className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-luxury-white mb-2 sm:mb-3 md:mb-4">
              19
            </div>
            <div className="w-6 sm:w-8 h-px bg-luxury-white mx-auto mb-1 sm:mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Gault & Millau
            </p>
          </div>
        </motion.div>

        {/* Quote - Repositioned for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-8 sm:mb-12 px-4 md:px-0 md:absolute md:bottom-20 md:left-8 lg:left-16 md:max-w-md"
        >
          <blockquote className="font-serif text-base sm:text-lg md:text-xl italic font-light text-luxury-gray-300 leading-relaxed text-center md:text-left">
            "Une cuisine qui transcende l'art culinaire pour atteindre l'émotion pure."
          </blockquote>
          <div className="w-8 sm:w-12 h-px bg-luxury-white mt-3 sm:mt-4 mx-auto md:mx-0" />
        </motion.div>

        {/* Year - Repositioned for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="px-4 md:px-0 md:absolute md:bottom-20 md:right-8 lg:right-16"
        >
          <div className="text-center md:text-right">
            <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-luxury-white mb-1 sm:mb-2">
              1985
            </div>
            <div className="w-12 sm:w-16 h-px bg-luxury-white mx-auto md:ml-auto md:mr-0 mb-1 sm:mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Fondation
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-16 bg-luxury-gray-600 mx-auto">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-4 bg-luxury-white"
          />
        </div>
      </motion.div>
    </section>
  )
} 