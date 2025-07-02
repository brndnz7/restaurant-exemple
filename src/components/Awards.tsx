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
    <section ref={ref} className="py-32 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-6">
            Reconnaissance
          </h2>
          <h3 className="font-serif text-5xl md:text-6xl font-light">
            Timeline de l'Excellence
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-luxury-gray-600 transform md:-translate-x-1/2" />

          {/* Awards */}
          <div className="space-y-16">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-luxury-white transform -translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-luxury-black" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="group cursor-pointer">
                    {/* Year */}
                    <div className="font-display text-3xl md:text-4xl font-light text-luxury-white mb-4">
                      {award.year}
                    </div>

                    {/* Award details */}
                    <div className="border-l-2 border-luxury-gray-600 pl-6 group-hover:border-luxury-white transition-colors duration-300">
                      <h4 className="font-serif text-xl md:text-2xl font-light text-luxury-white mb-2">
                        {award.title}
                      </h4>
                      <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-400 mb-4">
                        {award.organization}
                      </p>
                      <p className="font-serif text-lg leading-relaxed text-luxury-gray-300">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          <div>
            <div className="font-serif text-6xl font-light text-luxury-white mb-4">III</div>
            <div className="w-16 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Étoiles Michelin
            </p>
          </div>
          
          <div>
            <div className="font-serif text-6xl font-light text-luxury-white mb-4">38</div>
            <div className="w-16 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Années Excellence
            </p>
          </div>
          
          <div>
            <div className="font-serif text-6xl font-light text-luxury-white mb-4">19</div>
            <div className="w-16 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Note Gault & Millau
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 