'use client'

import { motion } from 'framer-motion'
import { ChefHat, Utensils, Star } from 'lucide-react'
import Link from 'next/link'

export default function MenuTeaser() {
  const highlights = [
    {
      name: "Menu Dégustation Prestige",
      description: "7 services d'exception • Créations du chef",
      price: "285€",
      icon: Star
    },
    {
      name: "Menu Signature du Chef", 
      description: "5 services • Innovation et tradition",
      price: "195€",
      icon: ChefHat
    },
    {
      name: "Menu Découverte",
      description: "4 services • Initiation à notre art culinaire",
      price: "145€", 
      icon: Utensils
    }
  ]

  return (
    <section className="py-20 bg-midnight-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Nos Créations
            <span className="block gradient-text">Culinaires</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des menus d'exception conçus par notre chef étoilé, alliant tradition française 
            et innovation gastronomique contemporaine.
          </p>
        </motion.div>

        {/* Menu Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((menu, index) => {
            const IconComponent = menu.icon
            return (
              <motion.div
                key={menu.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-midnight-800 p-8 rounded-lg border border-midnight-700 hover:border-copper-400/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-copper-600/20 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-copper-400" />
                  </div>
                  <span className="text-copper-400 font-bold text-xl">
                    {menu.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {menu.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {menu.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block bg-copper-600 hover:bg-copper-700 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-colors duration-200"
          >
            Découvrir Tous Nos Menus
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 