'use client'

import { motion } from 'framer-motion'
import { MapPin, Award, Leaf } from 'lucide-react'

export default function Partners() {
  const partners = [
    {
      name: "Ferme de Bresse d'Or",
      location: "Bresse, France",
      specialty: "Volailles d'Exception",
      description: "Élevage traditionnel de volailles de Bresse AOP depuis 1923. Un savoir-faire familial transmis de génération en génération.",
      partnership: "Partenaire exclusif depuis 2010",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      name: "Maison Pétrossian",
      location: "Paris, France", 
      specialty: "Caviar & Saumons Fumés",
      description: "Référence mondiale du caviar depuis 1920. Sélection des plus beaux œufs d'esturgeon sauvage et d'élevage.",
      partnership: "Fournisseur privilégié",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Domaine des Roches Bleues",
      location: "Provence, France",
      specialty: "Légumes Anciens Bio",
      description: "Cultivation biodynamique de légumes oubliés et de variétés anciennes. Un retour aux sources du goût authentique.",
      partnership: "Collaboration exclusive",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      name: "Poissonnerie Marius",
      location: "Marseille, France",
      specialty: "Poissons de Ligne",
      description: "Pêche artisanale en Méditerranée. Sélection quotidienne des plus beaux poissons de roche et de pleine mer.",
      partnership: "Livraison quotidienne",
      icon: <MapPin className="w-6 h-6" />
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
            Partenaires
          </h2>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-luxury-black">
            Artisans du Terroir
          </h3>
        </motion.div>

        {/* Intro text - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20 max-w-4xl"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-luxury-gray-600 font-light">
            La qualité de notre cuisine repose sur celle de nos ingrédients. 
            Nous avons tissé des liens privilégiés avec des producteurs d'exception 
            qui partagent notre passion de l'excellence.
          </p>
        </motion.div>

        {/* Partners grid - responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Partner header - responsive */}
              <div className="flex items-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                <div className="bg-luxury-gray-100 p-3 sm:p-4 text-luxury-black group-hover:bg-luxury-black group-hover:text-luxury-white transition-colors duration-300 flex-shrink-0">
                  {partner.icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-serif text-xl sm:text-2xl font-light text-luxury-black mb-2">
                    {partner.name}
                  </h4>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gray-400" />
                    <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-500">
                      {partner.location}
                    </p>
                  </div>
                  <p className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-400">
                    {partner.specialty}
                  </p>
                </div>
              </div>

              {/* Partner description - responsive */}
              <div className="border-l-2 border-luxury-gray-200 pl-4 sm:pl-6 group-hover:border-luxury-black transition-colors duration-300">
                <p className="font-serif text-base sm:text-lg leading-relaxed text-luxury-gray-700 mb-3 sm:mb-4">
                  {partner.description}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 sm:w-4 h-px bg-luxury-black" />
                  <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-500">
                    {partner.partnership}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section - Philosophy responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 sm:w-20 md:w-24 h-px bg-luxury-black mx-auto mb-6 sm:mb-8" />
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic font-light text-luxury-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8">
            "Nos partenaires ne sont pas de simples fournisseurs, 
            ce sont les gardiens du terroir français et les garants 
            de l'authenticité de notre cuisine."
          </blockquote>
          <cite className="font-display text-xs sm:text-sm tracking-wider uppercase text-luxury-gray-500">
            Philippe Dubois, Chef Exécutif
          </cite>
        </motion.div>

        {/* Stats - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center"
        >
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-black mb-3 sm:mb-4">25</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-black mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-500">
              Producteurs Partenaires
            </p>
          </div>
          
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-black mb-3 sm:mb-4">100%</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-black mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-500">
              Produits Français
            </p>
          </div>
          
          <div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-black mb-3 sm:mb-4">15</div>
            <div className="w-12 sm:w-16 h-px bg-luxury-black mx-auto mb-3 sm:mb-4" />
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-luxury-gray-500">
              Années Collaboration
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 