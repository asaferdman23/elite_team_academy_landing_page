import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, hoverScale, useScrollAnimation } from '../lib/motion'

const programs = [
  {
    id: 1,
    icon: '🏀',
    title: 'אימונים אישיים 1:1',
    description: 'אימון מותאם אישית המתמקד בפיתוח כישורים אישיים ואסטרטגיית משחק המותאמת לילד שלכם.'
  },
  {
    id: 2,
    icon: '👥',
    title: 'אימוני קבוצה',
    description: 'בניית עבודת צוות, תקשורת ומנטליות משחק בסביבת אימון קבוצתית דינמית.'
  },
  {
    id: 3,
    icon: '🎯',
    title: 'קליניקת זריקות ועבודת רגליים',
    description: 'שליטה במכניקת זריקות, דפוסי עבודת רגליים וטכניקות ניקוד עם תרגולים ממוקדים.'
  },
  {
    id: 4,
    icon: '⭐',
    title: 'יסודות לילדים',
    description: 'היכרות מהנה ומותאמת גיל ליסודות הכדורסל עבור מתחילים צעירים בגילאי 6-10.'
  }
]

const Programs = () => {
  const [ref, controls] = useScrollAnimation()

  return (
    <section
      id="programs"
      ref={ref}
      className="py-20 sm:py-24 border-b border-gold-500/20"
      style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            <span className="text-gold-500">התוכניות</span> שלנו
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            בחרו מתוך מגוון אפשרויות אימון המתוכננות לפגוש כל ספורטאי צעיר ברמתו ולעזור לו להגיע ליעדיו.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                variants={hoverScale}
                className="glass border-2 border-gold-500/20 p-8 rounded-2xl h-full card-hover-gold"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 leading-relaxed">{program.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <a
            href="#register"
            className="btn-gold text-lg px-8 py-4"
          >
            הירשמו לתוכנית
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Programs
