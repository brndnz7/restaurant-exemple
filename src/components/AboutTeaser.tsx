'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutTeaser() {
  return (
    <section className="py-20 bg-midnight-800">
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
              L'Art de la
              <span className="block gradient-text">Gastronomie Française</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Depuis 1985, Le Palais Doré incarne l'excellence de la gastronomie française. 
              Fondé par le Chef Auguste Moreau, notre restaurant a su préserver l'authenticité 
              de la cuisine traditionnelle tout en l'enrichissant d'innovations contemporaines.
            </p>
            
            <Link
              href="/about"
              className="inline-block bg-copper-600 hover:bg-copper-700 text-white px-8 py-3 rounded-sm font-semibold transition-colors duration-200"
            >
              Découvrir Notre Histoire
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="bg-copper-600/20 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-copper-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
              <p className="text-gray-300">Clients Satisfaits</p>
            </div>
            
            <div className="text-center">
              <div className="bg-copper-600/20 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-copper-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">38</h3>
              <p className="text-gray-300">Années d'Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="bg-copper-600/20 p-4 rounded-full w-fit mx-auto mb-4">
                <Heart className="w-8 h-8 text-copper-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-300">Étoiles Michelin</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 