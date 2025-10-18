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
               Elite Team Academy לכדורסל מחויבת לספק שירותים נגישים לכל המשתמשים, 
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

          {/* Section 6 - Accessibility Coordinator */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">6. רכז/ת נגישות</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              בהתאם לחוק, מונה באקדמיה רכז/ת נגישות האחראי/ת על נושא הנגישות.
              ניתן לפנות אליו/ה בכל שאלה, בקשה או דיווח על בעיית נגישות.
            </p>

            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gold-500 mb-4">📞 פרטי רכז/ת הנגישות:</h3>
              <div className="text-gray-300 space-y-3">
                <p><strong className="text-white">שם:</strong> ירדן יצחקוב</p>
                <p><strong className="text-white">תפקיד:</strong> מנכ"ל ורכז נגישות</p>
                <p><strong className="text-white">טלפון נייד:</strong> <a href="tel:+972503388010" className="hover:text-gold-500 transition-colors">050-338-8010</a></p>
                <p><strong className="text-white">אימייל:</strong> <a href="mailto:info@eliteteam.co.il" className="hover:text-gold-500 transition-colors">info@eliteteam.co.il</a></p>
                <p><strong className="text-white">שעות פעילות:</strong> א׳-ה׳ 09:00-20:00, ו׳ 09:00-14:00</p>
                <p><strong className="text-white">זמן תגובה:</strong> עד 48 שעות בימי עסקים</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong className="text-gold-500">לתשומת לבכם:</strong> בהתאם לחוק, כל פניה בנושא נגישות תטופל
              במהירות וברצינות. אנו מחויבים לספק מענה מקצועי ומכבד לכל פנייה.
            </p>
          </section>

          {/* Section 7 - Physical Accessibility */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">7. נגישות פיזית של מתקני האימון</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              האקדמיה מחויבת לספק שירותים נגישים גם במתקנים הפיזיים שלנו:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">🏀 אקדמיית בית ברל</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
                  <li>חניה נגישה למוגבלים בקרבת הכניסה</li>
                  <li>כניסה נגישה ללא מדרגות</li>
                  <li>שירותים נגישים למוגבלים</li>
                  <li>מעבר נוח במקלדת או בכסא גלגלים למתקני האימון</li>
                  <li>תאורה מתאימה לכל הצרכים</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">🏀 אקדמיית ברנר (בית אלעזרי)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
                  <li>חניה נגישה למוגבלים</li>
                  <li>כניסה נגישה עם רמפה</li>
                  <li>שירותים נגישים</li>
                  <li>מתקני ספורט נגישים</li>
                  <li>צוות מאומן לסייע לאנשים עם מוגבלות</li>
                </ul>
              </div>

              <div className="bg-navy-900/50 border border-gold-500/20 rounded-xl p-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-gold-500">⚠️ שימו לב:</strong> מומלץ לתאם מראש הגעה
                  עם רכז הנגישות במידה ונדרשים הסדרים מיוחדים או סיוע ייעודי.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 - Accessibility Arrangements */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">8. בקשה להסדרי נגישות</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              אנו מחויבים לספק הסדרי נגישות סבירים לכל אדם עם מוגבלות המבקש להשתמש בשירותים שלנו.
            </p>

            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gold-500 mb-3">📝 איך לבקש הסדרי נגישות:</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mr-4">
                <li>צרו קשר עם רכז הנגישות (פרטים למעלה)</li>
                <li>תארו את הצורך או המגבלה</li>
                <li>ציינו איזה שירות או פעילות אתם מעוניינים לקבל</li>
                <li>נדון במשותף בהסדר המתאים ביותר</li>
                <li>נישם את ההסדר תוך 30 יום (או מוקדם יותר במידת האפשר)</li>
              </ol>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              דוגמאות להסדרי נגישות שאנו מספקים: סיוע אישי באימונים, התאמת שעות אימון,
              סיוע בהרשמה, ועוד. <strong className="text-white">אין תשלום נוסף עבור הסדרי נגישות.</strong>
            </p>
          </section>

          {/* Section 9 - Complaint Process */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">9. הליך טיפול בתלונות</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              אם אינך מרוצה מהטיפול בפנייתך בנושא נגישות, זכותך להגיש תלונה:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li><strong className="text-white">שלב 1:</strong> פנה לרכז הנגישות שלנו (פרטים למעלה)</li>
              <li><strong className="text-white">שלב 2:</strong> אם הבעיה לא נפתרה, ניתן לפנות למשרד המשפטים - נציבות שוויון זכויות לאנשים עם מוגבלות</li>
              <li><strong className="text-white">טלפון נציבות שוויון:</strong> <a href="tel:*9710" className="hover:text-gold-500 transition-colors">*9710</a></li>
              <li><strong className="text-white">אתר נציבות שוויון:</strong> <a href="https://www.gov.il/he/departments/topics/equal-rights" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors underline">gov.il/equality</a></li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong className="text-gold-500">התחייבותנו:</strong> כל תלונה תטופל בכבוד, במקצועיות ובסודיות מלאה.
            </p>
          </section>

          {/* Section 10 - Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">10. עדכונים והתחייבות מתמשכת</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              אנו מתחייבים להמשיך ולשפר את הנגישות של האתר והשירותים שלנו:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>ביקורת נגישות שנתית על ידי מומחה חיצוני</li>
              <li>עדכון הצהרה זו באופן רבעוני או בעקבות שינויים מהותיים</li>
              <li>הדרכות צוות בנושא נגישות פעמיים בשנה</li>
              <li>שיפורים טכנולוגיים מתמשכים</li>
              <li>קבלת משוב מהקהילה בעלת הצרכים המיוחדים</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong className="text-white">תאריך הצהרה זו:</strong> {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
              <br />
              <strong className="text-white">תאריך בדיקה אחרונה:</strong> {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          {/* Section 11 - Legal */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">11. היבטים משפטיים</h2>
            <p className="text-gray-300 leading-relaxed">
              הצהרת נגישות זו נכתבה בהתאם לדרישות החוק הישראלי:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4 mt-3">
              <li><strong className="text-white">חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998</strong></li>
              <li><strong className="text-white">תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013</strong></li>
              <li><strong className="text-white">תקן ישראלי 5568 חלק 1 ו-2</strong> - נגישות תכנים באינטרנט</li>
              <li><strong className="text-white">WCAG 2.1 Level AA</strong> - תקן בינלאומי לנגישות</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              אנו מחויבים לספק שירותים נגישים ומתאימים לכל המשתמשים בהתאם לחוק
              ולכל הדרישות החוקיות הרלוונטיות. הפרת זכויות נגישות היא עבירה פלילית.
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
