'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Plat signature du chef",
      category: "Plats"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Salle à manger principale",
      category: "Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dessert d'exception",
      category: "Desserts"
    },
    {
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bar à vins",
      category: "Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Création culinaire",
      category: "Plats"
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Plat gastronomique",
      category: "Plats"
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Salon privé",
      category: "Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dessert raffiné",
      category: "Desserts"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-midnight-800">
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
            Galerie
            <span className="block gradient-text">Gastronomique</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers visuel de notre restaurant : 
            découvrez nos créations culinaires et l'élégance de nos espaces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 || index === 6 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${
                index === 0 || index === 6 ? 'h-64 md:h-96' : 'h-64'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-midnight-900/0 group-hover:bg-midnight-900/30 transition-all duration-300" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-copper-600 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Image agrandie"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-midnight-900/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-midnight-800 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-midnight-900/50 backdrop-blur-sm p-8 rounded-lg border border-midnight-700">
            <blockquote className="text-2xl font-serif italic text-white mb-6">
              "Chaque assiette est une toile, chaque saveur un pinceau, 
              et chaque repas une œuvre d'art éphémère."
            </blockquote>
            <cite className="text-copper-400 font-semibold">
              — Chef Philippe Dubois
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 