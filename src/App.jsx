import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-navy text-white"
         style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}>
      <Navbar />
      <Hero onVideoModalOpen={() => setIsVideoModalOpen(true)} />
      <About />
      <Programs />
      <Testimonials />
      <Gallery />
      <CTA />
      <RegistrationForm />
      <Footer />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  )
}

export default App
