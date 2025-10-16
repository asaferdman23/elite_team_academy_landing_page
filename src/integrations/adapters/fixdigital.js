// Fix Digital CRM Adapter
// Documentation: https://www.fixdigital.co.il/api/v1.2/lead/addApi

/**
 * Submit lead to Fix Digital CRM
 * @param {Object} leadData - Lead information
 * @returns {Promise<Object>} Response from Fix Digital API
 */
export const submitToFixDigital = async (leadData) => {
  const apiUrl = import.meta.env.VITE_FIX_DIGITAL_API_URL
  const projectID = import.meta.env.VITE_FIX_DIGITAL_PROJECT_ID
  const projectTypeID = import.meta.env.VITE_FIX_DIGITAL_PROJECT_TYPE_ID
  const clientID = import.meta.env.VITE_FIX_DIGITAL_CLIENT_ID
  const tenantID = import.meta.env.VITE_FIX_DIGITAL_TENANT_ID

  // Validate configuration
  if (!apiUrl || !projectID || !projectTypeID || !clientID || !tenantID) {
    throw new Error('Fix Digital CRM configuration is incomplete. Please check .env file.')
  }

  // Get current page URL and referrer
  const formUrl = window.location.href
  const urlRefer = document.referrer || formUrl

  // Get user IP (will be handled server-side in production)
  let userIp = 'unknown'
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json')
    const ipData = await ipResponse.json()
    userIp = ipData.ip
  } catch (error) {
    console.warn('Could not fetch user IP:', error)
  }

  // Build the full name from parentName field
  const fullName = leadData.parentName || 'Unknown'

  // Optional: include child age and message in a notes field if Fix Digital supports it
  const notes = []
  if (leadData.childAge) {
    notes.push(`גיל השחקן: ${leadData.childAge}`)
  }
  if (leadData.message) {
    notes.push(`הערות: ${leadData.message}`)
  }
  const notesText = notes.length > 0 ? notes.join(' | ') : ''

  // Construct the API URL with query parameters
  const params = new URLSearchParams({
    projectID,
    projectTypeID,
    clientID,
    tenantID,
    FORMURL: formUrl,
    URLREFER: urlRefer,
    name: fullName,
    email: leadData.email || '',
    phone: leadData.phone || '',
    channelid: leadData.source || 'website',
    userip: userIp,
    // Add notes if supported by the API (adjust as needed)
    ...(notesText && { notes: notesText })
  })

  const fullUrl = `${apiUrl}?${params.toString()}`

  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Fix Digital API error: ${response.status} - ${errorText}`)
    }

    const result = await response.json().catch(() => response.text())

    return {
      success: true,
      provider: 'fixdigital',
      data: result,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Fix Digital submission error:', error)
    throw new Error(`Failed to submit to Fix Digital: ${error.message}`)
  }
}
