'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MenuPremium() {
  const [activeMenu, setActiveMenu] = useState('degustation')

  const menus = {
    degustation: {
      title: "Menu Dégustation",
      subtitle: "L'Expression de Notre Art Culinaire",
      price: "285€",
      description: "Un voyage gustatif en 8 services qui révèle toute la créativité et le savoir-faire de notre cuisine.",
      dishes: [
        {
          name: "Amuse-Bouche",
          description: "Huître de Belon, écume de champagne et caviar Osciètre",
          technique: "Sphérification • Émulsion à froid"
        },
        {
          name: "Entrée",
          description: "Foie gras de canard, chutney de figues et pain de Gênes",
          technique: "Cuisson basse température • Torréfaction"
        },
        {
          name: "Poisson",
          description: "Turbot de ligne, beurre blanc aux agrumes et légumes primeurs",
          technique: "Cuisson à la vapeur • Réduction classique"
        },
        {
          name: "Viande",
          description: "Pigeon de Bresse, jus aux épices douces et garniture automnale",
          technique: "Rôtissage • Confit • Réduction"
        },
        {
          name: "Fromage",
          description: "Sélection de Laurent Dubois, compotée de fruits de saison",
          technique: "Affinage • Température contrôlée"
        },
        {
          name: "Pré-dessert",
          description: "Sorbet citron vert et basilic, tuile de parmesan",
          technique: "Turbinage • Déshydratation"
        },
        {
          name: "Dessert",
          description: "Soufflé Grand Marnier, glace vanille de Madagascar",
          technique: "Montage à chaud • Infusion"
        },
        {
          name: "Mignardises",
          description: "Chocolats maison et fruits secs caramélisés",
          technique: "Tempérage • Caramélisation"
        }
      ]
    },
    prestige: {
      title: "Menu Prestige",
      subtitle: "L'Apogée de la Gastronomie Française",
      price: "450€",
      description: "Notre menu d'exception avec les produits les plus raffinés et les techniques les plus avancées.",
      dishes: [
        {
          name: "Mise en Bouche",
          description: "Caviar Beluga, blinis de sarrasin et crème fraîche fermière",
          technique: "Sélection • Fermentation • Montage"
        },
        {
          name: "Amuse-Bouche",
          description: "Tartare de thon rouge, avocat et wasabi, tuile de sésame noir",
          technique: "Découpe au couteau • Émulsion • Cuisson"
        },
        {
          name: "Entrée Chaude",
          description: "Homard bleu du Cotentin, bisque réduite et micro-légumes",
          technique: "Cuisson au court-bouillon • Réduction • Extraction"
        },
        {
          name: "Poisson",
          description: "Bar de ligne, écailles croustillantes et beurre noisette",
          technique: "Désarêtage • Cuisson unilatérale • Beurre monté"
        },
        {
          name: "Intermède",
          description: "Velouté de châtaignes, mousse de truffe noire du Périgord",
          technique: "Cuisson vapeur • Montage • Infusion"
        },
        {
          name: "Viande",
          description: "Bœuf de Kobé, moelle rôtie et légumes glacés",
          technique: "Cuisson basse température • Rôtissage • Glaçage"
        },
        {
          name: "Fromage",
          description: "Comté 36 mois, miel de châtaignier et noix fraîches",
          technique: "Affinage • Sélection • Harmonie"
        },
        {
          name: "Dessert",
          description: "Tarte fine aux poires Williams, glace cannelle et caramel beurre salé",
          technique: "Pâte brisée • Pochage • Infusion • Caramélisation"
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
              <span className="block -mt-4">CARTE</span>
            </h1>
            <div className="w-32 h-px bg-luxury-white mx-auto mb-16" />
            <p className="font-serif text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Chaque menu est une symphonie gustative, orchestrée avec les plus beaux produits 
              et sublimée par notre savoir-faire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Selection */}
      <section className="py-20 bg-luxury-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-16 mb-20"
          >
            {Object.keys(menus).map((menuKey) => (
              <button
                key={menuKey}
                onClick={() => setActiveMenu(menuKey)}
                className={`font-display text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeMenu === menuKey
                    ? 'text-luxury-black border-b-2 border-luxury-black pb-2'
                    : 'text-luxury-gray-500 hover:text-luxury-gray-700'
                }`}
              >
                {menus[menuKey].title}
              </button>
            ))}
          </motion.div>

          {/* Active Menu */}
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Menu Header */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-luxury-black mb-6">
                {menus[activeMenu].title}
              </h2>
              <p className="font-display text-sm tracking-widest uppercase text-luxury-gray-500 mb-8">
                {menus[activeMenu].subtitle}
              </p>
              <div className="w-24 h-px bg-luxury-black mx-auto mb-8" />
              <p className="font-serif text-xl text-luxury-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {menus[activeMenu].description}
              </p>
              <div className="font-serif text-4xl font-light text-luxury-black">
                {menus[activeMenu].price}
              </div>
            </div>

            {/* Dishes */}
            <div className="space-y-16">
              {menus[activeMenu].dishes.map((dish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`grid grid-cols-12 gap-8 items-start ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Dish Number */}
                    <div className={`col-span-12 lg:col-span-2 ${
                      index % 2 === 0 ? '' : 'lg:col-start-11'
                    }`}>
                      <div className={`text-center lg:${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        <div className="font-serif text-6xl font-light text-luxury-gray-300 group-hover:text-luxury-black transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Dish Content */}
                    <div className={`col-span-12 lg:col-span-10 ${
                      index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'
                    }`}>
                      <div className="border-l-2 border-luxury-gray-200 pl-8 group-hover:border-luxury-black transition-colors duration-300">
                        <h3 className="font-serif text-2xl font-light text-luxury-black mb-3">
                          {dish.name}
                        </h3>
                        <p className="font-serif text-lg leading-relaxed text-luxury-gray-600 mb-4">
                          {dish.description}
                        </p>
                        <p className="font-display text-xs tracking-widest uppercase text-luxury-gray-400">
                          {dish.technique}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wine Pairing */}
      <section className="py-32 bg-luxury-black text-luxury-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Accords Mets & Vins
            </h2>
            <div className="w-24 h-px bg-luxury-white mx-auto mb-8" />
            <p className="font-serif text-xl leading-relaxed text-luxury-gray-300 mb-12">
              Notre sommelier vous propose des accords exceptionnels, 
              sélectionnés parmi les plus beaux domaines français et internationaux.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-light text-luxury-white mb-4">
                  Accords Classiques
                </h3>
                <p className="font-serif text-lg text-luxury-gray-400 mb-4">
                  +95€ par personne
                </p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                  5 verres • Domaines référence
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-light text-luxury-white mb-4">
                  Accords Prestige
                </h3>
                <p className="font-serif text-lg text-luxury-gray-400 mb-4">
                  +165€ par personne
                </p>
                <p className="font-display text-sm tracking-wider uppercase text-luxury-gray-500">
                  6 verres • Cuvées d'exception
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef's Note */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <blockquote className="font-serif text-3xl md:text-4xl font-light leading-relaxed text-luxury-gray-600 mb-12">
              "Chaque menu raconte notre histoire, celle d'une cuisine française 
              qui ose l'innovation tout en respectant ses racines les plus profondes."
            </blockquote>
            <div className="w-24 h-px bg-luxury-black mx-auto mb-6" />
            <cite className="font-display text-sm tracking-widest uppercase text-luxury-gray-500">
              Philippe Dubois, Chef Exécutif
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 