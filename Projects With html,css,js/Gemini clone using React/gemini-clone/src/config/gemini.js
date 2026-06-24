// gemini-api.js
const GEMINI_API_KEY = 'AIzaSyAQQ_B9tshdulaY_Q26yEzjgkSQetQp8GI';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';

/**
 * Unified Gemini API function
 * @param {string} mode - 'generate' or 'count'
 * @param {string} prompt - Input text/prompt
 * @param {object} [options] - Additional options
 * @returns {Promise<any>} API response
 */
export default async function geminiApi(mode, prompt, options = {}) {
  if (!['generate', 'count'].includes(mode)) {
    throw new Error("Invalid mode. Use 'generate' or 'count'");
  }

  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Prompt must be a non-empty string');
  }

  const endpoint = mode === 'generate' 
    ? 'generateContent' 
    : 'countTokens';

  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      ...(mode === 'generate' && {
        generationConfig: {
          maxOutputTokens: options.maxTokens || 800,
          ...options.generationConfig
        }
      })
    })
  };

  try {
    const response = await fetch(
      `${BASE_URL}/models/gemini-pro:${endpoint}?key=${GEMINI_API_KEY}`,
      config
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return mode === 'generate' ? data : data.totalTokens;

  } catch (error) {
    console.error(`Gemini API (${mode}) error:`, error);
    throw error;
  }
}



export default geminiApi

