import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'

const programsData = {
  'beit-berl': {
    id: 1,
    title: 'אקדמיית בית ברל',
    subtitle: 'מרכז הפיתוח החדש שלנו בפנינת השרון',
    heroImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719981/DSC03068_ozxo7t.jpg',
    description: 'מרכז הפיתוח החדש שלנו בפנינת השרון. מתאים לשחקנים מקצועיים בלבד מגילאי 11-19. בין השעות 9:30-12:30 בהם יקבלו 2 יחידות אימון במפגש',
    highlight: 'המרכז החדש והמתקדם ביותר בפנינת השרון',
    badge: 'פופולרי',
    features: [
      '2 יחידות אימון במפגש',
      'מתאים לשחקנים מקצועיים בלבד',
      'גילאים 11-19',
      'שעות אימון: 9:30-12:30',
      'מיקום: בית ברל - פנינת השרון',
      'צוות אימון מקצועי ומנוסה'
    ],
    benefits: [
      'פיתוח יכולות טכניות ברמה גבוהה',
      'שיפור כושר גופני וכוח',
      'אימון טקטי ואסטרטגי',
      'ליווי אישי לכל שחקן',
      'מתקנים חדישים ומקצועיים',
      'אווירה תחרותית ומקצועית'
    ],
    whyChoose: [
      { title: 'מתקנים ברמה בינלאומית', desc: 'מרכז אימונים חדש עם ציוד מקצועי מהמתקדמים בארץ - הילד שלכם ירגיש כמו שחקן מקצועי' },
      { title: 'צוות מאמנים מנוסה', desc: 'מאמנים בעלי רישוי מקצועי עם ניסיון של שנים בפיתוח שחקני נוער - הילד שלכם בידיים טובות' },
      { title: 'מעקב אישי אחר התקדמות', desc: 'תקבלו דוחות התקדמות תקופתיים ותוכלו לראות את השיפור בזמן אמת' },
      { title: 'אימונים איכוtiים ממוקדים', desc: 'שתי יחידות אימון מלאות בכל מפגש - כל דקה מנוצלת למקסימום' }
    ],
    stats: [
      { number: '100+', label: 'שחקנים מתאמנים באקדמיה' },
      { number: '15+', label: 'שנות ניסיון של צוות האימון' },
      { number: '2025', label: 'העונה שלנו מתחילה' }
    ],
    testimonial: {
      text: 'האקדמיה בבית ברל שינתה את הקריירה שלי. המאמנים מקצועיים והמתקנים מדהימים!',
      author: 'דני כהן',
      role: 'שחקן בן 16'
    },
    schedule: 'ימי שבת, 9:30-12:30',
    location: 'בית ברל, פנינת השרון',
    ageRange: '11-19',
    level: 'שחקנים מקצועיים',
    spotsLeft: '12 מקומות נותרו'
  },
  'brenner': {
    id: 2,
    title: 'אקדמיית ברנר',
    subtitle: 'אקדמיה של השפלה',
    heroImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719980/DSC02877_iauann.jpg',
    description: 'אקדמיה של השפלה ימי שבת בין השעות 10:00-13:00 לגילאי 10-17 מותאם גם עבור שחקנים וגם שחקניות בהם יהנו מיחידת פיתוח יכולות אישיות ומעטפת שלמה לאורך השנה',
    highlight: 'התוכנית היחידה באזור המותאמת לבנים ובנות',
    badge: 'מומלץ למתחילים',
    features: [
      'מותאם לשחקנים ושחקניות',
      'יחידת פיתוח יכולות אישיות',
      'מעטפת שלמה לאורך השנה',
      'גילאים 10-17',
      'שעות אימון: 10:00-13:00',
      'מיקום: ברנר, השפלה'
    ],
    benefits: [
      'פיתוח יכולות אישיות מותאם אישית',
      'אימונים מעורבים - בנים ובנות',
      'מעטפת תמיכה לאורך השנה',
      'צוות אימון מגוון ומקצועי',
      'פיתוח ביטחון עצמי',
      'סביבה תומכת ומעודדת'
    ],
    whyChoose: [
      { title: 'סביבה מעורבת ותומכת', desc: 'האקדמיה היחידה באזור המקבלת בנים ובנות - סביבה מגוונת שמעודדת צמיחה' },
      { title: 'תוכנית אימונים מותאמת אישית', desc: 'כל ילד מקבל תשומת לב אישית ותוכנית שמתאימה לרמתו ולקצב ההתפתחות שלו' },
      { title: 'ליווי צמוד לאורך כל השנה', desc: 'לא רק אימונים - אנחנו כאן לילד שלכם כל השנה עם מעטפת מלאה של תמיכה' },
      { title: 'מתאים לכל הרמות', desc: 'בין אם הילד מתחיל עכשיו או כבר משחק בקבוצה - יש לו מקום אצלנו' }
    ],
    stats: [
      { number: '80+', label: 'משפחות בוחרות באקדמיה' },
      { number: '3', label: 'שעות איכותיות בשבת' },
      { number: '10+', label: 'שנות ניסיון באזור' }
    ],
    testimonial: {
      text: 'הבת שלי התחילה כאן ללא ניסיון. היום היא משחקת בקבוצת הנוער של העיר!',
      author: 'רונית לוי',
      role: 'הורה'
    },
    schedule: 'ימי שבת, 10:00-13:00',
    location: 'ברנר, השפלה',
    ageRange: '10-17',
    level: 'כל הרמות',
    spotsLeft: '8 מקומות נותרו'
  },
  'personal-training': {
    id: 3,
    title: 'אימונים אישיים פרטניים',
    subtitle: 'אימוני יכולות מבית היוצר של Elite Team',
    heroImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760719979/DSC02895_k0bvfw.jpg',
    description: 'אימוני יכולות מבית היוצר של elite team עם צוות האימון ברחבי הארץ באיזורי ראשון לציון, תל אביב ,רמת גן, קרית אונו, רעננה והרצליה. חבילות אישיות מותאמות לצרכי השחקן',
    highlight: 'גמישות מקסימלית עם תשומת לב אישית 100%',
    badge: 'הכי גמיש',
    features: [
      'אימונים אחד על אחד',
      'חבילות מותאמות אישית',
      'מיקומים מרובים ברחבי הארץ',
      'גמישות בזמנים',
      'תוכנית אימון אישית',
      'מעקב והערכה שוטפים'
    ],
    benefits: [
      'תשומת לב אישית מלאה',
      'התקדמות מהירה יותר',
      'אימון מותאם למטרות אישיות',
      'גמישות מלאה בזמנים ומיקום',
      'ליווי צמוד ואישי',
      'תוכנית מותאמת אישית'
    ],
    whyChoose: [
      { title: 'תשומת לב מלאה לילד שלכם', desc: 'אימון אחד על אחד - המאמן מתמקד רק בילד שלכם ובמטרות שלו למשך כל האימון' },
      { title: 'גמישות שמתאימה לכם', desc: 'אנחנו מבינים שלכל משפחה יש לוח זמנים משלה - תתאמו אימונים בזמנים שנוחים לכם' },
      { title: 'מיקומים ברחבי המרכז', desc: 'ראשון לציון, תל אביב, רמת גן, קרית אונו, רעננה והרצליה - בחרו את המקום הקרוב אליכם' },
      { title: 'התקדמות מהירה ומדידה', desc: 'ליווי צמוד ומקצועי שמביא לשיפור משמעותי בזמן קצר - תראו את ההבדל' }
    ],
    stats: [
      { number: '200+', label: 'ילדים התאמנו אצלנו' },
      { number: '1:1', label: 'יחס אימון אישי ומותאם' },
      { number: '6', label: 'מיקומים נגישים במרכז' }
    ],
    testimonial: {
      text: 'האימונים האישיים הם המתנה הכי טובה שנתתי לעצמי. התקדמתי יותר ב-3 חודשים מאשר בשנתיים הקודמות!',
      author: 'יונתן משה',
      role: 'שחקן בן 14'
    },
    schedule: 'תיאום אישי',
    location: 'ראשון לציון, תל אביב, רמת גן, קרית אונו, רעננה, הרצליה',
    ageRange: 'כל הגילאים',
    level: 'כל הרמות',
    spotsLeft: 'זמינות מוגבלת'
  },
  'mentor-360': {
    id: 4,
    title: 'מנטור 360 עם ירדן יצחקוב',
    subtitle: 'מסלול היוקרתי ביותר בחברת Elite Team',
    heroImage: 'https://res.cloudinary.com/ddg685nfx/image/upload/v1760470953/mike_yoipdl.jpg',
    description: 'מסלול ייחודי ואישי ישירות מול מנכ״ל האקדמיה המבחר בין אימוני יכולות אישיות לניתוחי וידאו, שיחות חודשיות ועבודות אישיות ביתיות מותאמות. מתאים רק לשחקנים אשר יעברו שיחת התאמה מול ירדן',
    highlight: 'ליווי אישי ישיר ממנכ"ל האקדמיה - מסלול VIP',
    badge: 'יוקרתי',
    features: [
      'ליווי אישי ישיר מירדן יצחקוב',
      'אימוני יכולות אישיות',
      'ניתוחי וידאו מפורטים',
      'שיחות חודשיות אישיות',
      'עבודות ביתיות מותאמות',
      'דרוש עמידה בשיחת התאמה'
    ],
    benefits: [
      'ליווי אישי ממנכ"ל האקדמיה',
      'מעקב צמוד והתאמה אישית',
      'ניתוח וידאו מקצועי',
      'תוכנית ייחודית לכל שחקן',
      'פיתוח מנטלי ופיזי',
      'הכנה לרמה הבאה'
    ],
    whyChoose: [
      { title: 'ליווי אישי מהמנכ"ל', desc: 'ירדן יצחקוב, מנכ"ל האקדמיה, מלווה את הילד שלכם באופן אישי - זה לא קורה בשום מקום אחר' },
      { title: 'ניתוח וידאו מקצועי', desc: 'כל משחק ואימון מצולמים ומנותחים - הילד שלכם יראה בדיוק איפה הוא משתפר ואיפה צריך לעבוד' },
      { title: 'פגישות אישיות חודשיות', desc: 'מפגש אחד על אחד כל חודש עם ירדן - כדי לוודא שהילד שלכם בדרך הנכונה' },
      { title: 'הכנה לרמה המקצועית', desc: 'מיועד לשחקנים שרוצים להגיע לליגות הנוער, מכבי, הפועל ועוד - ליווי עד למטרה' }
    ],
    stats: [
      { number: '50+', label: 'שחקנים עברו לקבוצות ליגה' },
      { number: '100%', label: 'התאמה אישית מלאה' },
      { number: 'VIP', label: 'שירות ברמה הגבוהה ביותר' }
    ],
    testimonial: {
      text: 'המסלול עם ירדן שינה לי את החיים. עברתי ממועדון מקומי לליגת הנוער של מכבי תל אביב!',
      author: 'עומר אברהם',
      role: 'שחקן בן 17'
    },
    schedule: 'תיאום אישי',
    location: 'מגוון מיקומים',
    ageRange: 'לאחר אישור',
    level: 'שחקנים ברמה גבוהה',
    spotsLeft: '3 מקומות בלבד!'
  }
}

const ProgramDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const program = programsData[slug]

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const scrollToRegister = () => {
    navigate('/')
    setTimeout(() => {
      const registerSection = document.getElementById('register')
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">התוכנית לא נמצאה</h1>
          <Link to="/#programs" className="btn-gold">
            חזרה לתוכניות
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={program.heroImage}
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/80 to-navy-900"></div>

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16">
          <motion.button
            variants={fadeInUp}
            onClick={() => navigate('/#programs')}
            className="mb-6 text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-2 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            חזרה לתוכניות
          </motion.button>

          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block bg-gold-500 text-navy-900 px-4 py-2 rounded-full font-bold text-sm">
              {program.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl font-extrabold text-white mb-4"
          >
            {program.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-gold-500 font-semibold mb-4"
          >
            {program.subtitle}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-200 max-w-3xl"
          >
            {program.highlight}
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-r from-gold-500/20 to-gold-500/10 border-y border-gold-500/30 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {program.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-gold-500 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div variants={fadeInUp} className="bg-navy-800/50 rounded-2xl p-8 border-2 border-gold-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gold-500">●</span>
                תיאור התוכנית
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {program.description}
              </p>
            </motion.div>

            {/* Why Choose This Program - NEW SECTION */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl p-10 border-2 border-gold-500/40">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                למה הורים בוחרים בתוכנית הזו?
              </h2>
              <p className="text-center text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
                כהורים, אתם רוצים את הטוב ביותר עבור הילד שלכם. הנה למה תוכנית זו היא הבחירה הנכונה:
              </p>
              <div className="space-y-6">
                {program.whyChoose.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-gradient-to-l from-gold-500/10 to-transparent p-6 rounded-xl border-r-4 border-gold-500 hover:from-gold-500/20 transition-all"
                  >
                    <h3 className="text-2xl font-bold text-gold-400 mb-3">{item.title}</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className="bg-navy-800/50 rounded-2xl p-8 border-2 border-gold-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gold-500">●</span>
                מה כולל?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-gold-500 text-xl mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={fadeInUp} className="bg-navy-800/50 rounded-2xl p-8 border-2 border-gold-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gold-500">●</span>
                היתרונות שלנו
              </h2>
              <ul className="space-y-4">
                {program.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 p-4 bg-navy-900/50 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                  >
                    <span className="text-gold-500 text-2xl">★</span>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Testimonial - NEW SECTION */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gold-500/15 to-transparent rounded-2xl p-10 border-l-4 border-gold-500">
              <h3 className="text-2xl font-bold text-gold-400 mb-6">מה משפחות אומרות עלינו</h3>
              <div className="relative">
                <div className="text-7xl text-gold-500/30 absolute -top-4 -right-2">"</div>
                <div className="relative pr-12">
                  <p className="text-2xl text-white mb-6 leading-relaxed font-medium">
                    {program.testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gold-500/20">
                    <div className="w-14 h-14 rounded-full bg-gold-500/30 border-2 border-gold-500"></div>
                    <div>
                      <div className="font-bold text-white text-lg">{program.testimonial.author}</div>
                      <div className="text-gray-400">{program.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Urgency Card - NEW */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/20 rounded-2xl p-8 border-2 border-orange-500/50 sticky top-24 shadow-lg shadow-orange-500/20"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm mb-3">
                  מקומות מתמלאים במהירות
                </div>
                <div className="text-white font-bold text-2xl mb-2">נותרו מספר מקומות בלבד</div>
                <div className="text-orange-200 text-lg font-semibold">{program.spotsLeft}</div>
              </div>

              <button
                onClick={scrollToRegister}
                className="btn-gold w-full text-center text-xl py-5 block mb-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                שמרו מקום לילד שלכם
              </button>

              <div className="space-y-2 text-center text-sm text-gray-200">
                <div>✓ ללא התחייבות בשלב זה</div>
                <div>✓ תגובה תוך 24 שעות</div>
                <div>✓ שיחת היכרות ללא עלות</div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-2xl p-8 border-2 border-gold-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">פרטים נוספים</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-gold-500 font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    זמנים
                  </p>
                  <p className="text-gray-300 text-lg">{program.schedule}</p>
                </div>

                <div>
                  <p className="text-gold-500 font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    מיקום
                  </p>
                  <p className="text-gray-300 text-lg">{program.location}</p>
                </div>

                <div>
                  <p className="text-gold-500 font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    גילאים
                  </p>
                  <p className="text-gray-300 text-lg">{program.ageRange}</p>
                </div>

                <div>
                  <p className="text-gold-500 font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    רמה
                  </p>
                  <p className="text-gray-300 text-lg">{program.level}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gold-500/20">
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>גישה מיידית לצוות המאמנים</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>אפשרות לאימון ניסיון</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>גמישות בתשלומים</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Signals - NEW */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-2xl p-8 border-2 border-gold-500/40 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/30 rounded-full flex items-center justify-center border-2 border-gold-500">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-white font-bold text-xl mb-2">מעל 500 משפחות בוטחות בנו</div>
              <div className="text-gray-300">השנה בלבד הצטרפו מאות ילדים לאקדמיה</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeInUp}
        className="bg-gradient-to-br from-gold-500/20 to-gold-500/5 border-y-4 border-gold-500/50 py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-6">
            רוצים לתת לילד שלכם את ההזדמנות הזו?
          </h2>
          <p className="text-2xl text-gray-200 mb-4 leading-relaxed">
            הצטרפו ל-{program.title} ותנו לילד שלכם את הכלים להצליח
          </p>
          <p className="text-lg text-gray-300 mb-10">
            מלאו פרטים ונחזור אליכם תוך 24 שעות לשיחת היכרות ללא התחייבות
          </p>
          <button
            onClick={scrollToRegister}
            className="btn-gold text-2xl px-16 py-6 inline-block font-bold shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 transition-all"
          >
            שמרו את המקום עכשיו
          </button>
          <p className="text-sm text-gray-400 mt-6">
            מקומות מוגבלים • תגובה מהירה • ללא עלות להתייעצות
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProgramDetail
