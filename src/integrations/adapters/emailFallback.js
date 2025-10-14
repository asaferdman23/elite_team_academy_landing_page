// Email Fallback Adapter - Uses FormSubmit or logs to console in dev

export const submitViaEmail = async (leadData) => {
  const formSubmitUrl = import.meta.env.VITE_FORMSUBMIT_ACTION

  if (!formSubmitUrl) {
    // In development, just log the lead
    if (import.meta.env.DEV) {
      console.log('📧 Lead captured (dev mode):', leadData)
      return { success: true, message: 'Lead logged in console (dev mode)' }
    }
    throw new Error('VITE_FORMSUBMIT_ACTION is not configured')
  }

  // FormSubmit expects form data, not JSON
  const formData = new FormData()
  formData.append('Parent Name', leadData.parentName)
  formData.append('Email', leadData.email)
  formData.append('Phone', leadData.phone)
  formData.append('Child Age', leadData.childAge)
  formData.append('Message', leadData.message || 'No message provided')
  formData.append('Consent', leadData.consent ? 'Yes' : 'No')
  formData.append('_subject', `New Lead: ${leadData.parentName} - Elite Team Academy`)
  formData.append('_template', 'box')
  formData.append('_captcha', 'false')

  const response = await fetch(formSubmitUrl, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(`Email submission failed: ${response.statusText}`)
  }

  return { success: true, message: 'Email sent successfully' }
}
