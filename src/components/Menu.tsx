'use client'

import { motion } from 'framer-motion'
import { Star, Leaf } from 'lucide-react'

export default function Menu() {
  const menuCategories = [
    {
      title: "Menu Dégustation Prestige",
      description: "7 services • Créations exceptionnelles du chef",
      price: "285€",
      image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Menu Signature du Chef",
      description: "5 services • Innovation et tradition française",
      price: "195€", 
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Menu Découverte",
      description: "4 services • Introduction à notre art culinaire",
      price: "145€",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const specialities = [
    {
      name: "Homard Bleu de Bretagne",
      description: "Cuit à la vapeur douce, émulsion de corail, caviar Ossetra, microgreens",
      price: "85€",
      badge: "Spécialité",
      vegetarian: false
    },
    {
      name: "Bœuf de Kobé Wagyu",
      description: "Grillé au charbon de bois, purée de pommes de terre à la truffe noire",
      price: "120€",
      badge: "Signature",
      vegetarian: false
    },
    {
      name: "Saint-Jacques de Normandie",
      description: "Snackées, velouté de châtaigne, huile de noisette, chips de jambon ibérique",
      price: "65€",
      badge: "",
      vegetarian: false
    },
    {
      name: "Légumes du Jardin Royal",
      description: "Composition végétale créative, émulsion de parmesan 24 mois, huile d'herbes",
      price: "45€",
      badge: "Bio",
      vegetarian: true
    },
    {
      name: "Turbot Sauvage de Ligne",
      description: "Cuit en croûte de sel aux algues, beurre blanc aux herbes fraîches",
      price: "78€",
      badge: "",
      vegetarian: false
    },
    {
      name: "Foie Gras de Canard",
      description: "Mi-cuit, chutney de figues, pain brioche toasté, fleur de sel de Guérande",
      price: "55€",
      badge: "Tradition",
      vegetarian: false
    }
  ]

  return (
    <section id="menu" className="py-20 bg-midnight-900">
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
            Nos Menus
            <span className="block gradient-text">d'Exception</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos créations culinaires, fruit d'un savoir-faire exceptionnel 
            et de la sélection des meilleurs produits français et internationaux.
          </p>
        </motion.div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {menuCategories.map((menu, index) => (
            <motion.div
              key={menu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-midnight-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl border border-midnight-700"
            >
              <div className="relative h-48">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-copper-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {menu.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {menu.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {menu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Nos Spécialités à la Carte
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {specialities.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-midnight-800/50 backdrop-blur-sm p-6 rounded-lg border border-midnight-700 hover:border-copper-400/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-serif font-semibold text-white">
                      {dish.name}
                    </h4>
                    {dish.vegetarian && <Leaf className="w-4 h-4 text-green-400" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {dish.badge && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dish.badge === 'Spécialité' ? 'bg-copper-600/20 text-copper-400' :
                        dish.badge === 'Signature' ? 'bg-red-600/20 text-red-400' :
                        dish.badge === 'Bio' ? 'bg-green-600/20 text-green-400' :
                        'bg-blue-600/20 text-blue-400'
                      }`}>
                        {dish.badge}
                      </span>
                    )}
                    <span className="text-copper-400 font-bold text-lg">
                      {dish.price}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Boissons Section - Without Alcohol */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-midnight-800 rounded-lg p-8 text-center border border-midnight-700"
        >
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-copper-400" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Boissons & Accompagnements
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Notre sélection de boissons raffinées comprend des jus de fruits pressés à froid, 
            des eaux pétillantes artisanales et des thés d'exception pour accompagner votre repas.
          </p>
          <div className="text-copper-400 font-semibold">
            Sélection de boissons premium : à partir de 8€
          </div>
        </motion.div>
      </div>
    </section>
  )
} 