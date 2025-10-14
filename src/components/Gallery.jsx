import { motion } from 'framer-motion'
import { fadeIn, useScrollAnimation } from '../lib/motion'

const galleryImages = [
  {
    id: 1,
    src: '/assets/DSC03399.JPEG',
    alt: 'אימון ריכוז',
    caption: 'ריכוז'
  },
  {
    id: 2,
    src: '/assets/camp.JPG',
    alt: 'תרגול קבוצתי',
    caption: 'עבודת צוות'
  },
  {
    id: 3,
    src: '/assets/kid.JPG',
    alt: 'כיתת יסודות לילדים',
    caption: 'משמעת'
  },
  {
    id: 4,
    src: '/assets/mike.JPEG',
    alt: 'מאמן ירדן מדריך',
    caption: 'מצוינות'
  },
  {
    id: 5,
    src: '/assets/DSC03409.JPG',
    alt: 'אימון מקצועי',
    caption: 'מקצועיות'
  },
  {
    id: 6,
    src: '/assets/focus.JPG',
    alt: 'התמקדות באימון',
    caption: 'התמקדות'
  },
  {
    id: 7,
    src: '/assets/team.JPEG',
    alt: 'רוח קבוצתית',
    caption: 'צוות'
  },
  {    
    id: 8,
    src: '/assets/team_work.JPEG',
    alt: 'עבודה קבוצתית',
    caption: 'שיתוף פעולה'
  },
]

const Gallery = () => {
  const [ref, controls] = useScrollAnimation()

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 sm:py-24 border-b border-gold-500/20"
      style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            <span className="text-gold-500">צפו</span> באימונים שלנו
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            צפו בספורטאים שלנו בפעולה
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeIn}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer border-2 border-gold-500/20 hover:border-gold-500 transition-all"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
