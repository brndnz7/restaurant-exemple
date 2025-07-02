'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutPremium() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const timelineEvents = [
    {
      year: "1985",
      title: "Naissance d'une Vision",
      description: "Philippe Dubois, alors âgé de 25 ans, ouvre Le Palais Doré avec une vision révolutionnaire : sublimer la tradition française par l'innovation."
    },
    {
      year: "1992", 
      title: "Première Consécration",
      description: "Le guide Michelin reconnaît l'excellence naissante. Une première étoile qui confirme le talent et la détermination."
    },
    {
      year: "1998",
      title: "L'Affirmation",
      description: "Deuxième étoile Michelin. Le Palais Doré s'impose dans le paysage gastronomique parisien."
    },
    {
      year: "2010",
      title: "Apogée",
      description: "Troisième étoile Michelin. Consécration ultime d'un quart de siècle de passion et d'excellence."
    },
    {
      year: "2024",
      title: "Héritage Vivant", 
      description: "39 ans après sa création, Le Palais Doré continue d'innover tout en préservant l'essence de son art culinaire."
    }
  ]

  return (
    <div ref={ref} className="pt-20">
      {/* Hero Section - Ultra Minimal */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center mb-32"
          >
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light text-luxury-black leading-none mb-16">
              NOTRE
              <span className="block -mt-4">HISTOIRE</span>
            </h1>
            <div className="w-32 h-px bg-luxury-black mx-auto mb-16" />
            <p className="font-serif text-2xl md:text-3xl font-light text-luxury-gray-600 max-w-4xl mx-auto leading-relaxed">
              39 années d'excellence. Une quête perpétuelle de la perfection culinaire 
              au cœur de la Place Vendôme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chef Portrait - Asymmetric */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chef Philippe Dubois"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(120%)' }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="col-span-12 lg:col-span-6 lg:pl-16"
            >
              <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-white mb-8">
                Philippe Dubois
              </h2>
              <div className="w-24 h-px bg-luxury-white mb-8" />
              <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-8">
                Chef Exécutif • Fondateur
              </p>
              
              <div className="space-y-6">
                <p className="font-serif text-xl leading-relaxed text-luxury-gray-300">
                  "Ma cuisine est l'expression de ma personnalité, de mes voyages, 
                  de mes rencontres. Chaque plat raconte une histoire, 
                  éveille une émotion."
                </p>
                
                <p className="font-serif text-lg leading-relaxed text-luxury-gray-400">
                  Formé dans les plus prestigieuses maisons françaises, Philippe Dubois 
                  a su créer son propre langage culinaire, alliant respect de la tradition 
                  et audace créative.
                </p>

                <p className="font-serif text-lg leading-relaxed text-luxury-gray-400">
                  Meilleur Ouvrier de France, détenteur de trois étoiles Michelin, 
                  il continue d'innover tout en transmettant sa passion aux nouvelles générations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Minimal */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-8">
              Chronique de l'Excellence
            </h2>
            <div className="w-32 h-px bg-luxury-black mx-auto" />
          </motion.div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className={`grid grid-cols-12 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Year */}
                <div className={`col-span-12 lg:col-span-3 ${
                  index % 2 === 0 ? '' : 'lg:col-start-10'
                }`}>
                  <div className={`text-center lg:${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="font-serif text-6xl md:text-7xl font-light text-luxury-black mb-4">
                      {event.year}
                    </div>
                    <div className={`w-16 h-px bg-luxury-black ${
                      index % 2 === 0 ? 'mx-auto lg:mx-0' : 'mx-auto lg:ml-auto lg:mr-0'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`col-span-12 lg:col-span-9 ${
                  index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'
                }`}>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-luxury-black mb-4">
                    {event.title}
                  </h3>
                  <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy - Large Quote */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
              "Notre mission transcende la simple restauration. 
              Nous créons des <em className="italic">moments d'éternité</em> 
              autour d'une table."
            </blockquote>
            
            <div className="w-32 h-px bg-luxury-white mx-auto mb-8" />
            
            <cite className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Philippe Dubois
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Values - Grid Minimal */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          >
            <div className="text-center group">
              <div className="w-16 h-px bg-luxury-black mx-auto mb-8 group-hover:w-24 transition-all duration-500" />
              <h3 className="font-serif text-2xl font-light text-luxury-black mb-6">
                Excellence
              </h3>
              <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                Chaque détail compte. De la sélection des ingrédients au service en salle, 
                l'excellence guide chacun de nos gestes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-px bg-luxury-black mx-auto mb-8 group-hover:w-24 transition-all duration-500" />
              <h3 className="font-serif text-2xl font-light text-luxury-black mb-6">
                Innovation
              </h3>
              <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                Respecter la tradition tout en osant la modernité. 
                Créer l'inattendu à partir de l'authentique.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-px bg-luxury-black mx-auto mb-8 group-hover:w-24 transition-all duration-500" />
              <h3 className="font-serif text-2xl font-light text-luxury-black mb-6">
                Passion
              </h3>
              <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                Au-delà de la technique, c'est la passion qui anime notre équipe 
                et donne vie à chaque création culinaire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 