// Airtable Adapter - Creates a record in a table

export const submitToAirtable = async (leadData) => {
  const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID
  const tableName = import.meta.env.VITE_AIRTABLE_TABLE || 'Leads'

  if (!apiKey || !baseId) {
    throw new Error('Airtable API key and Base ID must be configured')
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`

  const payload = {
    fields: {
      'Parent Name': leadData.parentName,
      'Email': leadData.email,
      'Phone': leadData.phone,
      'Child Age': parseInt(leadData.childAge, 10),
      'Message': leadData.message || '',
      'Consent': leadData.consent ? 'Yes' : 'No',
      'Submitted At': new Date().toISOString(),
      'Source': 'Landing Page'
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Airtable submission failed: ${errorData.error?.message || response.statusText}`)
  }

  return await response.json()
}
