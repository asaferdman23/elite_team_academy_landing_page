/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // צבעים מבוססי הלוגו
        navy: {
          DEFAULT: '#1a1a1a',    // שחור חם כמו ברקע הלוגו
          light: '#2d2d2d',      // שחור בהיר יותר להורוורים
          dark: '#0f0f0f',       // שחור עמוק לניגודיות
          800: '#212121',        // גוון ביניים
          900: '#151515'         // כמעט שחור טהור
        },
        gold: {
          DEFAULT: '#F2C94C',    // הזהב המדויק מהלוגו
          50: '#FFFBEB',         // זהב בהיר מאוד (רקעים)
          100: '#FEF3C7',        // זהב בהיר (hover עדין)
          200: '#FDE68A',        // זהב בינוני-בהיר
          300: '#FCD34D',        // זהב בינוני
          400: '#FBBF24',        // זהב עמוק
          500: '#F2C94C',        // הצבע המרכזי מהלוגו
          600: '#D97706',        // זהב כהה
          700: '#B45309',        // זהב עמוק מאוד
          800: '#92400E',        // ברונזה
          900: '#78350F'         // חום-זהב כהה
        },
        accent: {
          white: '#FFFFFF',      // לבן טהור לטקסט
          cream: '#F5F5F0',      // קרם עדין לרקעים
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
          }
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Noto Sans Hebrew', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #F2C94C 0%, #D97706 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
        'gradient-shine': 'linear-gradient(90deg, transparent 0%, rgba(242, 201, 76, 0.1) 50%, transparent 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(242, 201, 76, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(242, 201, 76, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(242, 201, 76, 0.39)',
        'gold-lg': '0 10px 40px 0 rgba(242, 201, 76, 0.5)',
        'dark': '0 4px 14px 0 rgba(0, 0, 0, 0.5)',
        'inner-gold': 'inset 0 2px 4px 0 rgba(242, 201, 76, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
