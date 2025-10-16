import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-navy-900 pt-24 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 sm:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            מדיניות <span className="text-gold-500">פרטיות</span>
          </h1>
          <p className="text-gray-400">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 sm:p-12 space-y-8 text-right" dir="rtl">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">1. כללי</h2>
            <p className="text-gray-300 leading-relaxed">
              אקדמיית אליט טים לכדורסל ("האקדמיה", "אנחנו") מכבדת את פרטיות המשתמשים והלקוחות שלה.
              מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, שומרים ומגנים על המידע האישי שלך
              כאשר אתה משתמש באתר שלנו או נרשם לשירותים שלנו.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">2. איסוף מידע</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              אנו אוספים מידע אישי שאתה מספק לנו ביודעין, כולל:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>שם מלא (שם הורה או שחקן)</li>
              <li>כתובת דואר אלקטרוני</li>
              <li>מספר טלפון</li>
              <li>גיל השחקן</li>
              <li>מידע נוסף שתבחר לשתף איתנו בטפסים</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              בנוסף, אנו עשויים לאסוף מידע טכני אוטומטי כגון כתובת IP, סוג דפדפן,
              והתנהגות גלישה באמצעות כלים אנליטיים כמו Google Analytics.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">3. שימוש במידע</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              אנו משתמשים במידע שנאסף למטרות הבאות:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>ליצירת קשר עם הורים או שחקנים לגבי אימונים ופעילויות</li>
              <li>לתיאום אימוני ניסיון ורשמה לאקדמיה</li>
              <li>לשליחת עדכונים, מבצעים ומידע רלוונטי על האקדמיה</li>
              <li>לשיפור השירות והחוויה באתר</li>
              <li>לצרכים סטטיסטיים ואנליטיים</li>
              <li>לעמידה בדרישות חוקיות</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">4. שיתוף מידע עם צדדים שלישיים</h2>
            <p className="text-gray-300 leading-relaxed">
              אנו לא מוכרים, משכירים או משתפים את המידע האישי שלך עם גורמים חיצוניים למטרות שיווקיות.
              עם זאת, אנו עשויים לשתף מידע עם:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4 mt-3">
              <li>ספקי שירות טכניים (כגון מערכות CRM, אחסון אתרים)</li>
              <li>גורמים משפטיים כאשר נדרש על פי חוק</li>
              <li>שותפים עסקיים הכרוכים במתן השירות (רק במידה הנדרשת)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">5. אבטחת מידע</h2>
            <p className="text-gray-300 leading-relaxed">
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה בלתי מורשית,
              שינוי, גילוי או השמדה. עם זאת, אף שיטת העברה או אחסון אינה בטוחה ב-100%,
              ולכן איננו יכולים להבטיח אבטחה מוחלטת.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">6. זכויותיך</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, יש לך את הזכויות הבאות:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>לדעת אילו פרטים אישיים עליך נמצאים במאגר שלנו</li>
              <li>לבקש תיקון או עדכון של פרטים שגויים</li>
              <li>לבקש מחיקת פרטיך מהמערכת</li>
              <li>לבטל את הסכמתך לקבלת חומר שיווקי בכל עת</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              לממש את זכויותיך, אנא צור קשר עמנו בכתובת המייל או הטלפון המופיעים באתר.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">7. עוגיות (Cookies)</h2>
            <p className="text-gray-300 leading-relaxed">
              אתר זה משתמש בעוגיות כדי לשפר את חווית הגלישה, לאסוף נתונים סטטיסטיים ולהתאים תכנים.
              ניתן לנהל או לחסום עוגיות דרך הגדרות הדפדפן שלך. חסימת עוגיות עשויה להשפיע על חלק מהפונקציונליות באתר.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">8. קישורים לאתרים חיצוניים</h2>
            <p className="text-gray-300 leading-relaxed">
              אתר זה עשוי להכיל קישורים לאתרי אינטרנט של צדדים שלישיים. איננו אחראים למדיניות הפרטיות
              או לתכנים של אתרים אלה. אנו ממליצים לקרוא את מדיניות הפרטיות של כל אתר שאתה מבקר בו.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">9. שינויים במדיניות הפרטיות</h2>
            <p className="text-gray-300 leading-relaxed">
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת.
              שינויים מהותיים יפורסמו באתר, ותאריך העדכון האחרון יופיע בראש המסמך.
              המשך שימוש באתר לאחר פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">10. יצירת קשר</h2>
            <p className="text-gray-300 leading-relaxed">
              לשאלות, בקשות או תלונות בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלך,
              ניתן ליצור איתנו קשר:
            </p>
            <div className="mt-4 text-gray-300 space-y-2">
              <p><strong className="text-gold-500">שם:</strong> אקדמיית אליט טים לכדורסל</p>
              <p><strong className="text-gold-500">טלפון:</strong> <a href="tel:+972501234567" className="hover:text-gold-500 transition-colors">050-123-4567</a></p>
              <p><strong className="text-gold-500">אימייל:</strong> <a href="mailto:info@eliteteam.co.il" className="hover:text-gold-500 transition-colors">info@eliteteam.co.il</a></p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              מדיניות פרטיות זו נכתבה בהתאם לחוק הגנת הפרטיות, התשמ"א-1981,
              ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
              מומלץ להתייעץ עם יועץ משפטי להתאמה מלאה לצרכים הספציפיים של העסק.
            </p>
          </div>

        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-gold text-navy-900 font-bold rounded-xl hover:scale-105 transition-transform"
          >
            חזרה לדף הבית
          </a>
        </div>

      </motion.div>
    </div>
  )
}

export default PrivacyPolicy
