import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-gold' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                Elite Team <span className="text-gold-500">Academy</span>
              </span>
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/ddg685nfx/image/upload/v1760647272/Icon-Gold-TransparentBG_twfc3c.png"
                alt="Elite Team Academy Logo"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              אודות
            </a>
            <a href="/#programs" onClick={(e) => handleNavClick(e, 'programs')} className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              תוכניות
            </a>
            <a href="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              המלצות
            </a>
            <a href="/#team" onClick={(e) => handleNavClick(e, 'team')} className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              השחקנים
            </a>
            <a
              href="/#register"
              onClick={(e) => handleNavClick(e, 'register')}
              className="btn-gold"
            >
              הרשמה
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="/#register"
              onClick={(e) => handleNavClick(e, 'register')}
              className="bg-gradient-gold text-navy-900 px-4 py-2 rounded-lg font-bold text-sm hover:shadow-gold transition-all"
            >
              הרשמה
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
