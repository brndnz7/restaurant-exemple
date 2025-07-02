'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Réservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
    { name: 'Presse', href: '/presse' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-white/95 backdrop-blur-sm border-b border-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="font-serif text-2xl md:text-3xl text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
              LE PALAIS DORÉ
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-display text-sm tracking-widest uppercase text-luxury-black hover:opacity-60 transition-opacity duration-300 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-luxury-black group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-luxury-black hover:opacity-60 transition-opacity duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-luxury-white border-t border-luxury-black"
      >
        <nav className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-display text-sm tracking-widest uppercase text-luxury-black hover:opacity-60 transition-opacity duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  )
} 