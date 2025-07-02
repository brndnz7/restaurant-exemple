'use client'

import { motion } from 'framer-motion'
import { Download, Image, FileText, Camera, Award, Phone, Mail } from 'lucide-react'

export default function PressKit() {
  const mediaAssets = [
    {
      title: "Photos Restaurant",
      description: "Collection haute résolution de l'intérieur, terrasse et ambiance",
      files: "24 images • 300 DPI • Format RAW/JPEG",
      size: "156 MB",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "Portraits Équipe",
      description: "Photos officielles du Chef et de l'équipe en cuisine",
      files: "12 portraits • 300 DPI • Format RAW/JPEG",
      size: "89 MB",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Plats Signature",
      description: "Photographies culinaires des créations emblématiques",
      files: "36 images • 300 DPI • Format RAW/JPEG",
      size: "234 MB",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "Logos & Identité",
      description: "Logo, charte graphique et éléments de communication",
      files: "Logo vectoriel • EPS, AI, PNG, SVG",
      size: "12 MB",
      icon: <FileText className="w-6 h-6" />
    }
  ]

  const pressReleases = [
    {
      date: "15 Janvier 2024",
      title: "Le Palais Doré reçoit le Prix de l'Innovation Culinaire 2023",
      excerpt: "L'Académie Culinaire de France récompense l'approche innovante du Chef Philippe Dubois...",
      type: "Communiqué de Presse"
    },
    {
      date: "3 Décembre 2023",
      title: "Collaboration Exceptionnelle avec Alain Passard",
      excerpt: "Deux maîtres de la gastronomie française s'associent pour un dîner unique...",
      type: "Annonce Événement"
    },
    {
      date: "20 Novembre 2023",
      title: "Le Palais Doré célèbre ses 38 ans d'excellence",
      excerpt: "Retour sur près de quatre décennies d'innovation culinaire et de tradition française...",
      type: "Dossier de Presse"
    }
  ]

  const keyFacts = [
    { label: "Étoiles Michelin", value: "III" },
    { label: "Note Gault & Millau", value: "19/20" },
    { label: "Années d'expérience", value: "38 ans" },
    { label: "Couverts par service", value: "45" },
    { label: "Équipe", value: "28 personnes" },
    { label: "Producteurs partenaires", value: "25" }
  ]

  return (
    <section className="py-20 bg-luxury-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-6">
            Espace Presse
          </h1>
          <p className="font-serif text-xl text-luxury-gray-600 max-w-3xl mx-auto">
            Ressources médias, communiqués de presse et contacts pour les journalistes 
            et professionnels des médias gastronomiques.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-luxury-black text-luxury-white p-8 mb-16"
        >
          <h2 className="font-serif text-3xl font-light text-center mb-8">
            Le Palais Doré en chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {keyFacts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl font-light text-luxury-white mb-2">
                  {fact.value}
                </div>
                <div className="w-8 h-px bg-luxury-white mx-auto mb-2" />
                <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Media Assets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl font-light text-luxury-black mb-8">
            Kit Média Haute Résolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="border border-luxury-gray-200 p-6 group hover:border-luxury-black transition-colors duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-luxury-gray-100 p-3 text-luxury-black group-hover:bg-luxury-black group-hover:text-luxury-white transition-colors duration-300">
                    {asset.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-luxury-black mb-2">
                      {asset.title}
                    </h3>
                    <p className="font-serif text-gray-600 mb-3">
                      {asset.description}
                    </p>
                    <div className="font-display text-sm tracking-wider uppercase text-luxury-gray-500 mb-1">
                      {asset.files}
                    </div>
                    <div className="font-display text-sm tracking-wider uppercase text-luxury-gray-400">
                      Taille: {asset.size}
                    </div>
                  </div>
                </div>
                <button className="w-full btn-luxury flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Télécharger</span>
                </button>
              </div>
            ))}
          </div>

          {/* Complete kit download */}
          <div className="mt-8 text-center">
            <button className="btn-luxury-inverse inline-flex items-center space-x-3">
              <Download className="w-5 h-5" />
              <span>Télécharger le Kit Complet (591 MB)</span>
            </button>
          </div>
        </motion.div>

        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl font-light text-luxury-black mb-8">
            Communiqués de Presse
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-l-2 border-luxury-gray-200 pl-6 hover:border-luxury-black transition-colors duration-300 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <h3 className="font-serif text-xl text-luxury-black group-hover:text-luxury-gray-700 transition-colors">
                    {release.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <span className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                      {release.type}
                    </span>
                    <span className="font-display text-sm tracking-wider uppercase text-luxury-gray-400">
                      {release.date}
                    </span>
                  </div>
                </div>
                <p className="font-serif text-gray-600 mb-3">
                  {release.excerpt}
                </p>
                <button className="font-display text-sm tracking-wider uppercase text-luxury-black hover:text-luxury-gray-600 transition-colors">
                  Lire la suite →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Press Contact */}
          <div>
            <h2 className="font-serif text-3xl font-light text-luxury-black mb-6">
              Contact Presse
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gray-400" />
                <div>
                  <p className="font-serif text-lg text-luxury-black">+33 1 42 86 88 88</p>
                  <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                    Attachée de Presse
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gray-400" />
                <div>
                  <p className="font-serif text-lg text-luxury-black">presse@palais-dore.fr</p>
                  <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                    Relations Médias
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Info */}
          <div>
            <h2 className="font-serif text-3xl font-light text-luxury-black mb-6">
              Informations Restaurant
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg text-luxury-black mb-1">Le Palais Doré</p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                  12 Place Vendôme, 75001 Paris
                </p>
              </div>
              <div>
                <p className="font-serif text-lg text-luxury-black mb-1">Chef Philippe Dubois</p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                  Disponible pour interviews sur rendez-vous
                </p>
              </div>
              <div>
                <p className="font-serif text-lg text-luxury-black mb-1">Service Presse</p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                  Réponse sous 24h • 7j/7
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-luxury-gray-50 p-8"
        >
          <h3 className="font-serif text-2xl font-light text-luxury-black mb-4">
            Conditions d'utilisation
          </h3>
          <p className="font-serif text-gray-600 leading-relaxed">
            Les ressources médias sont mises à disposition exclusivement pour usage éditorial 
            en relation avec Le Palais Doré. Toute utilisation commerciale est interdite. 
            Crédit photo obligatoire. Les images ne peuvent être modifiées sans autorisation préalable.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 