import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, useScrollAnimation } from '../lib/motion'

const About = () => {
  const [ref, controls] = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 border-b border-gold-500/20"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              הכירו את המאמן <span className="text-gold-500">ירדן</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                עם למעלה מ-15 שנות ניסיון באימון כדורסל לנוער, מאמן ירדן הקדיש את הקריירה שלו לפיתוח לא רק שחקנים מיומנים, אלא ספורטאים צעירים בעלי ביטחון עצמי ומשמעת שמצטיינים גם בתוך המגרש וגם מחוצה לו.
              </p>

              <p>
                באקדמיית אליט טים, אנחנו מאמינים שלכל ילד יש פוטנציאל להיות יוצא דופן. הפילוסופיה שלנו פשוטה: שילוב של מצוינות טכנית עם בניית אופי, יצירת סביבה שבה ספורטאים צעירים משגשגים דרך עידוד, תרגול מובנה ואכפתיות אמיתית.
              </p>

              <p>
                אנחנו ממוקדים בבניית <span className="text-gold-500 font-semibold">ביטחון עצמי</span>, החדרת <span className="text-gold-500 font-semibold">משמעת</span>, וטיפוח אהבה לכל החיים למשחק. בין אם הילד שלכם חולם לשחק באופן תחרותי או פשוט רוצה ליהנות תוך כדי פעילות גופנית, אקדמיית אליט טים היא המקום המושלם לצמוח.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block"
            >
              <a
                href="#register"
                className="btn-gold"
              >
                התחילו את המסע שלכם
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeIn} className="order-first lg:order-last">
            <div className="relative">
              <img
                src="/assets/mike.JPEG"
                alt="מאמן ירדן עם שחקני כדורסל צעירים"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
