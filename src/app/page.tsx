import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import TeamPortraits from '@/components/TeamPortraits'
import CreationProcess from '@/components/CreationProcess'
import Awards from '@/components/Awards'
import Testimonials from '@/components/Testimonials'
import ExclusiveEvents from '@/components/ExclusiveEvents'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-white">
      <Header />
      <Hero />
      <Philosophy />
      <TeamPortraits />
      <CreationProcess />
      <Awards />
      <Testimonials />
      <ExclusiveEvents />
      <Partners />
      <Footer />
    </main>
  )
} 