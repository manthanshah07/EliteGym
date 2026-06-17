// src/services/googleSheets.js

// Replace this URL with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzqWrh6oGnPWi5DiHqjadfGO3AM2zQvNvaPUlCGi8OvhRZ-9p3z52kf0vDeKweVBVjPA/exec';

/**
 * Sends lead data to Google Sheets via Google Apps Script Web App
 * @param {Object} leadData - The lead information (name, phone, goal, plan)
 * @returns {Promise<Object>} The response from the script
 */
export const submitLeadToSheets = async (leadData) => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
    console.warn('Google Sheets integration is not configured. Please add your script URL.');
    return { status: 'success', message: 'Mock success (URL not configured)' };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        // Using text/plain prevents CORS preflight issues with Google Apps Script
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.status === 'error') {
      throw new Error(result.message || 'Error from Google Apps Script');
    }
    
    return result;
  } catch (error) {
    console.error('Error submitting lead to Google Sheets:', error);
    throw error; // Re-throw to handle it in the component
  }
};
