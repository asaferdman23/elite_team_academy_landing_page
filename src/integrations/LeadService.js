// Lead Service - Provider-agnostic lead submission handler

import { submitToWebhook } from './adapters/webhook'
import { submitToHubSpot } from './adapters/hubspot'
import { submitToPipedrive } from './adapters/pipedrive'
import { submitToMonday } from './adapters/monday'
import { submitToAirtable } from './adapters/airtable'
import { submitViaEmail } from './adapters/emailFallback'
import { submitToFixDigital } from './adapters/fixdigital'

/**
 * Submit lead to configured CRM provider
 * @param {Object} leadData - Lead information
 * @param {string} leadData.parentName - Parent's full name
 * @param {string} leadData.email - Email address
 * @param {string} leadData.phone - Phone number
 * @param {string} leadData.childAge - Child's age
 * @param {string} leadData.message - Optional message
 * @param {boolean} leadData.consent - Marketing consent
 * @returns {Promise<Object>} Response from CRM provider
 */
export const submitLead = async (leadData) => {
  const provider = import.meta.env.VITE_CRM_PROVIDER || 'webhook'

  try {
    let result

    switch (provider.toLowerCase()) {
      case 'webhook':
        result = await submitToWebhook(leadData)
        break

      case 'hubspot':
        result = await submitToHubSpot(leadData)
        break

      case 'pipedrive':
        result = await submitToPipedrive(leadData)
        break

      case 'monday':
        result = await submitToMonday(leadData)
        break

      case 'airtable':
        result = await submitToAirtable(leadData)
        break

      case 'fixdigital':
        result = await submitToFixDigital(leadData)
        break

      case 'email':
        result = await submitViaEmail(leadData)
        break

      default:
        throw new Error(`Unknown CRM provider: ${provider}`)
    }

    console.log(`✅ Lead submitted successfully via ${provider}:`, result)
    return result

  } catch (error) {
    console.error(`❌ Lead submission failed (${provider}):`, error)

    // Fallback to email if configured and main provider fails
    if (provider !== 'email' && import.meta.env.VITE_FORMSUBMIT_ACTION) {
      console.log('🔄 Attempting email fallback...')
      try {
        const fallbackResult = await submitViaEmail(leadData)
        console.log('✅ Email fallback succeeded:', fallbackResult)
        return fallbackResult
      } catch (fallbackError) {
        console.error('❌ Email fallback also failed:', fallbackError)
      }
    }

    // If in dev mode and all else fails, just log it
    if (import.meta.env.DEV) {
      console.warn('⚠️ All submission methods failed. Lead data:', leadData)
      return { success: true, devMode: true, message: 'Logged in console (dev mode)' }
    }

    throw error
  }
}

/**
 * Validate lead data before submission
 * @param {Object} leadData - Lead information to validate
 * @returns {Object} Validation result with isValid and errors
 */
export const validateLeadData = (leadData) => {
  const errors = {}

  // Parent name validation
  if (!leadData.parentName || leadData.parentName.trim().length < 2) {
    errors.parentName = 'Please enter a valid name (at least 2 characters)'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!leadData.email || !emailRegex.test(leadData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Phone validation (flexible format)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  if (!leadData.phone || !phoneRegex.test(leadData.phone)) {
    errors.phone = 'Please enter a valid phone number (at least 10 digits)'
  }

  // Child age validation
  const age = parseInt(leadData.childAge, 10)
  if (!leadData.childAge || isNaN(age) || age < 4 || age > 18) {
    errors.childAge = 'Please enter child age between 4 and 18'
  }

  // Consent validation
  if (!leadData.consent) {
    errors.consent = 'You must agree to be contacted'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
