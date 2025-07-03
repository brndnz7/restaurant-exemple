'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-luxury-white">
      {/* Geometric divider */}
      <div className="w-full h-px bg-luxury-black mb-12 sm:mb-16 md:mb-24 lg:mb-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main manifesto - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Large quote - responsive text size */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight text-luxury-black font-light">
              "La cuisine est l'expression 
              <span className="italic font-normal"> la plus pure </span>
              de notre humanité."
            </blockquote>
          </motion.div>
          
          {/* Author info - responsive positioning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 lg:pt-8 xl:pt-16 mt-6 lg:mt-0"
          >
            <div className="w-12 sm:w-16 h-px bg-luxury-black mb-4 sm:mb-6" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-600">
              Philippe Dubois
            </p>
            <p className="font-display text-xs tracking-wider uppercase text-luxury-gray-400 mt-1">
              Chef Exécutif
            </p>
          </motion.div>
        </div>

        {/* Philosophy statements - responsive spacing */}
        <div className="mt-16 sm:mt-20 md:mt-32 lg:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20"
          >
            {/* Statement 1 */}
            <div className="group cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-px bg-luxury-black mb-3 sm:mb-4 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-base sm:text-lg tracking-widest uppercase text-luxury-black mb-4 sm:mb-6">
                  Précision
                </h3>
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-luxury-gray-700">
                  Chaque geste compte. Chaque seconde importe. 
                  La perfection naît de la répétition minutieuse 
                  d'un art millénaire.
                </p>
              </div>
            </div>

            {/* Statement 2 */}
            <div className="group cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-px bg-luxury-black mb-3 sm:mb-4 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-base sm:text-lg tracking-widest uppercase text-luxury-black mb-4 sm:mb-6">
                  Innovation
                </h3>
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-luxury-gray-700">
                  Respecter la tradition tout en osant la modernité. 
                  Créer l'inattendu à partir de l'intemporel.
                </p>
              </div>
            </div>

            {/* Statement 3 */}
            <div className="group cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-px bg-luxury-black mb-3 sm:mb-4 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-base sm:text-lg tracking-widest uppercase text-luxury-black mb-4 sm:mb-6">
                  Émotion
                </h3>
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-luxury-gray-700">
                  Au-delà du goût, nous cherchons l'émotion. 
                  Chaque assiette raconte une histoire, 
                  éveille un souvenir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large manifesto text - responsive positioning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 sm:mt-20 md:mt-32 lg:mt-40 max-w-4xl lg:ml-auto"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-luxury-gray-600 font-light">
            Notre cuisine transcende la simple nutrition pour devenir un art total. 
            Nous ne servons pas des plats, nous créons des moments. 
            Chaque service est une représentation, chaque table un théâtre 
            où se joue le ballet minutieux de la haute gastronomie française.
          </p>
        </motion.div>
      </div>
      
      {/* Bottom geometric divider */}
      <div className="w-full h-px bg-luxury-black mt-12 sm:mt-16 md:mt-24 lg:mt-32" />
    </section>
  )
} 