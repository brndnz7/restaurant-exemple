'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-midnight-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Notre Histoire de
              <span className="block gradient-text">Passion Culinaire</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Depuis 1985, Le Palais Doré incarne l'excellence de la gastronomie française. 
              Fondé par le Chef Auguste Moreau, notre restaurant a su préserver l'authenticité 
              de la cuisine traditionnelle tout en l'enrichissant d'innovations contemporaines.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Aujourd'hui dirigé par le Chef étoilé Philippe Dubois, nous continuons à offrir 
              une expérience culinaire inoubliable dans un cadre d'exception, au cœur du 
              prestigieux quartier de la Place Vendôme.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-copper-600/20 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="w-6 h-6 text-copper-400" />
                </div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Clients Satisfaits</div>
              </div>
              
              <div className="text-center">
                <div className="bg-copper-600/20 p-3 rounded-full w-fit mx-auto mb-3">
                  <Clock className="w-6 h-6 text-copper-400" />
                </div>
                <div className="text-2xl font-bold text-white">38</div>
                <div className="text-sm text-gray-400">Années d'Excellence</div>
              </div>
              
              <div className="text-center">
                <div className="bg-copper-600/20 p-3 rounded-full w-fit mx-auto mb-3">
                  <Heart className="w-6 h-6 text-copper-400" />
                </div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-gray-400">Étoiles Michelin</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Chef Philippe Dubois"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/50 to-transparent" />
              
              {/* Chef Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-midnight-900/90 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    Chef Philippe Dubois
                  </h3>
                  <p className="text-copper-400 mb-3">Chef Exécutif • 3 Étoiles Michelin</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "La cuisine est un art qui nourrit l'âme autant que le corps. 
                    Chaque plat raconte une histoire, chaque saveur éveille une émotion."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Notre Philosophie</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Nous croyons que la gastronomie est un voyage sensoriel qui transcende la simple nutrition. 
              Chaque ingredient est soigneusement sélectionné, chaque technique perfectionnée, 
              pour créer des moments d'exception qui resteront gravés dans vos souvenirs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 