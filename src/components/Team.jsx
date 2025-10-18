import { motion } from 'framer-motion'
import { fadeIn, useScrollAnimation } from '../lib/motion'

const teamPlayers = [
  {
    id: 1,
    name: 'קארון דשילדס',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%A7%D7%A8%D7%95%D7%9F_%D7%93%D7%A9%D7%99%D7%9C%D7%93%D7%A1_jev4k5.jpg',
    featured: false
  },
  {
    id: 2,
    name: 'נתנאל ארצי',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717858/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C_%D7%90%D7%A8%D7%A6%D7%99_qkkrer.jpg',
    featured: false
  },
  {
    id: 3,
    name: 'רועי הובר',
    position: 'סנטר',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717861/%D7%A8%D7%95%D7%A2%D7%99_%D7%94%D7%95%D7%91%D7%A8_zrxexr.jpg',
    featured: false
  },
  {
    id: 4,
    name: 'ליאור קררה',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%9C%D7%99%D7%90%D7%95%D7%A8_%D7%A7%D7%A8%D7%A8%D7%94_v4xqr4.jpg',
    featured: false
  },
  {
    id: 5 ,
    name: 'בן אלטשולר',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717861/%D7%91%D7%9F_%D7%90%D7%9C%D7%98%D7%A9%D7%95%D7%9C%D7%A8_g1njm2.jpg',
    featured: false
  },
  {
    id: 6,
    name: 'יואב ויטלם',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%99%D7%95%D7%90%D7%91_%D7%95%D7%99%D7%98%D7%9C%D7%9D_oeawem.jpg',
    featured: false
  },
  {
    id: 7,
    name: 'דיג׳יי שארפ',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717858/dj_sharp_gaaqeu.jpg',
    featured: false
  },
  {
    id: 8,
    name: 'נעם נאור',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717859/%D7%A0%D7%95%D7%A2%D7%9D_%D7%A0%D7%90%D7%95%D7%A8_i2mgct.webp',
    featured: false
  },
  {
    id: 5,
    name: 'נעם יעקובי',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%A0%D7%95%D7%A2%D7%9D_%D7%99%D7%A2%D7%A7%D7%95%D7%91%D7%99_i6d4bc.jpg',
    featured: false
  },
  {
    id: 13,
    name: 'מייקל בריסקר',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717859/michael_kweyfc.jpg',
    featured: false
  },
  {
    id: 9,
    name: 'יובל הוכשטטר',
    position: 'סנטר',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717859/%D7%94%D7%95%D7%9B%D7%A9%D7%98%D7%98%D7%A8_lnq25r.jpg',
    featured: false
  },
  {
    id: 10,
    name: 'דקארי טאקר',
    position: 'פורוורד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%93%D7%90%D7%A7%D7%A8%D7%99_%D7%98%D7%90%D7%A7%D7%A8_yxm3hk.jpg',
    featured: false
  },
  {
    id: 11,
    name: 'גיל בני',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%92%D7%99%D7%9C_%D7%91%D7%A0%D7%99_sv1p2l.jpg',
    featured: false
  },
  {
    id: 12,
    name: 'עמית אבו',
    position: 'סנטר',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717859/%D7%A2%D7%9E%D7%99%D7%AA_%D7%90%D7%91%D7%95_qbt2yu.webp',
    featured: false
  },
  {
    id: 13,
    name: 'עמית אלון',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717860/%D7%A2%D7%9E%D7%99%D7%AA_%D7%90%D7%9C%D7%95%D7%9F_stm6dn.jpg',
    featured: false
  },
  {
    id: 14,
    name: 'דרו קרופורד',
    position: 'גארד',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717859/%D7%93%D7%A8%D7%95%D7%A7%D7%A8%D7%90%D7%95%D7%A4%D7%95%D7%A8%D7%93_ohb61a.webp',
    featured: false
  },
  {
    id: 15,
    name: 'שון דאוסן',
    position: 'סנטר',
    image: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760717858/%D7%A9%D7%95%D7%9F_%D7%93%D7%90%D7%95%D7%A1%D7%9F_j3b9n8.avif',
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
            שחקנים מקצועיים שעברו אצלנו בשנים האחרונות
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamPlayers.map((player, index) => (
            <motion.article
              key={player.id}
              variants={fadeIn}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-2xl bg-navy-900/50 border-2 border-gold-500/20 hover:border-gold-500 transition-all cursor-pointer"
              aria-label={player.name}
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" aria-hidden="true" />

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

                <h3 className="text-white text-xl font-bold">{player.name}</h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 border-2 border-gold-500 rounded-2xl shadow-gold-lg" />
              </div>
            </motion.article>
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
