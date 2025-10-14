import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <a href="#hero" className="text-2xl sm:text-3xl font-extrabold text-white">
              Elite Team <span className="text-gold-500">Academy</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="#about" className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              אודות
            </a>
            <a href="#programs" className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              תוכניות
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              המלצות
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-gold-500 transition-colors font-medium">
              גלריה
            </a>
            <a
              href="#register"
              className="btn-gold"
            >
              הרשמה
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="#register"
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
