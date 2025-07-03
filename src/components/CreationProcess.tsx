'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function CreationProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Inspiration",
      subtitle: "La genèse d'une création",
      description: "Chaque plat naît d'une émotion, d'un souvenir, d'une rencontre avec un producteur. L'inspiration peut venir d'un voyage, d'une saison, d'un ingrédient d'exception découvert au marché.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Recherche saisonnière",
        "Sélection des producteurs",
        "Tests d'associations"
      ]
    },
    {
      number: "02", 
      title: "Conception",
      subtitle: "L'art de la composition",
      description: "Sur le papier d'abord, puis en cuisine. Chaque élément est pensé, pesé, équilibré. Les textures, les couleurs, les températures s'orchestrent dans une harmonie parfaite.",
      image: "https://images.unsplash.com/photo-1556909709-f3bd96dec597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Esquisse du plat",
        "Équilibrage des saveurs",
        "Composition visuelle"
      ]
    },
    {
      number: "03",
      title: "Réalisation", 
      subtitle: "La précision technique",
      description: "En cuisine, chaque geste compte. La température, le timing, la précision millimétrique transforment l'idée en réalité. C'est l'alliance du savoir-faire et de la passion.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Techniques de cuisson",
        "Assemblage minutieux", 
        "Contrôle qualité"
      ]
    },
    {
      number: "04",
      title: "Service",
      subtitle: "L'expérience totale",
      description: "Le plat quitte la cuisine pour devenir une expérience. Présentation, service, accompagnement : tout concourt à créer un moment d'exception unique et mémorable.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Dressage final",
        "Service synchronisé",
        "Expérience client"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-500 mb-4 sm:mb-6">
            Processus de Création
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-luxury-black">
            Du Concept à l'Assiette
          </h3>
        </motion.div>

        {/* Main content - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Steps navigation - full width on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`cursor-pointer group transition-all duration-500 ${
                    activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    {/* Step number - responsive */}
                    <div className={`font-display text-xl sm:text-2xl tracking-wider transition-all duration-300 ${
                      activeStep === index ? 'text-luxury-black' : 'text-luxury-gray-400'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1">
                      <h4 className={`font-serif text-lg sm:text-xl mb-1 sm:mb-2 transition-all duration-300 ${
                        activeStep === index ? 'text-luxury-black' : 'text-luxury-gray-600'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400 mb-2 sm:mb-3">
                        {step.subtitle}
                      </p>
                      
                      {/* Progress line */}
                      <div className="w-full h-px bg-luxury-gray-200">
                        <div 
                          className={`h-px bg-luxury-black transition-all duration-500 ${
                            activeStep === index ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main display - responsive order */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image - responsive aspect ratio */}
              <div className="aspect-video overflow-hidden mb-6 sm:mb-8">
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(110%)' }}
                />
              </div>

              {/* Content - responsive text */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="font-serif text-2xl sm:text-3xl font-light text-luxury-black mb-4 sm:mb-6">
                  {steps[activeStep].title}
                </h4>
                
                <p className="font-serif text-base sm:text-lg leading-relaxed text-luxury-gray-700 mb-6 sm:mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Details list - responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="group">
                      <div className="w-4 sm:w-6 h-px bg-luxury-black mb-2 sm:mb-3 group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
                      <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-600">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic font-light text-luxury-gray-600 max-w-4xl mx-auto">
            "Chaque création est un voyage. De l'idée à l'assiette, 
            nous construisons une expérience qui transcende la simple dégustation."
          </blockquote>
          <div className="w-12 sm:w-16 h-px bg-luxury-black mx-auto mt-6 sm:mt-8" />
        </motion.div>
      </div>
    </section>
  )
} 