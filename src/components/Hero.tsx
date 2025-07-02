'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-luxury-black text-luxury-white flex items-center justify-center overflow-hidden">
      {/* Geometric elements - subtle */}
      <div className="absolute top-0 right-0 w-px h-full bg-luxury-gray-800" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-luxury-gray-800" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title - Monumentale */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-20"
        >
          <h1 className="font-serif text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white">
            LE
          </h1>
          <h1 className="font-serif text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white -mt-8 md:-mt-12 lg:-mt-16">
            PALAIS
          </h1>
          <h1 className="font-serif text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none font-light tracking-tight text-luxury-white -mt-8 md:-mt-12 lg:-mt-16">
            DORÉ
          </h1>
        </motion.div>

        {/* Subtitle - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-32"
        >
          <div className="w-32 h-px bg-luxury-white mx-auto mb-8" />
          <p className="font-display text-sm md:text-base tracking-widest uppercase text-luxury-gray-300">
            Gastronomie d'Exception • Place Vendôme
          </p>
        </motion.div>

        {/* Awards - Ultra Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center items-center space-x-16 md:space-x-24"
        >
          <div className="text-center">
            <div className="font-serif text-6xl md:text-7xl font-light text-luxury-white mb-4">
              III
            </div>
            <div className="w-8 h-px bg-luxury-white mx-auto mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Michelin
            </p>
          </div>
          
          <div className="w-px h-20 bg-luxury-gray-600" />
          
          <div className="text-center">
            <div className="font-serif text-6xl md:text-7xl font-light text-luxury-white mb-4">
              19
            </div>
            <div className="w-8 h-px bg-luxury-white mx-auto mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Gault & Millau
            </p>
          </div>
        </motion.div>

        {/* Quote - Positioned absolute for asymmetry */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-20 left-8 md:left-16 max-w-md"
        >
          <blockquote className="font-serif text-lg md:text-xl italic font-light text-luxury-gray-300 leading-relaxed">
            "Une cuisine qui transcende l'art culinaire pour atteindre l'émotion pure."
          </blockquote>
          <div className="w-12 h-px bg-luxury-white mt-4" />
        </motion.div>

        {/* Year - Positioned absolute */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-20 right-8 md:right-16"
        >
          <div className="text-right">
            <div className="font-serif text-4xl md:text-5xl font-light text-luxury-white mb-2">
              1985
            </div>
            <div className="w-16 h-px bg-luxury-white ml-auto mb-2" />
            <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
              Fondation
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Ultra minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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