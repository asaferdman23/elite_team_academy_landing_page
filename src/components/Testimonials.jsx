import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, useScrollAnimation } from '../lib/motion'

const testimonials = [
  {
    id: 1,
    quote: "מאמן ירדן שינה את הביטחון העצמי של הבן שלי. הוא לא רק שחקן טוב יותר, אלא גם חבר קבוצה ותלמיד טוב יותר. אנחנו לא יכולים להיות יותר מרוצים!",
    parent: "שרה מ.",
    initial: "ש"
  },
  {
    id: 2,
    quote: "תשומת הלב לפרטים והאכפתיות האמיתית לכל ילד מייחדים את אקדמיית אליט טים. הבת שלי מצפה בכיליון עיניים לכל אימון!",
    parent: "מיכאל ר.",
    initial: "מ"
  },
  {
    id: 3,
    quote: "מיסודות ועד לטכניקות מתקדמות, מאמן ירדן יודע איך לאתגר ולהניע. הבן שלנו צמח כל כך הרבה תוך מספר חודשים בלבד.",
    parent: "דניאל ל.",
    initial: "ד"
  }
]

const Testimonials = () => {
  const [ref, controls] = useScrollAnimation()

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 sm:py-24 border-b border-gold-500/20"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            מה <span className="text-gold-500">ההורים אומרים</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            שמעו ממשפחות שחוו את ההבדל של אקדמיית אליט טים.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              custom={index}
              transition={{ delay: index * 0.2 }}
              className="glass-gold border-2 border-gold-500/30 p-8 rounded-2xl card-hover-gold"
            >
              {/* Quote Icon */}
              <div className="text-gold-500 text-4xl mb-4">"</div>

              {/* Quote Text */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Parent Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-xl">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.parent}</p>
                  <p className="text-gray-400 text-sm">הורה</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
