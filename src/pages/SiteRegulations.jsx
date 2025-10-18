import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

const SiteRegulations = () => {
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
            תקנון <span className="text-gold-500">האתר</span>
          </h1>
          <p className="text-gray-400">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 sm:p-12 space-y-8 text-right" dir="rtl">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">מבוא</h2>
            <p className="text-gray-300 leading-relaxed">
              תקנון זה מסדיר את מערכת היחסים בין המשתמשים והגולשים באתר
              לבין Elite Team Academy לכדורסל (&quot;האקדמיה&quot;, &quot;אנחנו&quot;).
              השימוש באתר מהווה הסכמה מלאה לתנאים המפורטים בתקנון זה.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <strong className="text-gold-500">⚠️ חשוב:</strong> אנא קרא תקנון זה בקפידה לפני השימוש באתר.
              המשך השימוש באתר מעיד על הסכמתך המלאה לתנאים אלו.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">1. הגדרות</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li><strong className="text-white">"האתר"</strong> - אתר Elite Team Academy הממוקם בכתובת eliteteamacademy.com</li>
              <li><strong className="text-white">"האקדמיה"</strong> - Elite Team Academy לכדורסל</li>
              <li><strong className="text-white">"משתמש" / "גולש"</strong> - כל אדם הגולש או משתמש באתר</li>
              <li><strong className="text-white">"שירותים"</strong> - כל שירותי האימון והתוכניות המוצעות על ידי האקדמיה</li>
              <li><strong className="text-white">"תוכן"</strong> - כל המידע, הטקסטים, התמונות, הסרטונים והחומרים באתר</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">2. תנאי שימוש כלליים</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">2.1</strong> השימוש באתר מותר לכל אדם על פי שיקול דעתו הבלעדי של האקדמיה.</p>
              <p><strong className="text-white">2.2</strong> האקדמיה שומרת לעצמה את הזכות לשנות, להוסיף או להסיר תכנים מהאתר בכל עת וללא הודעה מוקדמת.</p>
              <p><strong className="text-white">2.3</strong> המשתמש מתחייב לעשות שימוש באתר למטרות חוקיות בלבד.</p>
              <p><strong className="text-white">2.4</strong> אסור להעתיק, להפיץ, לשכפל או לעשות שימוש מסחרי בתכני האתר ללא אישור מפורש בכתב.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">3. רישום ופרטיות</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">3.1</strong> הרשמה לשירותי האקדמיה דרך האתר מחייבת מסירת פרטים אישיים מדויקים ומלאים.</p>
              <p><strong className="text-white">3.2</strong> השימוש בפרטים אישיים יעשה בהתאם ל
                <a href="/privacy-policy" className="text-gold-500 hover:text-gold-400 underline mx-1">מדיניות הפרטיות</a>
                של האקדמיה.
              </p>
              <p><strong className="text-white">3.3</strong> המשתמש אחראי לשמירה על סודיות פרטי ההתחברות שלו (אם קיימים).</p>
              <p><strong className="text-white">3.4</strong> יש להודיע מיד לאקדמיה על כל שימוש לא מורשה בחשבון.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">4. שירותי האקדמיה והרשמה</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">4.1 אימון ניסיון:</strong> אימון הניסיון החינמי הוא למטרת היכרות בלבד ואינו מחייב המשך פעילות.</p>
              <p><strong className="text-white">4.2 הרשמה לתוכניות:</strong> הרשמה לתוכניות האימון כפופה לאישור האקדמיה ולמילוי כל הדרישות המקדימות.</p>
              <p><strong className="text-white">4.3 זמינות:</strong> המידע על התוכניות והשירותים באתר הוא למטרות מידע כללי בלבד. זמינות מקומות בתוכניות אינה מובטחת.</p>
              <p><strong className="text-white">4.4 שינויים:</strong> האקדמיה שומרת לעצמה את הזכות לשנות את תוכניות האימון, המחירים, והשירותים בכל עת.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">5. תשלומים והחזרים</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">5.1 מחירים:</strong> המחירים המוצגים באתר הם בשקלים חדשים וכוללים מע"ם (אם חל).</p>
              <p><strong className="text-white">5.2 תשלום:</strong> התשלום עבור השירותים ייעשה בהתאם לתנאים שיוסכמו בנפרד בהסכם ההרשמה.</p>
              <p><strong className="text-white">5.3 החזרים:</strong> מדיניות ההחזרים תיקבע לפי הסכם ההרשמה הספציפי. ככלל, תשלומים אינם מוחזרים אלא במקרים חריגים.</p>
              <p><strong className="text-white">5.4 ביטולים:</strong> ביטול השתתפות יש להודיע עליו בכתב לפחות 7 ימים מראש. ביטולים בטווח קצר יותר עשויים לחייב בתשלום חלקי או מלא.</p>
              <p><strong className="text-white">5.5 חוב:</strong> אי תשלום במועד עשוי להוביל להשעיית השירותים ולנקיטת הליכי גבייה.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">6. זכויות יוצרים וקניין רוחני</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">6.1 בעלות:</strong> כל התכנים באתר, לרבות טקסטים, תמונות, לוגו, סרטונים, עיצובים וקוד, הם רכושה הבלעדי של האקדמיה ומוגנים על פי דיני זכויות יוצרים.</p>
              <p><strong className="text-white">6.2 איסור שימוש:</strong> אין להעתיק, לשכפל, להפיץ, לשדר, למכור או לעשות כל שימוש מסחרי בתכני האתר ללא אישור מפורש בכתב.</p>
              <p><strong className="text-white">6.3 סימני מסחר:</strong> שמות, לוגואים וסימני מסחר המופיעים באתר הם קניינה של האקדמיה ואין להשתמש בהם ללא אישור.</p>
              <p><strong className="text-white">6.4 תוכן משתמשים:</strong> כל תוכן שמשתמש מעלה לאתר (תמונות, תגובות וכו') נחשב כמי שניתן לאקדמיה רישיון בלתי מוגבל לעשות בו שימוש.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">7. הצהרות בריאות ואחריות</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">7.1 כשירות רפואית:</strong> המשתמש מצהיר שהשחקן כשיר מבחינה רפואית להשתתף בפעילות גופנית אינטנסיבית.</p>
              <p><strong className="text-white">7.2 סיכונים:</strong> המשתמש מודע לכך שפעילות ספורטיבית כרוכה בסיכונים והוא משתתף על אחריותו הבלעדית.</p>
              <p><strong className="text-white">7.3 ביטוח:</strong> מומלץ בחום לערוך ביטוח תאונות אישיות. האקדמיה אינה אחראית לנזקי גוף או רכוש.</p>
              <p><strong className="text-white">7.4 הגבלות:</strong> יש להודיע לאקדמיה על כל מגבלה רפואית, אלרגיה או מצב בריאותי מיוחד.</p>
              <p><strong className="text-white">7.5 שחרור מאחריות:</strong> המשתמש פוטר את האקדמיה, המאמנים והצוות מכל אחריות בגין פציעות או נזקים שייגרמו במהלך הפעילות, למעט במקרים של רשלנות חמורה.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">8. התנהגות ומשמעת</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">8.1 כללי התנהגות:</strong> המשתמשים מתחייבים לנהוג בכבוד כלפי המאמנים, השחקנים האחרים והצוות.</p>
              <p><strong className="text-white">8.2 ציות להוראות:</strong> יש לציית להוראות המאמנים והנהלת האקדמיה בכל עת.</p>
              <p><strong className="text-white">8.3 התנהגות פסולה:</strong> אסורים התנהגות אלימה, גזענית, פוגענית או כל התנהגות שאינה הולמת.</p>
              <p><strong className="text-white">8.4 שימוש בחומרים אסורים:</strong> שימוש בסמים, אלכוהול או טבק אסור בהחלט בשטח האקדמיה.</p>
              <p><strong className="text-white">8.5 סנקציות:</strong> הפרת כללי ההתנהגות עלולה להוביל להרחקה מהאקדמיה ללא החזר כספי.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">9. אבטחת מידע ופרטיות</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              האקדמיה מחויבת להגן על המידע האישי של המשתמשים. לפרטים מלאים, ראה את
              <a href="/privacy-policy" className="text-gold-500 hover:text-gold-400 underline mx-1">מדיניות הפרטיות</a>
              שלנו.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mr-4">
              <li>אנו נוקטים באמצעי אבטחה סבירים להגנת המידע</li>
              <li>לא נעביר מידע אישי לצדדים שלישיים ללא הסכמה (למעט כנדרש על פי חוק)</li>
              <li>המשתמש זכאי לעיין, לתקן או למחוק את פרטיו האישיים</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">10. הגבלת אחריות</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">10.1 זמינות האתר:</strong> האקדמיה אינה מתחייבת שהאתר יהיה זמין ללא הפרעה או שגיאות.</p>
              <p><strong className="text-white">10.2 דיוק המידע:</strong> האקדמיה עושה מאמצים לוודא שהמידע באתר מדויק, אך אינה אחראית לטעויות או השמטות.</p>
              <p><strong className="text-white">10.3 קישורים חיצוניים:</strong> האתר עשוי להכיל קישורים לאתרי צד שלישי. איננו אחראים לתכנים או למדיניות של אתרים אלה.</p>
              <p><strong className="text-white">10.4 נזקים:</strong> האקדמיה אינה אחראית לכל נזק ישיר, עקיף, תוצאתי או מקרי שייגרם כתוצאה משימוש באתר או בשירותים.</p>
              <p><strong className="text-white">10.5 מגבלת פיצוי:</strong> באם תקבע אחריות, הפיצוי המקסימלי יוגבל לסכום ששולם על ידי המשתמש עבור השירותים הרלוונטיים.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">11. שיפוי</h2>
            <p className="text-gray-300 leading-relaxed">
              המשתמש מתחייב לשפות את האקדמיה, העובדים, המאמנים והשותפים מכל תביעה, דרישה,
              נזק, אובדן, הוצאה או תשלום (לרבות שכר טרחת עורך דין) הנובעים מהפרת תקנון זה,
              משימוש לא חוקי באתר, או מהפרת זכויות צד שלישי על ידו.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">12. כוח עליון</h2>
            <p className="text-gray-300 leading-relaxed">
              האקדמיה לא תישא באחריות לאי-מילוי התחייבויותיה עקב נסיבות שאינן בשליטתה,
              לרבות (אך לא רק) מלחמה, מגפה, אסון טבע, שביתה, תקלות טכניות, הוראות רשות מוסמכת,
              או כל אירוע כוח עליון אחר. במקרה כזה, האקדמיה תעשה מאמצים סבירים למצוא פתרון חלופי.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">13. שינויים בתקנון</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">13.1</strong> האקדמיה שומרת לעצמה את הזכות לשנות תקנון זה בכל עת.</p>
              <p><strong className="text-white">13.2</strong> שינויים מהותיים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם.</p>
              <p><strong className="text-white">13.3</strong> המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתקנון המעודכן.</p>
              <p><strong className="text-white">13.4</strong> מומלץ לבדוק תקנון זה מעת לעת כדי להתעדכן בשינויים.</p>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">14. סמכות שיפוט ודין החל</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">14.1 דין חל:</strong> תקנון זה ומערכת היחסים בין המשתמש לאקדמיה יהיו כפופים לדיני מדינת ישראל בלבד.</p>
              <p><strong className="text-white">14.2 סמכות שיפוט:</strong> סמכות השיפוט הבלעדית בכל סכסוך או עניין הנובעים מתקנון זה או משימוש באתר תהיה לבתי המשפט המוסמכים במדינת ישראל.</p>
              <p><strong className="text-white">14.3 שפה:</strong> גרסת העברית של תקנון זה היא הגרסה המחייבת.</p>
            </div>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">15. הוראות כלליות</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p><strong className="text-white">15.1 ניתוק הוראות:</strong> אם תקבע רשות מוסמכת שהוראה מסוימת בתקנון זה בלתי תקפה, שאר ההוראות יישארו בתוקפן המלא.</p>
              <p><strong className="text-white">15.2 ויתור:</strong> אי-אכיפת הוראה מסוימת על ידי האקדמיה אינה מהווה ויתור על הזכות לאוכפה בעתיד.</p>
              <p><strong className="text-white">15.3 תקנון שלם:</strong> תקנון זה, יחד עם מדיניות הפרטיות ותנאי השימוש, מהווים את כל ההסכם בין הצדדים.</p>
              <p><strong className="text-white">15.4 העברת זכויות:</strong> המשתמש אינו רשאי להעביר את זכויותיו או חובותיו לפי תקנון זה. האקדמיה רשאית להעביר זכויותיה וחובותיה.</p>
            </div>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold text-gold-500 mb-4">16. יצירת קשר</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              לכל שאלה, בקשה או תלונה הנוגעת לתקנון זה, ניתן ליצור קשר:
            </p>
            <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6">
              <div className="text-gray-300 space-y-3">
                <p><strong className="text-white">שם:</strong> Elite Team Academy לכדורסל</p>
                <p><strong className="text-white">טלפון:</strong> <a href="tel:+972503388010" className="hover:text-gold-500 transition-colors">050-338-8010</a></p>
                <p><strong className="text-white">אימייל:</strong> <a href="mailto:info@eliteteam.co.il" className="hover:text-gold-500 transition-colors">info@eliteteam.co.il</a></p>
                <p><strong className="text-white">שעות פעילות:</strong> א׳-ה׳ 09:00-20:00, ו׳ 09:00-14:00</p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-gold-500">הצהרה חשובה:</strong> תקנון זה נכתב למטרות הגנה משפטית כללית.
              מומלץ להתייעץ עם יועץ משפטי מוסמך להתאמה מדויקת לצרכים הספציפיים של העסק
              ולוודא עמידה בכל הדרישות החוקיות הרלוונטיות. תקנון זה אינו מהווה ייעוץ משפטי.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              <strong className="text-white">תאריך עדכון אחרון:</strong> {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
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

export default SiteRegulations
