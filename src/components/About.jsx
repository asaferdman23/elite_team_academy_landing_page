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
             Elite Team <span className="text-gold-500">Academy</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
              מקום שבו שחקנים טובים הופכים לשחקני על.

              מאז 2019, בהובלת ירדן יצחקוב, מאמן שחקני נבחרות ישראל,
              Elite Team Academy היא הבית של השחקנים הכי שאפתניים בישראל.

              בכל שבת, במרכזי האימון שלנו ב־בית ברל ו־בית אלעזרי,
              מתאמנים אצלנו שחקנים ושחקניות מקצועיים מגילאי 11 עד 20 —
              אשר באים לעבוד קשה, להשתפר ולהתקרב לחלום.

              עם צוות של 7 מאמני יכולות אישיות, 2 מנהלי פיתוח גופני,
              ועשרות שחקנים מליגת העל שכבר עברו אצלנו —
              אנחנו יודעים לקחת כל שחקן צעד קדימה.

              <p>
              📩 רוצה <span className="text-gold-500 font-semibold">להפוך</span>    לשחקן הבא שכולם ידברו עליו?
השאר פרטים עכשיו — ונתאם איתך אימון היכרות אישי           </p>
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
                alt="מאמן ירדן יצחקוב עם שחקני כדורסל צעירים באקדמיית אליט טים"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/50 to-transparent" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
