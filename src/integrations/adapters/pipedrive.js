// Pipedrive CRM Adapter - Creates a Lead

export const submitToPipedrive = async (leadData) => {
  const apiToken = import.meta.env.VITE_PIPEDRIVE_API_TOKEN

  if (!apiToken) {
    throw new Error('Pipedrive API token is not configured')
  }

  // First, create a person
  const personUrl = `https://api.pipedrive.com/v1/persons?api_token=${apiToken}`

  const personPayload = {
    name: leadData.parentName,
    email: [{ value: leadData.email, primary: true }],
    phone: [{ value: leadData.phone, primary: true }]
  }

  const personResponse = await fetch(personUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personPayload)
  })

  if (!personResponse.ok) {
    throw new Error(`Pipedrive person creation failed: ${personResponse.statusText}`)
  }

  const personData = await personResponse.json()
  const personId = personData.data.id

  // Then, create a lead/deal
  const leadUrl = `https://api.pipedrive.com/v1/leads?api_token=${apiToken}`

  const leadPayload = {
    title: `Elite Team Academy - ${leadData.parentName}`,
    person_id: personId,
    value: {
      amount: 0,
      currency: 'USD'
    },
    note: `Child Age: ${leadData.childAge}\n\nMessage: ${leadData.message || 'No message provided'}\n\nSource: Landing Page Registration`
  }

  const leadResponse = await fetch(leadUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(leadPayload)
  })

  if (!leadResponse.ok) {
    throw new Error(`Pipedrive lead creation failed: ${leadResponse.statusText}`)
  }

  return await leadResponse.json()
}
