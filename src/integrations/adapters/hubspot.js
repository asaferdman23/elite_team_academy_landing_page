// HubSpot Forms API Adapter

export const submitToHubSpot = async (leadData) => {
  const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID
  const formId = import.meta.env.VITE_HUBSPOT_FORM_ID

  if (!portalId || !formId) {
    throw new Error('HubSpot Portal ID and Form ID must be configured')
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  // Map lead data to HubSpot field structure
  const fields = [
    { name: 'firstname', value: leadData.parentName.split(' ')[0] },
    { name: 'lastname', value: leadData.parentName.split(' ').slice(1).join(' ') || 'N/A' },
    { name: 'email', value: leadData.email },
    { name: 'phone', value: leadData.phone },
    { name: 'child_age', value: leadData.childAge },
    { name: 'message', value: leadData.message || '' }
  ].filter(field => field.value)

  const payload = {
    fields,
    context: {
      pageUri: window.location.href,
      pageName: 'Elite Team Academy - Registration'
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`HubSpot submission failed: ${errorData.message || response.statusText}`)
  }

  return await response.json()
}
