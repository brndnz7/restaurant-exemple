'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Train, Car } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-midnight-800">
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
            Contact &
            <span className="block gradient-text">Localisation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Situé au cœur du prestigieux quartier de la Place Vendôme, 
            Le Palais Doré vous accueille dans un cadre d'exception.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-700">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-copper-600/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">Adresse</h3>
                  <p className="text-gray-300 leading-relaxed">
                    15 Place Vendôme<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center space-x-3">
                  <Train className="w-4 h-4 text-copper-400" />
                  <div>
                    <p className="text-white font-medium">Métro</p>
                    <p className="text-gray-300">Opéra (L3, L7, L8)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Car className="w-4 h-4 text-copper-400" />
                  <div>
                    <p className="text-white font-medium">Parking</p>
                    <p className="text-gray-300">Valet disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-700">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-600/20 p-2 rounded">
                    <Phone className="w-5 h-5 text-copper-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <p className="text-gray-300">+33 1 42 86 87 88</p>
                    <p className="text-gray-400 text-sm">Réservations et renseignements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-600/20 p-2 rounded">
                    <Mail className="w-5 h-5 text-copper-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">contact@palais-dore.fr</p>
                    <p className="text-gray-400 text-sm">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-600/20 p-2 rounded">
                    <Clock className="w-5 h-5 text-copper-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horaires d'ouverture</p>
                    <div className="text-gray-300 space-y-1">
                      <p>Lundi - Dimanche : 19h00 - 23h30</p>
                      <p className="text-gray-400 text-sm">Dernière commande : 22h30</p>
                      <p className="text-copper-400 text-sm font-medium">Fermé le 25 décembre et 1er janvier</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-700">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Services Additionnels
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Événements privés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Service personnalisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Menu végétarien</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Sélection de boissons premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Service de voiturier</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-gray-300">Salons privés</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="bg-midnight-900 rounded-lg overflow-hidden border border-midnight-700">
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Place Vendôme Paris"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-midnight-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-midnight-900/90 backdrop-blur-sm p-6 rounded-lg text-center">
                    <MapPin className="w-8 h-8 text-copper-400 mx-auto mb-3" />
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      Le Palais Doré
                    </h4>
                    <p className="text-gray-300 text-sm">
                      15 Place Vendôme, 75001 Paris
                    </p>
                    <a
                      href="https://maps.google.com/?q=Place+Vendôme,+Paris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-copper-600 hover:bg-copper-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-midnight-900 p-6 rounded-lg border border-midnight-700">
              <h4 className="text-lg font-serif font-bold text-white mb-4">
                Comment nous rejoindre
              </h4>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="text-copper-400 font-medium mb-2">En métro</h5>
                  <p className="text-gray-300">
                    Station Opéra (lignes 3, 7, 8) - 3 minutes à pied<br />
                    Station Tuileries (ligne 1) - 5 minutes à pied
                  </p>
                </div>
                
                <div>
                  <h5 className="text-copper-400 font-medium mb-2">En voiture</h5>
                  <p className="text-gray-300">
                    Parking valet disponible sur réservation<br />
                    Parking public : Vendôme (24h/24)
                  </p>
                </div>
                
                <div>
                  <h5 className="text-copper-400 font-medium mb-2">Depuis les aéroports</h5>
                  <p className="text-gray-300">
                    CDG : RER B + Métro (45 min) ou Taxi (45-60 min)<br />
                    Orly : Orlyval + RER B + Métro (50 min) ou Taxi (30-45 min)
                  </p>
                </div>
              </div>
            </div>

            {/* Special Note */}
            <div className="bg-copper-600/10 border border-copper-400/30 p-6 rounded-lg">
              <h4 className="text-lg font-serif font-bold text-white mb-3">
                Note importante
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous recommandons fortement la réservation, particulièrement pour les soirées et week-ends. 
                Une tenue élégante est exigée (veste recommandée pour ces messieurs).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 