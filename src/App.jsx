import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import VideoCarousel from './components/VideoCarousel'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AccessibilityStatement from './pages/AccessibilityStatement'
import SiteRegulations from './pages/SiteRegulations'

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const HomePage = () => (
    <>
      <Hero onVideoModalOpen={() => setIsVideoModalOpen(true)} />
      <About />
      <Programs />
      <Testimonials />
      <Team />
      <CTA />
      <RegistrationForm />
      <VideoCarousel isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  )

  return (
    <Router>
      <div className="min-h-screen bg-navy text-white"
           style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
          <Route path="/site-regulations" element={<SiteRegulations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
