'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TeamPortraits() {
  const [activePortrait, setActivePortrait] = useState(0)

  const teamMembers = [
    {
      name: "Philippe Dubois",
      role: "Chef Exécutif",
      experience: "25 ans d'expérience",
      story: "Formé dans les plus grandes maisons parisiennes, Philippe a développé sa propre vision de la gastronomie française. Sa cuisine allie techniques traditionnelles et créativité contemporaine.",
      philosophy: "\"Chaque plat doit raconter une histoire, éveiller une émotion.\"",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Marie Leclerc",
      role: "Sous-Chef Exécutive",
      experience: "15 ans d'excellence",
      story: "Passionnée par les produits d'exception, Marie supervise la sélection des ingrédients et l'exécution de chaque plat avec une précision chirurgicale.",
      philosophy: "\"La perfection se trouve dans les détails invisibles.\"",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Antoine Moreau",
      role: "Maître d'Hôtel",
      experience: "20 ans de service",
      story: "Gardien de l'art de vivre à la française, Antoine orchestre chaque service avec élégance et discrétion, créant une expérience inoubliable pour chaque convive.",
      philosophy: "\"Le service parfait est celui qui se fait oublier.\"",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-3 sm:mb-4">
            L'Équipe
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            Artisans de l'Excellence
          </h3>
        </motion.div>

        {/* Team layout - stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Main portrait - full width on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <img
                src={teamMembers[activePortrait].image}
                alt={teamMembers[activePortrait].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(100%) contrast(120%)' }}
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/20 transition-all duration-500" />
              
              {/* Name overlay - responsive text */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                <div className="border-t border-luxury-white pt-4 sm:pt-6">
                  <h4 className="font-serif text-xl sm:text-2xl md:text-3xl font-light mb-1 sm:mb-2">
                    {teamMembers[activePortrait].name}
                  </h4>
                  <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-300">
                    {teamMembers[activePortrait].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info panel - responsive spacing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:pl-8 mt-6 lg:mt-0"
          >
            <div className="h-full flex flex-col justify-center">
              {/* Navigation dots - responsive */}
              <div className="flex space-x-3 sm:space-x-4 mb-8 sm:mb-10 md:mb-12 justify-center lg:justify-start">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePortrait(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300 ${
                      activePortrait === index ? 'bg-luxury-white' : 'bg-luxury-gray-600 hover:bg-luxury-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Experience - responsive */}
              <div className="mb-6 sm:mb-8 text-center lg:text-left">
                <div className="w-8 sm:w-10 md:w-12 h-px bg-luxury-white mb-3 sm:mb-4 mx-auto lg:mx-0" />
                <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400 mb-2">
                  Expérience
                </p>
                <p className="font-serif text-lg sm:text-xl">
                  {teamMembers[activePortrait].experience}
                </p>
              </div>

              {/* Story - responsive text */}
              <div className="mb-6 sm:mb-8 text-center lg:text-left">
                <p className="font-serif text-base sm:text-lg leading-relaxed text-luxury-gray-300">
                  {teamMembers[activePortrait].story}
                </p>
              </div>

              {/* Philosophy quote - responsive */}
              <div className="text-center lg:text-left">
                <blockquote className="font-serif text-lg sm:text-xl italic font-light border-l-2 border-luxury-white pl-4 sm:pl-6 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                  {teamMembers[activePortrait].philosophy}
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team navigation - responsive and simplified on mobile */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              onClick={() => setActivePortrait(index)}
              className={`font-display text-sm tracking-widest uppercase transition-all duration-300 ${
                activePortrait === index 
                  ? 'text-luxury-white border-b border-luxury-white pb-2' 
                  : 'text-luxury-gray-500 hover:text-luxury-gray-300'
              }`}
            >
              {member.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
} 