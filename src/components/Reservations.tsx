'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react'

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de soumission du formulaire
    console.log('Réservation soumise:', formData)
    alert('Votre demande de réservation a été envoyée. Nous vous contacterons sous 24h.')
  }

  const timeSlots = [
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
  ]

  const occasions = [
    'Dîner romantique',
    'Anniversaire',
    'Dîner d\'affaires',
    'Célébration familiale',
    'Événement spécial',
    'Autre'
  ]

  return (
    <section id="reservations" className="py-20 bg-midnight-900">
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
            Réservations
            <span className="block gradient-text">& Événements Privés</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Réservez votre table pour une expérience gastronomique inoubliable. 
            Nous organisons également des événements privés sur mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-midnight-800 p-8 rounded-lg border border-midnight-700"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Réserver une Table
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Heure
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:border-gold-400 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Convives
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:border-gold-400 focus:outline-none transition-colors"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Occasion (optionnel)
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                  className="w-full px-4 py-3 bg-midnight-700 border border-midnight-600 rounded-lg text-white focus:border-copper-400 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionner une occasion</option>
                  {occasions.map(occasion => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message particulier (optionnel)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-midnight-700 border border-midnight-600 rounded-lg text-white placeholder-gray-400 focus:border-copper-400 focus:outline-none transition-colors resize-none"
                  placeholder="Allergies, préférences, demandes spéciales..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-copper-600 hover:bg-copper-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200"
              >
                Confirmer la Réservation
              </motion.button>
            </form>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-charcoal-800 p-8 rounded-lg border border-charcoal-700">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-copper-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Réservations</p>
                    <p className="text-gray-300">+33 1 42 86 87 88</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-copper-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Horaires</p>
                    <p className="text-gray-300">Tous les jours : 19h00 - 23h30</p>
                    <p className="text-gray-300 text-sm">Dernière commande : 22h30</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-copper-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Groupes</p>
                    <p className="text-gray-300">Salons privés disponibles</p>
                    <p className="text-gray-300 text-sm">Jusqu'à 24 personnes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-charcoal-800 p-8 rounded-lg border border-charcoal-700">
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Politique de Réservation
              </h3>
              
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>Confirmation requise dans les 24h</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>Annulation gratuite jusqu'à 48h avant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>Tenue élégante exigée</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>Réservation recommandée</span>
                </li>
              </ul>
            </div>

            {/* Private Events */}
            <div className="bg-copper-600/10 border border-copper-400/30 p-8 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Événements Privés
              </h3>
              <p className="text-gray-300 mb-4">
                Organisez vos événements d'exception dans nos salons privés. 
                Menu personnalisé et service dédié.
              </p>
              <a
                href="mailto:events@palais-dore.fr"
                className="inline-block bg-copper-600 hover:bg-copper-700 text-white px-6 py-2 rounded font-semibold transition-colors"
              >
                Nous Contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 