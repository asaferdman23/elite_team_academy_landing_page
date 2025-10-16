import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, useScrollAnimation } from '../lib/motion'

const testimonials = [
  {
    id: 1,
    quote:"הבן שלי לוקח חלק בפרויקט מעל 3 שנים מכיתה ז׳ והשיפור ברמת המשחק והחשיבה שלו היה ניכר ברמה משמעותית גם על ידי החברים בקבוצה וגם על ידי צוות האימון באגודה ",
    parent: "רונן ו.",
    initial: "ש"
  },
  {
    id: 2,
    quote: "הבת שלי הגיעה למרכז האימונים בברנר לבד לגמרי ואחרי חודש מצאה קהילה מדהימה של שחקניות ושחקנים מאיזורים אחרים ונהנית מכל רגע  ",
    parent: "רונית ר.",
    initial: "מ"
  },
  {
    id: 3,
    quote: "התחלתי כשחקן נערים ארצית בפרויקט בעליט טים והצלחתי להגיע עד לנוער על , בעיקר בזכות המעטפת שהמאמנים נותנים לי מחוץ לשעות האימונים .קיבלתי במהלך השנים הדרכה מלאה לאיך להיות השחקן הכי מקצועי בארץ",
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
            הורי  <span className="text-gold-500">הקהילה</span> מספרים
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            תשמעו ממשפחות שחוו את ההבדל בתוך <span className="text-gold-500 font-bold">Elite Team Academy</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              variants={fadeIn}
              custom={index}
              transition={{ delay: index * 0.2 }}
              className="glass-gold border-2 border-gold-500/30 p-8 rounded-2xl card-hover-gold"
              aria-label={`המלצה מ${testimonial.parent}`}
            >
              {/* Quote Icon */}
              <div className="text-gold-500 text-4xl mb-4" aria-hidden="true">"</div>

              {/* Quote Text */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Parent Info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-xl"
                  aria-hidden="true"
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.parent}</p>
                  <p className="text-gray-400 text-sm">הורה</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
