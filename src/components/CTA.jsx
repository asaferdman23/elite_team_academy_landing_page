import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '../lib/motion'

const CTA = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      className="relative py-32 sm:py-40 border-b border-gold-500/20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/training1.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-navy-900/85" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
          הצטרפו ל<span className="text-gold-500">אליט</span>
        </h2>

        <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed">
          הירשמו לאימון ניסיון חינם השבת וחוו את ההבדל של אקדמיית אליט טים.
        </p>

        <motion.a
          href="#register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-gold text-navy-900 px-10 py-5 rounded-xl font-bold text-xl hover:shadow-gold-lg hover:scale-105 transition-all animate-glow"
        >
          תפסו את האימון החינמי שלכם
        </motion.a>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-8 text-white/80">

          <div className="text-center">
            <div className="text-3xl font-bold text-gold-500">+500</div>
            <div className="text-sm">ספורטאים אומנו</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-500">100%</div>
            <div className="text-sm">שביעות רצון</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
