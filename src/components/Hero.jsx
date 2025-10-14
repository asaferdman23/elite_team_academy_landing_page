import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'

const Hero = ({ onVideoModalOpen }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/team.JPEG)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Elite Team <span className="text-gold-500">Academy</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          המקום שבו ספורטאים צעירים הופכים לאלופים
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#register"
            className="bg-gradient-gold text-navy-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-gold-lg transition-all inline-block animate-glow"
          >
            הזמנת אימון ניסיון חינם
          </a>

          <button
            onClick={onVideoModalOpen}
            className="glass-gold text-white border-2 border-gold-500/50 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:border-gold-500 hover:shadow-gold transition-all"
          >
            צפו באימונים שלנו
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-gold-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
