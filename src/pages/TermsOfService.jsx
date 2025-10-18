import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

const TermsOfService = () => {
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
            תנאי <span className="text-gold-500">שימוש</span>
          </h1>
          <p className="text-gray-400">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 sm:p-12 space-y-8 text-right" dir="rtl">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">1. כללי</h2>
            <p className="text-gray-300 leading-relaxed">
              ברוכים הבאים לאתר Elite Team Academy לכדורסל (&quot;האתר&quot;, &quot;האקדמיה&quot;).
              השימוש באתר זה כפוף לתנאי שימוש אלו. על ידי גלישה, רישום או שימוש בשירותי האתר,
              הנך מאשר שקראת, הבנת והסכמת לתנאים אלו. אם אינך מסכים לתנאים, אנא הימנע משימוש באתר.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">2. שירותי האקדמיה</h2>
            <p className="text-gray-300 leading-relaxed">
              Elite Team Academy מספקת שירותי אימון כדורסל לילדים ובני נוער בגילאים 5-18.
              השירותים כוללים אימונים קבוצתיים, אימונים אישיים, מחנות אימונים, וכל פעילות
              הקשורה לאימון כדורסל כפי שיפורסם מעת לעת באתר או בערוצי התקשורת שלנו.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">3. רישום והרשמה</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              כדי להשתתף באימונים, יש להירשם דרך האתר או באמצעים אחרים שהאקדמיה תאשר.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>עליך לספק מידע מדויק, מלא ועדכני בעת ההרשמה</li>
              <li>אתה אחראי לשמירה על סודיות חשבונך ופרטיך האישיים</li>
              <li>יש להודיע לנו מיד על כל שימוש לא מורשה בחשבונך</li>
              <li>האקדמיה שומרת לעצמה את הזכות לסרב להרשמה או לבטל רשמה ללא הסבר</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">4. אימון ניסיון חינם</h2>
            <p className="text-gray-300 leading-relaxed">
              אימון הניסיון החינמי הוא למטרת היכרות בלבד ואינו מחייב את הצדדים להמשיך בפעילות.
              האקדמיה רשאית להגביל את מספר אימוני הניסיון החינמיים למשפחה אחת או לשחקן אחד.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">5. תשלומים והחזרים</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">5.1 תשלומים:</strong> התשלום עבור השירותים ייעשה בהתאם למחירון המפורסם באתר או כפי שיוסכם בנפרד.</p>
              <p><strong className="text-white">5.2 אי תשלום:</strong> אי תשלום בזמן עשוי להוביל להשעיה או ביטול ההשתתפות באימונים.</p>
              <p><strong className="text-white">5.3 החזרים:</strong> מדיניות ההחזרים תיקבע לפי הסכם ההרשמה הספציפי. ככלל, תשלומים אינם מוחזרים אלא במקרים חריגים ובהתאם לשיקול דעת האקדמיה.</p>
              <p><strong className="text-white">5.4 ביטולים:</strong> ביטול השתתפות יש להודיע עליו בכתב לפחות 7 ימים מראש. ביטולים בטווח קצר יותר עשויים לחייב בתשלום חלקי או מלא.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">6. בריאות ובטיחות</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">6.1 הצהרת בריאות:</strong> על ידי רישום שחקן, הנך מצהיר שהשחקן כשיר מבחינה רפואית להשתתף בפעילות גופנית אינטנסיבית.</p>
              <p><strong className="text-white">6.2 ביטוח:</strong> מומלץ בחום שכל שחקן יהיה מבוטח בביטוח תאונות אישיות. האקדמיה אינה אחראית לנזקי גוף או רכוש שיגרמו במהלך האימונים.</p>
              <p><strong className="text-white">6.3 מגבלות רפואיות:</strong> יש להודיע לאקדמיה על כל מגבלה רפואית, אלרגיה או מצב בריאותי מיוחד לפני תחילת הפעילות.</p>
              <p><strong className="text-white">6.4 פציעות:</strong> האקדמיה תנקוט באמצעים סבירים למניעת פציעות, אך אינה יכולה להבטיח סביבה נטולת סיכון לחלוטין.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">7. כללי התנהגות</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              השחקנים וההורים מתחייבים:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>לנהוג בכבוד כלפי המאמנים, השחקנים האחרים והצוות</li>
              <li>לציית להוראות המאמנים והנהלת האקדמיה</li>
              <li>להגיע לאימונים בזמן ובלבוש ספורטיבי מתאים</li>
              <li>שלא להתנהג באלימות, בגזענות או בצורה פוגענית</li>
              <li>להימנע משימוש בסמים, אלכוהול או טבק בשטח האקדמיה</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              הפרת כללי ההתנהגות עלולה להוביל להרחקה מהאקדמיה ללא החזר כספי.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">8. קניין רוחני</h2>
            <p className="text-gray-300 leading-relaxed">
              כל התכנים באתר, לרבות טקסטים, תמונות, לוגו, סרטונים, עיצובים וקוד,
              הם רכושה הבלעדי של Elite Team Academy ומוגנים על פי דיני זכויות יוצרים וקניין רוחני.
              אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכנים ללא אישור בכתב מהאקדמיה.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">9. זכויות צילום ופרסום</h2>
            <p className="text-gray-300 leading-relaxed">
              במהלך האימונים והאירועים, האקדמיה עשויה לצלם תמונות וסרטונים למטרות שיווק ותיעוד.
              על ידי ההרשמה, הנך נותן הסכמה לאקדמיה להשתמש בתמונות ובסרטונים שבהם מופיע השחקן
              לצרכי קידום ופרסום באתר, במדיה החברתית ובחומרי שיווק.
              אם אינך מעוניין בכך, עליך להודיע על כך בכתב.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">10. הגבלת אחריות</h2>
            <p className="text-gray-300 leading-relaxed">
              האקדמיה אינה אחראית לכל נזק ישיר, עקיף, תוצאתי או מקרי שייגרם כתוצאה משימוש באתר
              או בשירותי האקדמיה, לרבות פציעות, אובדן רכוש או כל נזק אחר.
              האקדמיה אינה מתחייבת שהשירותים יינתנו ללא הפרעה או שגיאות.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">11. ביטול ושינוי שירותים</h2>
            <p className="text-gray-300 leading-relaxed">
              האקדמיה רשאית לבטל, לדחות או לשנות אימונים או אירועים עקב נסיבות בלתי צפויות
              (מזג אויר, מחלת מאמן, בעיות טכניות וכו'). במקרים אלו, האקדמיה תעשה כמיטב יכולתה
              להודיע מראש ולתאם אימון חלופי. לא יינתן החזר כספי עבור אימון בודד שבוטל.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">12. שינויים בתנאי השימוש</h2>
            <p className="text-gray-300 leading-relaxed">
              האקדמיה שומרת לעצמה את הזכות לעדכן תנאי שימוש אלו בכל עת.
              שינויים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם.
              המשך שימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">13. דין וסמכות שיפוט</h2>
            <p className="text-gray-300 leading-relaxed">
              תנאי שימוש אלו כפופים לדיני מדינת ישראל.
              כל סכסוך הנובע מתנאי שימוש אלו או משימוש באתר יידון אך ורק בבתי המשפט המוסמכים בישראל.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">14. יצירת קשר</h2>
            <p className="text-gray-300 leading-relaxed">
              לשאלות או בירורים בנוגע לתנאי השימוש, ניתן ליצור איתנו קשר:
            </p>
            <div className="mt-4 text-gray-300 space-y-2">
              <p><strong className="text-gold-500">שם:</strong> Elite Team Academy לכדורסל</p>
              <p><strong className="text-gold-500">טלפון:</strong> <a href="tel:+972501234567" className="hover:text-gold-500 transition-colors">050-123-4567</a></p>
              <p><strong className="text-gold-500">אימייל:</strong> <a href="mailto:info@eliteteam.co.il" className="hover:text-gold-500 transition-colors">info@eliteteam.co.il</a></p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              תנאי שימוש אלו נכתבו כמסמך כללי והם בעלי אופי מנחה בלבד.
              מומלץ להתייעץ עם יועץ משפטי מוסמך כדי להתאים את התנאים לצרכים הספציפיים של האקדמיה
              ולוודא עמידה בכל הדרישות החוקיות הרלוונטיות.
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

export default TermsOfService
