'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, Users, MapPin, Wine, Utensils, Heart, Star } from 'lucide-react'

export default function IntelligentReservation() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guests, setGuests] = useState(2)
  const [preferences, setPreferences] = useState<{
    dietary: string[];
    occasion: string;
    table: string;
    wine: boolean;
    specialRequests: string;
  }>({
    dietary: [],
    occasion: '',
    table: '',
    wine: false,
    specialRequests: ''
  })

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const days = []

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(currentYear, currentMonth, i)
      const isAvailable = i > today.getDate() && [1,2,3,4,5].includes(date.getDay()) // Mardi à Samedi
      days.push({
        day: i,
        date: date.toISOString().split('T')[0],
        available: isAvailable,
        limited: i % 7 === 0 // Quelques dates avec places limitées
      })
    }
    return days
  }

  const timeSlots = [
    { time: '19:30', available: true, experience: 'Service Principal' },
    { time: '20:00', available: true, experience: 'Service Principal' },
    { time: '20:30', available: false, experience: 'Service Principal' },
    { time: '21:00', available: true, experience: 'Service Principal' },
    { time: '21:30', available: true, experience: 'Service Tardif' }
  ]

  const dietaryOptions = [
    'Végétarien', 'Végan', 'Sans Gluten', 'Sans Lactose', 'Allergies Fruits de Mer', 'Allergies Noix'
  ]

  const occasions = [
    'Dîner d\'affaires', 'Anniversaire', 'Demande en mariage', 'Anniversaire de mariage', 
    'Célébration spéciale', 'Découverte gastronomique', 'Autre'
  ]

  const tablePreferences = [
    'Terrasse (si disponible)', 'Vue cuisine', 'Table d\'angle', 'Salon privé', 'Aucune préférence'
  ]

  return (
    <section className="py-20 bg-luxury-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-6">
            Réservation Intelligente
          </h1>
          <p className="font-serif text-xl text-luxury-black opacity-70 max-w-2xl mx-auto">
            Une expérience personnalisée commence par une réservation sur mesure. 
            Laissez-nous créer votre moment d'exception.
          </p>
        </motion.div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 border-2 flex items-center justify-center text-sm font-display tracking-wider ${
                step >= stepNumber ? 'bg-luxury-black text-luxury-white border-luxury-black' : 'border-luxury-black text-luxury-black bg-luxury-white'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-px ${step > stepNumber ? 'bg-luxury-black' : 'bg-luxury-black opacity-30'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Date & Time */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-light text-luxury-black mb-8 text-center">
              Choisissez votre moment
            </h2>

            {/* Calendar */}
            <div className="mb-12">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-6">
                Février 2024
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                  <div key={day} className="text-center py-3 font-display text-xs tracking-wider uppercase text-luxury-black opacity-60">
                    {day}
                  </div>
                ))}
                {generateCalendarDays().map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day.available && setSelectedDate(day.date)}
                    disabled={!day.available}
                    className={`aspect-square flex items-center justify-center font-serif text-lg transition-all duration-300 border ${
                      selectedDate === day.date 
                        ? 'bg-luxury-black text-luxury-white border-luxury-black' 
                        : day.available 
                        ? 'bg-luxury-white text-luxury-black border-luxury-black hover:bg-luxury-black hover:text-luxury-white' 
                        : 'bg-luxury-white text-luxury-black opacity-30 cursor-not-allowed border-luxury-black'
                    } ${day.limited ? 'relative' : ''}`}
                  >
                    {day.day}
                    {day.limited && day.available && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-6">
                  Créneaux disponibles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`p-4 border text-left transition-all duration-300 ${
                        selectedTime === slot.time
                          ? 'border-luxury-black bg-luxury-black text-luxury-white'
                          : slot.available
                          ? 'border-luxury-black bg-luxury-white text-luxury-black hover:bg-luxury-black hover:text-luxury-white'
                          : 'border-luxury-black bg-luxury-white text-luxury-black opacity-30 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5" />
                        <div>
                          <div className="font-serif text-lg">{slot.time}</div>
                          <div className="font-display text-xs tracking-wider uppercase opacity-70">
                            {slot.experience}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Guests */}
            <div className="mb-8">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-6">
                Nombre de convives
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-10 h-10 border border-luxury-black bg-luxury-white text-luxury-black flex items-center justify-center hover:bg-luxury-black hover:text-luxury-white transition-all duration-300"
                >
                  -
                </button>
                <span className="font-serif text-2xl text-luxury-black w-12 text-center">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  className="w-10 h-10 border border-luxury-black bg-luxury-white text-luxury-black flex items-center justify-center hover:bg-luxury-black hover:text-luxury-white transition-all duration-300"
                >
                  +
                </button>
                <div className="ml-4">
                  <Users className="w-5 h-5 text-luxury-black inline mr-2" />
                  <span className="font-display text-sm tracking-wider uppercase text-luxury-black">
                    {guests === 1 ? 'Personne' : 'Personnes'}
                  </span>
                </div>
              </div>
            </div>

            {selectedDate && selectedTime && (
              <div className="text-center">
                <button
                  onClick={() => setStep(2)}
                  className="btn-luxury"
                >
                  Continuer - Préférences
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 2: Preferences */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-light text-luxury-black mb-8 text-center">
              Personnalisez votre expérience
            </h2>

            {/* Dietary preferences */}
            <div className="mb-8">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-4">
                Régimes alimentaires & Allergies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dietaryOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setPreferences(prev => ({
                        ...prev,
                        dietary: prev.dietary.includes(option)
                          ? prev.dietary.filter(d => d !== option)
                          : [...prev.dietary, option]
                      }))
                    }}
                    className={`p-3 border text-left transition-all duration-300 ${
                      preferences.dietary.includes(option)
                        ? 'border-luxury-black bg-luxury-black text-luxury-white'
                        : 'border-luxury-black bg-luxury-white text-luxury-black hover:bg-luxury-black hover:text-luxury-white'
                    }`}
                  >
                    <span className="font-display text-sm tracking-wider">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div className="mb-8">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-4">
                Occasion spéciale
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {occasions.map((occasion, index) => (
                  <button
                    key={index}
                    onClick={() => setPreferences(prev => ({...prev, occasion}))}
                    className={`p-3 border text-left transition-all duration-300 ${
                      preferences.occasion === occasion
                        ? 'border-luxury-black bg-luxury-black text-luxury-white'
                        : 'border-luxury-black bg-luxury-white text-luxury-black hover:bg-luxury-black hover:text-luxury-white'
                    }`}
                  >
                    <span className="font-display text-sm tracking-wider">{occasion}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Table preference */}
            <div className="mb-8">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-4">
                Préférence de table
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tablePreferences.map((table, index) => (
                  <button
                    key={index}
                    onClick={() => setPreferences(prev => ({...prev, table}))}
                    className={`p-3 border text-left transition-all duration-300 ${
                      preferences.table === table
                        ? 'border-luxury-black bg-luxury-black text-luxury-white'
                        : 'border-luxury-black bg-luxury-white text-luxury-black hover:bg-luxury-black hover:text-luxury-white'
                    }`}
                  >
                    <span className="font-display text-sm tracking-wider">{table}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Special requests */}
            <div className="mb-8">
              <h3 className="font-display text-sm tracking-widest uppercase text-luxury-black mb-4">
                Demandes particulières
              </h3>
              <textarea
                value={preferences.specialRequests}
                onChange={(e) => setPreferences(prev => ({...prev, specialRequests: e.target.value}))}
                placeholder="Anniversaire surprise, allergies spécifiques, préférences culinaires..."
                className="w-full p-4 border border-luxury-black bg-luxury-white text-luxury-black h-32 resize-none focus:outline-none focus:bg-luxury-black focus:text-luxury-white transition-all duration-300 placeholder-luxury-black placeholder-opacity-50"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="btn-luxury-inverse"
              >
                Retour
              </button>
              <button
                onClick={() => setStep(3)}
                className="btn-luxury"
              >
                Finaliser la Réservation
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-light text-luxury-black mb-8">
              Confirmation de réservation
            </h2>

            <div className="border border-luxury-black bg-luxury-white p-8 mb-8">
              <div className="max-w-md mx-auto space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-luxury-black pb-2">
                  <span className="font-display text-sm tracking-wider uppercase text-luxury-black">Date</span>
                  <span className="font-serif text-luxury-black">{selectedDate}</span>
                </div>
                <div className="flex justify-between items-center border-b border-luxury-black pb-2">
                  <span className="font-display text-sm tracking-wider uppercase text-luxury-black">Heure</span>
                  <span className="font-serif text-luxury-black">{selectedTime}</span>
                </div>
                <div className="flex justify-between items-center border-b border-luxury-black pb-2">
                  <span className="font-display text-sm tracking-wider uppercase text-luxury-black">Convives</span>
                  <span className="font-serif text-luxury-black">{guests} personne{guests > 1 ? 's' : ''}</span>
                </div>
                {preferences.occasion && (
                  <div className="flex justify-between items-center border-b border-luxury-black pb-2">
                    <span className="font-display text-sm tracking-wider uppercase text-luxury-black">Occasion</span>
                    <span className="font-serif text-luxury-black">{preferences.occasion}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="font-serif text-lg text-luxury-black mb-8">
              Votre réservation sera confirmée dans les plus brefs délais. 
              Nous vous contacterons pour finaliser les détails de votre expérience culinaire.
            </p>

            <div className="space-y-4">
              <button className="btn-luxury w-full">
                Confirmer la Réservation
              </button>
              <button
                onClick={() => setStep(2)}
                className="btn-luxury-inverse w-full"
              >
                Modifier les Préférences
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 