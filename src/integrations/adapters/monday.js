// Monday.com Adapter - Creates an item in a board

export const submitToMonday = async (leadData) => {
  const apiToken = import.meta.env.VITE_MONDAY_API_TOKEN
  const boardId = import.meta.env.VITE_MONDAY_BOARD_ID

  if (!apiToken || !boardId) {
    throw new Error('Monday.com API token and Board ID must be configured')
  }

  const url = 'https://api.monday.com/v2'

  // Map lead data to Monday column values
  // Adjust column IDs based on your Monday board structure
  const columnValues = JSON.stringify({
    text: leadData.parentName,
    email: { email: leadData.email, text: leadData.email },
    phone: leadData.phone,
    numbers: leadData.childAge,
    long_text: leadData.message || ''
  })

  const query = `
    mutation {
      create_item (
        board_id: ${boardId},
        item_name: "Lead: ${leadData.parentName.replace(/"/g, '\\"')}",
        column_values: ${JSON.stringify(columnValues).replace(/"/g, '\\"')}
      ) {
        id
        name
      }
    }
  `

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiToken
    },
    body: JSON.stringify({ query })
  })

  if (!response.ok) {
    throw new Error(`Monday.com request failed: ${response.statusText}`)
  }

  const result = await response.json()

  if (result.errors) {
    throw new Error(`Monday.com API error: ${result.errors[0].message}`)
  }

  return result.data
}
