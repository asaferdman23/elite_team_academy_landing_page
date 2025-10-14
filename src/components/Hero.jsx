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
      {/* Video Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/ddg685nfx/video/upload/v1760468907/hero-video_ruoigv.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/assets/team.JPEG" alt="Elite Team Academy" className="absolute inset-0 w-full h-full object-cover" />
        </video>
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
      </motion.div>
    </section>
  )
}

export default Hero
