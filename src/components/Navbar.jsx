import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const programs = [
  { slug: 'beit-berl', title: 'אקדמיית בית ברל', subtitle: 'פנינת השרון' },
  { slug: 'brenner', title: 'אקדמיית ברנר', subtitle: 'השפלה' },
  { slug: 'personal-training', title: 'אימונים אישיים פרטניים', subtitle: 'גמישות מלאה' },
  { slug: 'mentor-360', title: 'מנטור 360', subtitle: 'ליווי VIP מירדן יצחקוב' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false)
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

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProgramsDropdown(true)}
              onMouseLeave={() => setShowProgramsDropdown(false)}
            >
              <a
                href="/#programs"
                onClick={(e) => handleNavClick(e, 'programs')}
                className="text-gray-300 hover:text-gold-500 transition-colors font-medium flex items-center gap-1"
              >
                התוכניות שלנו
                <svg className={`w-4 h-4 transition-transform ${showProgramsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Dropdown Menu */}
              {showProgramsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-navy-900/95 backdrop-blur-lg border-2 border-gold-500/30 rounded-xl shadow-2xl shadow-gold-500/20 overflow-hidden"
                >
                  {programs.map((program, index) => (
                    <Link
                      key={program.slug}
                      to={`/programs/${program.slug}`}
                      className={`block px-6 py-4 hover:bg-gold-500/20 transition-colors ${
                        index !== programs.length - 1 ? 'border-b border-gold-500/10' : ''
                      }`}
                      onClick={() => setShowProgramsDropdown(false)}
                    >
                      <div className="font-bold text-white text-lg mb-1">{program.title}</div>
                      <div className="text-gold-400 text-sm">{program.subtitle}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

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
