'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Calendar, Car } from 'lucide-react'

export default function ContactPremium() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Réservations",
      primary: "+33 1 42 86 88 88",
      secondary: "Service ouvert 7j/7",
      description: "Notre équipe vous accueille pour toute réservation ou demande spéciale"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Correspondance",
      primary: "contact@palais-dore.fr",
      secondary: "Réponse sous 24h",
      description: "Pour toute question ou demande d'information personnalisée"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      primary: "12 Place Vendôme",
      secondary: "75001 Paris, France",
      description: "Au cœur du prestigieux 1er arrondissement parisien"
    }
  ]

  const operatingHours = [
    {
      day: "Mardi - Vendredi",
      hours: "19h30 - 22h30",
      note: "Service continu"
    },
    {
      day: "Samedi",
      hours: "19h00 - 23h00",
      note: "Service prolongé"
    },
    {
      day: "Dimanche - Lundi",
      hours: "Fermé",
      note: "Repos hebdomadaire"
    }
  ]

  const accessInfo = [
    {
      icon: <Car className="w-5 h-5" />,
      title: "Voiturier",
      description: "Service disponible sur demande"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Métro",
      description: "Tuileries (Ligne 1) • 2 minutes à pied"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Réservation",
      description: "Recommandée 2 semaines à l'avance"
    }
  ]

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
              NOUS
              <span className="block -mt-4">CONTACTER</span>
            </h1>
            <div className="w-32 h-px bg-luxury-white mx-auto mb-16" />
            <p className="font-serif text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Notre équipe se tient à votre disposition pour créer 
              votre expérience gastronomique sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group text-center"
              >
                <div className="border-2 border-luxury-black bg-luxury-white p-6 text-luxury-black group-hover:bg-luxury-black group-hover:text-luxury-white transition-colors duration-300 mx-auto w-fit mb-8">
                  {info.icon}
                </div>
                
                <h3 className="font-serif text-2xl font-light text-luxury-black mb-4">
                  {info.title}
                </h3>
                
                <div className="w-16 h-px bg-luxury-black mx-auto mb-6 group-hover:w-24 transition-all duration-300" />
                
                <p className="font-serif text-xl text-luxury-black mb-2">
                  {info.primary}
                </p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-black opacity-60 mb-4">
                  {info.secondary}
                </p>
                <p className="font-serif text-lg leading-relaxed text-luxury-black opacity-80">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Access */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-light text-luxury-white mb-8">
                Horaires
              </h2>
              <div className="w-24 h-px bg-luxury-white mb-12" />
              
              <div className="space-y-8">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="border-l-2 border-luxury-white pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl text-luxury-white">
                        {schedule.day}
                      </h3>
                      <span className="font-serif text-xl text-luxury-white">
                        {schedule.hours}
                      </span>
                    </div>
                    <p className="font-display text-sm tracking-wider uppercase text-luxury-white opacity-60">
                      {schedule.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Access Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-light text-luxury-white mb-8">
                Accès
              </h2>
              <div className="w-24 h-px bg-luxury-white mb-12" />
              
              <div className="space-y-8">
                {accessInfo.map((access, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="border-2 border-luxury-white bg-luxury-black p-3 text-luxury-white mt-1">
                      {access.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-luxury-white mb-2">
                        {access.title}
                      </h3>
                      <p className="font-serif text-lg text-luxury-white opacity-80">
                        {access.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-8">
              Situation Privilégiée
            </h2>
            <div className="w-32 h-px bg-luxury-black mx-auto mb-8" />
            <p className="font-serif text-xl text-luxury-black opacity-80 max-w-3xl mx-auto leading-relaxed">
              Au cœur de la Place Vendôme, temple du luxe parisien, 
              Le Palais Doré bénéficie d'un emplacement d'exception.
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="aspect-video border-2 border-luxury-black bg-luxury-white flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-luxury-black opacity-60 mx-auto mb-4" />
              <p className="font-serif text-2xl text-luxury-black mb-2">
                Place Vendôme, Paris 1er
              </p>
              <p className="font-display text-sm tracking-wider uppercase text-luxury-black opacity-60">
                Carte Interactive Disponible
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concierge Services */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-luxury-white mb-8">
              Services Concierge
            </h2>
            <div className="w-24 h-px bg-luxury-white mx-auto mb-12" />
            
            <p className="font-serif text-xl leading-relaxed text-luxury-white opacity-80 mb-12">
              Notre équipe peut organiser pour vous : transferts privés, 
              réservations théâtre, shopping personnel, visites privées de musées. 
              Laissez-nous créer votre séjour parisien sur mesure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="font-serif text-3xl font-light text-luxury-white mb-4">24h</div>
                <div className="w-8 h-px bg-luxury-white mx-auto mb-4" />
                <p className="font-display text-sm tracking-widest uppercase text-luxury-white opacity-60">
                  Service Concierge
                </p>
              </div>
              
              <div>
                <div className="font-serif text-3xl font-light text-luxury-white mb-4">∞</div>
                <div className="w-8 h-px bg-luxury-white mx-auto mb-4" />
                <p className="font-display text-sm tracking-widest uppercase text-luxury-white opacity-60">
                  Possibilités
                </p>
              </div>
              
              <div>
                <div className="font-serif text-3xl font-light text-luxury-white mb-4">1</div>
                <div className="w-8 h-px bg-luxury-white mx-auto mb-4" />
                <p className="font-display text-sm tracking-widest uppercase text-luxury-white opacity-60">
                  Objectif : Votre Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 