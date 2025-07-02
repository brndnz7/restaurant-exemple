'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Crown } from 'lucide-react'

export default function ExclusiveEvents() {
  const events = [
    {
      date: "15 Février 2024",
      title: "Dîner à Quatre Mains",
      subtitle: "Collaboration Philippe Dubois × Alain Passard",
      description: "Une soirée exceptionnelle réunissant deux maîtres de la gastronomie française pour un menu inédit de 8 services.",
      price: "450€",
      status: "Complet",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "22 Mars 2024",
      title: "Menu de Printemps",
      subtitle: "Célébration des Premiers Légumes",
      description: "Un hommage aux primeurs avec des produits exclusifs de nos maraîchers partenaires. Menu 100% végétal d'exception.",
      price: "285€",
      status: "Places disponibles",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "10 Mai 2024",
      title: "Soirée Caviar & Champagne",
      subtitle: "Les Trésors de la Mer",
      description: "Une exploration des plus beaux caviars du monde accompagnés de nos créations marines signature.",
      price: "650€",
      status: "Ouverture prochaine",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="py-32 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-6">
            Événements
          </h2>
          <h3 className="font-serif text-5xl md:text-6xl font-light">
            Moments d'Exception
          </h3>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Event image */}
              <div className="aspect-square overflow-hidden mb-8">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(100%) contrast(120%)' }}
                />
              </div>

              {/* Event details */}
              <div>
                {/* Date */}
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-4 h-4 text-luxury-gray-400" />
                  <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-400">
                    {event.date}
                  </p>
                </div>

                {/* Title */}
                <h4 className="font-serif text-2xl font-light text-luxury-white mb-2">
                  {event.title}
                </h4>
                
                {/* Subtitle */}
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-300 mb-4">
                  {event.subtitle}
                </p>

                {/* Description */}
                <p className="font-serif text-lg leading-relaxed text-luxury-gray-400 mb-6">
                  {event.description}
                </p>

                {/* Price and status */}
                <div className="flex justify-between items-center">
                  <div className="font-serif text-xl text-luxury-white">
                    {event.price}
                  </div>
                  <div className={`font-display text-xs tracking-widest uppercase px-3 py-1 border ${
                    event.status === 'Complet' 
                      ? 'border-luxury-gray-600 text-luxury-gray-500'
                      : event.status === 'Places disponibles'
                      ? 'border-luxury-white text-luxury-white'
                      : 'border-luxury-gray-400 text-luxury-gray-400'
                  }`}>
                    {event.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h4 className="font-serif text-3xl font-light text-luxury-white mb-6">
              Événements Sur Mesure
            </h4>
            <p className="font-serif text-lg leading-relaxed text-luxury-gray-300 mb-8">
              Nous organisons également des événements privés exclusifs pour vos occasions spéciales. 
              Anniversaires, célébrations d'entreprise, dîners intimes : chaque moment devient unique.
            </p>
            <button className="btn-luxury">
              Nous Contacter
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Crown className="w-8 h-8 text-luxury-white" />
            </div>
            <div className="font-serif text-4xl font-light text-luxury-white mb-4">24</div>
            <div className="w-12 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Événements Exclusifs/An
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-luxury-white" />
            </div>
            <div className="font-serif text-4xl font-light text-luxury-white mb-4">500</div>
            <div className="w-12 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Convives Privilégiés
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calendar className="w-8 h-8 text-luxury-white" />
            </div>
            <div className="font-serif text-4xl font-light text-luxury-white mb-4">12</div>
            <div className="w-12 h-px bg-luxury-white mx-auto mb-4" />
            <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-400">
              Collaborations Chefs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 