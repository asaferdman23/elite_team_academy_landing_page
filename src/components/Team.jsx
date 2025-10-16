import { motion } from 'framer-motion'
import { fadeIn, useScrollAnimation } from '../lib/motion'

// TODO: Replace these placeholder URLs with actual player photos from Cloudinary
const teamPlayers = [
  {
    id: 1,
    name: 'שחקן 1',
    age: 16,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+1',
    featured: true,
    badge: '⭐ MVP'
  },
  {
    id: 2,
    name: 'שחקן 2',
    age: 15,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+2',
    featured: false
  },
  {
    id: 3,
    name: 'שחקן 3',
    age: 17,
    position: 'סנטר',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+3',
    featured: false
  },
  {
    id: 4,
    name: 'שחקן 4',
    age: 16,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+4',
    featured: true,
    badge: '🏆 קפטן'
  },
  {
    id: 5,
    name: 'שחקן 5',
    age: 14,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+5',
    featured: false
  },
  {
    id: 6,
    name: 'שחקן 6',
    age: 15,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+6',
    featured: false
  },
  {
    id: 7,
    name: 'שחקן 7',
    age: 16,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+7',
    featured: false
  },
  {
    id: 8,
    name: 'שחקן 8',
    age: 17,
    position: 'סנטר',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+8',
    featured: false
  },
  {
    id: 9,
    name: 'שחקן 9',
    age: 15,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+9',
    featured: false
  },
  {
    id: 10,
    name: 'שחקן 10',
    age: 16,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+10',
    featured: false
  },
  {
    id: 11,
    name: 'שחקן 11',
    age: 14,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+11',
    featured: false
  },
  {
    id: 12,
    name: 'שחקן 12',
    age: 17,
    position: 'סנטר',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+12',
    featured: false
  },
  {
    id: 13,
    name: 'שחקן 13',
    age: 15,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+13',
    featured: false
  },
  {
    id: 14,
    name: 'שחקן 14',
    age: 16,
    position: 'גארד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+14',
    featured: false
  },
  {
    id: 15,
    name: 'שחקן 15',
    age: 17,
    position: 'פורוורד',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+15',
    featured: false
  },
  {
    id: 16,
    name: 'שחקן 16',
    age: 15,
    position: 'סנטר',
    image: 'https://via.placeholder.com/400x500/1a1a1a/F2C94C?text=Player+16',
    featured: false
  },
]

const Team = () => {
  const [ref, controls] = useScrollAnimation()

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 sm:py-24 border-b border-gold-500/20"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            <span className="text-gold-500">השחקנים</span> שלנו
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            הכירו את הספורטאים המצטיינים של אקדמיית אליט טים - הדור הבא של כוכבי הכדורסל
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              variants={fadeIn}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-2xl bg-navy-900/50 border-2 border-gold-500/20 hover:border-gold-500 transition-all cursor-pointer"
            >
              {/* Player Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Player Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                {/* Featured Badge */}
                {player.featured && player.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-bold mb-2"
                  >
                    {player.badge}
                  </motion.div>
                )}

                <h3 className="text-white text-xl font-bold mb-1">{player.name}</h3>
                <div className="flex items-center justify-center gap-2 text-gold-500 text-sm">
                  <span>גיל {player.age}</span>
                  <span>•</span>
                  <span>{player.position}</span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 border-2 border-gold-500 rounded-2xl shadow-gold-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            רוצה להצטרף לצוות המנצח שלנו?
          </p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-gold text-navy-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-gold-lg transition-all"
          >
            הצטרף עכשיו
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Team
