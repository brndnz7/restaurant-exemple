'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GalleryPremium() {
  const [activeCategory, setActiveCategory] = useState('restaurant')

  const categories = {
    restaurant: {
      title: "L'Espace",
      images: [
        {
          src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Salle Principale",
          description: "L'élégance française dans toute sa splendeur"
        },
        {
          src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Salon Privé",
          description: "Intimité et raffinement pour vos événements"
        },
        {
          src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Terrasse d'Été",
          description: "Vue panoramique sur la Place Vendôme"
        },
        {
          src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Cave à Vins",
          description: "Plus de 1000 références d'exception"
        }
      ]
    },
    cuisine: {
      title: "L'Art Culinaire",
      images: [
        {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Cuisine Ouverte",
          description: "Théâtre de la créativité culinaire"
        },
        {
          src: "https://images.unsplash.com/photo-1556909709-f3bd96dec597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Dressage Signature",
          description: "Chaque assiette est une œuvre d'art"
        },
        {
          src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Sélection des Produits",
          description: "Les plus beaux ingrédients du terroir"
        },
        {
          src: "https://images.unsplash.com/photo-1556909709-f3bd96dec597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Techniques Modernes",
          description: "Innovation et tradition se rencontrent"
        }
      ]
    },
    equipe: {
      title: "L'Équipe",
      images: [
        {
          src: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Chef Philippe Dubois",
          description: "Visionnaire de la gastronomie française"
        },
        {
          src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "L'équipe en Cuisine",
          description: "Passion et précision à chaque service"
        },
        {
          src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Service en Salle",
          description: "L'art de l'hospitalité française"
        },
        {
          src: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Formation Continue",
          description: "Excellence transmise au quotidien"
        }
      ]
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light leading-none mb-16">
              NOTRE
              <span className="block -mt-4">UNIVERS</span>
            </h1>
            <div className="w-32 h-px bg-luxury-white mx-auto mb-16" />
            <p className="font-serif text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Découvrez les coulisses d'un restaurant d'exception, 
              où chaque détail contribue à créer une expérience unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-20 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-16 mb-20"
          >
            {Object.keys(categories).map((categoryKey) => (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`font-display text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === categoryKey
                    ? 'text-luxury-black border-b-2 border-luxury-black pb-2'
                    : 'text-luxury-gray-500 hover:text-luxury-gray-700'
                }`}
              >
                {categories[categoryKey].title}
              </button>
            ))}
          </motion.div>

          {/* Active Gallery */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {categories[activeCategory].images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden mb-8">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'grayscale(100%) contrast(120%)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="border-l-2 border-luxury-gray-200 pl-6 group-hover:border-luxury-black transition-colors duration-300">
                    <h3 className="font-serif text-2xl font-light text-luxury-black mb-3">
                      {image.title}
                    </h3>
                    <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image - Large Format */}
      <section className="py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Vue d'ensemble du restaurant"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(110%)' }}
              />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="bg-luxury-black/80 text-luxury-white p-12 max-w-2xl">
                <h2 className="font-serif text-4xl font-light mb-6">
                  L'Élégance Parisienne
                </h2>
                <p className="font-serif text-xl leading-relaxed">
                  Au cœur de la Place Vendôme, Le Palais Doré incarne 
                  l'art de vivre français dans toute sa splendeur.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Behind the Scenes */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-8">
              Dans les Coulisses
            </h2>
            <div className="w-32 h-px bg-luxury-black mx-auto mb-8" />
            <p className="font-serif text-xl text-luxury-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque jour, notre équipe dédie son talent et sa passion 
              à la création d'expériences culinaires inoubliables.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "Sélection",
                description: "Chaque matin, sélection minutieuse des plus beaux produits auprès de nos partenaires privilégiés."
              },
              {
                number: "02", 
                title: "Création",
                description: "En cuisine, l'art culinaire prend vie grâce à la maîtrise technique et à la créativité de notre équipe."
              },
              {
                number: "03",
                title: "Service",
                description: "En salle, l'excellence du service sublime chaque création pour créer un moment d'exception."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="text-center group"
              >
                <div className="font-serif text-6xl font-light text-luxury-gray-300 group-hover:text-luxury-black transition-colors duration-300 mb-6">
                  {step.number}
                </div>
                <div className="w-16 h-px bg-luxury-black mx-auto mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="font-serif text-2xl font-light text-luxury-black mb-4">
                  {step.title}
                </h3>
                <p className="font-serif text-lg leading-relaxed text-luxury-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <blockquote className="font-serif text-3xl md:text-4xl font-light leading-relaxed text-luxury-white mb-12">
              "Chaque image raconte notre histoire, celle d'une quête 
              perpétuelle de beauté et d'excellence culinaire."
            </blockquote>
            <div className="w-24 h-px bg-luxury-white mx-auto mb-6" />
            <cite className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Philippe Dubois, Chef Exécutif
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 