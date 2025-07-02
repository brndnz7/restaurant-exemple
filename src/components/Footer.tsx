'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Restaurant Info */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-3xl font-light text-luxury-white mb-8">
                Le Palais Doré
              </h3>
              <div className="w-24 h-px bg-luxury-white mb-8" />
              <p className="font-serif text-lg leading-relaxed text-luxury-gray-300 mb-8 max-w-md">
                Restaurant gastronomique trois étoiles Michelin au cœur de la Place Vendôme. 
                Une expérience culinaire d'exception depuis 1985.
              </p>
              
              {/* Awards */}
              <div className="flex space-x-12">
                <div className="text-center">
                  <div className="font-serif text-2xl font-light text-luxury-white mb-2">III</div>
                  <div className="w-6 h-px bg-luxury-white mx-auto mb-2" />
                  <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
                    Michelin
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-light text-luxury-white mb-2">19</div>
                  <div className="w-6 h-px bg-luxury-white mx-auto mb-2" />
                  <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
                    Gault & Millau
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-8">
                Navigation
              </h4>
              <nav className="space-y-4">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'À Propos', href: '/about' },
                  { name: 'Menu', href: '/menu' },
                  { name: 'Galerie', href: '/gallery' },
                  { name: 'Réservations', href: '/reservations' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Presse', href: '/presse' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block font-serif text-lg text-luxury-gray-300 hover:text-luxury-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-sm tracking-widest uppercase text-luxury-gray-400 mb-8">
                Contact
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gray-400 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-luxury-white">12 Place Vendôme</p>
                    <p className="font-serif text-lg text-luxury-gray-300">75001 Paris</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gray-400" />
                  <p className="font-serif text-lg text-luxury-white">+33 1 42 86 88 88</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gray-400" />
                  <p className="font-serif text-lg text-luxury-white">contact@palais-dore.fr</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gray-400 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-luxury-white">Mar - Sam</p>
                    <p className="font-serif text-lg text-luxury-gray-300">19h30 - 22h30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                © 2024 Le Palais Doré
              </p>
              <div className="w-px h-4 bg-luxury-gray-600" />
              <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                Tous droits réservés
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link
                href="/mentions-legales"
                className="font-display text-sm tracking-wider uppercase text-luxury-gray-500 hover:text-luxury-white transition-colors duration-300"
              >
                Mentions Légales
              </Link>
              <div className="w-px h-4 bg-luxury-gray-600" />
              <Link
                href="/politique-confidentialite"
                className="font-display text-sm tracking-wider uppercase text-luxury-gray-500 hover:text-luxury-white transition-colors duration-300"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 