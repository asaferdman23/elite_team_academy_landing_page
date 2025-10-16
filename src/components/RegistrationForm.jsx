import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, useScrollAnimation } from '../lib/motion'
import { submitLead } from '../integrations/LeadService'

const RegistrationForm = () => {
  const [ref, controls] = useScrollAnimation()
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/
    return re.test(phone) && phone.replace(/\D/g, '').length >= 9
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'נא להזין שם הורה'
    }

    if (!formData.childAge || formData.childAge < 5 || formData.childAge > 99) {
      newErrors.childAge = 'נא להזין גיל תקין (5-18)'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'נא להזין מספר טלפון תקין'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה'
    }

    if (!formData.consent) {
      newErrors.consent = 'יש לאשר קבלת יצירת קשר'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await submitLead({
        parentName: formData.parentName,
        childAge: formData.childAge,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        source: 'טופס הרשמה באתר',
        timestamp: new Date().toISOString()
      })

      setSubmitStatus('success')

      // Track form submission in Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submission', {
          event_category: 'engagement',
          event_label: 'registration_form',
          value: 1
        })
      }

      // Reset form
      setFormData({
        parentName: '',
        childAge: '',
        phone: '',
        email: '',
        message: '',
        consent: false
      })

      // Scroll to success message
      setTimeout(() => {
        document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="register"
      ref={ref}
      className="py-20 sm:py-24"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)' }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            להזמנת <span className="text-gold-500">אימון ניסיון</span> חינם
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            מלאו את הטופס למטה ואנחנו ניצור איתכם קשר לתיאום אימון הניסיון של השחקן שלכם.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto">
          {submitStatus === 'success' ? (
            <motion.div
              id="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-3">תודה רבה!</h3>
              <p className="text-gray-200 text-lg">
                ניצור איתכם קשר בקרוב עם פרטים לגבי אימון הניסיון החינמי.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass border-2 border-gold-500/20 rounded-2xl p-8 space-y-6">
              {/* Parent Name */}
              <div>
                <label htmlFor="parentName" className="block text-white font-semibold mb-2">
                  שם הורה או השחקן *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.parentName ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors text-right`}
                  placeholder="שם מלא"
                  dir="rtl"
                />
                {errors.parentName && (
                  <p className="mt-1 text-red-400 text-sm text-right">{errors.parentName}</p>
                )}
              </div>

              {/* Child Age */}
              <div>
                <label htmlFor="childAge" className="block text-white font-semibold mb-2">
                  גיל השחקן *
                </label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  min="5"
                  max="99"
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.childAge ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors text-right`}
                  placeholder="10"
                  dir="rtl"
                />
                {errors.childAge && (
                  <p className="mt-1 text-red-400 text-sm text-right">{errors.childAge}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  מספר טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.phone ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors text-right`}
                  placeholder="050-1234567"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-sm text-right">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  כתובת אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors text-left`}
                  placeholder="example@email.com"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm text-right">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  מידע נוסף (אופציונלי)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors resize-none text-right"
                  placeholder="ספרו לנו על ניסיון הכדורסל של הילד/ה שלכם או כל שאלה שיש לכם..."
                  dir="rtl"
                />
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-gold-500 focus:ring-gold-500 focus:ring-offset-navy-900"
                  />
                  <span className={`text-sm ${errors.consent ? 'text-red-400' : 'text-gray-300'} text-right`}>
                    אני מאשר/ת לאקדמיית אליט טים ליצור איתי קשר בנוגע לאימון הניסיון החינמי ותוכניות עתידיות. קראתי ואני מסכים/ה ל
                    <a href="/terms-of-service" target="_blank" className="text-gold-500 hover:text-gold-400 underline mx-1">תנאי השימוש</a>
                    ול
                    <a href="/privacy-policy" target="_blank" className="text-gold-500 hover:text-gold-400 underline mx-1">מדיניות הפרטיות</a>
                    *
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-red-400 text-sm text-right">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  submitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-gold text-navy-900 hover:shadow-gold-lg hover:scale-105 animate-glow'
                }`}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    שולח...
                  </span>
                ) : (
                  'הרשמה לאימון ניסיון חינם'
                )}
              </motion.button>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-center"
                >
                  <p className="text-red-400">
                    משהו השתבש. אנא נסו שוב או צרו איתנו קשר ישירות.
                  </p>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default RegistrationForm
