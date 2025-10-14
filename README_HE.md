# אקדמיית אליט טים - אתר נחיתה

אתר נחיתה מקצועי ומוכן לפרודקשן עבור **אקדמיית אליט טים**, תוכנית אימוני כדורסל לנוער בהנחיית מאמן ירדן.

## תכונות

- **סטאק טכנולוגי מודרני**: React + Vite, TailwindCSS, Framer Motion
- **אנימציות חלקות**: אפקטי פרלקס, אנימציות מופעלות בגלילה ומיקרו-אינטראקציות
- **עיצוב Mobile-First**: מותאם לחלוטין לכל המכשירים
- **אינטגרציה עם CRM**: מערכת לכידת לידים גמישה ובלתי תלויה בספק
- **ביצועים אופטימליים**: טעינה מהירה וגלילה חלקה
- **נגישות**: תואם WCAG עם תגיות ARIA נכונות וניווט מקלדת
- **תמיכה בעברית RTL**: עברית מימין לשמאל עם פונטים מותאמים

## טכנולוגיות

- **React 18** - React מודרני עם hooks
- **Vite** - כלי בנייה מהיר במיוחד
- **TailwindCSS** - פריימוורק CSS utility-first
- **Framer Motion** - ספריית אנימציות מוכנה לפרודקשן
- **ESLint** - איכות ועקביות קוד

## מבנה פרויקט

```
elite-team-academy/
├── public/
│   ├── assets/           # תמונות וקבצי מדיה
│   │   ├── mike.jpg      # תמונת מאמן ירדן
│   │   ├── camp.jpg      # תמונות אימונים
│   │   ├── team.jpg      # תמונת רקע Hero
│   │   └── ...
│   └── favicon.svg
├── src/
│   ├── components/       # רכיבי React (10 בסך הכל)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTA.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── VideoModal.jsx
│   │   └── Footer.jsx
│   ├── integrations/     # מערכת אינטגרציה CRM
│   │   ├── LeadService.js
│   │   └── adapters/     # 6 מתאמי CRM
│   ├── lib/
│   │   └── motion.js     # וריאנטים של Framer Motion
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
└── index.html           # HTML עם תגיות SEO בעברית
```

## התחלה

### דרישות מוקדמות

- Node.js 18+ ו-npm/yarn/pnpm

### התקנה

1. התקן תלויות:
```bash
npm install
```

2. צור קובץ `.env` מהדוגמה:
```bash
cp .env.example .env
```

3. הגדר את אינטגרציית ה-CRM שלך (ראה למטה)

4. הוסף תמונות ל-`public/assets/`

### פיתוח

הפעל את שרת הפיתוח:

```bash
npm run dev
```

האתר יהיה זמין בכתובת `http://localhost:3000`

### בנייה לפרודקשן

```bash
npm run build
```

תצוגה מקדימה של הבנייה:

```bash
npm run preview
```

## אינטגרציה עם CRM

האתר כולל מערכת לכידת לידים גמישה ובלתי תלויה בספק. הגדר אותה על ידי הגדרת משתני סביבה בקובץ `.env`.

### ספקי CRM נתמכים

1. **Webhook כללי** (מומלץ)
2. **HubSpot**
3. **Pipedrive**
4. **Monday.com**
5. **Airtable**
6. **Email Fallback**

### הגדרה

#### 1. Webhook כללי (מומלץ)

מושלם לאינטגרציות מותאמות אישית, Zapier, Make או n8n:

```env
VITE_CRM_PROVIDER=webhook
VITE_CRM_WEBHOOK_URL=https://your-webhook-url.com/endpoint
VITE_CRM_API_KEY=your-optional-bearer-token
```

#### 2. HubSpot

```env
VITE_CRM_PROVIDER=hubspot
VITE_HUBSPOT_PORTAL_ID=your-portal-id
VITE_HUBSPOT_FORM_ID=your-form-id
```

#### 3. Pipedrive

```env
VITE_CRM_PROVIDER=pipedrive
VITE_PIPEDRIVE_API_TOKEN=your-api-token
```

#### 4. Monday.com

```env
VITE_CRM_PROVIDER=monday
VITE_MONDAY_API_TOKEN=your-api-token
VITE_MONDAY_BOARD_ID=your-board-id
```

#### 5. Airtable

```env
VITE_CRM_PROVIDER=airtable
VITE_AIRTABLE_API_KEY=your-api-key
VITE_AIRTABLE_BASE_ID=your-base-id
VITE_AIRTABLE_TABLE=Leads
```

#### 6. Email Fallback

```env
VITE_CRM_PROVIDER=email
VITE_FORMSUBMIT_ACTION=https://formsubmit.co/your@email.com
```

## התאמה אישית

### צבעי מותג

ערוך את `tailwind.config.js`:

```js
colors: {
  navy: {
    DEFAULT: '#0A0E23',  // כחול כהה עיקרי
  },
  gold: {
    DEFAULT: '#F2C94C',  // זהב עיקרי
  }
}
```

### תוכן

כל התוכן נמצא בקבצי הרכיבים:
- טקסט Hero: `src/components/Hero.jsx`
- אודות המאמן: `src/components/About.jsx`
- תוכניות: `src/components/Programs.jsx`
- המלצות: `src/components/Testimonials.jsx`

### אנימציות

וריאנטים של תנועה מוגדרים ב-`src/lib/motion.js`. התאם אישית זמנים, easing ואפקטים שם.

## פריסה

### Vercel

```bash
npm install -g vercel
vercel
```

הוסף משתני סביבה בלוח הבקרה של Vercel → הגדרות → משתני סביבה.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

הוסף משתני סביבה בלוח הבקרה של Netlify → הגדרות אתר → משתני סביבה.

## SEO

הדף כולל:
- מבנה HTML5 סמנטי
- תגיות מטא לכותרת, תיאור ו-Open Graph בעברית
- היררכיית כותרות נכונה
- טקסט חלופי לתמונות
- תמיכה ב-RTL מלאה

## ביצועים

- טעינה עצלה לתמונות
- אנימציות מאופטמות עם Framer Motion
- Code splitting עם Vite
- גודל bundle מינימלי

## נגישות

- תואם WCAG 2.1 AA
- תמיכה בניווט מקלדת
- תגיות ARIA לקוראי מסך
- טקסט בניגודיות גבוהה
- מחווני פוקוס

## תמיכת דפדפנים

- Chrome (2 גרסאות אחרונות)
- Firefox (2 גרסאות אחרונות)
- Safari (2 גרסאות אחרונות)
- Edge (2 גרסאות אחרונות)

## רישיון

© 2025 אקדמיית אליט טים. כל הזכויות שמורות.

---

נבנה באהבה עבור אקדמיית אליט טים
