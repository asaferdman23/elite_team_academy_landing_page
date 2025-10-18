import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer, hoverScale, useScrollAnimation } from '../lib/motion'

const programs = [
  {
    id: 1,
    slug: 'beit-berl',
    title: 'אקדמיית בית ברל',
    description: 'מרכז הפיתוח החדש שלנו בפנינת השרון . מתאים לשחקנים מקצועיים בלבד מגילאי 11-19 . בין השעות 9:30-12:30 בהם יקבלו 2 יחידות אימון במפגש',
    backgroundImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719981/DSC03068_ozxo7t.jpg'
  },
  {
    id: 2,
    slug: 'brenner',
    title: 'אקדמיית ברנר',
    description: 'אקדמיה של השפלה ימי שבת בין השעות 10:00-13:00 לגילאי 10-17 מותאם גם עבור שחקנים וגם שחקניות בהם יהנו מיחידת פיתוח יכולות אישיות ומעטפת שלמה לאורך השנה',
    backgroundImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719980/DSC02877_iauann.jpg'
  },
  {
    id: 3,
    slug: 'personal-training',
    title: 'אימונים אישיים פרטניים',
    description: 'אימוני יכולות מבית היוצר של elite team עם צוות האימון ברחבי הארץ באיזורי ראשון לציון, תל אביב רמת גן, קרית אונו, רעננה והרצליה . חבילות אישיות מותאמות לצרכי השחקן',
    backgroundImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719979/DSC02895_k0bvfw.jpg'
  },
  {
    id: 4,
    slug: 'mentor-360',
    title: 'מנטור 360 עם ירדן יצחקוב',
    description: 'מסלול היוקרתי ביותר בחברת elite team. מסלול ייחודי ואישי ישירות מול מנכ״ל האקדמיה המבחר בין אימוני יכולות אישיות לניתוחי וידאו, שיחות חודשיות ועבודות אישיות ביתיות מותאמות. מתאים רק לשחקנים אשר יעברו שיחת התאמה מול ירדן',
    backgroundImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760470953/mike_yoipdl.jpg'
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

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {programs.map((program, index) => (
        <motion.article
          key={program.id}
          variants={fadeInUp}
          custom={index}
          whileHover="hover"
          className="h-96"
          aria-label={`תוכנית ${program.title}`}
        >
          <Link to={`/programs/${program.slug}`}>
            <motion.div
              variants={hoverScale}
              className="relative overflow-hidden rounded-2xl h-full border-2 border-gold-500/20 card-hover-gold cursor-pointer group"
              role="img"
              aria-label={program.title}
            >
              {/* Background image with proper alt handling */}
              <img
                src={program.backgroundImage}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-navy-900/70 group-hover:bg-navy-900/60 transition-colors" aria-hidden="true"></div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">{program.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm mb-4">{program.description}</p>

                {/* Learn More Button */}
                <div className="flex items-center gap-2 text-gold-500 font-semibold group-hover:gap-4 transition-all">
                  <span>למידע נוסף</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.article>
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
