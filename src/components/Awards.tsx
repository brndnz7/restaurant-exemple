'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const awards = [
    {
      year: "2023",
      title: "Prix de l'Innovation Culinaire",
      organization: "Académie Culinaire de France",
      description: "Reconnaissance pour l'approche innovante de la cuisine française traditionnelle"
    },
    {
      year: "2020",
      title: "3ème Étoile Michelin",
      organization: "Guide Michelin",
      description: "Consécration ultime pour une cuisine d'exception et un service irréprochable"
    },
    {
      year: "2018",
      title: "Restaurant de l'Année",
      organization: "Gault & Millau",
      description: "19/20 - Cuisine d'une créativité et d'une technique exceptionnelles"
    },
    {
      year: "2015",
      title: "2ème Étoile Michelin",
      organization: "Guide Michelin", 
      description: "Confirmation de l'excellence et de la constance de notre cuisine"
    },
    {
      year: "2010",
      title: "1ère Étoile Michelin",
      organization: "Guide Michelin",
      description: "Première reconnaissance de notre savoir-faire et de notre passion"
    },
    {
      year: "1985",
      title: "Ouverture",
      organization: "Le Palais Doré",
      description: "Naissance d'une vision gastronomique au cœur de la Place Vendôme"
    }
  ]

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-4 sm:mb-6">
            Reconnaissance
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
            Timeline de l'Excellence
          </h3>
        </motion.div>

        {/* Timeline - responsive layout */}
        <div className="relative">
          {/* Vertical line - responsive positioning */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-luxury-gray-600 transform md:-translate-x-1/2" />

          {/* Awards */}
          <div className="space-y-12 sm:space-y-16">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center md:${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Year dot - responsive positioning */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-luxury-white transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0.5 sm:inset-1 bg-luxury-black" />
                </div>

                {/* Content - responsive spacing */}
                <div className={`w-full md:w-5/12 ml-12 sm:ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'
                }`}>
                  <div className="group cursor-pointer">
                    {/* Year - responsive text */}
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-luxury-white mb-3 sm:mb-4">
                      {award.year}
                    </div>

                    {/* Award details - responsive layout */}
                    <div className="border-l-2 border-luxury-gray-600 pl-4 sm:pl-6 group-hover:border-luxury-white transition-colors duration-300">
                      <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-luxury-white mb-2">
                        {award.title}
                      </h4>
                      <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-400 mb-3 sm:mb-4">
                        {award.organization}
                      </p>
                      <p className="font-serif text-base sm:text-lg leading-relaxed text-luxury-gray-300">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline balance - hidden on mobile */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats - responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center"
        >
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-white mb-3 sm:mb-4">III</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-white mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-400">
              Étoiles Michelin
            </p>
          </div>
          
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-white mb-3 sm:mb-4">38</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-white mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-400">
              Années Excellence
            </p>
          </div>
          
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-white mb-3 sm:mb-4">19</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-white mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-400">
              Note Gault & Millau
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 