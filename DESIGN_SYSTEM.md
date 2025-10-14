# מערכת העיצוב - אקדמיית אליט טים

## 🎨 פלטת צבעים (מבוסס על הלוגו)

### צבעים עיקריים

**שחור (Navy)**
```css
--navy-default: #1a1a1a    /* שחור חם - צבע הרקע העיקרי */
--navy-light: #2d2d2d      /* שחור בהיר - להורוברים */
--navy-dark: #0f0f0f       /* שחור עמוק - לניגודיות */
--navy-800: #212121        /* גוון ביניים */
--navy-900: #151515        /* כמעט שחור טהור */
```

**זהב (Gold)** - הצבע המדויק מהלוגו
```css
--gold-50: #FFFBEB         /* זהב בהיר מאוד - רקעים */
--gold-100: #FEF3C7        /* זהב בהיר - hover עדין */
--gold-200: #FDE68A        /* זהב בינוני-בהיר */
--gold-300: #FCD34D        /* זהב בינוני */
--gold-400: #FBBF24        /* זהב עמוק */
--gold-500: #F2C94C        /* הצבע המרכזי מהלוגו ⭐ */
--gold-600: #D97706        /* זהב כהה */
--gold-700: #B45309        /* זהב עמוק מאוד */
--gold-800: #92400E        /* ברונזה */
--gold-900: #78350F        /* חום-זהב כהה */
```

### צבעי משנה

**לבן וגווני אפור**
```css
--white: #FFFFFF           /* לבן טהור - טקסט */
--cream: #F5F5F0          /* קרם עדין - רקעים */
--gray-50 to --gray-900   /* סקאלה מלאה */
```

---

## 🎯 שימושים מומלצים

### רקעים
- **רקע ראשי**: `#1a1a1a` (navy-default)
- **רקע משני**: `#0f0f0f` (navy-dark)
- **גראדיאנט**: `linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)`
- **Glass**: `rgba(26, 26, 26, 0.7)` + blur

### טקסט
- **טקסט ראשי**: `#FFFFFF` (white)
- **טקסט משני**: `#D1D5DB` (gray-300)
- **טקסט highlight**: `#F2C94C` (gold-500)
- **טקסט על זהב**: `#1a1a1a` (navy-default)

### כפתורים
- **ראשי**: `bg-gradient-gold` + `text-navy-900`
- **משני**: `border-gold-500` + `text-gold-500`
- **hover**: `shadow-gold-lg` + `scale-105`

### גבולות
- **עדין**: `border-gold-500/20`
- **בינוני**: `border-gold-500/50`
- **חזק**: `border-gold-500`

---

## 🌟 גראדיאנטים

### זהב
```css
background: linear-gradient(135deg, #F2C94C 0%, #D97706 100%);
```

### שחור
```css
background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
```

### זוהר (Shine)
```css
background: linear-gradient(90deg, transparent 0%, rgba(242, 201, 76, 0.1) 50%, transparent 100%);
```

---

## 💫 אפקטים ואנימציות

### Shadow Effects
```css
/* זוהר זהב */
box-shadow: 0 4px 14px 0 rgba(242, 201, 76, 0.39);

/* זוהר זהב גדול */
box-shadow: 0 10px 40px 0 rgba(242, 201, 76, 0.5);

/* צל כהה */
box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.5);
```

### Hover States
- **Scale**: `1.05` (כפתורים וקרטסים)
- **Transition**: `300ms ease-out`
- **Shadow**: `shadow-gold-lg`

### אנימציות מובנות
- `animate-float` - צף למעלה ולמטה
- `animate-glow` - זוהר פועם
- `animate-shine` - ברק חולף
- `animate-pulse-slow` - פעימה איטית
- `animate-slide-up` - החלקה מלמטה
- `animate-fade-in` - דעיכה פנימה

---

## 🎨 מחלקות עזר מותאמות אישית

### כפתורים
```html
<!-- כפתור זהב ראשי -->
<button class="btn-gold">טקסט</button>

<!-- כפתור זהב מתאר -->
<button class="btn-gold-outline">טקסט</button>
```

### טקסט
```html
<!-- טקסט עם גראדיאנט זהב -->
<h1 class="text-gold-gradient">כותרת</h1>

<!-- קו תחתון מונפש -->
<span class="underline-gold">טקסט</span>
```

### קרטסים
```html
<!-- Glass morphism -->
<div class="glass">...</div>

<!-- Glass זהב -->
<div class="glass-gold">...</div>

<!-- קרטיס עם hover זהב -->
<div class="card-hover-gold">...</div>
```

---

## 📏 מרווחים ופינות

### Border Radius
- **קטן**: `8px` - אלמנטים קטנים
- **בינוני**: `12px` - כפתורים
- **גדול**: `16px` - קרטסים
- **XL**: `24px` - סקשנים גדולים

### Spacing
- **Padding סקשן**: `py-20 sm:py-24`
- **Gap גריד**: `gap-10` או `gap-16`
- **Container**: `max-w-7xl mx-auto px-6 sm:px-8 lg:px-10`

---

## 🖼️ טיפוגרפיה

### משפחת פונטים
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Noto Sans Hebrew', Arial, sans-serif;
```

### גדלים
- **Hero**: `text-5xl sm:text-6xl lg:text-7xl`
- **כותרת**: `text-4xl sm:text-5xl`
- **תת-כותרת**: `text-xl sm:text-2xl`
- **טקסט גוף**: `text-lg`
- **טקסט קטן**: `text-sm`

### משקלים
- **רגיל**: `font-normal`
- **בולט**: `font-bold`
- **אקסטרה בולט**: `font-extrabold`

---

## 🎭 Glass Morphism

### Glass כהה (ברירת מחדל)
```css
background: rgba(26, 26, 26, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(242, 201, 76, 0.2);
```

### Glass זהב
```css
background: rgba(242, 201, 76, 0.1);
backdrop-filter: blur(12px);
border: 1px solid rgba(242, 201, 76, 0.3);
```

---

## 🎪 Scrollbar מותאם אישית

```css
/* Track */
background: #1a1a1a;
border-radius: 10px;

/* Thumb */
background: linear-gradient(180deg, #F2C94C 0%, #D97706 100%);
border-radius: 10px;
border: 2px solid #1a1a1a;

/* Hover */
box-shadow: 0 0 10px rgba(242, 201, 76, 0.5);
```

---

## 📱 Responsive

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile-First Approach
תמיד התחל עם סגנון מובייל ועבור למעלה:
```html
<div class="text-base sm:text-lg md:text-xl">
```

---

## ✅ Best Practices

1. **שמור על ניגודיות** - תמיד וודא שהטקסט קריא על הרקע
2. **השתמש בזהב במשורה** - למוקדים ולפעולות חשובות בלבד
3. **אנימציות עדינות** - לא יותר מ-300ms
4. **Glass morphism** - השתמש עם blur של 12px ושקיפות 70-90%
5. **Shadows** - השתמש בצבע זהב לאלמנטים אינטראקטיביים
6. **RTL Support** - זכור להשתמש ב-`space-x-reverse` ו-`text-right`

---

## 🎨 דוגמאות שימוש

### כפתור ראשי
```html
<a href="#register" class="btn-gold">
  הירשמו עכשיו
</a>
```

### כרטיס
```html
<div class="glass border-2 border-gold-500/20 p-8 rounded-2xl card-hover-gold">
  <h3 class="text-2xl font-bold text-white mb-3">כותרת</h3>
  <p class="text-gray-300">תיאור...</p>
</div>
```

### כותרת עם גראדיאנט
```html
<h1 class="text-gold-gradient text-5xl font-extrabold">
  אקדמיית אליט טים
</h1>
```

---

**עוצב בהשראת הלוגו המקורי** 🏀✨
