import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Le Palais Doré - Restaurant de Luxe',
  description: 'Une expérience culinaire d\'exception dans un cadre prestigieux. Découvrez notre cuisine gastronomique française.',
  keywords: 'restaurant luxe, gastronomie française, cuisine fine, restaurant prestige',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-charcoal-900 text-gray-100">
        {children}
      </body>
    </html>
  )
} 