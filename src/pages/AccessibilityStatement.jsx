import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

const AccessibilityStatement = () => {
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
            הצהרת <span className="text-gold-500">נגישות</span>
          </h1>
          <p className="text-gray-400">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 sm:p-12 space-y-8 text-right" dir="rtl">

          {/* Section 1 - Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">1. מבוא</h2>
            <p className="text-gray-300 leading-relaxed">
              אקדמיית אליט טים לכדורסל מחויבת לספק שירותים נגישים לכל המשתמשים, 
              ללא קשר ליכולותיהם הטכנולוגיות או הפיזיות. אנו פועלים בהתאם לחוק שוויון זכויות 
              לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות נגישות השירות, התשע"ג-2013.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              הצהרה זו מתארת את רמת הנגישות של האתר שלנו ואת הפעולות שאנו נוקטים 
              כדי להבטיח שכל המשתמשים יוכלו לגשת לתכנים ולשירותים שלנו.
            </p>
          </section>

          {/* Section 2 - Accessibility Standards */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">2. תקני נגישות</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              האתר שלנו נבנה בהתאם לתקני הנגישות הבאים:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li><strong className="text-gold-500">WCAG 2.1 רמה AA:</strong> הנחיות נגישות תוכן האינטרנט של W3C</li>
              <li><strong className="text-gold-500">תקן ישראלי 5568:</strong> הנגישות בסביבה דיגיטלית</li>
              <li><strong className="text-gold-500">חוק שוויון זכויות:</strong> לאנשים עם מוגבלות, התשנ"ח-1998</li>
              <li><strong className="text-gold-500">תקנות נגישות השירות:</strong> התשע"ג-2013</li>
            </ul>
          </section>

          {/* Section 3 - Accessibility Features */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">3. תכונות נגישות באתר</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🎨 עיצוב ויזואלי:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>ניגודיות צבעים גבוהה לקריאה נוחה</li>
                  <li>גופנים ברורים וקריאים</li>
                  <li>גדלי טקסט הניתנים להגדלה</li>
                  <li>מבנה ברור ועקבי של הדפים</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">⌨️ ניווט במקלדת:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>ניווט מלא באמצעות מקלדת</li>
                  <li>מקלדת Tab לניווט בין אלמנטים</li>
                  <li>מקשי קיצור לפעולות עיקריות</li>
                  <li>מעבר ברור בין אזורי התוכן</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔊 טכנולוגיות מסייעות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>תמיכה בקוראי מסך (Screen Readers)</li>
                  <li>טקסט חלופי לתמונות (Alt Text)</li>
                  <li>תוויות ברורות לטופסים</li>
                  <li>מבנה HTML סמנטי נכון</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">📱 תגובתיות:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>עיצוב רספונסיבי לכל המכשירים</li>
                  <li>תמיכה במסכים קטנים וגדולים</li>
                  <li>תפריט ניווט מותאם למובייל</li>
                  <li>כפתורים בגודל מתאים למגע</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 - Known Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">4. מגבלות ידועות</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              למרות המאמצים שלנו להבטיח נגישות מלאה, ייתכנו מגבלות מסוימות:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>סרטוני וידאו עשויים להיות ללא כתוביות בעברית (אנו עובדים על הוספתן)</li>
              <li>חלק מהתמונות עשויות להיות ללא תיאור מפורט (אנו מעדכנים בהדרגה)</li>
              <li>טופסי הרשמה מורכבים עשויים לדרוש סיוע נוסף</li>
              <li>תוכן דינמי עשוי להיות פחות נגיש במכשירים ישנים</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              אנו ממשיכים לעבוד על שיפור הנגישות ומעדכנים את האתר באופן קבוע.
            </p>
          </section>

          {/* Section 5 - Testing */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">5. בדיקות נגישות</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              האתר נבדק באופן קבוע באמצעות הכלים הבאים:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>WAVE (Web Accessibility Evaluation Tool)</li>
              <li>axe-core accessibility testing</li>
              <li>Lighthouse accessibility audit</li>
              <li>בדיקות ידניות עם טכנולוגיות מסייעות</li>
              <li>בדיקות משתמשים עם מוגבלויות</li>
            </ul>
          </section>

          {/* Section 6 - Feedback */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">6. דיווח על בעיות נגישות</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              אם נתקלת בבעיית נגישות באתר שלנו, או אם יש לך הצעות לשיפור, 
              אנו מעודדים אותך ליצור איתנו קשר. כל דיווח יטופל במהירות ובמקצועיות.
            </p>
            
            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gold-500 mb-4">פרטי יצירת קשר:</h3>
              <div className="text-gray-300 space-y-3">
                <p><strong className="text-white">שם:</strong> אקדמיית אליט טים לכדורסל</p>
                <p><strong className="text-white">טלפון:</strong> <a href="tel:+972501234567" className="hover:text-gold-500 transition-colors">050-123-4567</a></p>
                <p><strong className="text-white">אימייל:</strong> <a href="mailto:accessibility@eliteteam.co.il" className="hover:text-gold-500 transition-colors">accessibility@eliteteam.co.il</a></p>
                <p><strong className="text-white">שעות פעילות:</strong> א׳-ה׳ 09:00-18:00, ו׳ 09:00-14:00</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              נשמח לקבל את המשוב שלך ולעזור לך לגשת לכל התכנים והשירותים שלנו.
            </p>
          </section>

          {/* Section 7 - Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">7. עדכונים עתידיים</h2>
            <p className="text-gray-300 leading-relaxed">
              אנו מתחייבים להמשיך ולשפר את הנגישות של האתר שלנו. הצהרה זו תתעדכן 
              באופן קבוע כדי לשקף את השיפורים שביצענו ואת המגבלות החדשות שזיהינו. 
              אנו עוקבים אחר התפתחויות טכנולוגיות ותקני נגישות חדשים כדי להבטיח 
              שהאתר שלנו יישאר נגיש ונוח לשימוש עבור כל המשתמשים.
            </p>
          </section>

          {/* Section 8 - Legal */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">8. היבטים משפטיים</h2>
            <p className="text-gray-300 leading-relaxed">
              הצהרת נגישות זו נועדה לעמוד בדרישות החוק הישראלי ובתקנים הבינלאומיים 
              לנגישות דיגיטלית. אנו מחויבים לספק שירותים נגישים ומתאימים לכל המשתמשים, 
              בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ולכל הדרישות החוקיות הרלוונטיות.
            </p>
          </section>

          {/* Footer Note */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              הצהרת נגישות זו נכתבה בהתאם לתקני הנגישות הבינלאומיים והחוק הישראלי.
              אם יש לך שאלות או הצעות לשיפור, אנא אל תהסס ליצור איתנו קשר.
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

export default AccessibilityStatement
