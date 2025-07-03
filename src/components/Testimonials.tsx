'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Le Palais Doré transcende la simple restauration pour atteindre les sommets de l'art culinaire. Chaque bouchée est une révélation, chaque service une performance magistrale.",
      author: "François-Régis Gaudry",
      title: "Critique Gastronomique",
      publication: "L'Express",
      rating: "★★★★★"
    },
    {
      quote: "Dans l'univers feutré du Palais Doré, Philippe Dubois orchestre une symphonie gustative d'une précision rare. Une expérience qui redéfinit les codes de la haute gastronomie.",
      author: "Périco Légasse",
      title: "Critique Culinaire",
      publication: "Marianne",
      rating: "Exceptionnel"
    },
    {
      quote: "Rarement cuisine n'aura été aussi juste, aussi émouvante. Le Palais Doré mérite amplement ses trois étoiles et sa place au panthéon de la gastronomie française.",
      author: "Jean-Claude Ribaut",
      title: "Critique Gastronomique",
      publication: "Le Figaro",
      rating: "★★★★★"
    },
    {
      quote: "Une table d'exception où tradition et modernité s'épousent dans une harmonie parfaite. Le service atteint ici des sommets d'excellence rarement égalés.",
      author: "Emmanuel Rubin",
      title: "Critique Culinaire",
      publication: "Le Figaroscope",
      rating: "★★★★★"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-500 mb-4 sm:mb-6">
            Critiques
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-luxury-black">
            La Reconnaissance des Experts
          </h3>
        </motion.div>

        {/* Main testimonial - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Large quote - responsive text size */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-luxury-black font-light">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
          </motion.div>

          {/* Author info - responsive spacing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4 mt-6 lg:mt-0"
          >
            <div className="lg:pl-8 text-center lg:text-left">
              <div className="w-12 sm:w-16 h-px bg-luxury-black mb-4 sm:mb-6 mx-auto lg:mx-0" />
              <h4 className="font-serif text-lg sm:text-xl text-luxury-black mb-2">
                {testimonials[activeTestimonial].author}
              </h4>
              <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-600 mb-2">
                {testimonials[activeTestimonial].title}
              </p>
              <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-400 mb-3 sm:mb-4">
                {testimonials[activeTestimonial].publication}
              </p>
              <div className="text-xl sm:text-2xl text-luxury-black">
                {testimonials[activeTestimonial].rating}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials navigation - responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`cursor-pointer group transition-all duration-500 ${
                activeTestimonial === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="border-t border-luxury-gray-200 pt-4 sm:pt-6 group-hover:border-luxury-black transition-colors duration-300">
                <h5 className="font-serif text-base sm:text-lg text-luxury-black mb-2">
                  {testimonial.author}
                </h5>
                <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-500 mb-2 sm:mb-3">
                  {testimonial.publication}
                </p>
                <div className={`w-6 sm:w-8 h-px bg-luxury-gray-300 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-luxury-black w-12 sm:w-16' : ''
                }`} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom section - Press coverage responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <div className="w-16 sm:w-20 md:w-24 h-px bg-luxury-black mx-auto mb-6 sm:mb-8" />
          <p className="font-serif text-lg sm:text-xl md:text-2xl font-light text-luxury-gray-600 max-w-3xl mx-auto">
            Couverture presse dans plus de 50 publications nationales et internationales. 
            Une reconnaissance unanime de la critique gastronomique mondiale.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 