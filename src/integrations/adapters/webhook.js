// Generic Webhook Adapter - POST JSON to any webhook URL

export const submitToWebhook = async (leadData) => {
  const webhookUrl = import.meta.env.VITE_CRM_WEBHOOK_URL
  const apiKey = import.meta.env.VITE_CRM_API_KEY

  if (!webhookUrl) {
    throw new Error('VITE_CRM_WEBHOOK_URL is not configured')
  }

  const headers = {
    'Content-Type': 'application/json'
  }

  // Add Authorization header if API key is provided
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...leadData,
      timestamp: new Date().toISOString(),
      source: 'Elite Team Academy Landing Page'
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Webhook request failed: ${response.status} - ${errorText}`)
  }

  return await response.json().catch(() => ({ success: true }))
}
